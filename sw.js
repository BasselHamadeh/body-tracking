/* Offline-Unterstützung für die App-Hülle.
   Immer zuerst das Netz (damit jede neue Version sofort da ist). Ohne Netz oder bei sehr schwachem Netz
   (über 3,5 s) kommt die zuletzt geladene Version aus dem Speicher. Daten (Supabase) werden nie hier gespeichert. */
var CACHE = "bt-shell-v1";
var CORE = ["./", "index.html", "css/app.css", "css/fonts.css", "js/app.js", "config.js", "manifest.webmanifest",
  "icon-192.png", "apple-touch-icon.png", "fonts/barlow-400.woff", "fonts/barlow-500.woff", "fonts/barlow-600.woff",
  "fonts/barlow-700.woff", "fonts/barlowc-500.woff", "fonts/barlowc-600.woff", "fonts/barlowc-700.woff"];
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(CORE); }).catch(function(){}));
  self.skipWaiting();
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){ return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); })); }).then(function(){ return self.clients.claim(); }));
});
function fromCache(req){
  return caches.match(req, {ignoreSearch:true}).then(function(m){ return m || (req.mode === "navigate" ? caches.match("index.html") : undefined); });
}
self.addEventListener("fetch", function(e){
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin || url.pathname === "/sw.js") return;
  var net = fetch(req).then(function(res){
    if (res && res.ok && res.type === "basic"){ var cp = res.clone(); caches.open(CACHE).then(function(c){ return c.put(req, cp); }).catch(function(){}); }
    return res;
  });
  e.respondWith(new Promise(function(resolve){
    var done = false;
    function finish(r){ if (!done && r){ done = true; resolve(r); } }
    var t = setTimeout(function(){ fromCache(req).then(finish); }, 3500);
    net.then(function(res){ clearTimeout(t); finish(res); }, function(){
      clearTimeout(t);
      fromCache(req).then(function(m){ if (m) finish(m); else if (!done){ done = true; resolve(Response.error()); } });
    });
  }));
  e.waitUntil(net.then(function(){}, function(){}));
});

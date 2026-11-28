/* Body Tracking – App-Logik
   Abschnitte (Suche nach "// ----------"): Training-Daten & Vorschläge, Muskelfiguren, Speicher, Essen, Wasser, Schlaf,
   Tagesbewertung & Verlauf, Sicherung, Datenbank (Supabase, offline-fähig), Start, Trainingsmodus, Timer */
(function(){
  "use strict";
  var SEED = {"t":{"2026-10-29":{"bw":83.3,"createdAt":"2026-10-29T15:08:03.848Z","date":"2026-10-29","entries":{"beinstrecker":{"at":"2026-10-29T16:20:30.945Z","dropKg":50,"dropReps":10,"kg":70,"rating":null,"sets":[{"kg":70,"reps":14},{"kg":65,"reps":10}]},"butterfly":{"at":"2026-10-29T15:47:34.580Z","dropKg":40,"dropReps":8,"kg":65,"rating":null,"sets":[{"kg":65,"reps":8},{"kg":60,"reps":7}]},"hammer":{"at":"2026-10-29T16:07:46.926Z","dropKg":8,"dropReps":10,"kg":14,"rating":"limit","sets":[{"kg":14,"reps":8},{"kg":12,"reps":12}]},"latzug":{"at":"2026-10-29T15:17:24.169Z","dropKg":null,"dropReps":null,"kg":50,"rating":null,"sets":[{"kg":50,"reps":12},{"kg":50,"reps":10},{"kg":45,"reps":10}]},"preacher":{"at":"2026-10-29T15:55:11.193Z","dropKg":null,"dropReps":null,"kg":12,"rating":"limit","sets":[{"kg":12,"reps":10},{"kg":10,"reps":9}]},"rennen":{"at":"2026-10-29T16:20:42.059Z","done":true,"min":10},"reverse":{"at":"2026-10-29T16:19:55.252Z","dropKg":7,"dropReps":10,"kg":9,"rating":null,"sets":[{"kg":9,"reps":12},{"kg":8,"reps":10}]},"rope":{"at":"2026-10-29T16:12:55.959Z","dropKg":30,"dropReps":10,"kg":45,"rating":"limit","sets":[{"kg":45,"reps":12},{"kg":35,"reps":10}]},"rudern":{"at":"2026-10-29T15:30:04.181Z","dropKg":null,"dropReps":null,"kg":45,"rating":"limit","sets":[{"kg":45,"reps":10},{"kg":42.5,"reps":10},{"kg":40,"reps":10}]},"seitheben":{"at":"2026-10-29T15:37:10.378Z","dropKg":30,"dropReps":12,"kg":45,"rating":"limit","sets":[{"kg":45,"reps":12},{"kg":40,"reps":12}]},"trizeps_oh":{"at":"2026-10-29T16:13:25.963Z","dropKg":null,"dropReps":null,"kg":9,"rating":null,"sets":[{"kg":9,"reps":12},{"kg":9,"reps":9}]},"waden":{"at":"2026-10-29T16:20:40.034Z","dropKg":30,"dropReps":10,"kg":45,"rating":null,"sets":[{"kg":45,"reps":12},{"kg":40,"reps":12}]},"warmup":{"at":"2026-10-29T15:08:03.554Z","done":true,"min":5}},"note":"Heute gar keine Beine trainiert, hat nicht gepasst.."},"2026-10-30":{"createdAt":"2026-10-30T22:17:03.266Z","date":"2026-10-30","entries":{},"sl":{"from":"00:15","to":"08:30"}},"2026-10-31":{"bw":83,"createdAt":"2026-10-31T10:51:53.459Z","date":"2026-10-31","entries":{},"sl":{"from":"00:15","to":"08:15"}},"2026-11-01":{"createdAt":"2026-10-31T20:47:01.698Z","date":"2026-11-01","entries":{},"sl":{"from":"00:00","to":"08:00"}},"2026-11-02":{"createdAt":"2026-11-01T22:36:41.686Z","date":"2026-11-02","entries":{},"sl":{"from":"02:15","to":"06:55"}}},"f":{"2026-10-29":{"date":"2026-10-29","items":[{"amount":"3 Stück (je ca. 50 g Hähnchen, 60 g Kartoffeln)","g":"mvtm80gz06xnd","gt":"3 fladenbrot mit bisschen hähnchenfleisch und bisschen kartoffel gebraten oben d","id":"mvtm7vxg8iqze","kcal":1550,"n":3,"name":"Fladenbrot mit Hähnchen und Kartoffeln","protein":76},{"amount":"2 Riegel (normal, je ca. 50 g)","g":"mvtm80gz06xnd","id":"mvtm7vxgkrif1","kcal":465,"n":2,"name":"Schokoriegel","protein":6},{"amount":"2 Scoops (ca. 60 g) in 400 ml Wasser","g":"mvtrjka4ayejf","id":"mvtrjipgz86di","kcal":205,"ml":400,"n":2,"name":"Soja-Proteinshake","protein":41},{"amount":"2 Teller, je ca. 100 g Nudeln trocken, Spinat und 1 EL Olive","g":"mvtuuu7zjm5tw","id":"mvtuuovopivls","kcal":880,"n":2,"name":"Rigatoni mit Spinat","protein":32},{"amount":"1 Riegel (ca. 25 g)","g":"mvtwrzljkwx6w","id":"mvtwrghzxqbg8","kcal":120,"n":1,"name":"Knoppers Riegel","protein":2}]},"2026-10-30":{"date":"2026-10-30","items":[{"amount":"2 Stück (Größe M)","id":"mvupelmmw0qds","kcal":145,"n":2,"name":"Gekochte Eier","protein":12},{"amount":"kleine Portion, ca. 150 g gekocht, mit etwas Öl","id":"mvupelmmqv7od","kcal":330,"name":"Nudeln mit Spinat","protein":11},{"amount":"2 Scoops (je 30 g)","id":"mvutomd1gzwlx","kcal":202,"n":2,"name":"Whey-Proteinpulver","protein":42},{"amount":"500 ml","id":"mvutomd12271n","kcal":230,"ml":500,"name":"Hafermilch","protein":5},{"amount":"ca. 20 g","id":"mvutomd10p67g","kcal":120,"name":"Nüsse","protein":4},{"amount":"kleine Portion, ca. 200 g gekocht","id":"mvuy1ar5y0g9l","kcal":295,"name":"Rigatoni mit Spinat","protein":10},{"amount":"1 Teller, ca. 250 g gegart","id":"mvv2bhujgbb8q","kcal":780,"name":"Pasta mit Pesto, Salami und Käse","protein":27},{"amount":"1 Riegel (ca. 25 g)","id":"mvv2srqps2s79","kcal":115,"n":1,"name":"Knoppers Riegel","protein":2},{"amount":"Pesto, 2–3 Salami, 1 Käse","id":"mvvavfex0fet8","kcal":560,"name":"Fladenbrot mit Salami","protein":22},{"amount":"1 Riegel (ca. 25 g)","id":"mvvaw08f1vo41","kcal":120,"n":1,"name":"Knoppers Riegel","protein":2},{"amount":"Pesto, 2–3 Salami, 1 Käse","id":"mvviguwv1lees","kcal":560,"name":"Fladenbrot mit Salami","protein":22}]},"2026-10-31":{"date":"2026-10-31","items":[{"amount":"ca. 80 g Nudeln (roh), ca. 100 g Spinat, 1 TL Olivenöl","id":"mvw7lk98x28nt","kcal":325,"name":"Rigatoni mit Spinat","protein":12},{"amount":"1 Fladenbrot (150 g), 2 gekochte Eier, Pesto","id":"mvwbyavgpicp6","kcal":520,"n":1,"name":"Fladenbrot mit Ei","protein":23},{"amount":"1 Riegel (ca. 25 g)","id":"mvwdqsmuvae90","kcal":118,"n":1,"name":"Knoppers Riegel","protein":2},{"amount":"1 Döner, ca. 350 g","id":"mvwdr31ybodm1","kcal":600,"n":1,"name":"Döner im Fladenbrot","protein":36},{"amount":"1 Handvoll (ca. 30 g)","id":"mvwi00unn1tqt","kcal":165,"name":"Nussmischung","protein":5},{"amount":"1,5 Scoop (45 g) in 400 ml Wasser","id":"mvwlfh33erw89","kcal":173,"ml":400,"name":"Whey-Proteinshake","protein":38},{"amount":"1 Stück Fladenbrot, 3 Scheiben Salami, wenig Pesto","id":"mvwp79wqy4gog","kcal":485,"n":1,"name":"Fladenbrot mit Salami","protein":18},{"amount":"1 kleines Fladenbrot, 2 Scheiben Salami, 1 Scheibe Gouda","id":"mvwucof4wenh5","kcal":525,"n":1,"name":"Fladenbrot mit Salami und Gouda","protein":20},{"amount":"1 kleines Croissant (ca. 50 g)","id":"mvwucof4se1dq","kcal":185,"n":1,"name":"Croissant","protein":4}]},"2026-11-01":{"date":"2026-11-01","items":[{"amount":"2 Stück, je 1 Scheibe Gouda und 2 Scheiben Salami","id":"mvxm16t1bt69y","kcal":1000,"n":2,"name":"Fladenbrot mit Käse und Salami","protein":40},{"amount":"1 Riegel (ca. 50 g)","id":"mvxm16t1ocmpl","kcal":233,"n":1,"name":"Schokoriegel","protein":4},{"amount":"1 Teller, ca. 250 g gekocht, wenig Hackfleisch","id":"mvxv5biauxncn","kcal":395,"name":"Reis mit Erbsen und Hackfleisch","protein":15},{"amount":"1 kleine Schüssel, ca. 150 g","id":"mvxv5biab9ifi","kcal":88,"name":"Skyr mit Knoblauch","protein":15},{"amount":"1 Riegel (ca. 25 g)","id":"mvxw7tq1mg7ci","kcal":120,"n":1,"name":"Knoppers Riegel","protein":2},{"amount":"1 Stück, 1 EL Pesto, 1 Scheibe Butterkäse","id":"mvy02gg0vx0mg","kcal":340,"n":1,"name":"Fladenbrot mit Käse","protein":11},{"amount":"1 Riegel (ca. 50 g)","id":"mvy6ko3476gr4","kcal":233,"n":1,"name":"Schokoriegel","protein":4},{"amount":"2 Stück, Käse ca. 30 g angenommen","id":"mvy6lqpdcr53u","kcal":900,"n":2,"name":"Fladenbrot mit Salami und Käse","protein":29}]},"2026-11-02":{"date":"2026-11-02","items":[{"amount":"1 Fladenbrot, 2 Scheiben Salami, 1 Scheibe Butterkäse","id":"mvyyom5e0wznd","kcal":480,"n":1,"name":"Fladenbrot mit Salami und Käse","protein":20}]}},"w":{"2026-10-29":{"date":"2026-10-29","ml":2750,"log":[{"id":"seed202610290","ml":250,"at":""},{"id":"seed202610291","ml":500,"at":""},{"id":"seed202610292","ml":250,"at":""},{"id":"seed202610293","ml":500,"at":""},{"id":"seed202610294","ml":500,"at":""},{"id":"seed202610295","ml":250,"at":""},{"id":"seed202610296","ml":250,"at":""},{"id":"seed202610297","ml":250,"at":""}]},"2026-10-30":{"date":"2026-10-30","ml":2500,"log":[{"id":"seed202610300","ml":250,"at":""},{"id":"seed202610301","ml":500,"at":""},{"id":"seed202610302","ml":250,"at":""},{"id":"seed202610303","ml":250,"at":""},{"id":"seed202610304","ml":250,"at":""},{"id":"seed202610305","ml":250,"at":""},{"id":"seed202610306","ml":250,"at":""},{"id":"seed202610307","ml":250,"at":""},{"id":"seed202610308","ml":250,"at":""}]},"2026-10-31":{"date":"2026-10-31","ml":2500,"log":[{"id":"seed202610310","ml":500,"at":""},{"id":"seed202610311","ml":250,"at":""},{"id":"seed202610312","ml":250,"at":""},{"id":"seed202610313","ml":250,"at":""},{"id":"seed202610314","ml":500,"at":""},{"id":"seed202610315","ml":250,"at":""},{"id":"seed202610316","ml":250,"at":""},{"id":"seed202610317","ml":250,"at":""}]},"2026-11-01":{"date":"2026-11-01","ml":2250,"log":[{"id":"seed202611010","ml":500,"at":""},{"id":"seed202611011","ml":250,"at":""},{"id":"seed202611012","ml":250,"at":""},{"id":"seed202611013","ml":250,"at":""},{"id":"seed202611014","ml":250,"at":""},{"id":"seed202611015","ml":250,"at":""},{"id":"seed202611016","ml":250,"at":""},{"id":"seed202611017","ml":250,"at":""}]},"2026-11-02":{"date":"2026-11-02","ml":250,"log":[{"id":"seed202611020","ml":250,"at":""}]}},"s":{"days":[2,4]}};
  (function(){
    try {
      if (localStorage.getItem("seed-v1")) return;
      [["training-log-v1", SEED.t], ["food-log-v1", SEED.f], ["water-log-v1", SEED.w]].forEach(function(pr){
        var cur = {}; try { cur = JSON.parse(localStorage.getItem(pr[0]) || "{}") || {}; } catch (e) { cur = {}; }
        Object.keys(pr[1]).forEach(function(k){ if (!cur[k]) cur[k] = pr[1][k]; });
        localStorage.setItem(pr[0], JSON.stringify(cur));
      });
      if (!localStorage.getItem("settings-v1")) localStorage.setItem("settings-v1", JSON.stringify(SEED.s));
      localStorage.setItem("seed-v1", "1");
    } catch (e) {}
  })();

  var CATALOG = [
    {id:"warmup", name:"Aufwärmen", kind:"time", min:8, target:"5–10 min"},
    {id:"latzug", name:"Latzug", sets:3, reps:[8,12], pr:[12,10,9], rest:120, restText:"2 min", kg:50, step:5},
    {id:"rudern", name:"Rudern Maschine", sets:3, reps:[8,12], pr:[12,10,9], rest:120, restText:"2 min", kg:45, step:5},
    {id:"brustpresse", name:"Schrägbankdrücken", sets:3, reps:[8,12], pr:[10,9,8], rest:120, restText:"2 min", kg:25, step:2.5, since:"2026-11-13"},
    {id:"seitheben", name:"Seitheben Maschine", sets:2, reps:[12,20], pr:[15,12], drop:true, dropPr:10, rest:75, restText:"75 s", kg:45, dropKg:30, step:5},
    {id:"reverse_fly", name:"Reverse Butterfly", sets:2, reps:[12,20], pr:[15,12], drop:true, dropPr:10, rest:75, restText:"75 s", kg:30, dropKg:20, step:5},
    {id:"beinbeuger", name:"Beinbeuger", sets:3, reps:[10,15], pr:[12,10,10], drop:true, dropPr:8, rest:90, restText:"90 s", kg:40, dropKg:30, step:5},
    {id:"schulterpresse", name:"Schulterpresse", sets:3, reps:[8,12], pr:[10,9,8], rest:120, restText:"2 min", kg:30, step:5},
    {id:"bauch", name:"Bauchmaschine", sets:3, reps:[12,20], pr:[15,12,12], rest:60, restText:"60 s", kg:30, step:5},
    {id:"preacher", name:"Preacher Curls", note:"Langhantel, Untergriff, nur Scheiben pro Seite", sets:3, reps:[8,12], pr:[10,8,8], rest:90, restText:"90 s", kg:5, step:1.25, since:"2026-11-10"},
    {id:"trizeps_oh", name:"Trizeps über Kopf", note:"1 Hantel, 2 Hände", sets:2, reps:[10,15], pr:[12,10], rest:90, restText:"90 s", kg:16, step:2, since:"2026-11-03"},
    {id:"hammer", name:"Hammer Curls", sets:2, reps:[10,15], pr:[12,10], drop:true, dropPr:8, rest:75, restText:"75 s", kg:12, dropKg:8, step:2},
    {id:"rope", name:"Rope Pushdown", sets:2, reps:[10,15], pr:[12,10], drop:true, dropPr:8, rest:75, restText:"75 s", kg:30, dropKg:20, step:5},
    {id:"reverse", name:"Reverse Curls", sets:2, reps:[12,20], pr:[15,12], rest:60, restText:"60 s", kg:8, step:1},
    {id:"butterfly", name:"Butterfly", sets:2, reps:[10,15], pr:[12,10], drop:true, dropPr:8, rest:90, restText:"90 s", kg:65, dropKg:40, step:5},
    {id:"beinpresse", name:"Beinpresse", sets:4, reps:[10,15], pr:[12,10,10,10], rest:150, restText:"2½ min", kg:160, step:10},
    {id:"beinstrecker", name:"Beinstrecker", sets:2, reps:[10,15], pr:[12,10], drop:true, dropPr:8, rest:90, restText:"90 s", kg:70, dropKg:50, step:5},
    {id:"waden", name:"Waden", sets:2, reps:[12,20], pr:[15,12], drop:true, dropPr:10, rest:60, restText:"60 s", kg:45, dropKg:30, step:5},
    {id:"kniebeuge", name:"Kniebeuge (Smith)", sets:3, reps:[8,12], pr:[10,9,8], rest:150, restText:"2½ min", kg:40, step:5},
    {id:"rdl", name:"Rumänisches Kreuzheben", note:"Kurzhanteln, Gewicht pro Hand", sets:3, reps:[8,12], pr:[10,10,8], rest:120, restText:"2 min", kg:20, step:2},
    {id:"hipthrust", name:"Hip Thrust Maschine", sets:3, reps:[8,12], pr:[12,10,10], rest:120, restText:"2 min", kg:60, step:10},
    {id:"adduktoren", name:"Adduktoren Maschine", sets:2, reps:[12,15], pr:[15,12], drop:true, dropPr:10, rest:75, restText:"75 s", kg:40, dropKg:30, step:5},
    {id:"brustpresse_m", name:"Brustpresse Maschine", sets:3, reps:[8,12], pr:[10,9,8], rest:120, restText:"2 min", kg:50, step:5},
    {id:"kabelrudern", name:"Kabelrudern eng", sets:3, reps:[10,12], pr:[12,10,10], rest:90, restText:"90 s", kg:50, step:5},
    {id:"facepull", name:"Face Pulls", sets:2, reps:[12,20], pr:[15,12], drop:true, dropPr:10, rest:60, restText:"60 s", kg:20, dropKg:15, step:2.5},
    {id:"rennen", name:"Rennen", kind:"time", min:10, target:"10 min"}
  ];
  var BYID = {}; CATALOG.forEach(function(e){ BYID[e.id] = e; });
  var ALLSTR = CATALOG.filter(function(e){ return e.kind !== "time"; });
  var PLAN = [], STRENGTH = [];
  var PAIR = {seitheben:"reverse_fly", reverse_fly:"seitheben", waden:"reverse", reverse:"waden", hammer:"trizeps_oh", trizeps_oh:"hammer"};
  // Reihenfolge für maximales Wachstum: große Grundübungen zuerst (frisch, schwer), dann Isolation mit Dropsätzen, Arme und Waden zum Schluss.
  // Dropsätze nur bei Maschinen-/Isolationsübungen, direkt nach dem letzten Satz ohne Pause.
  var PLANS = {
    // 1–2 Tage: Ganzkörper (Supersätze sparen Zeit)
    full:["beinpresse","brustpresse","latzug","butterfly","rudern","seitheben","reverse_fly","hammer","trizeps_oh","rope","reverse","waden"],
    // 3 Tage: Ganzkörper A/B/C
    fullA:["kniebeuge","beinbeuger","brustpresse","latzug","butterfly","seitheben","reverse_fly","hammer","trizeps_oh","waden","reverse"],
    fullB:["rdl","beinstrecker","schulterpresse","kabelrudern","brustpresse_m","facepull","preacher","rope","bauch"],
    fullC:["beinpresse","hipthrust","brustpresse_m","latzug","rudern","seitheben","reverse_fly","hammer","trizeps_oh","waden","reverse"],
    // 4 Tage: Oberkörper/Unterkörper je 2×
    upperA:["brustpresse","latzug","schulterpresse","rudern","butterfly","seitheben","reverse_fly","hammer","trizeps_oh","rope"],
    lowerA:["kniebeuge","rdl","hipthrust","beinstrecker","beinbeuger","adduktoren","waden","reverse","bauch"],
    upperB:["brustpresse_m","kabelrudern","latzug","schulterpresse","butterfly","facepull","seitheben","preacher","rope","reverse"],
    lowerB:["beinpresse","hipthrust","beinbeuger","beinstrecker","adduktoren","rdl","waden","bauch"],
    // 5–6 Tage: Push/Pull/Beine
    push:["brustpresse","schulterpresse","brustpresse_m","butterfly","seitheben","trizeps_oh","rope","waden","bauch"],
    pull:["latzug","rudern","kabelrudern","facepull","reverse_fly","preacher","hammer","waden","reverse","bauch"],
    legs:["kniebeuge","rdl","beinpresse","beinbeuger","beinstrecker","waden","bauch"],
    pushB:["brustpresse_m","schulterpresse","brustpresse","butterfly","seitheben","facepull","trizeps_oh","rope","bauch"],
    pullB:["kabelrudern","latzug","rudern","reverse_fly","hammer","preacher","trizeps_oh","waden","reverse","bauch"],
    legsB:["beinpresse","hipthrust","beinbeuger","adduktoren","beinstrecker","rdl","bauch"]
  };
  var SPLIT = {3:["fullA","fullB","fullC"], 4:["upperA","lowerA","upperB","lowerB"], 5:["upperA","lowerA","push","pull","legs"], 6:["push","pull","legs","pushB","pullB","legsB"], 7:["push","pull","legs","pushB","pullB","legsB","upperA"]};
  var PLAN_NAMES = {full:"Ganzkörper", fullA:"Ganzkörper A", fullB:"Ganzkörper B", fullC:"Ganzkörper C", upperA:"Oberkörper A", lowerA:"Unterkörper A", upperB:"Oberkörper B", lowerB:"Unterkörper B", push:"Push (Brust, Schulter, Trizeps)", pull:"Pull (Rücken, Bizeps)", legs:"Beine", pushB:"Push B", pullB:"Pull B", legsB:"Beine B"};


  function dOrd(d){ return (d + 6) % 7; }
  var PLAN_KEY = "full";
  function splitKeys(){ var n = TRAIN_DAYS.length; return n >= 3 ? (SPLIT[Math.min(n, 7)] || SPLIT[7]).slice(0, Math.min(n, 7)) : ["full"]; }
  function planKey(wdDay){
    var n = TRAIN_DAYS.length;
    if (n < 3) return "full";
    var sorted = TRAIN_DAYS.slice().sort(function(a, b){ return dOrd(a) - dOrd(b); }), i = sorted.indexOf(wdDay);
    if (i < 0){ var bd = 8; sorted.forEach(function(d, k){ var diff = (d - wdDay + 7) % 7 || 7; if (diff < bd){ bd = diff; i = k; } }); }
    return (SPLIT[Math.min(n, 7)] || SPLIT[7])[i] || "full";
  }
  function planIds(key){ return (PREFS.plans[key] || PLANS[key] || PLANS.full).slice(); }
  function planList(wdDay){
    var key = planKey(wdDay), ids = planIds(key), t = PREFS.tmp;
    if (t && t.d === todayId() && wdDay === new Date().getDay()){
      var out = []; ids.forEach(function(id){ var v = Object.prototype.hasOwnProperty.call(t.sw, id) ? t.sw[id] : id; if (v && out.indexOf(v) < 0) out.push(v); }); ids = out.length ? out : ids;
    }
    return ids.map(function(id){ return BYID[id]; }).filter(Boolean);
  }
  function updatePlan(){
    PLAN_KEY = planKey(new Date().getDay());
    PLAN.length = 0; planList(new Date().getDay()).forEach(function(e){ PLAN.push(e); });
    STRENGTH.length = 0; PLAN.forEach(function(e){ if (e.kind !== "time") STRENGTH.push(e); });
  }
  var RATINGS = { easy:"Zu leicht", leicht:"Leicht", passt:"Genau richtig", hart:"Schwer", vhart:"Sehr schwer", limit:"Am Limit", fail:"Über dem Limit" };
  var TRAIN_DAYS = [2,4];
  var GOAL_KCAL = 2800, GOAL_PROT = 150;

  // ---------- Einstellungen (werden mit dem Konto synchronisiert) ----------
  var PREF_DEF = {kcal:2800, prot:150, water:2500, sleep:7, fatMax:90, sugarMax:50, kcalMax:3000, goalBw:null,
    restAdj:0, cdBeep:true, vol:3, vib:true, hang:true, weighDay:2, theme:"auto", big:false, plans:{}, notes:{}, tmp:null};
  function numIn(v, lo, hi, def, step){ var n = Number(v); if (v === null || v === "" || typeof v === "boolean" || !isFinite(n) || n < lo || n > hi) return def; return step ? Math.round(Math.round(n / step) * step * 100) / 100 : n; }
  function cleanText(v, max){ return typeof v === "string" ? v.replace(/[\u0000-\u001F\u007F<>]/g, "").replace(/\s+/g, " ").trim().slice(0, max) : ""; }
  function cleanIds(arr){ var out = []; (Array.isArray(arr) ? arr : []).forEach(function(id){ if (typeof id === "string" && BYID[id] && out.indexOf(id) < 0 && out.length < 16) out.push(id); }); return out; }
  function cleanPrefs(x){
    x = x && typeof x === "object" ? x : {};
    var o = {
      kcal: numIn(x.kcal, 1200, 6000, PREF_DEF.kcal, 50), prot: numIn(x.prot, 40, 350, PREF_DEF.prot, 5), water: numIn(x.water, 1000, 6000, PREF_DEF.water, 100),
      sleep: numIn(x.sleep, 5, 10, PREF_DEF.sleep, 0.5), fatMax: numIn(x.fatMax, 20, 300, PREF_DEF.fatMax, 5), sugarMax: numIn(x.sugarMax, 10, 250, PREF_DEF.sugarMax, 5),
      kcalMax: numIn(x.kcalMax, 1500, 8000, PREF_DEF.kcalMax, 50), goalBw: numIn(x.goalBw, 35, 250, null, 0.1),
      restAdj: numIn(x.restAdj, -30, 90, 0, 15), cdBeep: x.cdBeep !== false, vol: numIn(x.vol, 1, 3, PREF_DEF.vol, 1), vib: x.vib !== false, hang: x.hang !== false,
      weighDay: numIn(x.weighDay, -1, 6, PREF_DEF.weighDay, 1), theme: ["auto", "light", "dark"].indexOf(x.theme) >= 0 ? x.theme : "auto", big: x.big === true,
      plans: {}, notes: {}, tmp: null
    };
    if (o.kcalMax < o.kcal) o.kcalMax = o.kcal;
    if (x.plans && typeof x.plans === "object") Object.keys(x.plans).forEach(function(k){ if (PLANS[k]){ var ids = cleanIds(x.plans[k]); if (ids.length) o.plans[k] = ids; } });
    if (x.notes && typeof x.notes === "object") Object.keys(x.notes).forEach(function(k){ var t = cleanText(x.notes[k], 60); if (BYID[k] && t) o.notes[k] = t; });
    if (x.tmp && typeof x.tmp === "object" && isDateId(x.tmp.d) && x.tmp.d >= todayId() && x.tmp.sw && typeof x.tmp.sw === "object"){
      var sw = {}; Object.keys(x.tmp.sw).forEach(function(k){ var v = x.tmp.sw[k]; if (BYID[k] && (v === "" || BYID[v])) sw[k] = v; });
      if (Object.keys(sw).length) o.tmp = {d:x.tmp.d, sw:sw};
    }
    return o;
  }
  var PREFS = cleanPrefs({});
  updatePlan();
  function restOf(ex){ return Math.max(20, (ex.rest || 90) + PREFS.restAdj); }
  function kn(n){ return Math.round(n).toLocaleString("de-DE"); }

  var MEALS = {
    train: [
      ["Morgens", "1 Fladenbrot mit Putenbrust, 1 Scheibe Käse, Pesto dünn"],
      ["Nach dem Training", "Shake: 2 Scoops mit 400 ml Wasser"],
      ["Mittags", "Nudeln oder Reis mit 150 g Hähnchen, Thunfisch oder Hack"],
      ["Abends", "Eier, Quark oder Thunfisch"],
      ["Bei Hunger", "250 g Skyr"]
    ],
    rest: [
      ["Morgens", "Shake: 2 Scoops, 400 ml Milch, 40 g Haferflocken", "Optional 1 EL Erdnussbutter"],
      ["Mittags", "Nudeln oder Reis mit 150 g Hähnchen, Thunfisch oder Hack"],
      ["Abends", "Eier, Quark oder Thunfisch"],
      ["Bei Hunger", "250 g Skyr"]
    ]
  };

  function $(s, el){ return (el || document).querySelector(s); }
  function $$(s, el){ return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function pad(n){ return String(n).padStart(2, "0"); }
  function dayId(d){ return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function todayId(){ return dayId(new Date()); }
  function isDateId(s){ return typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s); }
  function dateOf(id){ var p = id.split("-").map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  function dateLong(id){ return dateOf(id).toLocaleDateString("de-DE", {weekday:"long", day:"numeric", month:"long"}); }
  function dateShort(id){ return dateOf(id).toLocaleDateString("de-DE", {weekday:"short", day:"numeric", month:"short"}); }
  function num(v){ if (v === null || v === undefined) return null; var s = String(v).trim().replace(",", "."); if (s === "") return null; var n = Number(s); return isFinite(n) ? n : null; }
  function clean(v){ if (v === null || v === undefined || v === "" || typeof v === "boolean") return null; var n = Number(v); return isFinite(n) ? n : null; }
  function fmt(n){ if (n === null || n === undefined || !isFinite(n)) return "–"; return (Math.round(n * 100) / 100).toLocaleString("de-DE", {maximumFractionDigits:2}); }
  function q(n){ return Math.round(n * 4) / 4; }
  function cleanKg(v){ var n = clean(v); return n === null ? null : Math.round(n * 4) / 4; }
  function toStep(n, step){ return q(Math.round(n / step) * step); }
  function rating(r){ return Object.prototype.hasOwnProperty.call(RATINGS, r) ? r : null; }
  function wait(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }
  function uid6(){ return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

  // ---------- Trainings-Einträge ----------
  function entrySets(e){
    if (!e) return [];
    if (Array.isArray(e.sets)) return e.sets.map(function(s){ return {kg: s ? cleanKg(s.kg) : null, reps: s ? clean(s.reps) : null, rating: s ? (e.v === 2 ? rating(s.rating) : (rating(s.rating) || rating(e.rating))) : null}; });
    var kg = cleanKg(e.kg), reps = Array.isArray(e.reps) ? e.reps : [];
    if (kg === null && !reps.length) return [];
    var out = []; for (var i = 0; i < Math.max(reps.length, 1); i++) out.push({kg:kg, reps:clean(reps[i]), rating:rating(e.rating)});
    return out;
  }
  function firstKg(e){ var s = entrySets(e); for (var i = 0; i < s.length; i++) if (s[i].kg !== null) return s[i].kg; return null; }
  function defaultSets(ex){
    var a = [ex.kg];
    for (var i = 1; i < ex.sets; i++) a.push(ex.sets >= 3 ? toStep(ex.kg - ex.step, ex.step) : toStep(ex.kg * 0.9, ex.step));
    return a;
  }
  function setsText(e){
    var parts = entrySets(e).filter(function(s){ return s.kg !== null || s.reps !== null; }).map(function(s){
      return (s.kg !== null ? fmt(s.kg) + " kg" : "?") + (s.reps !== null ? " × " + s.reps : "");
    });
    var dk = cleanKg(e.dropKg), dr = clean(e.dropReps);
    if (dk !== null) parts.push("Drop " + fmt(dk) + " kg" + (dr !== null ? " × " + dr : ""));
    var r = rating(e.rating); if (r) parts.push(RATINGS[r]);
    return parts.join(", ");
  }

  var sessions = [], mode = "loading", col = null, known = {}, dirty = {};
  var firstSync = {tr:false, fo:false, wa:false};
  function updateSyncBanner(){ var b = $("#syncBar"); if (b) b.hidden = !!(firstSync.tr && firstSync.fo && firstSync.wa) || mode === "local" || mode === "readonly"; if ((firstSync.tr && firstSync.fo && firstSync.wa) || mode === "local") autoSnapSoon(); }
  var dv = {};
  function markDirty(id){ dirty[id] = true; dv[id] = (dv[id] || 0) + 1; saveDraft(id); }
  function readDrafts(){ try { var d = JSON.parse(localStorage.getItem("fit-draft") || "null"); if (d && d.d === todayId() && d.ex) return d; } catch (e) {} if (draftMem && draftMem.d === todayId()) return draftMem; return {d:todayId(), ex:{}}; }
  function saveDraft(id){
    try {
      var li = $('.ex[data-id="' + id + '"]'); if (!li) return;
      var d = readDrafts();
      draftMem = d; d.ex[id] = {kg:$$(".s-kg", li).map(function(x){ return x.value; }), reps:$$(".s-reps", li).map(function(x){ return x.value; }), rt:$$(".setrow:not(.drop) .srate", li).map(function(b){ return b.dataset.r || ""; }),
        dk:($(".d-kg", li) || {}).value || "", dr:($(".d-reps", li) || {}).value || "", drt:($(".setrow.drop .srate", li) || {dataset:{}}).dataset.r || ""};
      localStorage.setItem("fit-draft", JSON.stringify(d));
    } catch (e) {}
    uiPush();
  }
  function clearDraft(id){ try { var d = readDrafts(); delete d.ex[id]; draftMem = d; localStorage.setItem("fit-draft", JSON.stringify(d)); } catch (e) {} uiPush(); }
  function applyDrafts(){
    var d = readDrafts();
    Object.keys(d.ex).forEach(function(id){
      var li = $('.ex[data-id="' + id + '"]'), x = d.ex[id]; if (!li || !x) return;
      $$(".s-kg", li).forEach(function(el, i){ if (x.kg[i] !== undefined && x.kg[i] !== "") el.value = x.kg[i]; });
      $$(".s-reps", li).forEach(function(el, i){ if (x.reps[i] !== undefined) el.value = x.reps[i]; });
      $$(".setrow:not(.drop) .srate", li).forEach(function(b, i){ setSR(b, rating(x.rt[i])); });
      if ($(".d-kg", li) && x.dk) $(".d-kg", li).value = x.dk;
      if ($(".d-reps", li)) $(".d-reps", li).value = x.dr || "";
      var db = $(".setrow.drop .srate", li); if (db) setSR(db, rating(x.drt));
      dirty[id] = true;
    });
  }
  function flushState(){
    try { var o = $(".ex.open"); if (o){ if (dirty[o.dataset.id]){ saveDraft(o.dataset.id); saveRow(BYID[o.dataset.id], o, true); } localStorage.setItem("fit-open", JSON.stringify({d:todayId(), id:o.dataset.id})); } } catch (e) {}
  }
  document.addEventListener("visibilitychange", function(){
    if (document.hidden){ flushState(); uiPush(true); }
    else if (!$(".ex.open")) restoreOpen();
  });
  window.addEventListener("pagehide", function(){ flushState(); uiPush(true); });
  function restoreOpen(){
    if (!document.body.classList.contains("tm")) return;
    try {
      var o = JSON.parse(localStorage.getItem("fit-open") || "null");
      if (o && o.d === todayId() && BYID[o.id]){ var li = $('.ex[data-id="' + o.id + '"]'); if (li){ setOpen(li, true); setTimeout(function(){ li.scrollIntoView({block:"start"}); }, 250); } }
    } catch (e) {}
  }
  var readyResolve; var ready = new Promise(function(r){ readyResolve = r; });

  function tooShort(s){ return !!(s && s.tr && (s.tr.t || (s.tr.s && s.tr.e && (Date.parse(s.tr.e) - Date.parse(s.tr.s)) < 300000))); }
  function sessionById(id){ for (var i = 0; i < sessions.length; i++) if (sessions[i].id === id) return sessions[i]; return null; }
  function sessionDone(id){
    var s0 = null; for (var i = 0; i < sessions.length; i++) if (sessions[i].id === id){ s0 = sessions[i]; break; }
    if (!s0 || !s0.entries || tooShort(s0)) return 0; var n = 0;
    ALLSTR.forEach(function(ex){ var e = s0.entries[ex.id]; if (!e) return; if (entrySets(e).some(function(x){ return x.reps !== null && x.reps > 0; })) n++; });
    return n;
  }
  function isTrainId(id){ if (tooShort(sessionById(id))) return false; return TRAIN_DAYS.indexOf(dateOf(id).getDay()) >= 0 || sessionDone(id) >= 5; }
  function todaySession(){ var t = todayId(); for (var i = 0; i < sessions.length; i++) if (sessions[i].id === t) return sessions[i]; return null; }
  function todayEntry(id){ var s = todaySession(); return s && s.entries ? (s.entries[id] || null) : null; }
  function lastEntry(id){
    var t = todayId();
    for (var i = 0; i < sessions.length; i++){
      var s = sessions[i]; if (s.id >= t || !isTrainId(s.id)) continue;
      if (BYID[id] && BYID[id].since && s.id < BYID[id].since) continue;
      var e = s.entries && s.entries[id];
      if (e && (firstKg(e) !== null || e.done)) return {e:e, date:s.id};
    }
    return null;
  }

  function e1(kg, r){ return kg * (1 + r / 30); }
  function repsAt(rm, kg, lo, top){ return Math.max(lo, Math.min(top, Math.round((rm / kg - 1) * 30))); }
  function suggest(ex, leO){
    var dDef = ex.dropKg == null ? null : ex.dropKg, dpr = ex.dropPr || null;
    var le = leO || lastEntry(ex.id);
    if (!le || firstKg(le.e) === null) return {sets:defaultSets(ex), reps:ex.pr.slice(), dropKg:dDef, dropReps:dpr, delta:0, repDelta:0};
    var e = le.e, st = entrySets(e), r = rating(e.rating), lo = ex.reps[0], top = ex.reps[1], base = defaultSets(ex);
    var kgs = [], reps = [];
    for (var i = 0; i < ex.sets; i++){
      var v = st[i] && st[i].kg !== null ? st[i].kg : null;
      if (v === null && st[0] && st[0].kg !== null) v = i === 0 ? st[0].kg : toStep(st[0].kg * (ex.sets >= 3 ? 1 : 0.9), ex.step);
      kgs.push(v === null ? base[i] : v);
      reps.push(st[i] && st[i].reps !== null ? st[i].reps : ex.pr[i]);
    }
    var dk = cleanKg(e.dropKg), dr = clean(e.dropReps), er = e.v === 2 ? null : rating(e.rating), outK = [], outR = [], first = null;
    var RIR = {easy:5, leicht:3.5, passt:2, hart:1, vhart:0.5, limit:0, fail:-1}, repInc = 0;
    for (var j = 0; j < ex.sets; j++){
      var sr = (st[j] && rating(st[j].rating)) || er, k = kgs[j], rp = reps[j], rir = sr ? RIR[sr] : 1.5;
      var rm = e1(k, rp + rir), tgt = Math.max(rp, Math.min(rp + 2, Math.round((rm / k - 1) * 30 - 1))), nk2, rn;
      if ((sr === "fail" || (sr === "limit" && rp < lo)) && k - ex.step > 0){
        nk2 = toStep(k - ex.step, ex.step); outK.push(nk2); outR.push(Math.max(lo, Math.min(top, Math.round((rm / nk2 - 1) * 30 - 1)))); if (j === 0) first = "d";
      } else if (tgt > top || sr === "easy" || (rp >= top && sr !== "limit" && sr !== "fail")){
        nk2 = toStep(k + ex.step, ex.step); rn = Math.round((rm / nk2 - 1) * 30 - 1);
        if (rn >= lo - 1){ outK.push(nk2); outR.push(Math.max(lo, Math.min(top, rn))); if (j === 0) first = "w"; }
        else { outK.push(k); outR.push(top); }
      } else { outK.push(k); outR.push(tgt); if (j === 0) repInc = tgt - rp; }
    }
    var dsr = rating(e.dropRating) || er, nk = dDef, nr = dpr;
    if (dk !== null){
      if (dsr === "leicht" || (dsr !== "limit" && dr !== null && dr >= top)){ nk = toStep(dk + ex.step, ex.step); nr = dr !== null ? Math.max(4, dr - 2) : dpr; }
      else if (dsr === "limit" || dsr === "hart" || dsr === "vhart"){ nk = dk; nr = dr !== null ? dr : dpr; }
      else { nk = dk; nr = dr !== null ? dr + 1 : dpr; }
    }
    var res = {sets:outK, reps:outR, dropKg:nk, dropReps:nr, delta: first === "w" ? ex.step : (first === "d" ? -ex.step : 0), repDelta: repInc};
    res.reason = first === "w" ? "Ziel erreicht, also mehr Gewicht" : first === "d" ? "War zu schwer, also etwas leichter" : repInc > 0 ? "Gleiches Gewicht, mehr Wiederholungen" : "Gewicht halten, sauber ausführen";
    if (first !== "w"){
      var upto = le.date || todayId(), hist = sessions.filter(function(s){ return s.id <= upto && s.id >= OVL_FROM && isRealSession(s) && entryOk(ex, s); }).slice(0, 3);
      if (hist.length === 3){
        var hv = hist.map(function(s){ return bestE1(s.entries[ex.id]); });
        if (hv[0] <= hv[2] * 1.005){
          res.sets = outK.map(function(k){ return Math.max(ex.step, toStep(k * 0.9, ex.step)); });
          res.reps = outR.map(function(x){ return Math.min(top, x + 2); });
          res.delta = res.sets[0] - kgs[0]; res.repDelta = 0; res.plateau = true;
          res.reason = "Plateau: 3× keine Steigerung. Kurz 10 % leichter, dann neu aufbauen";
        }
      }
    }
    return res;
  }

  var MUSCLES = {
    latzug:{p:["lats"], s:["biceps", "traps_m", "delts_b", "brach"]},
    rudern:{p:["traps_m", "lats"], s:["delts_b", "biceps", "brach"]},
    brustpresse:{p:["chest_u"], s:["chest_l", "delts_f", "triceps"]},
    seitheben:{p:["delts_s"], s:["traps_u", "delts_f"]},
    reverse_fly:{p:["delts_b"], s:["traps_m"]},
    beinbeuger:{p:["hams"], s:["calves"]},
    schulterpresse:{p:["delts_f", "delts_s"], s:["triceps", "traps_u"]},
    bauch:{p:["abs"], s:["obl"]},
    preacher:{p:["biceps"], s:["brach"]},
    trizeps_oh:{p:["triceps"], s:[]},
    hammer:{p:["brach", "brachiorad"], s:["biceps", "forearm_f"]},
    rope:{p:["triceps"], s:["forearm_e"]},
    reverse:{p:["brachiorad", "forearm_e"], s:["biceps", "brach"]},
    butterfly:{p:["chest_u", "chest_l"], s:["delts_f"]},
    beinpresse:{p:["quads"], s:["glutes", "adductors", "hams"]},
    beinstrecker:{p:["quads"], s:[]},
    waden:{p:["calves"], s:[]},
    kniebeuge:{p:["quads", "glutes"], s:["adductors", "hams", "lower_back"]},
    rdl:{p:["hams", "glutes"], s:["lower_back", "forearm_f"]},
    hipthrust:{p:["glutes"], s:["hams"]},
    adduktoren:{p:["adductors"], s:[]},
    brustpresse_m:{p:["chest_l", "chest_u"], s:["delts_f", "triceps"]},
    kabelrudern:{p:["lats", "traps_m"], s:["biceps", "delts_b", "brach"]},
    facepull:{p:["delts_b", "traps_m"], s:["traps_u"]}
  };
  var MNAMES = {chest_u:"Obere Brust", chest_l:"Untere Brust", delts_f:"Vordere Schulter", delts_s:"Seitliche Schulter", delts_b:"Hintere Schulter",
    biceps:"Bizeps", brach:"Brachialis", brachiorad:"Brachioradialis", forearm_f:"Unterarm-Beuger", forearm_e:"Unterarm-Strecker",
    abs:"Gerader Bauch", obl:"Schräger Bauch", traps_u:"Oberer Trapez", traps_m:"Mittlerer Rücken", lats:"Latissimus", lower_back:"Unterer Rücken",
    triceps:"Trizeps", glutes:"Gesäß", quads:"Quadrizeps", adductors:"Adduktoren", hams:"Beinbeuger", calves:"Waden"};
  // Muskelfigur: halbe Körperseite als Pfade (x = Abstand zur Körpermitte), wird gespiegelt.
  // Koordinaten: Kopf oben (y 2), Schultern y 33, Hüfte y 104, Knie y 152, Füße y 205.
  function hp(cmds, cx, side){
    return cmds.map(function(c){ var o = c[0]; for (var i = 1; i < c.length; i += 2) o += (i > 1 ? " " : "") + (cx + side * c[i]).toFixed(1) + "," + c[i + 1]; return o; }).join(" ") + " Z";
  }
  function hpo(cmds, cx, side){ return hp(cmds, cx, side).replace(/ Z$/, ""); }
  // Geschlossener, symmetrischer Umriss: rechte Seite von der Mitte zur Mitte, linke Seite gespiegelt zurück
  function sym(cmds, cx){
    function X(x){ return (cx + x).toFixed(1); }
    var prev = [cmds[0][1], cmds[0][2]], d = "M" + X(prev[0]) + "," + prev[1], segs = [];
    for (var i = 1; i < cmds.length; i++){
      var c = cmds[i];
      if (c[0] === "L"){ d += " L" + X(c[1]) + "," + c[2]; segs.push({t:"L", f:prev}); prev = [c[1], c[2]]; }
      else { d += " C" + X(c[1]) + "," + c[2] + " " + X(c[3]) + "," + c[4] + " " + X(c[5]) + "," + c[6]; segs.push({t:"C", a:[c[1], c[2]], b:[c[3], c[4]], f:prev}); prev = [c[5], c[6]]; }
    }
    for (var j = segs.length - 1; j >= 0; j--){
      var g = segs[j];
      d += g.t === "L" ? " L" + X(-g.f[0]) + "," + g.f[1] : " C" + X(-g.b[0]) + "," + g.b[1] + " " + X(-g.a[0]) + "," + g.a[1] + " " + X(-g.f[0]) + "," + g.f[1];
    }
    return d + " Z";
  }
  var SIL = {
    head: [["M",0,2.2],["C",5.3,2.2,8.5,6.3,8.5,12.2],["C",8.5,15.9,7.6,18.9,5.9,21.1],["C",4.3,23.1,2.3,24,0,24]],
    ear: [["M",8.2,10.6],["C",9.6,10.4,10.1,12.2,9.8,14],["C",9.6,15.4,8.9,16.2,8,16]],
    neck: [["M",0,18.6],["L",4.7,18.6],["C",4.9,21.8,5.5,24.4,6.8,26.4],["L",0,27.4]],
    trunk: [["M",0,25.3],["L",6.2,25.4],["C",11,29,18,31,24,33.1],["C",30,33.1,34.6,38,34.5,45],["C",34.3,50,32.6,54.5,31,57],
      ["L",23.6,52.4],["C",23.4,57,22,62,20.5,67],["C",18.3,75,15.7,83,15.4,90],["C",15.3,96,17.6,100,19,104],
      ["C",21.7,112,21.7,128,19.5,140],["C",18.7,145,17.7,148,17.3,151],["C",17,154,17.7,157,17.9,161],["C",18.7,168,17.7,176,15.9,183],
      ["C",14.7,188,13.5,193,13.1,197],["L",6.1,197],["C",6.5,192,6.2,188,5.8,184],["C",4.4,176,3.8,166,4.6,159],["C",5,155,4.8,151,4.4,148],
      ["C",3.4,138,2.6,126,1.6,116],["C",1.4,114,1.2,112.5,0.8,112],["L",0,112]],
    arm: [["M",23.4,42],["C",28,40.6,33.4,44,34,52],["C",34.7,58,34.9,64,34.1,70],["C",34.9,74,35.5,80,35.1,86],["C",34.5,93,32.9,100,31.7,106],
      ["L",26.7,106],["C",25.9,100,24.9,92,24.7,84],["C",24.5,78,24.3,74,24.1,71],["C",23.5,66,22.7,60,22.4,52],["C",22.3,48,22.6,45,23.4,42]],
    hand: [["M",26.8,105.4],["C",26.1,108.8,25.9,112.6,26.4,116.2],["C",26.9,119.4,29.3,120.8,31,119.4],["C",32.5,117.8,33,113,32.7,109.6],["C",32.5,107.6,32.2,106.2,31.6,105.4]],
    thumb: [["M",26.6,108.6],["C",25.1,110,24.5,112.6,25,114.6],["C",25.5,115.6,26.4,115.3,26.8,114.1]],
    foot: [["M",6.1,196.6],["L",13.1,196.6],["C",13.6,198.6,14.6,199.6,15.6,200.4],["C",17,201.6,16.9,204.8,14.6,205.2],["L",7.2,205.2],["C",5.9,204.8,5.6,202.8,5.9,200.8],["C",6.1,199.4,6.1,198,6.1,196.6]],
    heel: [["M",6.1,196.6],["L",13.1,196.6],["C",13.4,199,13.7,201,13.5,202.8],["C",13.2,204.8,11.8,205.4,9.6,205.4],["C",7.4,205.4,6.2,204.6,5.9,202.8],["C",5.7,200.8,5.9,198.6,6.1,196.6]]
  };
  var SH = {
    // Vorderseite
    trapF: [["M",5.3,23.6],["C",8.6,26.8,14,29.6,20.6,32.1],["C",16,32.5,11,31.3,7.2,29.7],["C",6.2,28.5,5.6,26.2,5.3,23.6]],
    scm: [["M",4.9,19.4],["C",5.8,22.4,4.7,26.4,2.3,29.9],["L",1.1,29.5],["C",2.9,26.2,3.9,22.6,3.9,19.8]],
    pecU: [["M",1,33.6],["C",7,31.6,15,32.2,21.6,35.2],["C",23.4,36.8,24.4,39.6,24.6,42.6],["C",17.6,42.4,9.6,43.4,1,45.6]],
    pecL: [["M",1,46.5],["C",9.6,44.3,17.6,43.3,24.4,43.7],["C",24.4,46.7,23.6,49.7,22,52.7],["C",18.4,57.7,12.4,60.3,6,59.9],["C",3.4,59.7,1.8,58.9,1,57.9]],
    deltA: [["M",18.2,34.4],["C",21.8,32.4,25.8,32.2,28.2,33.6],["C",27.4,39.4,26.4,46,26.4,52.6],["C",24.8,47.6,22.6,42.8,19.6,38.8]],
    deltL: [["M",28.8,33.8],["C",32.6,35,35,39.2,34.6,44.6],["C",34.2,49.6,32.4,54,30,57.4],["C",28.6,56,27.6,54.4,27.2,52.8],["C",27,46,27.8,39.6,28.8,33.8]],
    biceps: [["M",24.6,51.4],["C",27.4,49.2,31,51.2,31.8,56.8],["C",32.4,62.6,30.6,68,28,70],["C",25.8,68,24.2,63.2,24,57.8],["C",23.9,55.2,24,53.2,24.6,51.4]],
    brach: [["M",31.3,57.6],["C",33.3,60.6,33.9,65.6,32.9,69.8],["C",32.1,71.2,30.5,71.6,29.5,71],["C",30.9,67.2,31.7,62,31.3,57.6]],
    brad: [["M",28.7,71.2],["C",32.5,71,35,75,34.8,81.4],["C",34.4,88,32.8,94.4,30.8,99.6],["C",29.8,92,29,82,28.7,71.2]],
    flex: [["M",25,72.6],["C",26,71.4,27.4,71.1,28.4,71.1],["C",28.8,82,29.6,92,30.6,99.8],["C",30.2,102.4,29.7,104.2,29.3,105.3],["L",27.1,105.3],["C",25.7,98,24.8,88,24.8,80],["C",24.8,77,24.8,74.6,25,72.6]],
    serr1: [["M",16.4,59.2],["L",21.9,57.3],["C",22.5,58.3,22.3,59.7,21.5,60.7],["L",16.8,62]],
    serr2: [["M",16.8,63.8],["L",21.1,62],["C",21.7,63,21.5,64.4,20.7,65.4],["L",17.2,66.6]],
    serr3: [["M",17.2,68.4],["L",20.3,67],["C",20.7,68,20.5,69.4,19.7,70.2],["L",17.6,71.2]],
    abs1: [["M",0.9,60.6],["C",3.4,60,6.4,60.2,8,61],["C",8.4,63.4,8.4,66.2,8.1,68.6],["C",5.6,69,3.2,69.1,0.9,69]],
    abs2: [["M",0.9,70],["C",3.3,70,5.7,69.9,8.2,69.6],["C",8.5,72.4,8.5,75.2,8.2,77.8],["C",5.7,78.1,3.3,78.2,0.9,78.2]],
    abs3: [["M",0.9,79.2],["C",3.3,79.2,5.7,79.1,8.2,78.8],["C",8.4,81.6,8.3,84.4,7.9,87],["C",5.5,87.3,3.2,87.4,0.9,87.4]],
    abs4: [["M",0.9,88.4],["C",3.2,88.4,5.4,88.3,7.8,88],["C",7.6,92.6,6.4,97,4.4,100.6],["C",3.2,102,2,102.6,0.9,102.8]],
    obl: [["M",9.3,61.4],["C",12.7,62.2,15.7,64.2,17.6,67.8],["C",16.6,74.2,15.8,80.2,15.7,86.8],["C",15.9,92.2,17.1,96.6,18.1,99.8],["C",14.9,101.2,11.1,103.6,6.5,106.4],["C",7.9,102.2,8.9,96.2,9.1,90.2],["C",9.3,80.8,9.5,70.8,9.3,61.4]],
    tfl: [["M",16,101.4],["C",18,102,19.4,104.2,19.9,107.6],["C",19.7,110.4,18.9,112.8,17.8,114.8],["C",17,110.6,16.4,106.2,16,101.4]],
    add: [["M",1.4,111.6],["C",4.4,109.6,8.4,107,11.8,105],["C",9.6,110.4,7.6,117.6,6.4,125.4],["C",5.6,129.6,4.9,133.6,4.2,137.6],["C",3,130,2,120.8,1.4,111.6]],
    sart: [["M",14.4,104.4],["C",12,110.2,9.8,118,8.2,126.4],["C",7.4,130.4,6.4,135.2,5.4,140.2],["L",4.3,139.6],["C",5.1,134.6,5.9,129.6,6.7,125.8],["C",8.1,117.6,10.2,109.8,12.6,104.6]],
    quadO: [["M",18.3,109],["C",21,116,21.2,128,19.6,139.6],["C",18.8,144.4,17.4,147.6,15.8,149],["C",14.6,145,14.1,139,14.1,132],["C",14.3,124,15.7,116,18.3,109]],
    quadM: [["M",15.6,106.2],["C",17,111,16.6,124,14.5,136],["C",13.5,141.4,12.6,144.6,11.4,146.4],["C",10.2,144.6,9.5,140.4,9.5,134.6],["C",9.7,124,11.8,113.8,15.6,106.2]],
    quadI: [["M",8.3,128.4],["C",10.2,133.2,11,139.8,10.4,145.2],["C",9.8,148.4,8.2,150,6.4,149.6],["C",4.8,148.8,4.5,146,4.9,142.4],["C",5.5,137.2,6.7,132.2,8.3,128.4]],
    pat: [["M",10.5,148.6],["C",12.3,148.6,13.2,150.4,13,152.4],["C",12.8,154.4,11.7,155.5,10.3,155.5],["C",8.9,155.5,7.9,154.4,7.9,152.4],["C",7.9,150.4,8.9,148.6,10.5,148.6]],
    shin: [["M",12.7,156.4],["C",14.5,160.4,14.6,168.2,13.7,176],["C",13.1,181,12.5,185,12.1,188.4],["L",10.9,188.4],["C",10.9,182,10.9,172,11.3,164],["C",11.5,160.4,11.9,157.8,12.7,156.4]],
    calfFO: [["M",15.3,156.8],["C",17.7,161.6,17.9,170.2,16.1,177.2],["C",15.3,173.6,14.7,167.2,14.7,162.2],["C",14.7,159.8,14.9,158,15.3,156.8]],
    calfFI: [["M",5.9,157.4],["C",7.9,159.8,9.1,165.2,8.9,171.6],["C",8.7,175.8,7.5,178.8,6.1,180.2],["C",5.1,174.8,4.7,167.8,4.9,162.6],["C",5.1,160.2,5.4,158.6,5.9,157.4]],
    // Rückseite
    trapU: [["M",-0.6,24.2],["L",5.4,24],["C",8.6,27.6,14.6,30.6,21.4,32.8],["C",22.8,33.4,23.8,34,24.4,34.6],["C",17.6,35.4,11,36.4,5,38.6],["L",-0.6,40.4]],
    trapM: [["M",-0.6,41.4],["L",5,39.6],["C",11,37.4,17.6,36.4,22.6,36.2],["C",18.6,38.8,14.2,41.8,11,44.8],["C",8.4,47.4,7,50,6,53.4],["C",4.8,58,3,62.6,1.2,66.4],["L",-0.6,67.6]],
    deltP: [["M",18.6,35.4],["C",23.4,33.2,29,33.4,31.6,37],["C",31.2,41.8,29.8,46.8,27.4,51.8],["C",25.2,47,22.2,42.6,19.4,38.8]],
    deltLB: [["M",32,37.4],["C",34.1,40.2,34.7,45.2,33.7,50.2],["C",32.7,54.2,31.1,56.6,29.5,58],["C",28.5,56.2,28,54.2,27.8,52.6],["C",29.7,47.6,31.3,42.6,32,37.4]],
    infra: [["M",10.8,46.6],["C",13.8,43,17.6,39.8,21,38],["C",23.4,41.6,25.4,45.8,26.6,50.2],["C",22.4,52.4,17.4,53.4,12.7,53.2],["C",11.3,51.4,10.7,49,10.8,46.6]],
    teres: [["M",12.9,54.3],["C",17.4,54.5,22.6,53.5,26.5,51.3],["C",26.3,53.7,25.3,55.9,23.7,57.4],["C",20.3,58.2,16.4,58,13.1,56.8]],
    lats: [["M",6.8,55.6],["C",10.2,58,16.6,58.8,23.3,57.8],["C",23.5,60.2,22.9,63.6,21.7,67],["C",19.5,73.6,16.3,80.8,13.1,88],["C",10.9,90.8,8.6,92.6,6.2,93.6],["C",6.8,86,7,78,6.8,70],["C",6.8,65,6.8,60,6.8,55.6]],
    erector: [["M",1,67.8],["C",3,66.2,5,65,6,65],["C",6.4,72,6.4,82,6,90],["C",5.8,95,5,99.4,3.4,102.4],["L",1,103.2]],
    oblB: [["M",13.7,88.8],["C",15.9,84.2,17.9,78.2,19.7,72.2],["C",19.5,80.2,18.7,88.2,18.5,95.2],["C",17.9,97.6,16.7,99.2,15.1,100],["C",14.5,96.2,13.9,92.4,13.7,88.8]],
    triL: [["M",22.9,47.6],["C",25.1,45.8,27.3,48.6,27.5,55.2],["C",27.7,61.2,26.5,66.8,24.9,69.6],["C",23.5,65.2,22.7,57.8,22.9,47.6]],
    triO: [["M",27.9,45.6],["C",31.7,46.6,33.7,52.6,33.3,59.6],["C",32.9,64.4,31.1,67.8,28.7,69],["C",29.1,62.8,28.9,52.8,27.9,45.6]],
    forearm: [["M",25.2,72.8],["C",29,71,33.4,73.4,34.6,79.8],["C",35,86.6,33.4,94.8,31.4,101.8],["C",31,103.4,30.6,104.6,30.2,105.4],["L",27.2,105.4],["C",25.8,98.2,24.9,88.8,24.9,80.6],["C",24.9,77.6,24.9,75,25.2,72.8]],
    gmed: [["M",6.4,100.2],["C",9.6,96,15.8,94.6,19.2,97.4],["C",20.5,99.2,20.7,102.2,20.3,105.2],["C",17.4,102.4,12.4,100.6,6.4,100.2]],
    glute: [["M",1,103.2],["C",5,100.4,11.4,100,15.8,102.2],["C",19.2,103.8,20.4,107.8,20,112.2],["C",19.6,117.4,16.4,121.6,11.4,122.6],["C",7.4,123.4,3.4,122.2,1,120.2]],
    hamO: [["M",13.7,122.8],["C",17.1,121.6,19.7,124.2,19.9,130.2],["C",19.9,137.2,18.3,143.8,15.9,149],["C",14.1,146.8,13.1,141.2,12.9,135.6],["C",12.7,130.8,12.9,126.2,13.7,122.8]],
    hamI: [["M",5.5,121.8],["C",8.3,122.8,11.1,123,12.7,122.6],["C",12.1,128.2,11.9,135.2,12.3,141.2],["C",12.5,144.8,12.5,147.6,12.1,149.8],["C",9.7,148.6,7.5,145,6.3,140.2],["C",5.3,134.6,4.9,127.8,5.5,121.8]],
    addB: [["M",1.4,121.2],["C",2.8,121.8,4,122,5,122],["C",4.6,128.2,4.9,134.4,5.8,139.8],["C",4.4,138.8,3.2,135.2,2.4,130.8],["C",1.9,127.8,1.5,124.6,1.4,121.2]],
    calfI: [["M",9.9,154.4],["C",11.5,158.2,11.9,166.2,11.3,173.2],["C",10.9,177.8,10.1,181.2,9.1,183.4],["C",6.5,180.8,5.1,175.2,5.1,168.8],["C",5.1,162.6,6.7,157.2,9.9,154.4]],
    calfO: [["M",11.5,154.8],["C",14.3,155.6,16.9,159.8,17.3,165.2],["C",17.7,170.8,16.5,175.6,14.3,178.8],["C",12.7,176.2,11.9,170.8,11.9,164.8],["C",11.9,160.6,11.7,157.4,11.5,154.8]],
    sol: [["M",6.8,181.8],["C",8.8,184.4,11.8,184.6,14.6,181],["C",14.4,185.2,13.6,188.6,12.4,190.8],["C",10.4,190.6,8.4,188.6,6.8,181.8]]
  };
  var LN = {
    clav: [["M",1.4,30.6],["C",7,29.2,14,30.2,21,33.2]],
    alba: [["M",0,59],["L",0,102]],
    spine: [["M",0,26],["L",0,104]],
    pop: [["M",6.4,151.8],["C",9.6,153.4,13.4,153.4,16.4,151.6]],
    ach: [["M",9.6,184.4],["C",9.8,189.4,10,194,10.2,197.6]],
    elbF: [["M",24.6,70.6],["C",26.4,71.8,28.4,71.8,30.4,70.8]],
    navel: [["M",-0.9,90.6],["C",-0.3,91.6,0.3,91.6,0.9,90.6]]
  };
  // Faserrichtung als Muster (Grad, für die rechte Körperhälfte; links gespiegelt)
  var FIB = {};
  function fibId(ang){
    ang = Math.round(ang); if (ang === 0 || ang === -0) ang = 0;
    var id = "fb" + (ang < 0 ? "m" : "p") + Math.abs(ang);
    if (!FIB[id]){
      var defs = document.getElementById("figDefs");
      if (defs){
        var NS = "http://www.w3.org/2000/svg", p = document.createElementNS(NS, "pattern"), l = document.createElementNS(NS, "line");
        p.setAttribute("id", id); p.setAttribute("patternUnits", "userSpaceOnUse"); p.setAttribute("width", "1.4"); p.setAttribute("height", "1.4"); p.setAttribute("patternTransform", "rotate(" + ang + ")");
        l.setAttribute("x1", "0.7"); l.setAttribute("y1", "-0.2"); l.setAttribute("x2", "0.7"); l.setAttribute("y2", "1.6"); l.setAttribute("stroke", "#3A0C12"); l.setAttribute("stroke-opacity", "0.16"); l.setAttribute("stroke-width", "0.3");
        p.appendChild(l); defs.appendChild(p);
      }
      FIB[id] = 1;
    }
    return id;
  }
  function figure(cx, back, on){
    var o = "";
    function cls(name){ if (on.map) return on.map[name] || "mu"; return on.p.indexOf(name) >= 0 ? "m1" : on.s.indexOf(name) >= 0 ? "m2" : "mu"; }
    function both(f){ return f(-1) + f(1); }
    function P(cmds, c, ang){ return both(function(sd){ var d = hp(cmds, cx, sd); return '<path class="' + c + '" d="' + d + '"/>' + (ang === undefined || c === "b" ? "" : '<path class="fib" fill="url(#' + fibId(ang * sd) + ')" d="' + d + '"/>'); }); }
    function Ln(cmds, c){ return both(function(sd){ return '<path class="' + (c || "ln") + '" d="' + hpo(cmds, cx, sd) + '"/>'; }); }
    // Haut: Kopf, Hals, Rumpf mit Beinen, Arme, Hände, Füße
    o += P(SIL.ear, "b") + '<path class="b" d="' + sym(SIL.head, cx) + '"/>';
    o += '<g transform="matrix(1.22 0 0 1 ' + (-0.22 * cx).toFixed(2) + ' 0)">';
    o += '<path class="b" d="' + sym(SIL.neck, cx) + '"/>' + P(SIL.arm, "b") + P(SIL.hand, "b") + (back ? "" : P(SIL.thumb, "b")) + '<path class="b" d="' + sym(SIL.trunk, cx) + '"/>' + P(back ? SIL.heel : SIL.foot, "b");
    if (!back){
      o += P(SH.scm, "mu", -70) + P(SH.trapF, cls("traps_u"), -60) + P(SH.pecU, cls("chest_u"), -62) + P(SH.pecL, cls("chest_l"), 68) + Ln(LN.clav, "ln2");
      o += P(SH.deltA, cls("delts_f"), 20) + P(SH.deltL, cls("delts_s"), 0);
      o += P(SH.brach, cls("brach"), 0) + P(SH.biceps, cls("biceps"), 0) + P(SH.flex, cls("forearm_f"), -8) + P(SH.brad, cls("brachiorad"), 10) + Ln(LN.elbF, "ln2");
      o += P(SH.serr1, "mu", -30) + P(SH.serr2, "mu", -30) + P(SH.serr3, "mu", -30) + P(SH.obl, cls("obl"), 40);
      var ab = cls("abs"); o += P(SH.abs1, ab, 0) + P(SH.abs2, ab, 0) + P(SH.abs3, ab, 0) + P(SH.abs4, ab, 0) + Ln(LN.alba, "ln2") + Ln(LN.navel, "ln2");
      o += P(SH.tfl, cls("glutes") === "m1" ? "m2" : "mu", 10) + P(SH.add, cls("adductors"), -25) + P(SH.quadO, cls("quads"), 12) + P(SH.quadM, cls("quads"), 0) + P(SH.quadI, cls("quads"), -35) + P(SH.sart, cls("quads") === "m1" || cls("adductors") === "m1" ? "m2" : "mu", -25);
      o += P(SH.pat, "b") + P(SH.shin, "mu", 0) + P(SH.calfFO, cls("calves"), 0) + P(SH.calfFI, cls("calves"), 0);
    } else {
      o += P(SH.trapU, cls("traps_u"), -55) + P(SH.trapM, cls("traps_m"), 80);
      o += P(SH.infra, cls("delts_b") === "m1" ? "m2" : "mu", 75) + P(SH.teres, cls("lats") === "mu" ? "mu" : "m2", 60) + P(SH.deltP, cls("delts_b"), -20) + P(SH.deltLB, cls("delts_s"), 0);
      o += P(SH.lats, cls("lats"), 42) + P(SH.erector, cls("lower_back"), 0) + P(SH.oblB, cls("obl"), 30) + Ln(LN.spine, "ln2");
      o += P(SH.triL, cls("triceps"), 0) + P(SH.triO, cls("triceps"), 0) + P(SH.forearm, cls("forearm_e"), 8);
      o += P(SH.gmed, cls("glutes"), -60) + P(SH.glute, cls("glutes"), -40) + P(SH.addB, cls("adductors"), 0) + P(SH.hamO, cls("hams"), 0) + P(SH.hamI, cls("hams"), 0) + Ln(LN.pop, "ln2");
      o += P(SH.calfO, cls("calves"), 0) + P(SH.calfI, cls("calves"), 0) + P(SH.sol, cls("calves"), 0) + Ln(LN.ach, "ln2");
    }
    return o + '</g>';
  }
  var VIEW = {
    kniebeuge:{f:"f", w:50, y0:96, y1:156}, rdl:{f:"b", w:50, y0:94, y1:156}, hipthrust:{f:"b", w:50, y0:92, y1:150}, adduktoren:{f:"f", w:50, y0:100, y1:156},
    brustpresse_m:{f:"f", w:84, y0:22, y1:72}, kabelrudern:{f:"b", y0:22, y1:100}, facepull:{f:"b", w:92, y0:20, y1:74},
    latzug:{f:"b", y0:22, y1:100}, rudern:{f:"b", y0:22, y1:100}, seitheben:{f:"f", w:92, y0:20, y1:74},
    preacher:{f:"f", y0:30, y1:110}, trizeps_oh:{f:"b", y0:30, y1:110}, hammer:{f:"f", y0:30, y1:110},
    rope:{f:"b", y0:30, y1:110}, reverse:{f:"f", y0:46, y1:110}, butterfly:{f:"f", w:84, y0:22, y1:72},
    beinstrecker:{f:"f", w:50, y0:100, y1:156}, waden:{f:"b", w:44, y0:146, y1:206}, bauch:{f:"f", w:46, y0:52, y1:104},
    brustpresse:{f:"f", w:84, y0:22, y1:72}, schulterpresse:{f:"f", w:92, y0:20, y1:74}, beinbeuger:{f:"b", w:50, y0:98, y1:156}, reverse_fly:{f:"b", w:92, y0:20, y1:74}, beinpresse:{f:"f", w:50, y0:98, y1:156}
  };
  function planName(k){ return PLAN_NAMES[k || PLAN_KEY] || "Training"; }
  function estMinOf(list){ var sec = 0; list.forEach(function(ex){ if (ex.kind === "time"){ sec += (ex.min || 5) * 60; return; } var pa = PAIR[ex.id] && list.indexOf(BYID[PAIR[ex.id]]) >= 0; sec += ex.sets * (45 + (pa ? restOf(ex) / 2 : restOf(ex))) + (ex.drop ? 45 : 0); }); return Math.round(sec * 1.12 / 300) * 5; }
  function estMin(){ return estMinOf(STRENGTH); }
  function uniqNames(keys){ var out = []; keys.forEach(function(k){ var n = MNAMES[k]; if (n && out.indexOf(n) < 0) out.push(n); }); return out; }
  function renderFocus(){
    var c = $("#focusCard"); if (!c) return;
    var isTrain = TRAIN_DAYS.indexOf(new Date().getDay()) >= 0, sub = $("#tmSub");
    if (sub) sub.textContent = planName() + " · " + STRENGTH.length + " Übungen · ca. " + estMin() + " min";
    c.hidden = true; return;
    if (false){
      var m = musclesOf(PLAN.map(function(e){ return e.id; }));
      $("#focusT").textContent = "Heute im Fokus"; $("#focusM").textContent = planName();
      $("#focusFig").innerHTML = fullBody(m);
      $("#focusTx").innerHTML = '<div class="fchipm">' + uniqNames(m.p).slice(0, 8).map(function(n){ return "<span>" + n + "</span>"; }).join("") + '</div><p class="ftxt">Rot = Hauptmuskeln heute. Konzentrier dich bei jeder Wiederholung auf sie.</p>';
    } else {
      var last = trainSessions().filter(function(x){ return x.id < todayId(); })[0];
      $("#focusT").textContent = "Erholung";
      var tips = "";
      if (last){
        var m2 = musclesOf(ALLSTR.filter(function(ex){ return entryOk(ex, last); }).map(function(ex){ return ex.id; }));
        var days = Math.round((dateOf(todayId()) - dateOf(last.id)) / 86400000);
        $("#focusM").textContent = "Zuletzt: " + dateShort(last.id);
        $("#focusFig").innerHTML = "";
        $("#focusTx").innerHTML = '<p class="ftxt">' + (days <= 1 ? "Diese Muskeln wachsen gerade. Gib ihnen heute Ruhe." : "Erholt und bereit fürs nächste Training.") + '</p>' + tips;
      } else { $("#focusM").textContent = ""; $("#focusFig").innerHTML = ""; $("#focusTx").innerHTML = tips; }
    }
    c.hidden = false;
  }
  function musclesOf(ids){
    var p = [], sc = [];
    ids.forEach(function(id){ var m = MUSCLES[id]; if (!m) return; m.p.forEach(function(k){ if (p.indexOf(k) < 0) p.push(k); }); m.s.forEach(function(k){ if (sc.indexOf(k) < 0) sc.push(k); }); });
    return {p:p, s:sc.filter(function(k){ return p.indexOf(k) < 0; })};
  }
  function fullBody(on, cls){ return '<svg class="body fullb' + (cls ? " " + cls : "") + '" viewBox="0 0 200 208" aria-hidden="true" focusable="false">' + figure(50, false, on) + figure(150, true, on) + '</svg>'; }
  function musclesHtml(id){
    var on = MUSCLES[id]; if (!on) return "";
    var p = on.p.map(function(k){ return '<b>' + MNAMES[k] + '</b>'; }), s = on.s.map(function(k){ return '<span>' + MNAMES[k] + '</span>'; });
    return p.concat(s).join("");
  }
  function bodySVG(id){
    var on = MUSCLES[id]; if (!on) return "";
    function names(list){ var seen = {}, out = []; list.forEach(function(k){ var n = MNAMES[k]; if (n && !seen[n]){ seen[n] = 1; out.push(n); } }); return out.join(", "); }
    var main = names(on.p), help = names(on.s);
    var v = VIEW[id] || {f:"f", y0:0, y1:212}, bw = v.w || 90, x0 = (v.f === "f" ? 50 : 150) - bw / 2;
    var fig = v.f === "f" ? figure(50, false, on) : figure(150, true, on);
    return '<div class="bodyw"><svg class="body" viewBox="' + x0 + ' ' + v.y0 + ' ' + bw + ' ' + (v.y1 - v.y0) + '" aria-hidden="true" focusable="false">' + fig + '</svg></div>';
  }
  function metaText(ex){
    if (ex.kind === "time") return ex.target;
    var mpl = MUSCLES[ex.id] ? MUSCLES[ex.id].p : [], mp = mpl.indexOf("chest_u") >= 0 && mpl.indexOf("chest_l") >= 0 ? " · Brust" : mpl[0] ? " · " + MNAMES[mpl[0]] : "";
    return ex.sets + " × " + ex.reps[0] + "–" + ex.reps[1] + (ex.drop ? " + Drop" : "") + (partnerOf(ex) ? " · Superset" : "") + mp;
  }
  function infoText(ex){
    var s = "Pause " + ex.restText;
    if (ex.note) s += ", " + ex.note;
    return s;
  }
  function setRow(cls, label, i, kgLabel, repLabel, ph){
    return '<div class="setrow' + (cls ? " " + cls : "") + '"><span class="sl">' + label + '</span>' +
      '<label class="num"><input class="' + (cls ? "d-kg" : "s-kg") + '"' + (i !== null ? ' data-i="' + i + '"' : '') + ' inputmode="decimal" autocomplete="off" aria-label="' + kgLabel + '"></label>' +
      '<span class="x" aria-hidden="true">×</span>' +
      '<label class="num"><input class="' + (cls ? "d-reps" : "s-reps") + '"' + (i !== null ? ' data-i="' + i + '"' : '') + ' inputmode="numeric" autocomplete="off" placeholder="' + ph + '" aria-label="' + repLabel + '"></label><button type="button" class="srate" data-r="" aria-label="Bewertung ' + label + '">Fertig</button><div class="rchips" role="group" aria-label="Wie nah am Limit war der Satz?"><button type="button" data-r="easy">Locker</button><button type="button" data-r="leicht">Mittel</button><button type="button" data-r="passt">Ziel genau</button><button type="button" data-r="hart">Sehr hart</button><button type="button" data-r="limit">Am Limit</button><button type="button" data-r="fail">Über Limit</button></div></div>';
  }
  var RATE_SHORT = {easy:"Leicht", leicht:"Leicht", passt:"Richtig", hart:"Schwer", vhart:"Sehr schwer", limit:"Limit", fail:"Über Limit"};
  function setSR(btn, r){ btn.dataset.r = r || ""; btn.textContent = r ? RATE_SHORT[r] : "Fertig"; btn.setAttribute("aria-label", r ? "Bewertung: " + RATINGS[r] + ". Tippen zum Ändern" : "Satz fertig"); var rw = btn.closest(".setrow"); if (rw){ rw.classList.toggle("done", !!r); $$(".rchips button", rw).forEach(function(c){ c.classList.toggle("on", c.dataset.r === r); }); } btn.className = "srate" + (r ? " r-" + r : ""); }
  function nextSetLabel(ex, li, i){ var k = $$(".s-kg", li)[i + 1], rp = $$(".s-reps", li)[i + 1]; return ex.name + " · Satz " + (i + 2) + (k && k.value ? " · " + k.value + " kg" : "") + (rp && rp.placeholder ? " × " + rp.placeholder : ""); }
  function nextExLabel(nx){ var nli = $('.ex[data-id="' + nx.id + '"]'), k = nli && $(".s-kg", nli), rp = nli && $(".s-reps", nli); return "Weiter: " + nx.name + (k && k.value ? " · " + k.value + " kg" : "") + (rp && rp.placeholder ? " × " + rp.placeholder : ""); }
  function bestRun(f){ var b = null; sessions.forEach(function(s){ if (!isTrainId(s.id)) return; var e = s.entries && s.entries.rennen, v = e ? clean(e[f]) : null; if (v !== null && (b === null || v > b)) b = v; }); return b; }
  var RUNF = '<div class="runf"><label>Beste Steigung<span class="rf"><input class="run-inc" inputmode="decimal" autocomplete="off"><span class="unit">%</span></span></label><label>Beste Geschwindigkeit<span class="rf"><input class="run-spd" inputmode="decimal" autocomplete="off"><span class="unit">km/h</span></span></label></div><p class="runlast"></p>';
  function strengthBody(ex){
    var rows = '<div class="setrow head" aria-hidden="true"><span></span><span>kg</span><span></span><span>Wdh.</span><span></span></div>';
    for (var i = 0; i < ex.sets; i++) rows += setRow("", "Satz " + (i + 1), i, "Satz " + (i + 1) + " Gewicht", "Satz " + (i + 1) + " Wiederholungen", ex.pr[i]);
    if (ex.drop) rows += setRow("drop", "Drop", null, "Dropsatz Gewicht", "Dropsatz Wiederholungen", ex.dropPr);
    return '<div class="bodyrow"><span class="pz l">' + restOf(ex) + ' s<br>Pause</span>' + bodySVG(ex.id) + '<span class="pz mz">' + musclesHtml(ex.id) + '</span></div><p class="last"></p><p class="why"></p><div class="sets">' + rows + '</div>' +
''
  }
  function timeBody(ex){
    return '<p class="last"></p>' +
      '<div class="field"><label for="min-' + ex.id + '">Minuten</label>' +
        '<div class="stepper"><button type="button" class="step" data-d="-1" aria-label="Weniger Minuten">−</button>' +
        '<input id="min-' + ex.id + '" class="min" inputmode="numeric" autocomplete="off"><span class="unit">min</span>' +
        '<button type="button" class="step" data-d="1" aria-label="Mehr Minuten">+</button></div></div>' +
      (ex.id === "rennen" ? RUNF : '') + '<div class="actions"><button type="button" class="btn primary save">Erledigt</button></div>';
  }
  function buildList(){
    var ol = $("#exlist"); ol.innerHTML = "";
    PLAN.forEach(function(ex, i){
      var li = document.createElement("li"); li.className = "ex"; li.dataset.id = ex.id;
      li.innerHTML =
        '<button class="ex-head" type="button" aria-expanded="false" aria-controls="b-' + ex.id + '">' +
          '<span class="ex-num" aria-hidden="true">' + (i + 1) + '</span>' +
          '<span class="ex-main"><span class="ex-name">' + ex.name + '</span><span class="ex-meta">' + metaText(ex) + '</span></span>' +
          '<span class="ex-right"><span class="ex-kg"></span><span class="ex-state" aria-hidden="true"></span></span>' +
        '</button>' +
        '<div class="ex-body" id="b-' + ex.id + '" hidden>' + (ex.kind === "time" ? timeBody(ex) : strengthBody(ex)) + '</div>';
      ol.appendChild(li);
    });
    var sb = $("#segbar"); sb.innerHTML = "";
    PLAN.forEach(function(ex){ var s = document.createElement("span"); s.dataset.id = ex.id; sb.appendChild(s); });
  }

  function refreshRow(ex){
    var li = $('.ex[data-id="' + ex.id + '"]'); if (!li) return;
    var te = todayEntry(ex.id);
    var kgEl = $(".ex-kg", li), st = $(".ex-state", li), last = $(".last", li), saveBtn = $(".save", li);
    var r = te ? (rating(te.rating) || "none") : null;
    li.classList.toggle("done", exDoneEntry(ex, te));
    st.className = "ex-state" + (r ? " r-" + r : "");

    if (ex.kind === "time"){
      var m = te && clean(te.min) !== null ? clean(te.min) : null;
      kgEl.innerHTML = te ? fmt(m === null ? ex.min : m) + "<small>min</small>" : "";
      last.textContent = "";
      if (!dirty[ex.id]) $(".min", li).value = String(m === null ? ex.min : m);
      if (ex.id === "rennen"){
        var ri = $(".run-inc", li), rsp = $(".run-spd", li), bi = bestRun("inc"), bs = bestRun("spd");
        if (!dirty[ex.id]){ ri.value = te && clean(te.inc) !== null ? fmt(clean(te.inc)) : ""; rsp.value = te && clean(te.spd) !== null ? fmt(clean(te.spd)) : ""; }
        ri.placeholder = bi !== null ? fmt(bi) : "%"; rsp.placeholder = bs !== null ? fmt(bs) : "km/h";
        $(".runlast", li).textContent = (bi !== null || bs !== null) ? "Bestwerte bisher: " + (bi !== null ? fmt(bi) + " % Steigung" : "") + (bi !== null && bs !== null ? ", " : "") + (bs !== null ? fmt(bs) + " km/h" : "") : "";
      }
      saveBtn.textContent = te ? "Aktualisieren" : "Erledigt";
      return;
    }
    var sg = suggest(ex);
    var tSets = te ? entrySets(te) : null;
    var head = te && firstKg(te) !== null ? firstKg(te) : sg.sets[0];
    kgEl.innerHTML = fmt(head) + "<small>kg</small>";

    var le = lastEntry(ex.id);
    last.textContent = ""; last.hidden = true;
    var why = $(".why", li); why.innerHTML = "";
    if (le){ var b = document.createElement("b"); b.textContent = sg.plateau ? "Deload: " + fmt(-sg.delta) + " kg weniger" : sg.delta > 0 ? "Ziel: +" + fmt(sg.delta) + " kg" : sg.delta < 0 ? "Ziel: " + fmt(-sg.delta) + " kg weniger" : sg.repDelta > 0 ? "Ziel: +" + sg.repDelta + " Wdh." : "Ziel: gleich halten"; why.appendChild(b);
      var wr = document.createElement("span"); wr.className = "whyr"; wr.textContent = sg.reason; why.appendChild(wr); }
    why.hidden = !why.firstChild;
    $$(".s-kg", li).forEach(function(inp, i){ inp.dataset.sug = String(sg.sets[i]); });
    if (ex.drop && $(".d-kg", li)) $(".d-kg", li).dataset.sug = String(sg.dropKg);
    if (!dirty[ex.id]){
      $$(".s-kg", li).forEach(function(inp, i){
        var v = tSets ? ((tSets[i] && tSets[i].kg !== null) ? tSets[i].kg : sg.sets[i]) : sg.sets[i];
        inp.value = v === null || v === undefined ? "" : fmt(v);
      });
      $$(".s-reps", li).forEach(function(inp, i){
        var sug = sg.reps[i] != null ? sg.reps[i] : ex.pr[i], v = tSets && tSets[i] ? tSets[i].reps : null;
        inp.value = (v === null || v === undefined) ? String(sug) : String(v);
        inp.placeholder = String(sug);
      });
      $$(".setrow:not(.drop) .srate", li).forEach(function(b, i){ setSR(b, tSets && tSets[i] ? rating(tSets[i].rating) : null); });
      if (ex.drop){ setSR($(".setrow.drop .srate", li), te ? (te.v === 2 ? rating(te.dropRating) : (rating(te.dropRating) || rating(te.rating))) : null); }
      if (ex.drop){
        var dk = te ? cleanKg(te.dropKg) : sg.dropKg;
        $(".d-kg", li).value = dk === null || dk === undefined ? "" : fmt(dk);
        var dr = te ? clean(te.dropReps) : null;
        $(".d-reps", li).value = dr === null ? (sg.dropReps != null ? String(sg.dropReps) : "") : String(dr);
        $(".d-reps", li).placeholder = sg.dropReps != null ? String(sg.dropReps) : "";
      }
      var tr = te ? rating(te.rating) : null;
      $$(".chip", li).forEach(function(c){ c.setAttribute("aria-pressed", String(c.dataset.r === tr)); });
    }
    if (saveBtn) saveBtn.textContent = te ? "Aktualisieren" : "Speichern";
  }

  function renderDay(){
    var t = todayId(), wd = new Date().getDay();
    $("#dayDate").textContent = dateLong(t);
    var sub;
    if (TRAIN_DAYS.indexOf(wd) >= 0) sub = "Trainingstag";
    else {
      var next = TRAIN_DAYS.map(function(d){ return (d - wd + 7) % 7 || 7; }).sort(function(a, b){ return a - b; })[0];
      if (next){ var nd = new Date(); nd.setDate(nd.getDate() + next); sub = "Nächstes Training: " + nd.toLocaleDateString("de-DE", {weekday:"long"}); }
      else sub = "";
    }
    var isTrain = TRAIN_DAYS.indexOf(wd) >= 0;
    var dtT = dayType(t);
    $("#dayTitle").textContent = isTrain ? "Trainingstag" : dtT === "rest1" ? "Aufbau-Tag" : dtT === "rest2" ? "Erholung" : "Ruhetag";
    $("#daySub").textContent = isTrain ? "" : dtT === "rest1" ? aufbauMsg() : dtT === "rest2" ? "Weiter gut essen. " + sub : sub;
    var done = 0;
    PLAN.forEach(function(ex){
      var te = todayEntry(ex.id), s = $('#segbar span[data-id="' + ex.id + '"]');
      if (te && exDoneEntry(ex, te)){ done++; s.className = "on r-none"; } else s.className = "";
    });
    $("#cDone").textContent = done; $("#cAll").textContent = "/" + PLAN.length;
    $("#ringFg").style.strokeDashoffset = (163.36 * (1 - done / PLAN.length)).toFixed(1);
    $(".ring").hidden = !isTrain; $("#segbar").hidden = !isTrain; $(".legend").hidden = !isTrain; $("#ttrack").hidden = !isTrain; var sb0 = $("#tmStart"); if (sb0){ var tt0 = trState(); sb0.hidden = !isTrain || !!(tt0 && tt0.e && (Date.parse(tt0.e) - Date.parse(tt0.s)) >= 300000); } var tb0 = $("#tmTest"); if (tb0) tb0.hidden = isTrain; renderTrack(); autoStop();
    var exWrap = $("#exWrap"), showBtn = $("#showEx"), tt1 = trState(), finished = !!(tt1 && tt1.e && (Date.parse(tt1.e) - Date.parse(tt1.s)) >= 300000);
    exWrap.hidden = false; showBtn.hidden = true;
    exWrap.classList.toggle("collapsed", !isTrain && !exShown); exWrap.classList.toggle("restlist", !isTrain);
    $("#tmAny").hidden = true;
    var wc = $("#weighCard"); if (wc){ var bl = sessions.filter(function(x){ return x.bw > 0 && x.id <= todayId(); }).sort(function(a, b){ return a.id < b.id ? 1 : -1; }); wc.hidden = !(new Date().getDay() === WEIGH_DAY && (!bl.length || weighDue(bl[0].id)) && !document.body.classList.contains("tm")); var wgT = $("#wgT"); if (wgT && WEIGH_DAY >= 0) wgT.textContent = "⚖️ " + DAYLONG[WEIGH_DAY] + ": " + (isTrain ? "vor dem Training wiegen" : "heute wiegen"); }
    renderHang();
    var tsE = todaySession(), hasE = !!(tsE && isRealSession(tsE)), openR = PLAN.filter(function(ex){ var e = todayEntry(ex.id); return e && !exDoneEntry(ex, e); }).length;
    var eb = $("#tmEdit"); eb.hidden = true;
    eb.textContent = openR ? "⭐ Heutiges Training bewerten (" + openR + " offen)" : "✎ Heutiges Training ansehen / ändern";
    eb.classList.toggle("todo", openR > 0);
    $("#exHead").textContent = isTrain ? "Heute · " + planName() + " · " + STRENGTH.length + " Übungen" : "Übungen fürs nächste Training";
    renderSleep(); renderScores(); renderFocus();
  }

  function foldEl(title, meta){
    var d = document.createElement("details"); d.className = "fold"; d.dataset.k = "h-" + title; if (foldSt()[d.dataset.k]) d.open = true;
    var sm = document.createElement("summary");
    var ft = document.createElement("span"); ft.className = "ft"; ft.textContent = title;
    var fm = document.createElement("span"); fm.className = "fm"; fm.textContent = meta || "";
    sm.appendChild(ft); sm.appendChild(fm); d.appendChild(sm);
    var inner = document.createElement("div"); inner.className = "fold-in"; d.appendChild(inner);
    return {el:d, inner:inner};
  }
  // ---------- Auswertung / Progressive Overload ----------
  function isRealSession(s){ return !(s.tr && s.tr.t) && ALLSTR.some(function(ex){ var e = s.entries && s.entries[ex.id]; return e && entrySets(e).some(function(x){ return x.reps > 0 && x.kg !== null; }); }); }
  function trainSessions(){ return sessions.filter(isRealSession); }
  function bestE1(e){ var b = 0; entrySets(e).forEach(function(x){ if (x.kg !== null && x.reps > 0) b = Math.max(b, e1(x.kg, x.reps)); }); return b; }
  function entryOk(ex, s){ var e = s.entries && s.entries[ex.id]; return !!(e && firstKg(e) !== null && entrySets(e).some(function(x){ return x.reps > 0; }) && !(ex.since && s.id < ex.since)); }
  function sessStats(s){
    var v = 0, n = 0, ex = 0;
    ALLSTR.forEach(function(x){
      if (!entryOk(x, s)) return; var e = s.entries[x.id]; ex++;
      entrySets(e).forEach(function(z){ if (z.kg !== null && z.reps > 0){ v += z.kg * z.reps; n++; } });
      var dk = cleanKg(e.dropKg), dr = clean(e.dropReps); if (dk && dr){ v += dk * dr; n++; }
    });
    var min = s.tr && s.tr.s && s.tr.e ? Math.round((Date.parse(s.tr.e) - Date.parse(s.tr.s)) / 60000) : null;
    return {vol:v, sets:n, ex:ex, min:min};
  }
  function hm(min){ var h = Math.floor(min / 60), m = min % 60; return h ? h + ":" + pad(m) + " h" : m + " min"; }
  function parseDur(t){ t = String(t || "").trim().toLowerCase(); var m = /^(\d{1,2})\s*(?:[:.h]|std)\s*(\d{1,2})?\s*(?:m|min)?$/.exec(t); if (m) return Number(m[1]) * 60 + Number(m[2] || 0); m = /^(\d{1,3})\s*(?:m|min)?$/.exec(t); return m ? Number(m[1]) : null; }
  function rdot(r){ return r && RATINGS[r] ? '<i class="rdot r-' + r + '" title="' + RATINGS[r] + '"></i>' : ""; }
  function repsLine(e){ var st = entrySets(e).filter(function(x){ return x.reps > 0; }); if (!st.length) return ""; var k0 = st[0].kg, same = st.every(function(x){ return x.kg === k0; });
    var em = function(x){ return rdot(x.rating); };
    var t = same ? fmt(k0) + " kg · " + st.map(function(x){ return x.reps + em(x); }).join(" / ") : st.map(function(x){ return fmt(x.kg) + "×" + x.reps + em(x); }).join(", ");
    var dk = cleanKg(e.dropKg), dr = clean(e.dropReps), drr = rating(e.dropRating); if (dk && dr) t += " + Drop " + fmt(dk) + "×" + dr + rdot(drr); return t; }
  function nextTarget(ex, e, date){
    var sg = suggest(ex, {e:e, date:date}), k = sg.sets[0], r = sg.reps[0];
    var cls = sg.plateau ? "deload" : sg.delta > 0 ? "up" : sg.delta < 0 ? "down" : sg.repDelta > 0 ? "rep" : "same";
    var tx = fmt(k) + " kg × " + r + (sg.plateau ? " · Deload" : sg.delta > 0 ? " · mehr Gewicht" : sg.delta < 0 ? " · weniger Gewicht" : sg.repDelta > 0 ? " · +" + sg.repDelta + " Wdh." : " · halten");
    return {cls:cls, tx:tx, why:sg.reason};
  }
  function trend(cur, prev){
    if (!prev) return {cls:"new", tx:"neu"};
    var p = (cur - prev) / prev * 100;
    if (p > 0.5) return {cls:"up", tx:"▲ " + f1(p) + " %"};
    if (p < -0.5) return {cls:"down", tx:"▼ " + f1(-p) + " %"};
    return {cls:"same", tx:"= gleich"};
  }
  function spark(vals){
    if (vals.length < 2) return "";
    var mn = Math.min.apply(null, vals), mx = Math.max.apply(null, vals), rg = (mx - mn) || 1;
    var d = vals.map(function(v, i){ return (i ? "L" : "M") + (i / (vals.length - 1) * 100).toFixed(1) + "," + (3 + (1 - (v - mn) / rg) * 20).toFixed(1); }).join(" ");
    return '<svg class="osp" viewBox="0 0 100 26" preserveAspectRatio="none" aria-hidden="true"><path d="' + d + '"/></svg>';
  }
  // Steigerung wird erst ab dem ersten "richtigen" Training verglichen
  var OVL_FROM = "2026-12-01";
  function exRowsFor(s, list){
    return ALLSTR.filter(function(ex){ return entryOk(ex, s); }).map(function(ex){
      var e = s.entries[ex.id], prev = null;
      if (s.id >= OVL_FROM) for (var i = 0; i < list.length; i++){ if (list[i].id < s.id && list[i].id >= OVL_FROM && entryOk(ex, list[i])){ prev = list[i].entries[ex.id]; break; } }
      var cur = bestE1(e), tr = trend(cur, prev ? bestE1(prev) : 0), nt = nextTarget(ex, e, s.id), mx = 0;
      list.forEach(function(o){ if (s.id >= OVL_FROM && o.id < s.id && o.id >= OVL_FROM && entryOk(ex, o)) mx = Math.max(mx, bestE1(o.entries[ex.id])); });
      if (mx && cur > mx * 1.005) tr = {cls:"pr", tx:"🏆 Rekord"};
      return {ex:ex, e:e, tr:tr, nt:nt};
    });
  }
  function renderHistory(){
    var list = trainSessions();
    var lt = $("#lastTr"), ov = $("#ovl"), wrap = $("#history");
    var weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate() - 6); var wid = dayId(weekAgo);
    var vt = $("#vTr"); if (vt) vt.textContent = list.filter(function(s){ return s.id >= wid; }).length + " / " + TRAIN_DAYS.length;
    if (!list.length){
      lt.innerHTML = '<div class="khead"><h2>Letztes Training</h2></div><p class="empty">Noch kein Training gespeichert.</p>';
      ov.innerHTML = '<p class="empty">Nach dem ersten Training siehst du hier deine Steigerung.</p>'; wrap.innerHTML = ""; return;
    }
    // Letztes Training
    var L = list[0], st = sessStats(L), prevS = list[1] && L.id >= OVL_FROM && list[1].id >= OVL_FROM ? sessStats(list[1]) : null, rows = exRowsFor(L, list);
    var vtr = prevS && prevS.vol ? trend(st.vol, prevS.vol) : null;
    var ups = rows.filter(function(r){ return r.tr.cls === "up"; }).length;
    var h = '<div class="khead"><h2>' + (L.id === todayId() ? "Heutiges Training" : "Letztes Training") + '</h2><span class="fm">' + dateShort(L.id) + '</span></div>';
    h += '<div class="vchips">' + (st.min ? '<span><b>' + hm(st.min).replace(/ (h|min)$/, "") + '</b> ' + (st.min >= 60 ? "h" : "min") + '</span>' : '') + '<span><b>' + st.ex + '</b> Übungen</span><span><b>' + st.sets + '</b> Sätze</span><span><b>' + Math.round(st.vol).toLocaleString("de-DE") + '</b> kg' + (vtr && vtr.cls !== "new" ? ' <em class="' + vtr.cls + '">' + vtr.tx + '</em>' : '') + '</span></div>';
    var allNew = rows.every(function(r){ return r.tr.cls === "new"; }), prs = rows.filter(function(r){ return r.tr.cls === "pr"; }).length;
    lt.innerHTML = h;
    // Progressive Overload je Übung
    var orows = ALLSTR.map(function(ex){
      var ss = list.filter(function(s){ return s.id >= OVL_FROM && entryOk(ex, s); }).slice(0, 8).reverse(); if (!ss.length) return null;
      var vals = ss.map(function(s){ return bestE1(s.entries[ex.id]); }), first = vals[0], last = vals[vals.length - 1];
      var tr = ss.length > 1 ? trend(last, first) : {cls:"new", tx:"1 Training"}, nt = nextTarget(ex, ss[ss.length - 1].entries[ex.id], ss[ss.length - 1].id);
      return {ex:ex, n:ss.length, vals:vals, tr:tr, nt:nt, top:firstKg(ss[ss.length - 1].entries[ex.id])};
    }).filter(Boolean);
    if (!orows.length){ ov.innerHTML = '<p class="empty">Zählt ab deinem nächsten Training. Dann siehst du hier, bei wie vielen Übungen du stärker wirst.</p>'; $("#ovlMeta").textContent = ""; }
    else {
    var cUp = orows.filter(function(r){ return r.tr.cls === "up" || r.tr.cls === "pr"; }).length, cSame = orows.filter(function(r){ return r.tr.cls === "same"; }).length, cDown = orows.filter(function(r){ return r.tr.cls === "down"; }).length, cNew = orows.filter(function(r){ return r.tr.cls === "new"; }).length;
    var best = orows.filter(function(r){ return r.vals.length > 1; }).map(function(r){ return {n:r.ex.name, p:(r.vals[r.vals.length - 1] - r.vals[0]) / r.vals[0] * 100}; }).sort(function(a, b){ return b.p - a.p; })[0];
    var odet = '<details class="vdet"><summary>Alle Übungen</summary><ul class="ovl">' + orows.map(function(r){
      return '<li><div class="on"><b>' + r.ex.name + '</b><span>' + fmt(r.top) + ' kg · ' + r.n + (r.n === 1 ? ' Training' : ' Trainings') + '</span></div>' + spark(r.vals) + '<span class="vt ' + r.tr.cls + '">' + r.tr.tx + '</span><div class="vnext ' + r.nt.cls + '">Ziel: <b>' + r.nt.tx + '</b></div></li>';
    }).join("") + '</ul></details>';
    ov.innerHTML = '<div class="vchips big"><span class="up"><b>' + cUp + '</b> stärker</span><span><b>' + cSame + '</b> gleich</span><span class="down"><b>' + cDown + '</b> weniger</span>' + (cNew ? '<span><b>' + cNew + '</b> neu</span>' : '') + '</div>' + (best && best.p > 0.5 ? '<p class="vbest">Größter Sprung: <b>' + best.n + '</b> +' + f1(best.p) + ' %</p>' : '') + odet;
    $("#ovlMeta").textContent = "seit " + dateShort(OVL_FROM);
    }
    wrap.innerHTML = "";
    if (true){ renderDataBox(); return; }
    var tf = foldEl("Alle Trainings", list.length + (list.length === 1 ? " Training" : " Trainings"));
    tf.el.classList.add("cardf");
    list.forEach(function(s){
      var x = sessStats(s), row = document.createElement("div"); row.className = "vrow";
      var a = document.createElement("b"); a.textContent = dateShort(s.id);
      var b = document.createElement("span"); b.textContent = [x.min ? hm(x.min) : null, x.ex + " Übungen", Math.round(x.vol).toLocaleString("de-DE") + " kg"].filter(Boolean).join(" · ");
      row.appendChild(a); row.appendChild(b);
      if (mode === "db" || mode === "local"){
        var du = document.createElement("button"); du.type = "button"; du.className = "durb ic"; du.dataset.id = s.id; du.textContent = "⏱"; du.setAttribute("aria-label", "Dauer ändern"); row.appendChild(du);
        var del = document.createElement("button"); del.type = "button"; del.className = "del ic"; del.dataset.id = s.id; del.textContent = "🗑"; del.setAttribute("aria-label", "Training löschen"); row.appendChild(del);
      }
      tf.inner.appendChild(row);
    });
    wrap.appendChild(tf.el);
    renderDataBox();
  }
  var purged = false;
  function purgeTests(){
    if (purged || todayId() > "2026-11-27" || !firstSync.tr && mode === "db") return; purged = true;
    try { if (!localStorage.getItem("purge-1")){ ["fit-fin", "fit-done", "fit-draft", "fit-tm", "fit-open", "fit-timer"].forEach(function(k){ localStorage.removeItem(k); }); localStorage.setItem("purge-1", "1"); } } catch (e) {}
    var id = "2026-11-26", s0 = sessionById(id); if (!s0) return;
    var cut = Date.parse("2026-11-26T20:30:00Z"), ent = s0.entries || {}, keep = {}, changed = false;
    Object.keys(ent).forEach(function(k){ var at = ent[k] && Date.parse(ent[k].at); if (at && at < cut) changed = true; else keep[k] = ent[k]; });
    var trOld = s0.tr && Date.parse(s0.tr.s) < cut && (!s0.tr.e || Date.parse(s0.tr.e) < cut);
    if (changed || trOld) saveSessionPatch({entries:keep, tr: trOld ? null : s0.tr}, id).catch(function(){});
  }
  // Alte Daten (29.10.–02.11., aus der ersten App-Version) einmalig in die eigene Datenbank übernehmen
  var oldImported = false;
  function importOld(){
    if (oldImported || mode !== "db" || !SB || !firstSync.tr) return; oldImported = true;
    SB.db.fresh("data/users/" + SB.uid).then(function(){
      return Promise.all([SB.db.fresh("data/users/" + SB.uid + "/food/days"), SB.db.fresh("data/users/" + SB.uid + "/water/days")]);
    }).then(function(){
      setTimeout(function(){
        var jobs = [];
        Object.keys(SEED.t).filter(isDateId).forEach(function(id){
          if (sessionById(id)) return;
          var x = SEED.t[id] || {}, p = {entries: cleanEntries(x.entries)};
          if (typeof x.note === "string" && x.note) p.note = x.note.slice(0, 300);
          if (clean(x.bw)) p.bw = clean(x.bw);
          var sl = cleanSleep(x.sl); if (sl) p.sl = {from:sl.from, to:sl.to};
          jobs.push(function(){ return saveSessionPatch(p, id); });
        });
        Object.keys(SEED.f).filter(isDateId).forEach(function(id){
          if (foodDays.some(function(d){ return d.id === id; })) return;
          var items = cleanItems(SEED.f[id] && SEED.f[id].items); if (items.length) jobs.push(function(){ return putDay("f", id, {date:id, items:items}); });
        });
        Object.keys(SEED.w).filter(isDateId).forEach(function(id){
          if (waterDays.some(function(d){ return d.id === id; })) return;
          var log = cleanLog(SEED.w[id] && SEED.w[id].log); if (log.length) jobs.push(function(){ return putDay("w", id, {date:id, ml:mlSum(log), log:log}); });
        });
        jobs.reduce(function(pr, j){ return pr.then(j); }, Promise.resolve()).catch(function(){});
      }, 0);
    }, function(){ oldImported = false; });
  }
  var accFixed = false;
  function fixAccident(){
    if (accFixed || !(mode === "db" || mode === "local") || (mode === "db" && !firstSync.tr)) return;
    accFixed = true;
    try { if (localStorage.getItem("fix-1127")) return; } catch (e) {}
    var id = "2026-11-27", s0 = sessionById(id), done = function(){ try { localStorage.setItem("fix-1127", "1"); } catch (e) {} };
    if (todayId() === id){ try { localStorage.removeItem("fit-tm"); localStorage.removeItem("fit-retro"); localStorage.removeItem(HSKEY); } catch (e) {} document.body.classList.remove("tm"); document.body.classList.remove("tmhang"); stopTimer(); tmUpdate(); }
    if (!s0 || !s0.tr || isRealSession(s0)){ done(); return; }
    var keep = s0.bw || s0.sl || s0.hang || s0.ms || (s0.note && s0.note.trim());
    (keep ? saveSessionPatch({tr:null, entries:{}}, id) : deleteSession(id)).then(done, function(){ accFixed = false; });
  }
  var seeded = false;
  function seedToday(){
    if (seeded || todayId() !== "2026-11-26" || (!firstSync.tr && mode === "db") || !(mode === "db" || mode === "local")) return; seeded = true;
    // Nur mit frischem Stand vom Server, damit nie etwas überschrieben wird
    if (SB) { SB.db.fresh("data/users/" + SB.uid).then(function(){ setTimeout(doSeedToday, 0); }, function(){ seeded = false; }); return; }
    doSeedToday();
  }
  function doSeedToday(){
    var id = todayId(), s0 = sessionById(id), cut = Date.parse("2026-11-26T20:30:00Z");
    var real = s0 && s0.entries && Object.keys(s0.entries).some(function(k){ var at = Date.parse(s0.entries[k] && s0.entries[k].at); return at && at >= cut; });
    if (real){
      var fixed = {}, changed = false;
      Object.keys(s0.entries).forEach(function(k){
        var e = JSON.parse(JSON.stringify(s0.entries[k])), ex = BYID[k];
        if (ex && ex.kind !== "time" && Array.isArray(e.sets)){
          e.sets.forEach(function(z){ if (z && z.reps > 0 && !z.rating){ z.rating = "passt"; changed = true; } });
          if (e.dropKg != null && e.dropReps > 0 && !e.dropRating){ e.dropRating = "passt"; changed = true; }
          if (!e.rating){ e.rating = "passt"; changed = true; }
        }
        fixed[k] = e;
      });
      if (changed) saveSessionPatch({entries:fixed}, id).catch(function(){});
      return;
    }
    var at = "2026-11-26T21:31:00.000Z", entries = {};
    STRENGTH.forEach(function(ex){
      var sg = suggest(ex), sets = [];
      for (var i = 0; i < ex.sets; i++) sets.push({kg:sg.sets[i], reps:sg.reps[i] != null ? sg.reps[i] : ex.pr[i], rating:"passt"});
      entries[ex.id] = {v:2, kg:sets[0].kg, sets:sets, dropKg: ex.drop ? sg.dropKg : null, dropReps: ex.drop ? (sg.dropReps != null ? sg.dropReps : ex.dropPr) : null, rating:"passt", dropRating: ex.drop ? "passt" : "", at:at};
    });
    var end = Date.parse("2026-11-26T21:30:00.000Z");
    saveSessionPatch({entries:entries, tr:{s:new Date(end - 84 * 60000).toISOString(), e:new Date(end).toISOString(), t:0}}, id).catch(function(){});
  }
  function renderTraining(){ PLAN.forEach(refreshRow); renderDay(); renderHistory(); renderNote(); renderBW(); }

  // ---------- Speicher ----------
  var chain = Promise.resolve();
  function enqueue(fn){ var p = chain.then(fn); chain = p.catch(function(){}); return p; }
  function withRetry(run, n){
    n = n || 0;
    return run().catch(function(e){
      var retriable = !e || !e.code || e.code === "unavailable" || e.code === "deadline-exceeded" || e.code === "aborted" || e.code === "cancelled" || e.code === "internal" || e.code === "unknown";
      if (retriable && n < 3) return wait(300 * Math.pow(2, n) + Math.random() * 400).then(function(){ return withRetry(run, n + 1); });
      throw e;
    });
  }

  var LKEY = "training-log-v1", FKEY = "food-log-v1";
  function loadLocal(key){ try { var raw = localStorage.getItem(key); var o = raw ? JSON.parse(raw) : {}; return (o && typeof o === "object") ? o : {}; } catch (e) { return null; } }
  function writeLocal(key, o){ try { localStorage.setItem(key, JSON.stringify(o)); return true; } catch (e) { return false; } }
  function sessionsFromLocal(o){ return Object.keys(o).filter(isDateId).sort().reverse().map(function(id){ var x = o[id] || {}; return {id:id, entries:x.entries || {}, note: typeof x.note === "string" ? x.note : "", bw: clean(x.bw), hang: cleanHang(x.hang), ms: cleanMs(x.ms), sl: cleanSleep(x.sl), tr: cleanTr(x.tr)}; }); }
  function foodFromLocal(o){ return Object.keys(o).filter(isDateId).sort().reverse().slice(0, 400).map(function(id){ return {id:id, items:Array.isArray(o[id] && o[id].items) ? o[id].items : []}; }); }

  function saveEntry(exId, entry){
    var id = todayId();
    return ready.then(function(){
      if (mode === "local"){
        var o = loadLocal(LKEY) || {};
        if (!o[id]) o[id] = {date:id, entries:{}};
        o[id].entries[exId] = entry;
        if (!writeLocal(LKEY, o)) return Promise.reject({code:"local_failed"});
        sessions = sessionsFromLocal(o); renderTraining(); return;
      }
      if (mode !== "db") return Promise.reject({code:"readonly"});
      return enqueue(function(){
        var ref = col.doc(id);
        function run(){
          var patch = {entries: mergedEntries(id, exId, entry)};
          if (known[id]){
            return ref.update(patch).catch(function(e){ if (e && e.code === "invalid_argument"){ delete known[id]; return run(); } throw e; });
          }
          return ref.get().then(function(snap){
            if (snap.exists){ known[id] = true; return ref.update(patch); }
            var body = {date:id, createdAt:new Date().toISOString(), entries:patch.entries};
            return ref.set(body).then(function(){ known[id] = true; });
          });
        }
        return withRetry(run);
      });
    });
  }
  var shadow = {};
  function mergedEntries(id, exId, entry){
    var s0 = sessionById(id), base = (s0 && s0.entries) || {}, sh = shadow[id] || (shadow[id] = {}), out = {};
    sh[exId] = entry;
    Object.keys(base).forEach(function(k){ out[k] = base[k]; });
    Object.keys(sh).forEach(function(k){ out[k] = sh[k]; });
    return out;
  }
  // Löscht nur das Training. Gewicht und Schlaf des Tages bleiben erhalten.
  function deleteSession(id){
    delete shadow[id];
    var s0 = sessionById(id), keepDay = !!(s0 && (s0.bw || s0.sl || s0.hang || s0.ms));
    if (id === todayId()){ try { localStorage.removeItem("fit-draft"); localStorage.removeItem("fit-fin"); localStorage.removeItem("fit-done"); } catch (e) {} draftMem = null; autoDone = {}; dirty = {}; }
    return ready.then(function(){
      if (mode === "local"){ var o = loadLocal(LKEY) || {}; if (keepDay && o[id]){ o[id].entries = {}; o[id].tr = null; o[id].note = ""; } else delete o[id]; writeLocal(LKEY, o); sessions = sessionsFromLocal(o); renderTraining(); return; }
      if (mode !== "db") return Promise.reject({code:"readonly"});
      return enqueue(function(){ return withRetry(function(){ return keepDay ? col.doc(id).update({entries:{}, tr:null, note:""}) : col.doc(id).delete(); }).then(function(){ if (!keepDay) delete known[id]; }); });
    });
  }
  function errText(e){
    var c = e && e.code;
    if (c === "quota_exceeded") return "Speicher voll. Lösch alte Einträge im Verlauf.";
    if (c === "readonly" || c === "invalid_argument" || c === "revoked" || c === "not_granted") return "Speichern ist hier gerade nicht möglich.";
    if (c === "local_failed") return "Konnte auf diesem Gerät nicht speichern.";
    return "Konnte nicht speichern. Versuch es nochmal.";
  }

  // ---------- Notiz und Körpergewicht ----------
  function saveSessionPatch(patch, dayIdOpt){
    var id = dayIdOpt || todayId();
    return ready.then(function(){
      if (mode === "local"){
        var o = loadLocal(LKEY) || {};
        if (!o[id]) o[id] = {date:id, entries:{}};
        for (var k in patch) o[id][k] = patch[k];
        if (!writeLocal(LKEY, o)) return Promise.reject({code:"local_failed"});
        sessions = sessionsFromLocal(o); renderTraining(); return;
      }
      if (mode !== "db") return Promise.reject({code:"readonly"});
      return enqueue(function(){
        var ref = col.doc(id);
        function run(){
          if (known[id]) return ref.update(patch).catch(function(e){ if (e && e.code === "invalid_argument"){ delete known[id]; return run(); } throw e; });
          return ref.get().then(function(snap){
            if (snap.exists){ known[id] = true; return ref.update(patch); }
            var body = {date:id, createdAt:new Date().toISOString(), entries:{}}; for (var k in patch) body[k] = patch[k];
            return ref.set(body).then(function(){ known[id] = true; });
          });
        }
        return withRetry(run);
      });
    });
  }
  // Wiegen einmal pro Woche (Standard: dienstags vor dem Training, einstellbar)
  var WEIGH_DAY = 2, DAYLONG = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
  function weighDue(lastId){ var d = dateOf(todayId()), back = (d.getDay() - WEIGH_DAY + 7) % 7, wd = new Date(d.getFullYear(), d.getMonth(), d.getDate() - back); return dateOf(lastId) < wd; }
  function cleanTr(v){ /* t:1 marks a test session that never counts */ if (!v || typeof v !== "object") return null; var a = typeof v.s === "string" && !isNaN(Date.parse(v.s)) ? v.s : null, b = typeof v.e === "string" && !isNaN(Date.parse(v.e)) ? v.e : null; return a ? {s:a, e:b, t:v.t ? 1 : 0} : null; }
  function trState(){ var ses = todaySession(); return ses && ses.tr ? ses.tr : null; }
  function dur(ms){ var t = Math.max(0, Math.round(ms / 1000)), h = Math.floor(t / 3600), m = Math.floor(t % 3600 / 60), sc = t % 60; return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(sc).padStart(2, "0"); }
  function renderTrack(){
    var el = $("#ttTime"), b = $("#ttBtn"); if (!el || !b) return; var tr = trState();
    b.hidden = false;
    if (!tr){ el.textContent = "0:00"; b.textContent = "Start"; b.dataset.m = "start"; return; }
    if (tr.e){ el.textContent = dur(Date.parse(tr.e) - Date.parse(tr.s)); b.hidden = true; return; }
    el.textContent = dur(Date.now() - Date.parse(tr.s)); b.textContent = "Stopp"; b.dataset.m = "stop";
  }
  function trSave(tr){ return saveSessionPatch({tr:tr}).catch(function(e){ toast(errText(e)); }); }
  function autoStart(){ if (!trState()) trSave({s:new Date(Date.now() - 45000).toISOString(), e:""}); }
  function autoStop(){
    var t = trState(); if (!t || t.e) return;
    var all = PLAN.every(function(ex){ var e = todayEntry(ex.id); if (!e) return false; if (ex.kind === "time") return !!e.done; var st = entrySets(e); return st.length >= ex.sets && st.slice(0, ex.sets).every(function(x){ return x.reps !== null && x.reps > 0; }); });
    if (all){ var eI2 = new Date().toISOString(); trSave({s:t.s, e:eI2, t:t.t || 0}); if (!t.t) showDone(t.s, eI2); }
  }
  $("#ttBtn").addEventListener("click", function(){ if (this.dataset.m === "stop"){ var t = trState(); if (t) trSave({s:t.s, e:new Date().toISOString()}); } else trSave({s:new Date().toISOString(), e:""}); });
  setInterval(function(){ var t = trState(); if (t && !t.e) renderTrack(); }, 1000);
  var exShown = false;
  $("#showEx").addEventListener("click", function(){ exShown = !exShown; renderDay(); });
  $("#exHead").addEventListener("click", function(){ if ($("#exWrap").classList.contains("restlist")){ exShown = !exShown; renderDay(); } });
  var noteDirty = false;
  function renderNote(){
    var ta = $("#noteText"); if (document.activeElement === ta || noteDirty) return;
    var s = todaySession(); ta.value = s && s.note ? s.note : "";
  }
  $("#noteText").addEventListener("input", function(){ noteDirty = true; });
  $("#noteSave").addEventListener("click", function(){
    var text = $("#noteText").value.trim().slice(0, 300);
    saveSessionPatch({note:text}).then(function(){ noteDirty = false; toast("Notiz gespeichert"); renderHistory(); }).catch(function(e){ toast(errText(e)); });
  });
  function renderBW(){
    var list = sessions.filter(function(s){ return s.bw !== null && s.bw !== undefined && s.bw > 0; }).slice(0, 8);
    var ul = $("#bwList"); ul.innerHTML = "";
    list.forEach(function(s, i){
      var li = document.createElement("li");
      var a = document.createElement("span"); a.textContent = s.id === todayId() ? "Heute" : dateShort(s.id);
      var b = document.createElement("span"); b.className = "k"; b.textContent = fmt(s.bw) + " kg";
      var c = document.createElement("span"); c.className = "k";
      var prev = list[i + 1];
      if (prev){ var d = Math.round((s.bw - prev.bw) * 10) / 10; c.textContent = (d > 0 ? "+" : "") + fmt(d); }
      li.appendChild(a); li.appendChild(b); li.appendChild(c); ul.appendChild(li);
    });
    var hint = "";
    var isWD = new Date().getDay() === WEIGH_DAY;
    if (isWD && list.length){ var days = Math.round((dateOf(todayId()) - dateOf(list[0].id)) / 86400000); if (days >= 7) hint = "Letztes Wiegen vor " + days + " Tagen, Zeit zum Wiegen."; }
    $("#bwHint").textContent = hint;
    var due = isWD && (!list.length || weighDue(list[0].id));
    $("#bwMeta").textContent = list.length ? fmt(list[0].bw) + " kg" + (due ? ", wiegen fällig" : "") : "Noch nichts";
  }
  function bwToast(v){
    var t = todayId(), prev = sessions.filter(function(x){ return x.bw > 0 && x.id < t; }).sort(function(a, b){ return a.id < b.id ? 1 : -1; })[0];
    if (!prev) return toast("⚖️ " + fmt(v) + " kg gespeichert");
    var d = Math.round((v - prev.bw) * 10) / 10, wk = Math.max(1, Math.round((dateOf(t) - dateOf(prev.id)) / 86400000) / 7), pw = d / wk;
    toast("⚖️ " + fmt(v) + " kg · " + (d > 0 ? "+" : d < 0 ? "−" : "±") + fmt(Math.abs(d)) + " kg" + (pw >= 0.1 && pw <= 0.5 ? " · perfekt für Aufbau 💪" : pw > 0.5 ? " · etwas schnell" : pw < -0.1 ? " · mehr essen" : " · stabil"));
  }
  $("#wqSave").addEventListener("click", function(){
    var v = num($("#wqIn").value);
    if (v === null || v < 30 || v > 250){ toast("Gewicht in kg eintragen, z. B. 82,5."); $("#wqIn").focus(); return; }
    saveSessionPatch({bw: Math.round(v * 10) / 10}).then(function(){ $("#wqIn").value = ""; bwToast(Math.round(v * 10) / 10); renderBW(); renderDay(); }).catch(function(e){ toast(errText(e)); });
  });
  $("#bwSave").addEventListener("click", function(){
    var v = num($("#bwIn").value);
    if (v === null || v < 30 || v > 250){ toast("Gewicht in kg eintragen, z. B. 82,5."); $("#bwIn").focus(); return; }
    saveSessionPatch({bw: Math.round(v * 10) / 10}).then(function(){ $("#bwIn").value = ""; bwToast(Math.round(v * 10) / 10); renderBW(); }).catch(function(e){ toast(errText(e)); });
  });

  // ---------- Dead Hang: erster Schritt nach "Training starten" ----------
  function cleanHang(v){ var n = Number(v); return isFinite(n) && n >= 1 && n <= 900 ? Math.round(n) : null; }
  var hang = null, hangIv = null, hangStep = false, hangAutoT = null, HSKEY = "fit-hangstep";
  function hangFmt(sec){ sec = Math.max(0, Math.floor(sec)); return sec >= 60 ? Math.floor(sec / 60) + ":" + pad(sec % 60) + " min" : sec + " s"; }
  function hangStats(){
    var t = todayId(), list = sessions.filter(function(x){ return x.hang > 0 && x.id <= t; }).sort(function(a, b){ return a.id < b.id ? 1 : -1; });
    var today = list.length && list[0].id === t ? list[0] : null, prev = list.filter(function(x){ return x.id !== t; });
    return {today: today ? today.hang : null, last: prev.length ? prev[0] : null, best: list.length ? Math.max.apply(null, list.map(function(x){ return x.hang; })) : null};
  }
  function firstOpenIdx(){ for (var i = 0; i < PLAN.length; i++) if (!exDoneEntry(PLAN[i], todayEntry(PLAN[i].id))) return i; return 0; }
  function renderHang(){
    var c = $("#hangCard"); if (!c) return;
    c.hidden = !(hangStep || hang); if (c.hidden) return;
    var nx = PLAN[firstOpenIdx()]; $("#hgNext").textContent = nx ? "Danach: " + nx.name : "";
    if (hang) return;
    var st = hangStats();
    $("#hgTime").textContent = st.today ? hangFmt(st.today) : "0 s";
    $("#hgBtn").textContent = st.today ? "Nochmal" : "Start";
    c.classList.toggle("done", !!st.today);
    var bits = [];
    if (st.best) bits.push("Bestzeit " + hangFmt(st.best));
    if (st.last) bits.push("letztes Mal " + hangFmt(st.last.hang));
    $("#hgMeta").textContent = bits.length ? bits.join(" · ") : "So lange wie möglich hängen, dann stoppen.";
  }
  function hangTick(){ if (hang) $("#hgTime").textContent = hangFmt((Date.now() - hang.t0) / 1000); }
  function hangWanted(){ return PREFS.hang && !hangStats().today; }
  function hangStepOn(){
    hangStep = true; document.body.classList.add("tmhang"); try { localStorage.setItem(HSKEY, todayId()); } catch (e) {}
    $$(".ex.open").forEach(function(o){ setOpen(o, false); });
    renderHang(); tmUpdate(); window.scrollTo(0, 0);
  }
  function hangStepOff(){ hangStep = false; clearTimeout(hangAutoT); document.body.classList.remove("tmhang"); try { localStorage.removeItem(HSKEY); } catch (e) {} renderHang(); }
  function finishHang(){
    if (!hang) return Promise.resolve(null);
    var sec = Math.round((Date.now() - hang.t0) / 1000), c = $("#hangCard"); hang = null; clearInterval(hangIv); hangIv = null; c.classList.remove("run");
    if (sec < 3){ toast("Zu kurz, nicht gespeichert."); renderHang(); return Promise.resolve(null); }
    var st = hangStats(), best = st.best, keep = Math.max(sec, st.today || 0), rec = !!(best && sec > best);
    $("#hgTime").textContent = hangFmt(sec);
    return saveSessionPatch({hang: keep}).then(function(){ toast(rec ? "Neue Bestzeit: " + hangFmt(sec) : hangFmt(sec) + " gespeichert", rec); renderHang(); return sec; })
      .catch(function(e){ toast(errText(e)); renderHang(); return null; });
  }
  function hangContinue(){ var go = function(){ hangStepOff(); tmGo(firstOpenIdx()); }; if (hang) finishHang().then(go); else go(); }
  $("#hgBtn").addEventListener("click", function(){
    var b = $("#hgBtn"), c = $("#hangCard");
    if (!hang){
      clearTimeout(hangAutoT); ensureAudio(); startBeep();
      hang = {t0: Date.now()}; c.classList.add("run"); b.textContent = "Stopp"; $("#hgMeta").textContent = "Läuft … tippe auf Stopp, wenn du loslässt.";
      clearInterval(hangIv); hangIv = setInterval(hangTick, 200); hangTick(); keepAwake(); return;
    }
    finishHang().then(function(sec){ if (sec && hangStep){ clearTimeout(hangAutoT); hangAutoT = setTimeout(function(){ if (hangStep && !hang) hangContinue(); }, 1600); } });
  });

  // ---------- Körpermaße (nur noch Daten: bleiben in Sicherungen erhalten) ----------
  var MSF = [["arm", "Oberarm"], ["fore", "Unterarm"], ["chest", "Brust"], ["waist", "Taille"], ["thigh", "Oberschenkel"]];
  function cleanMs(v){ if (!v || typeof v !== "object") return null; var o = {}, n = 0; MSF.forEach(function(f){ var x = clean(v[f[0]]); if (x !== null && x >= 10 && x <= 250){ o[f[0]] = Math.round(x * 10) / 10; n++; } }); return n ? o : null; }
  // ---------- Essen ----------
  var foodDays = [], foodCol = null, pending = null, pendingWater = 0, pendingTitle = "", sampleFn = null, sampleOk = false, photoFile = null, photoUrl = null;
  function todayFood(){ var t = todayId(); for (var i = 0; i < foodDays.length; i++) if (foodDays[i].id === t) return foodDays[i].items; return []; }
  function cleanItems(arr){
    return (Array.isArray(arr) ? arr : []).map(function(it){
      if (!it || typeof it !== "object") return null;
      var name = typeof it.name === "string" ? it.name.trim().slice(0, 60) : "";
      var amount = typeof it.amount === "string" ? it.amount.trim().slice(0, 100) : "";
      var k = clean(it.kcal), p = clean(it.protein);
      if (!name || k === null || p === null || k < 0 || k > 5000 || p < 0 || p > 400) return null;
      var out = {id: typeof it.id === "string" ? it.id.slice(0, 24) : uid6(), name:name, amount:amount, kcal:Math.round(k), protein:Math.round(p)};
      if (typeof it.g === "string" && it.g) out.g = it.g.slice(0, 24);
      if (typeof it.at === "string" && !isNaN(Date.parse(it.at))) out.at = it.at.slice(0, 30);
      if (typeof it.gt === "string" && it.gt.trim()) out.gt = it.gt.trim().slice(0, 80);
      var ml = clean(it.ml); if (ml !== null && ml > 0 && ml <= 5000) out.ml = Math.round(ml);
      var cnt = clean(it.count !== undefined ? it.count : it.n); if (cnt !== null && cnt >= 1 && cnt <= 50) out.n = Math.round(cnt);
      var su = clean(it.sugar), fa = clean(it.fat), ca = clean(it.carbs);
      if (su !== null && su >= 0 && su <= 500) out.sugar = Math.round(su);
      if (fa !== null && fa >= 0 && fa <= 300) out.fat = Math.round(fa);
      if (ca !== null && ca >= 0 && ca <= 800) out.carbs = Math.round(ca);
      return out;
    }).filter(Boolean).slice(0, 80);
  }
  var limOver = null;
  function limList(){ return [{k:"f", n:"Fett", max:PREFS.fatMax, u:"g"}, {k:"s", n:"Zucker", max:PREFS.sugarMax, u:"g"}, {k:"k", n:"Kalorien", max:PREFS.kcalMax, u:"kcal"}]; }
  function renderLimits(items){
    var box = $("#limits"); if (!box) return; var t = sum(items), LIM = limList();
    var rows = LIM.map(function(l){ var v = t[l.k] || 0, pc = Math.min(100, v / l.max * 100), over = v > l.max, near = !over && v > l.max * 0.8; return '<div class="lim' + (over ? " over" : near ? " near" : "") + '"><span>' + l.n + '</span><b>' + Math.round(v) + ' / ' + l.max + ' ' + l.u + '</b><i style="width:' + pc + '%"></i></div>'; }).join("");
    var msgs = LIM.filter(function(l){ return (t[l.k] || 0) > l.max; }).map(function(l){ return l.n + " " + Math.round(t[l.k]) + " von " + l.max + " " + l.u; });
    box.hidden = !items.length;
    box.innerHTML = '<div class="lt">Limits</div>' + rows + (msgs.length ? '<div class="lw">Hinweis: etwas über dem Richtwert (' + msgs.join(", ") + ')</div>' : '');
    limOver = msgs.join("|");
  }
  function fixAmt(t, name){ var w = (name || "").split(/\s+/)[0] || ""; return t.replace(/^(\d+)\s*Stück\b/i, "$1 " + w); }
  function sum(items){ return items.reduce(function(a, it){ a.k += it.kcal; a.p += it.protein; a.s += it.sugar || 0; a.f += it.fat || 0; a.c += it.carbs || 0; return a; }, {k:0, p:0, s:0, f:0, c:0}); }
  function groupKey(it){ return it.g || ("_" + it.id); }
  function groupsOf(items){
    var map = {}, order = [];
    items.forEach(function(it){
      var g = groupKey(it);
      if (!map[g]){ map[g] = {g:g, title: it.gt || it.name, items:[]}; order.push(g); }
      map[g].items.push(it);
    });
    return order.map(function(k){ return map[k]; });
  }
  function normKey(name){ return String(name).toLowerCase().replace(/\([^)]*\)/g, "").replace(/\s+/g, " ").trim(); }
  function aggregate(items){
    var map = {}, order = [];
    items.forEach(function(it){
      var k = it.id;
      if (!map[k]){ map[k] = {key:k, name:it.name.replace(/\s*\([^)]*\)\s*/g, " ").trim() || it.name, count:0, kcal:0, protein:0}; order.push(k); }
      var m = map[k]; m.count += it.n || 1; m.kcal += it.kcal; m.protein += it.protein;
    });
    return order.map(function(k){ return map[k]; });
  }
  function canEdit(){ return mode === "db" || mode === "local"; }

  function saveFood(items){
    var id = todayId(), body = {date:id, items:items};
    return ready.then(function(){
      if (mode === "local"){
        var o = loadLocal(FKEY) || {}; o[id] = body;
        if (!writeLocal(FKEY, o)) return Promise.reject({code:"local_failed"});
        foodDays = foodFromLocal(o); renderFood(); return;
      }
      if (mode !== "db" || !foodCol) return Promise.reject({code:"readonly"});
      return enqueue(function(){ return withRetry(function(){ return foodCol.doc(id).set(body); }); });
    });
  }

  function valEl(kcal, prot, cls){
    var v = document.createElement("span"); v.className = cls; v.textContent = kcal.toLocaleString("de-DE") + " kcal";
    var pp = document.createElement("span"); pp.textContent = prot + " g Eiweiß"; v.appendChild(pp); return v;
  }
  function rmBtn(label, attr, val){
    var b = document.createElement("button"); b.type = "button"; b.className = "rm"; b.dataset[attr] = val; b.setAttribute("aria-label", label); b.textContent = "×"; return b;
  }
  function foodRow(it, removable){
    var li = document.createElement("li");
    var nm = document.createElement("span"); nm.className = "nm"; nm.textContent = it.name;
    if (it.amount){ var sm = document.createElement("small"); sm.textContent = it.amount; nm.appendChild(sm); }
    li.appendChild(nm); li.appendChild(valEl(it.kcal, it.protein, "val"));
    li.appendChild(removable ? rmBtn(it.name + " entfernen", "id", it.id) : document.createElement("span"));
    return li;
  }
  // Rückmeldungen nach dem Eintragen: zeigen, was noch fehlt, und feiern, wenn ein Ziel erreicht ist
  function daySnap(){ var f = sum(todayFood()); return {k:f.k, p:f.p, s:f.s, f:f.f, ml:todayWaterLog().reduce(function(a, x){ return a + (x.ml || 0); }, 0)}; }
  function feedToast(b0, head, kind){
    var a = daySnap(), wg = waterGoal(), kn = function(n){ return Math.round(n).toLocaleString("de-DE"); };
    if (b0.p < GOAL_PROT && a.p >= GOAL_PROT) return toast("🎯 Eiweißziel geschafft: " + Math.round(a.p) + " g");
    if (b0.k < GOAL_KCAL && a.k >= GOAL_KCAL) return toast("🎯 Kalorien voll: " + kn(a.k) + " kcal");
    if (b0.ml < wg && a.ml >= wg) return toast("💧 Wasserziel geschafft: " + liters(a.ml));
    if (b0.k <= PREFS.kcalMax && a.k > PREFS.kcalMax) return toast("Hinweis: über " + kn(PREFS.kcalMax) + " kcal, kein Problem");
    if (b0.s <= PREFS.sugarMax && a.s > PREFS.sugarMax) return toast("Hinweis: Zucker über " + PREFS.sugarMax + " g, kein Problem");
    if (b0.f <= PREFS.fatMax && a.f > PREFS.fatMax) return toast("Hinweis: Fett über " + PREFS.fatMax + " g, kein Problem");
    var rest = kind === "water" ? (a.ml < wg ? "noch " + liters(wg - a.ml) : "Ziel ✓")
      : a.p < GOAL_PROT ? "noch " + Math.round(GOAL_PROT - a.p) + " g Eiweiß" : a.k < GOAL_KCAL ? "noch " + kn(GOAL_KCAL - a.k) + " kcal" : "alles drin ✓";
    toast(head + " · " + rest);
  }
  function foodHead(items){ var k = 0, p = 0; items.forEach(function(it){ k += it.kcal || 0; p += it.protein || 0; }); return "+" + Math.round(k).toLocaleString("de-DE") + " kcal, " + Math.round(p) + " g Eiweiß"; }
  function waterHead(ml){ return "💧 +" + (ml >= 1000 ? liters(ml) : Math.round(ml) + " ml"); }

  // Aufbau-Tag: Nachricht passt sich an, wie weit du mit Eiweiß und Kalorien bist
  function aufbauMsg(){
    var s = sum(todayFood()), p = Math.round(s.p), k = Math.round(s.k), pm = GOAL_PROT - p, km = GOAL_KCAL - k, h = new Date().getHours();
    var pOk = pm <= 5, kOk = km <= 100, kn = function(n){ return n.toLocaleString("de-DE"); };
    if (!k) return "Deine Muskeln wachsen heute. Iss gut: " + GOAL_PROT + " g Eiweiß und " + kn(GOAL_KCAL) + " kcal.";
    if (pOk && kOk) return k > PREFS.kcalMax + 300 ? "Ziel erreicht ✓ Eiweiß und Kalorien geschafft, etwas drüber ist heute okay." : p >= GOAL_PROT + 20 ? "Perfekter Aufbau-Tag 🔥 " + p + " g Eiweiß, " + kn(k) + " kcal. Besser geht’s nicht." : "Ziel erreicht 💪 " + p + " g Eiweiß und " + kn(k) + " kcal. Starker Aufbau-Tag.";
    if (pOk) return "Eiweiß geschafft ✓ Noch " + kn(km) + " kcal, dann ist der Tag perfekt.";
    if (kOk) return "Kalorien passen ✓ Noch " + pm + " g Eiweiß" + (pm <= 50 ? ", z. B. ein Shake." : ".");
    var pc = Math.round((Math.min(1, p / GOAL_PROT) + Math.min(1, k / GOAL_KCAL)) / 2 * 100);
    if (h >= 20 && pc < 75) return "Wird knapp: noch " + pm + " g Eiweiß und " + kn(km) + " kcal. Iss heute noch was Großes.";
    return (pc >= 70 ? "Gut dabei (" + pc + " %). " : pc >= 40 ? "Halbzeit (" + pc + " %). " : "Muskeln wachsen heute. ") + "Noch " + pm + " g Eiweiß und " + kn(km) + " kcal.";
  }
  function renderFood(){
    var items = todayFood(), s = sum(items);
    try { if (dayType(todayId()) === "rest1" && TRAIN_DAYS.indexOf(new Date().getDay()) < 0) $("#daySub").textContent = aufbauMsg(); } catch (e) {}
    var has = function(k){ return items.some(function(it){ return it[k] !== undefined; }); };
    $("#mKcal").textContent = s.k.toLocaleString("de-DE"); var mg = $("#mKcalGoal"); if (mg) mg.textContent = "/ " + kn(GOAL_KCAL) + " kcal";
    var tk = $("#tKcal"); tk.firstElementChild.style.width = Math.min(100, s.k / GOAL_KCAL * 100) + "%";
    tk.classList.toggle("full", s.k >= GOAL_KCAL && s.k <= PREFS.kcalMax); tk.classList.toggle("over", s.k > PREFS.kcalMax);
    var left = GOAL_KCAL - s.k;
    $("#fsLeft").textContent = left > 0 ? "noch " + left.toLocaleString("de-DE") + " kcal" : "Ziel erreicht ✓";
    $("#stK").textContent = s.k.toLocaleString("de-DE"); $("#stP").textContent = s.p + " g";
    var kb = $("#stKb"), pb = $("#stPb");
    kb.style.width = Math.min(100, s.k / GOAL_KCAL * 100) + "%"; pb.style.width = Math.min(100, s.p / GOAL_PROT * 100) + "%";
    kb.classList.toggle("full", s.k >= GOAL_KCAL); pb.classList.toggle("full", s.p >= GOAL_PROT);
    var rows = [
      {n:"Eiweiß", v:s.p, max:GOAL_PROT, goal:true, show:true},
      {n:"Fett", v:s.f, max:PREFS.fatMax, show:has("fat")},
      {n:"Zucker", v:s.s, max:PREFS.sugarMax, show:has("sugar")}
    ];
    $("#fsGrid").innerHTML = rows.map(function(r){
      var pc = Math.min(100, r.v / r.max * 100), st = r.goal ? (r.v >= r.max - 10 ? "ok" : "") : (r.v > r.max ? "over" : r.v > r.max * 0.8 ? "near" : "");
      return '<div class="fs-m ' + st + '"><span class="fs-l">' + r.n + '</span><b>' + (r.show ? Math.round(r.v) : "–") + '<small> / ' + r.max + ' g</small></b><i class="fbar"><i style="width:' + (r.show ? pc : 0) + '%"></i></i></div>';
    }).join("");
    var over = [];
    if (s.k > PREFS.kcalMax) over.push("Kalorien " + s.k.toLocaleString("de-DE") + " / " + kn(PREFS.kcalMax));
    if (has("fat") && s.f > PREFS.fatMax) over.push("Fett " + Math.round(s.f) + " / " + PREFS.fatMax + " g");
    if (has("sugar") && s.s > PREFS.sugarMax) over.push("Zucker " + Math.round(s.s) + " / " + PREFS.sugarMax + " g");
    var lw = $("#limits"); lw.hidden = !over.length; lw.textContent = over.length ? "Hinweis: etwas über dem Richtwert (" + over.join(", ") + "). Kein Problem, morgen einfach etwas weniger." : "";
    renderScores();

    var box = $("#foodToday"); box.innerHTML = "";
    $("#todayMeta").textContent = items.length ? items.length + (items.length === 1 ? " Eintrag · " : " Einträge · ") + s.k.toLocaleString("de-DE") + " kcal · " + Math.round(s.p) + " g Eiweiß" : "noch nichts";
    var more = $("#todayMore");
    if (!items.length){ var e = document.createElement("p"); e.className = "empty fempty"; e.textContent = "Noch nichts eingetragen. Füg oben etwas ein oder tippe auf einen gemerkten Eintrag."; box.appendChild(e); more.hidden = true; return; }
    // Nach Tageszeit gruppieren, gleiche Gerichte zusammenfassen, Neuestes zuerst
    var MEALS2 = [["Frühstück", 0, 10.5], ["Mittag", 10.5, 14.5], ["Nachmittag", 14.5, 17.5], ["Abend", 17.5, 24.1]];
    function mealOf(it){ if (!it.at) return -1; var d = new Date(it.at); if (isNaN(d)) return -1; var h = d.getHours() + d.getMinutes() / 60; for (var i = 0; i < MEALS2.length; i++) if (h >= MEALS2[i][1] && h < MEALS2[i][2]) return i; return -1; }
    var gmap = {}, glist = [];
    items.forEach(function(it, idx){
      var mi = mealOf(it), gk = String(mi);
      if (!gmap[gk]){ gmap[gk] = {mi:mi, rows:{}, order:[], kcal:0, prot:0}; glist.push(gmap[gk]); }
      var G = gmap[gk], k = normKey(it.name);
      if (!G.rows[k]){ G.rows[k] = {name:it.name.replace(/\s*\([^)]*\)\s*/g, " ").trim() || it.name, n:0, kcal:0, prot:0, last:null, lastIdx:-1, at:null, amts:[]}; G.order.push(k); }
      var R = G.rows[k]; R.n += it.n || 1; R.kcal += it.kcal; R.prot += it.protein; R.last = it.id; R.lastIdx = idx; if (it.at) R.at = it.at;
      if (it.amount && R.amts.indexOf(it.amount) < 0) R.amts.push(it.amount);
      G.kcal += it.kcal; G.prot += it.protein;
    });
    glist.sort(function(a, b){ return b.mi - a.mi; });
    var LIMIT = 6, shown = 0, total = 0, edit = canEdit(), multi = glist.length > 1 || glist[0].mi >= 0;
    glist.forEach(function(G){ total += G.order.length; });
    var card = document.createElement("div"); card.className = "fday";
    glist.forEach(function(G){
      var rows = G.order.map(function(k){ return G.rows[k]; }).sort(function(a, b){ return b.lastIdx - a.lastIdx; });
      if (!foodAll && shown >= LIMIT) return;
      if (multi){
        var hd = document.createElement("div"); hd.className = "fgh";
        var hn = document.createElement("b"); hn.textContent = G.mi >= 0 ? MEALS2[G.mi][0] : "Ohne Uhrzeit";
        var hv = document.createElement("span"); hv.textContent = G.kcal.toLocaleString("de-DE") + " kcal · " + G.prot + " g";
        hd.appendChild(hn); hd.appendChild(hv); card.appendChild(hd);
      }
      var ul = document.createElement("ul"); ul.className = "ftl2";
      rows.forEach(function(R){
        if (!foodAll && shown >= LIMIT) return; shown++;
        var li = document.createElement("li"); li.className = "fr" + (openFood === R.last ? " open" : "");
        var btn = document.createElement("button"); btn.type = "button"; btn.className = "frm"; btn.dataset.row = R.last; btn.setAttribute("aria-expanded", String(openFood === R.last));
        var a = document.createElement("span"); a.className = "fi";
        var nb = document.createElement("b"); nb.textContent = (R.n > 1 ? R.n + "× " : "") + R.name; a.appendChild(nb);
        var meta = [R.prot + " g Eiweiß"]; if (R.at){ var dt = new Date(R.at); if (!isNaN(dt)) meta.push(dt.toLocaleTimeString("de-DE", {hour:"2-digit", minute:"2-digit"})); }
        var sm = document.createElement("small"); sm.textContent = meta.join(" · "); a.appendChild(sm);
        var v = document.createElement("span"); v.className = "fv";
        var vk = document.createElement("b"); vk.textContent = R.kcal.toLocaleString("de-DE"); var vs = document.createElement("span"); vs.textContent = "kcal";
        v.appendChild(vk); v.appendChild(vs);
        btn.appendChild(a); btn.appendChild(v); li.appendChild(btn);
        if (edit){
          var act = document.createElement("div"); act.className = "fact"; act.hidden = openFood !== R.last;
          if (R.amts.length){ var am = document.createElement("p"); am.className = "famt"; am.textContent = R.amts.map(function(t){ return fixAmt(t, R.name); }).join(" · "); act.appendChild(am); }
          var b1 = document.createElement("button"); b1.type = "button"; b1.className = "add"; b1.dataset.add = R.last; b1.textContent = "+1 nochmal";
          var b2 = document.createElement("button"); b2.type = "button"; b2.className = "fav"; b2.dataset.fav = R.last; b2.textContent = "☆ Merken";
          var b3 = document.createElement("button"); b3.type = "button"; b3.className = "rm"; b3.dataset.key = R.last; b3.textContent = R.n > 1 ? "Eins entfernen" : "Entfernen";
          var b4 = document.createElement("button"); b4.type = "button"; b4.className = "fed"; b4.dataset.ed = R.last; b4.textContent = R.n > 1 ? "✎ Letzten ändern" : "✎ Ändern"; b4.setAttribute("aria-expanded", String(editFood === R.last));
          act.appendChild(b1); act.appendChild(b4); act.appendChild(b2); act.appendChild(b3); li.appendChild(act);
          if (editFood === R.last){
            var it0 = null; items.forEach(function(x){ if (x.id === R.last) it0 = x; });
            if (it0){
              var fm = document.createElement("div"); fm.className = "fedit";
              fm.innerHTML = '<div class="fe-row"><label>kcal<input class="fe-k" inputmode="numeric" autocomplete="off"></label><label>Eiweiß g<input class="fe-p" inputmode="numeric" autocomplete="off"></label></div><div class="fe-m" role="group" aria-label="Portion"><button type="button" data-m="0.5">×½</button><button type="button" data-m="1.5">×1½</button><button type="button" data-m="2">×2</button></div><button type="button" class="btn primary fe-save">Speichern</button>';
              $(".fe-k", fm).value = String(Math.round(it0.kcal)); $(".fe-p", fm).value = String(Math.round(it0.protein));
              act.appendChild(fm);
            }
          }
        }
        ul.appendChild(li);
      });
      card.appendChild(ul);
    });
    box.appendChild(card);
    more.hidden = total <= LIMIT;
    more.textContent = foodAll ? "Weniger anzeigen" : "Alle " + total + " anzeigen";
  }

  // ---------- Einfügen (z. B. Antwort von ChatGPT) ----------
  function parseNum(str){
    var m = /(\d{1,3}(?:\.\d{3})+(?!\d)|\d+(?:[.,]\d+)?)(?:\s*[-–]\s*(\d+(?:[.,]\d+)?))?/.exec(str); if (!m) return null;
    var a = /^\d{1,3}(\.\d{3})+$/.test(m[1]) ? m[1].replace(/\./g, "") : m[1].replace(",", ".");
    var v = parseFloat(a); if (m[2]){ var b = parseFloat(m[2].replace(",", ".")); if (isFinite(b) && b > v) v = (v + b) / 2; }
    return isFinite(v) ? v : null;
  }
  function parseMeals(text){
    var out = [], cur;
    function fresh(){ return {name:"", kcal:null, protein:null, fat:null, sugar:null}; }
    function hasVal(c){ return c.kcal !== null || c.protein !== null; }
    cur = fresh();
    String(text || "").split(/\n/).forEach(function(raw){
      var line = raw.replace(/[*_#`>|]/g, " ").replace(/^\s*(?:[-•·]|\d+[.)])\s+/, "").replace(/\s+/g, " ").trim();
      if (!line) return;
      var parts = line.split(/\s*[·;]\s*|,\s+(?=[A-Za-zÄÖÜäöüß() ]+[:=])/), labeled = false;
      parts.forEach(function(p){
        var m = /^([A-Za-zÄÖÜäöüß .()\/-]+?)\s*[:=]\s*(.*)$/.exec(p), lab, val;
        if (m){ lab = m[1].toLowerCase().trim(); val = m[2]; labeled = true; }
        else if (/\d\s*kcal\b/i.test(p)){ lab = "kcal"; val = p; labeled = true; }
        else return;
        var k = null;
        if (/kalor|kcal|energie|brennwert/.test(lab)) k = "kcal";
        else if (/protein|eiwei/.test(lab)) k = "protein";
        else if (/zucker/.test(lab)) k = "sugar";
        else if (/fett/.test(lab) && !/s(ä|ae)ur/.test(lab)) k = "fat";
        else if (/^(titel|name|gericht|mahlzeit|essen|lebensmittel|produkt)$/.test(lab)){ if (hasVal(cur)){ out.push(cur); cur = fresh(); } cur.name = val.trim(); return; }
        if (!k) return;
        var mk = k === "kcal" ? /(\d[\d.,]*(?:\s*[-–]\s*\d[\d.,]*)?)\s*kcal/i.exec(val) : null;
        var v = parseNum(mk ? mk[1] : val); if (v === null) return;
        if (cur[k] !== null){ out.push(cur); cur = fresh(); }
        cur[k] = v;
      });
      if (!labeled){
        if (hasVal(cur)){ out.push(cur); cur = fresh(); }
        cur.name = line.replace(/:\s*$/, "").slice(0, 60);
      }
    });
    if (hasVal(cur)) out.push(cur);
    out = out.filter(function(x){ return x.kcal !== null; });
    if (out.length > 1) out = out.filter(function(x){ return !/gesamt|summe|insgesamt|total/i.test(x.name); });
    return out.map(function(x){ return {name:(x.name || "Eintrag").slice(0, 60), kcal:Math.round(x.kcal), protein:Math.round(x.protein || 0), fat:x.fat === null ? undefined : Math.round(x.fat), sugar:x.sugar === null ? undefined : Math.round(x.sugar)}; });
  }
  var pasted = [];
  function renderPaste(){
    pasted = parseMeals($("#mPaste").value);
    var ul = $("#pastePv"); ul.innerHTML = "";
    pasted.forEach(function(x){
      var li = document.createElement("li");
      var a = document.createElement("b"); a.textContent = x.name;
      var b = document.createElement("span"); b.textContent = x.kcal.toLocaleString("de-DE") + " kcal · " + x.protein + " g Eiweiß" + (x.fat !== undefined ? " · " + x.fat + " g Fett" : "") + (x.sugar !== undefined ? " · " + x.sugar + " g Zucker" : "");
      li.appendChild(a); li.appendChild(b); ul.appendChild(li);
    });
    ul.hidden = !pasted.length;
    var t = $("#mPaste").value.trim();
    if (t && !pasted.length){ var li2 = document.createElement("li"); li2.className = "bad"; li2.textContent = "Keine Kalorien erkannt. Es braucht z. B. „Kalorien: 650“."; ul.appendChild(li2); ul.hidden = false; }
    $("#pAdd").disabled = !pasted.length; $("#pFav").disabled = !pasted.length;
    $("#pAdd").textContent = pasted.length > 1 ? pasted.length + " hinzufügen" : "Hinzufügen";
  }
  $("#mPaste").addEventListener("input", renderPaste);
  (function(){
    var top = false; try { top = window.self === window.top; } catch (e) {}
    var b = $("#pClip"); if (!b || !top || !navigator.clipboard || !navigator.clipboard.readText) return;
    b.hidden = false;
    b.addEventListener("click", function(){
      navigator.clipboard.readText().then(function(t){ if (t && t.trim()){ $("#mPaste").value = t.trim(); renderPaste(); } else toast("Zwischenablage ist leer."); }, function(){ toast("Kein Zugriff. Lange ins Feld tippen und Einfügen."); });
    });
  })();
  $("#pAdd").addEventListener("click", function(){
    if (!pasted.length) return;
    var nowIso = new Date().toISOString(), items = cleanItems(pasted.map(function(x){ return {name:x.name, amount:"", kcal:x.kcal, protein:x.protein, fat:x.fat, sugar:x.sugar, at:nowIso}; }));
    if (!items.length){ toast("Die Werte passen nicht."); return; }
    var btn = this; btn.disabled = true;
    var b0 = daySnap();
    saveFood(todayFood().concat(items)).then(function(){ return addWaterFor(items); }).then(function(wml){ $("#mPaste").value = ""; renderPaste(); feedToast(b0, foodHead(items) + (wml ? ", 💧 +" + wml + " ml" : "")); renderFood(); })
      .catch(function(e){ toast(errText(e)); btn.disabled = false; });
  });
  $("#pFav").addEventListener("click", function(){ pasted.forEach(addFav); saveFavs(); renderFavs(); toast("Gemerkt"); });
  function addFav(x){
    var nf = {id:uid6(), name:String(x.name).slice(0, 60), kcal:Math.round(x.kcal), protein:Math.round(x.protein || 0)};
    if (x.sugar !== undefined && x.sugar !== null) nf.sugar = Math.round(x.sugar); if (x.fat !== undefined && x.fat !== null) nf.fat = Math.round(x.fat);
    var i0 = -1; favs.forEach(function(f, i){ if (f.name.toLowerCase() === nf.name.toLowerCase()) i0 = i; });
    if (i0 >= 0){ nf.id = favs[i0].id; if (favs[i0].u) nf.u = favs[i0].u; favs[i0] = nf; } else favs.push(nf);
  }

  // ---------- Reiter ----------
  var FTAB = "paste";
  var FTAB_PREF = FTAB;
  function setTab(t){
    if (t === "ai" && $("#tabAi").hidden) t = "paste";
    FTAB = t;
    $$(".ftabs button").forEach(function(b){ b.setAttribute("aria-selected", String(b.dataset.t === t)); });
    $$(".fpane").forEach(function(p){ p.hidden = p.dataset.p !== t; });
  }
  $(".ftabs").addEventListener("click", function(ev){ var b = ev.target.closest("button[data-t]"); if (!b) return; setTab(b.dataset.t); FTAB_PREF = b.dataset.t; try { localStorage.setItem("ftab", b.dataset.t); } catch (e) {} });
  setTab(FTAB);

  var FOOD_FACTS = [
    "Pesto oder Soße: 1 EL ca. 50 kcal, kaum Eiweiß",
    "Gouda: 1 Scheibe (25 g) ca. 85 kcal, 6 g Eiweiß",
    "Salami: 1 Scheibe (10 g) ca. 35 kcal, 2 g Eiweiß",
    "Hähnchenfleisch gegart: pro 100 g ca. 150 kcal, 27 g Eiweiß",
    "Whey-Proteinpulver (Powerstar Premium Whey 90 Vanille): pro 100 g 385 kcal, 82,8 g Eiweiß, 3,2 g Fett, 3,8 g Kohlenhydrate; 1 Scoop ca. 30 g sind ca. 116 kcal und 25 g Eiweiß. Milch, Haferflocken und Zutaten extra rechnen.",
    "Fladenbrot mit Hähnchen (1 Fladenbrot, Hähnchen und Knoblauchsauce, so wie er es isst): 535 kcal und 35 g Eiweiß. Das gilt auch bei „bisschen Hähnchen“ oder „bisschen Knoblauchsauce“, rechne dafür nicht weniger.",
    "Mengenwörter wie „bisschen“ oder „etwas“ meinen seine normale Portion. Rechne dafür nicht weniger.",
    "Schokoriegel: ca. 230 kcal, 4 g Eiweiß",
    "Fladenbrot (libanesisch/arabisch, dünn, hell, Packung mit 5 Stück): 1 Stück hat 228 kcal und etwa 8,5 g Eiweiß",
    "Milch 1,5 %: pro 100 ml 47 kcal, 3,4 g Eiweiß",
    "Haferflocken: pro 100 g 370 kcal, 13,5 g Eiweiß; 1 Kelle ca. 45 g",
    "Halbes Grillhähnchen: ca. 600 kcal, 68 g Eiweiß"
  ];
  function foodPrompt(text, hasPhoto){
    var task = hasPhoto
      ? "Auf dem Foto ist eine Mahlzeit, ein Getränk oder ein Lebensmittel. Erkenne, was es ist, und schätze die Menge selbst grob ab, anhand von Teller, Besteck, Hand oder Verpackung. Frag nicht nach, sondern triff eine realistische Annahme. Ist eine Nährwerttabelle zu sehen, nutze ihre Werte." +
        (text ? "\n\nZusatzinfo vom Nutzer:\n\"\"\"\n" + text + "\n\"\"\"" : "")
      : "Mahlzeit:\n\"\"\"\n" + text + "\n\"\"\"";
    return "Du schätzt Kalorien und Eiweiß für einen Mann (1,84 m, 82 kg), der Muskeln aufbaut. Schätze realistisch: Nimm den mittleren Wert, weder höher noch niedriger. Die bekannten Werte unten nutze direkt.\n\n" +
      "Bekannte Werte von ihm, nutze sie, wenn das Lebensmittel passt:\n- " + FOOD_FACTS.join("\n- ") + "\n\n" +
      "Fasse zusammen statt aufzuteilen: Ein belegtes Brot, Sandwich oder Gericht ist EIN Eintrag, z. B. \"Fladenbrot mit Hähnchen\". Kleinigkeiten wie Soße, Dressing, Butter, Gewürze oder ein bisschen Salat oder Gemüse listest du nicht einzeln auf, sondern rechnest sie knapp in den passenden Haupteintrag mit ein. Benenne Einträge kurz und immer gleich, ohne Soße im Namen. Nur wirklich getrennte Lebensmittel und Getränke bekommen eigene Einträge. Bei zählbaren Dingen gib \"count\" an, die Anzahl Stück. Fehlt eine Menge, nimm eine übliche Portion an und schreibe die Annahme kurz in \"amount\". Nutze GENAU die Mengen, die er schreibt: 3 Scheiben Salami sind 3 Scheiben, rechne nicht mit anderen Mengen. Schreibe in \"amount\" kurz und vollständig, was gegessen wurde, mit Anzahl bei jedem Bestandteil, z. B. 1 Fladenbrot, 3 Scheiben Salami, 1 Scheibe Käse (höchstens 90 Zeichen). Schreibe nie nur \"1 Stück\", sondern immer, was es ist, z. B. \"1 Fladenbrot, Pesto, 2 Falafel\". Bei Getränken gib zusätzlich \"ml\" an, die Menge in Millilitern.\n\n" +
      "Antworte nur mit JSON in genau dieser Form:\n" +
      "{\"items\":[{\"name\":\"Fladenbrot mit Hähnchen\",\"amount\":\"2 Stück\",\"count\":2,\"kcal\":1000,\"protein\":60},{\"name\":\"Wasser\",\"amount\":\"1 Flasche\",\"kcal\":0,\"protein\":0,\"ml\":500}]}\n" +
      "\"kcal\" und \"protein\" sind ganze Zahlen. Gib bei jedem Eintrag zusätzlich \"sugar\" (Zucker in g), \"fat\" (Fett in g) und \"carbs\" (Kohlenhydrate in g) als ganze Zahlen an. \"name\" und \"amount\" kurz und auf Deutsch.\n\n" + task;
  }
  function sampleErr(e){
    var c = e && e.code;
    if (c === "not_granted"){ hideCalc(); return "Ohne Erlaubnis kann ich nicht rechnen. Trag die Werte unten selbst ein."; }
    if (c === "images_unavailable"){ $("#photoBtn").hidden = true; setPhoto(null); return "Fotos gehen hier nicht. Schreib stattdessen, was du gegessen hast."; }
    if (c === "image_rejected") return "Das Foto ging nicht. Nimm ein anderes, am besten JPG oder PNG.";
    if (c === "rate_limited") return "Gerade zu viele Anfragen. Versuch es gleich nochmal.";
    if (c === "invalid_json" || c === "empty_completion") return "Die Antwort war unklar. Tipp nochmal auf Berechnen.";
    if (c === "refused") return "Das konnte ich nicht berechnen. Schreib es etwas genauer.";
    if (c === "sampling_disabled" || c === "capability_disabled" || c === "capability_removed" || c === "not_declared"){ hideCalc(); return "Berechnen ist hier nicht verfügbar. Trag die Werte unten selbst ein."; }
    return "Berechnen hat nicht geklappt. Versuch es nochmal.";
  }
  function hideCalc(){ sampleOk = false; $("#tabAi").hidden = true; if (FTAB === "ai") setTab("paste"); }
  function setStatus(t){ $("#foodStatus").textContent = t || ""; }
  function renderPreview(){
    var box = $("#preview"), ul = $("#previewList");
    var hasFood = pending && pending.length, hasWater = pendingWater > 0;
    if (!hasFood && !hasWater){ box.hidden = true; return; }
    ul.innerHTML = ""; (pending || []).forEach(function(it){ ul.appendChild(foodRow(it, false)); });
    var s = sum(pending || []);
    $(".ptotal", box).hidden = !hasFood;
    $("#previewTotal").textContent = s.k.toLocaleString("de-DE") + " kcal, " + s.p + " g Eiweiß";
    var pw = $(".pwater", box);
    if (!pw){ pw = document.createElement("div"); pw.className = "pwater"; $(".ptotal", box).after(pw); }
    pw.hidden = !hasWater;
    pw.textContent = hasWater ? "Wasser " + liters(pendingWater) + " kommt in den Wasser-Tab" : "";
    box.hidden = false;
  }
  // Wasser in einem Getränk (z. B. "Whey mit 400 ml Wasser") zählt zum Wasser-Ziel
  function waterMl(it){
    var t = String((it && it.name) || "") + " " + String((it && it.amount) || "");
    var m = /(\d+(?:[.,]\d+)?)\s*(ml|l)\s+(?:[a-zäöü]+\s+)?wasser/i.exec(t); if (!m) return 0;
    var v = parseFloat(m[1].replace(",", ".")), ml = Math.round(m[2].toLowerCase() === "l" ? v * 1000 : v);
    return ml > 0 && ml <= 3000 ? ml : 0;
  }
  function addWaterFor(list){ var ml = list.reduce(function(a, it){ return a + waterMl(it); }, 0); return ml > 0 ? addWater(ml).then(function(){ renderWater(); return ml; }) : Promise.resolve(0); }
  function removeWaterFor(it){
    var ml = waterMl(it); if (!ml) return Promise.resolve();
    var log = todayWaterLog(), idx = -1; for (var i = log.length - 1; i >= 0; i--) if (log[i].ml === ml){ idx = i; break; }
    if (idx < 0) return Promise.resolve();
    return saveWater(log.slice(0, idx).concat(log.slice(idx + 1))).then(renderWater);
  }
  function isWaterItem(it){ return /wasser|sprudel/i.test(it.name) && it.kcal <= 10; }
  function mlOf(it){
    var m = clean(it.ml); if (m !== null && m > 0) return Math.round(m);
    var r = String(it.amount || "").replace(",", ".").match(/(\d+(?:\.\d+)?)\s*(ml|l)\b/i);
    if (r){ var v = parseFloat(r[1]); return Math.round(r[2].toLowerCase() === "l" ? v * 1000 : v); }
    return 0;
  }
  function setPhoto(file){
    if (photoUrl){ try { URL.revokeObjectURL(photoUrl); } catch (e) {} photoUrl = null; }
    photoFile = file || null;
    if (photoFile){ photoUrl = URL.createObjectURL(photoFile); $("#photoImg").src = photoUrl; $("#photoBox").hidden = false; }
    else { $("#photoImg").removeAttribute("src"); $("#photoBox").hidden = true; }
  }
  $("#photoBtn").addEventListener("click", function(){ $("#foodPhoto").click(); });
  $("#foodPhoto").addEventListener("change", function(){ var f = this.files && this.files[0]; setPhoto(f || null); this.value = ""; if (f) doCalc(); });
  $("#photoRm").addEventListener("click", function(){ setPhoto(null); });

  var calcBusy = false;
  function doCalc(){
    if (calcBusy) return;
    var btn = $("#foodCalc"), text = $("#foodText").value.trim(), photo = photoFile;
    if (!text && !photo){ toast("Schreib, was du gegessen hast, oder nimm ein Foto."); $("#foodText").focus(); return; }
    if (!sampleFn){ setStatus("Berechnen ist hier nicht verfügbar. Trag die Werte unten selbst ein."); return; }
    if (text.length > 600) text = text.slice(0, 600);
    calcBusy = true; btn.disabled = true; setStatus(photo ? "Schaue mir das Foto an …" : "Rechne …");
    var opts = photo ? {images: photo} : {modelTier:"quick"};
    Promise.resolve().then(function(){ return sampleFn.json(foodPrompt(text, !!photo), opts); }).then(function(data){
      var all = cleanItems(data && data.items !== undefined ? data.items : data);
      if (!all.length){ setStatus("Konnte nichts erkennen. Schreib es etwas genauer."); return; }
      pending = all.filter(function(it){ return !isWaterItem(it); });
      pendingWater = all.filter(isWaterItem).reduce(function(a, it){ return a + mlOf(it); }, 0);
      pendingTitle = text ? text.slice(0, 80) : "Foto";
      setStatus(""); renderPreview();
    }).catch(function(e){ setStatus(sampleErr(e)); }).then(function(){ calcBusy = false; btn.disabled = false; });
  }
  $("#foodCalc").addEventListener("click", doCalc);

  $("#previewAdd").addEventListener("click", function(){
    if (!(pending && pending.length) && !(pendingWater > 0)) return;
    var btn = this; btn.disabled = true;
    var g = uid6(), title = pendingTitle, ml = pendingWater;
    var add = (pending || []).map(function(it){ var o = {}; for (var k in it) o[k] = it[k]; o.g = g; o.gt = title; o.at = new Date().toISOString(); return o; });
    var b0 = daySnap(), p1 = add.length ? saveFood(todayFood().concat(add)) : Promise.resolve();
    p1.then(function(){ return ml > 0 ? addWater(ml) : null; }).then(function(){
      pending = null; pendingWater = 0; renderPreview(); $("#foodText").value = ""; setPhoto(null);
      feedToast(b0, add.length ? foodHead(add) + (ml > 0 ? ", 💧 +" + ml + " ml" : "") : waterHead(ml), add.length ? "food" : "water"); renderFood(); renderWater();
    }).catch(function(e){ toast(errText(e)); }).then(function(){ btn.disabled = false; });
  });
  $("#previewDrop").addEventListener("click", function(){ pending = null; pendingWater = 0; renderPreview(); });
  var favs = [], favRef = null, FAVKEY = "fav-v1";
  function cleanFavs(arr){ var out = []; (Array.isArray(arr) ? arr : []).forEach(function(f){ if (!f || typeof f.name !== "string") return; var k = Number(f.kcal), p = Number(f.protein); if (!isFinite(k) || !isFinite(p)) return; var o2 = {id:typeof f.id === "string" ? f.id.slice(0, 24) : uid6(), name:f.name.slice(0, 60), kcal:Math.round(k), protein:Math.round(p)};
      if (f.sugar !== undefined && f.sugar !== null && isFinite(Number(f.sugar))) o2.sugar = Math.round(Number(f.sugar));
      if (f.fat !== undefined && f.fat !== null && isFinite(Number(f.fat))) o2.fat = Math.round(Number(f.fat));
      var u = Number(f.u); if (isFinite(u) && u > 0) o2.u = Math.min(99999, Math.round(u));
      out.push(o2); }); return out.slice(0, 120); }
  try { favs = cleanFavs(JSON.parse(localStorage.getItem(FAVKEY) || "[]")); } catch (e) { favs = []; }
  var favEditOn = false, favAll = false;
  function renderFavs(){
    var box = $("#favList"); if (!box) return; box.innerHTML = "";
    var eb = $("#favEdit"), q = $("#favQ"), more = $("#favMore"), fm = $("#favMeta");
    if (fm) fm.textContent = favs.length ? favs.length + " gemerkt" : "";
    if (eb){ eb.hidden = !favs.length; if (!favs.length) favEditOn = false; eb.textContent = favEditOn ? "Fertig" : "Bearbeiten"; }
    box.classList.toggle("edit", favEditOn);
    q.hidden = favs.length <= 6;
    if (!favs.length){ var em = document.createElement("p"); em.className = "empty fempty"; em.textContent = "Tippe beim Eintragen auf ☆ Merken, dann steht es hier zum schnellen Hinzufügen."; box.appendChild(em); more.hidden = true; return; }
    var term = q.hidden ? "" : q.value.trim().toLowerCase();
    var list = favs.slice().sort(function(a, b){ return (b.u || 0) - (a.u || 0) || a.name.localeCompare(b.name, "de"); });
    if (term) list = list.filter(function(f){ return f.name.toLowerCase().indexOf(term) >= 0; });
    var LIMIT = 6, cut = !term && !favAll && !favEditOn && list.length > LIMIT;
    (cut ? list.slice(0, LIMIT) : list).forEach(function(f){
      var row = document.createElement("div"); row.className = "fcell";
      var b = document.createElement("button"); b.type = "button"; b.className = "ftile"; b.dataset.id = f.id; b.setAttribute("aria-label", f.name + " hinzufügen");
      var n = document.createElement("b"); n.textContent = f.name;
      var v = document.createElement("span"); v.textContent = f.kcal + " kcal · " + f.protein + " g";
      var pl = document.createElement("i"); pl.className = "fplus"; pl.setAttribute("aria-hidden", "true"); pl.textContent = "+";
      b.appendChild(n); b.appendChild(v); b.appendChild(pl); row.appendChild(b);
      if (favEditOn){ var d = document.createElement("button"); d.type = "button"; d.className = "favdel"; d.dataset.id = f.id; d.textContent = "×"; d.setAttribute("aria-label", f.name + " löschen"); row.appendChild(d); }
      box.appendChild(row);
    });
    if (term && !list.length){ var nf = document.createElement("p"); nf.className = "empty fempty"; nf.textContent = "Nichts gefunden."; box.appendChild(nf); }
    more.hidden = term || favEditOn || list.length <= LIMIT;
    more.textContent = favAll ? "Weniger anzeigen" : "Alle " + list.length + " anzeigen";
  }
  $("#favEdit").addEventListener("click", function(){ favEditOn = !favEditOn; renderFavs(); });
  $("#favMore").addEventListener("click", function(){ favAll = !favAll; renderFavs(); });
  $("#favQ").addEventListener("input", renderFavs);
  function saveFavs(){
    try { localStorage.setItem(FAVKEY, JSON.stringify(favs)); } catch (e) {}
    ready.then(function(){ if (mode === "db" && favRef) enqueue(function(){ return withRetry(function(){ return favRef.set({items:favs}); }); }).catch(function(e){ toast(errText(e)); }); });
  }
  renderFavs();
  $("#favList").addEventListener("click", function(ev){
    var del = ev.target.closest(".favdel"), add = ev.target.closest(".ftile");
    function byId(id){ for (var i = 0; i < favs.length; i++) if (favs[i].id === id) return i; return -1; }
    if (del){ var di = byId(del.dataset.id); if (di >= 0){ favs.splice(di, 1); saveFavs(); renderFavs(); } return; }
    if (add){
      var fi = byId(add.dataset.id); if (fi < 0) return; var f = favs[fi];
      if (favEditOn) return;
      var items = cleanItems([{name:f.name, amount:"", kcal:f.kcal, protein:f.protein, sugar:f.sugar, fat:f.fat, at:new Date().toISOString()}]);
      add.classList.add("hit"); setTimeout(function(){ add.classList.remove("hit"); }, 350);
      var b0 = daySnap();
      saveFood(todayFood().concat(items)).then(function(){ f.u = (f.u || 0) + 1; saveFavs(); return addWaterFor([f]); }).then(function(wml){ feedToast(b0, foodHead(items) + (wml ? ", 💧 +" + wml + " ml" : "")); renderFood(); renderFavs(); }).catch(function(e){ toast(errText(e)); });
    }
  });
  $("#mFav").addEventListener("click", function(){
    var name = $("#mName").value.trim(), k = num($("#mK").value), p = num($("#mP").value);
    if (!name || k === null || p === null){ toast("Bitte Name, kcal und Eiweiß eintragen."); return; }
    var i0 = -1; favs.forEach(function(f, i){ if (f.name.toLowerCase() === name.toLowerCase()) i0 = i; });
    var nf = {id:uid6(), name:name.slice(0, 60), kcal:Math.round(k), protein:Math.round(p)};
    var sv0 = num($("#mS").value), fv0 = num($("#mF").value); if (sv0 !== null) nf.sugar = Math.round(sv0); if (fv0 !== null) nf.fat = Math.round(fv0);
    if (i0 >= 0) favs[i0] = nf; else favs.push(nf);
    saveFavs(); renderFavs(); toast("Gemerkt");
  });
  function parseMealText(text){
    var lines = text.split(/\n/).map(function(l){ return l.trim(); }).filter(function(l){ return l.length; });
    var vals = {kcal:null, protein:null, fat:null, sugar:null};
    var title = "";
    var labelRe = { kcal:/^(kalorien|kcal|energie)/i, protein:/^(protein|eiwei(ß|ss))/i, fat:/^fett/i, sugar:/^zucker/i };
    var numFrom = function(s){ var m = /(\d+(?:[.,]\d+)?)/.exec(s); if (!m) return null; var n = parseFloat(m[1].replace(",", ".")); return isFinite(n) ? n : null; };
    lines.forEach(function(line){
      var matched = false;
      Object.keys(labelRe).forEach(function(k){ if (labelRe[k].test(line)){ vals[k] = numFrom(line); matched = true; } });
      if (!matched && !title) title = line.replace(/:$/, "");
    });
    if (vals.kcal === null && vals.protein === null && vals.fat === null && vals.sugar === null){
      var nums = (text.match(/\d+(?:[.,]\d+)?/g) || []).map(function(n){ return parseFloat(n.replace(",", ".")); });
      if (nums.length >= 2){ vals.kcal = nums[0]; vals.protein = nums[1]; if (nums[2] !== undefined) vals.fat = nums[2]; if (nums[3] !== undefined) vals.sugar = nums[3]; }
    }
    return {name:title, kcal:vals.kcal, protein:vals.protein, fat:vals.fat, sugar:vals.sugar};
  }
  var mPasteBtn0 = $("#mPasteBtn");
  if (mPasteBtn0) mPasteBtn0.addEventListener("click", function(){
    if (!navigator.clipboard || !navigator.clipboard.readText){ toast("Zwischenablage hier nicht verfügbar, bitte einfügen."); return; }
    navigator.clipboard.readText().then(function(t){ if (t && t.trim()){ $("#mPaste").value = t; toast("Eingefügt."); } else toast("Zwischenablage ist leer."); }).catch(function(){ toast("Kein Zugriff auf die Zwischenablage, bitte einfügen."); });
  });
  var mParseBtn = $("#mParse"); if (mParseBtn) mParseBtn.addEventListener("click", function(){
    try {
      var raw = $("#mPaste").value;
      if (!raw.trim()){ toast("Erst Text einfügen."); return; }
      var r = parseMealText(raw);
      if (r.kcal === null && r.protein === null){ toast("Konnte nichts erkennen. Bitte Format prüfen."); return; }
      if (r.name) $("#mName").value = r.name;
      if (r.kcal !== null) $("#mK").value = Math.round(r.kcal);
      if (r.protein !== null) $("#mP").value = Math.round(r.protein);
      if (r.fat !== null) $("#mF").value = Math.round(r.fat);
      if (r.sugar !== null) $("#mS").value = Math.round(r.sugar);
      $("#mPaste").value = "";
      var sum2 = [r.kcal !== null ? Math.round(r.kcal) + " kcal" : null, r.protein !== null ? Math.round(r.protein) + " g Eiweiß" : null, r.fat !== null ? Math.round(r.fat) + " g Fett" : null, r.sugar !== null ? Math.round(r.sugar) + " g Zucker" : null].filter(Boolean).join(", ");
      toast("Erkannt: " + sum2);
    } catch (e) { toast("Fehler beim Lesen: " + (e && e.message ? e.message : "unbekannt")); }
  });
  $("#mAdd").addEventListener("click", function(){
    var name = $("#mName").value.trim(), k = num($("#mK").value), p = num($("#mP").value);
    if (!name || k === null || p === null){ toast("Bitte Name, kcal und Eiweiß eintragen."); return; }
    var items = cleanItems([{name:name, amount:"", kcal:k, protein:p, sugar:num($("#mS").value), fat:num($("#mF").value), at:new Date().toISOString()}]);
    if (!items.length){ toast("Die Werte passen nicht."); return; }
    var b0 = daySnap();
    saveFood(todayFood().concat(items)).then(function(){ $("#mName").value = ""; $("#mK").value = ""; $("#mP").value = ""; $("#mS").value = ""; $("#mF").value = ""; feedToast(b0, foodHead(items)); renderFood(); })
      .catch(function(e){ toast(errText(e)); });
  });
  var openFood = null, foodAll = false, editFood = null, feFactor = 1;
  $("#todayMore").addEventListener("click", function(){ foodAll = !foodAll; renderFood(); });
  $("#foodToday").addEventListener("click", function(ev){
    var fe = ev.target.closest(".fed");
    if (fe){ editFood = editFood === fe.dataset.ed ? null : fe.dataset.ed; feFactor = 1; renderFood(); var fk = editFood && $("#foodToday .fe-k"); if (fk) fk.focus(); return; }
    var fmb = ev.target.closest(".fe-m button");
    if (fmb){ var fbox = fmb.closest(".fedit"), m0 = Number(fmb.dataset.m), ik = $(".fe-k", fbox), ip = $(".fe-p", fbox); ik.value = String(Math.round((num(ik.value) || 0) * m0)); ip.value = String(Math.round((num(ip.value) || 0) * m0)); feFactor *= m0; return; }
    if (ev.target.closest(".fe-save")){
      var fb = ev.target.closest(".fedit"), nk = num($(".fe-k", fb).value), np = num($(".fe-p", fb).value);
      if (nk === null || np === null || nk < 0 || nk > 5000 || np < 0 || np > 400){ toast("Bitte kcal und Eiweiß prüfen."); return; }
      var curF = todayFood(), f0 = feFactor, idE = editFood;
      var nextF = curF.map(function(x){ if (x.id !== idE) return x; var o = {}; for (var k in x) o[k] = x[k]; o.kcal = Math.round(nk); o.protein = Math.round(np);
        if (f0 !== 1){ if (o.fat !== undefined) o.fat = Math.round(o.fat * f0 * 10) / 10; if (o.sugar !== undefined) o.sugar = Math.round(o.sugar * f0 * 10) / 10; if (o.carbs !== undefined) o.carbs = Math.round(o.carbs * f0 * 10) / 10; o.amount = ((o.amount || "") + " (×" + String(Math.round(f0 * 100) / 100).replace(".", ",") + ")").trim().slice(0, 100); }
        return o; });
      editFood = null; feFactor = 1;
      saveFood(nextF).then(function(){ toast("Geändert ✓"); renderFood(); }).catch(function(e){ toast(errText(e)); });
      return;
    }
    var tg = ev.target.closest(".frm");
    if (tg){ openFood = openFood === tg.dataset.row ? null : tg.dataset.row; renderFood(); return; }
    var fv = ev.target.closest(".fav");
    if (fv){ var it0 = todayFood().filter(function(x){ return x.id === fv.dataset.fav; })[0]; if (!it0) return; var per = it0.n > 1 ? it0.n : 1; addFav({name:it0.name.replace(/\s*\([^)]*\)\s*/g, " ").trim() || it0.name, kcal:it0.kcal / per, protein:it0.protein / per, fat:it0.fat !== undefined ? it0.fat / per : undefined, sugar:it0.sugar !== undefined ? it0.sugar / per : undefined}); saveFavs(); renderFavs(); toast("Gemerkt ☆"); return; }
    var ad = ev.target.closest(".add");
    if (ad){
      var cur0 = todayFood(), src = null;
      for (var j = cur0.length - 1; j >= 0; j--) if (cur0[j].id === ad.dataset.add){ src = cur0[j]; break; }
      if (!src) return;
      var cp = {}; for (var k in src) cp[k] = src[k];
      cp.id = uid6(); delete cp.g; delete cp.gt; cp.at = new Date().toISOString();
      if (src.n > 1){ cp.kcal = Math.round(src.kcal / src.n); cp.protein = Math.round(src.protein / src.n); cp.n = 1; cp.amount = "1 Stück"; }
      saveFood(cur0.concat([cp])).then(function(){ return addWaterFor([cp]); }).then(function(){ toast("+1 " + src.name); renderFood(); }).catch(function(e){ toast(errText(e)); });
      return;
    }
    var b = ev.target.closest(".rm"); if (!b) return;
    var cur = todayFood(), next;
    if (b.dataset.key){
      var idx = -1; for (var i = cur.length - 1; i >= 0; i--) if (cur[i].id === b.dataset.key){ idx = i; break; }
      if (idx < 0) return;
      next = cur.slice(0, idx).concat(cur.slice(idx + 1));
    } else next = cur.filter(function(it){ return it.id !== b.dataset.id; });
    var gone = cur.filter(function(it){ return next.indexOf(it) < 0; })[0];
    saveFood(next).then(function(){ return gone ? removeWaterFor(gone) : null; }).then(function(){ toast("Entfernt"); renderFood(); }).catch(function(e){ toast(errText(e)); });
  });

  // ---------- Wasser ----------
  var waterDays = [], waterCol = null, WKEY = "water-log-v1";
  function isTrainDay(){ return TRAIN_DAYS.indexOf(new Date().getDay()) >= 0; }
  function waterGoal(){ return PREFS.water; }
  function cleanLog(arr){
    return (Array.isArray(arr) ? arr : []).map(function(e){
      if (!e || typeof e !== "object") return null;
      var ml = clean(e.ml); if (ml === null || ml <= 0 || ml > 5000) return null;
      return {id: typeof e.id === "string" ? e.id.slice(0, 24) : uid6(), ml:Math.round(ml), at: typeof e.at === "string" ? e.at.slice(0, 40) : ""};
    }).filter(Boolean).slice(0, 200);
  }
  function todayWaterLog(){ var t = todayId(); for (var i = 0; i < waterDays.length; i++) if (waterDays[i].id === t) return waterDays[i].log; return []; }
  function mlSum(log){ return log.reduce(function(a, e){ return a + e.ml; }, 0); }
  function liters(ml){ return (ml / 1000).toLocaleString("de-DE", {minimumFractionDigits:1, maximumFractionDigits:2}) + " l"; }
  function waterFromLocal(o){ return Object.keys(o).filter(isDateId).sort().reverse().slice(0, 400).map(function(id){ return {id:id, log:cleanLog(o[id] && o[id].log)}; }); }
  function saveWater(log){
    var id = todayId(), body = {date:id, ml:mlSum(log), log:log};
    return ready.then(function(){
      if (mode === "local"){
        var o = loadLocal(WKEY) || {}; o[id] = body;
        if (!writeLocal(WKEY, o)) return Promise.reject({code:"local_failed"});
        waterDays = waterFromLocal(o); renderWater(); return;
      }
      if (mode !== "db" || !waterCol) return Promise.reject({code:"readonly"});
      return enqueue(function(){ return withRetry(function(){ return waterCol.doc(id).set(body); }); });
    });
  }
  function addWater(ml){ return saveWater(todayWaterLog().concat([{id:uid6(), ml:Math.round(ml), at:new Date().toISOString()}])); }
  function renderWater(){
    var log = todayWaterLog(), ml = mlSum(log), goal = waterGoal(), pct = Math.min(1, ml / goal);
    $("#wNow").textContent = liters(ml);
    $("#wGoal").textContent = "von " + liters(goal);
    $("#wLeft").textContent = ml >= goal ? "Ziel erreicht 💧" : "Noch " + liters(goal - ml);
    $("#wFill").style.transform = "translateY(" + (186 * (1 - pct)).toFixed(1) + "px)";
    $("#stW").textContent = liters(ml); var wb = $("#stWb"); wb.style.width = (pct * 100) + "%"; wb.classList.toggle("full", ml >= goal); renderScores();
    $("#wUndo").disabled = !log.length || !canEdit();
    var ul = $("#wWeek"); if (!ul) return; ul.innerHTML = "";
    var d0 = new Date(), sumMl = 0, n = 0;
    for (var i = 0; i < 7; i++){
      var d = new Date(d0); d.setDate(d0.getDate() - i); var id = dayId(d), wd = null;
      for (var j = 0; j < waterDays.length; j++) if (waterDays[j].id === id) wd = waterDays[j];
      if (!wd || !wd.log.length) continue;
      var t = mlSum(wd.log); sumMl += t; n++;
      var li = document.createElement("li");
      var a = document.createElement("span"); a.textContent = id === todayId() ? "Heute" : dateShort(id);
      var b = document.createElement("span"); b.className = "k"; b.textContent = liters(t);
      li.appendChild(a); li.appendChild(b); ul.appendChild(li);
    }
    if (n){
      var avg = document.createElement("li"); avg.className = "avg";
      var a2 = document.createElement("span"); a2.textContent = "Schnitt";
      var b2 = document.createElement("span"); b2.className = "k"; b2.textContent = liters(Math.round(sumMl / n));
      avg.appendChild(a2); avg.appendChild(b2); ul.appendChild(avg);
      $("#wWeekMeta").textContent = "Schnitt " + liters(Math.round(sumMl / n));
    } else {
      var e = document.createElement("li"); e.className = "empty"; e.style.display = "block"; e.textContent = "Hier siehst du deine Tage, sobald du Wasser einträgst."; ul.appendChild(e);
      $("#wWeekMeta").textContent = "";
    }
  }
  $(".wbtns").addEventListener("click", function(ev){
    var b = ev.target.closest("button[data-ml]"); if (!b) return;
    var ml = Number(b.dataset.ml);
    var b0 = daySnap();
    addWater(ml).then(function(){ feedToast(b0, waterHead(ml), "water"); renderWater(); }).catch(function(e){ toast(errText(e)); });
  });
  $("#wAddC").addEventListener("click", function(){
    var v = num($("#wCustom").value);
    if (v === null || v <= 0 || v > 5000){ toast("Menge in ml eintragen, z. B. 330."); $("#wCustom").focus(); return; }
    var b0 = daySnap();
    addWater(v).then(function(){ $("#wCustom").value = ""; feedToast(b0, waterHead(v), "water"); renderWater(); }).catch(function(e){ toast(errText(e)); });
  });
  $("#wUndo").addEventListener("click", function(){
    var log = todayWaterLog(); if (!log.length) return;
    saveWater(log.slice(0, -1)).then(function(){ toast("Rückgängig gemacht"); renderWater(); }).catch(function(e){ toast(errText(e)); });
  });

  // ---------- Schlaf ----------
  function sleepMin(from, to){ var a = from.split(":").map(Number), b = to.split(":").map(Number); var d = (b[0] * 60 + b[1]) - (a[0] * 60 + a[1]); if (d <= 0) d += 1440; return d; }
  function cleanSleep(v){
    if (!v || typeof v !== "object") return null;
    var re = /^\d{2}:\d{2}$/; if (!re.test(v.from) || !re.test(v.to)) return null;
    var m = sleepMin(v.from, v.to); if (m < 60 || m > 960) return null;
    return {from:v.from, to:v.to, min:m};
  }
  function hrs(min){ return (Math.round(min / 6) / 10).toLocaleString("de-DE") + " h"; }
  var sleepDirty = false;
  var slNight = new Date().getHours() >= 18 ? "next" : "last";
  function slWakeId(){ var d = new Date(); if (slNight === "next") d.setDate(d.getDate() + 1); return dayId(d); }
  function wdName(dt){ return dt.toLocaleDateString("de-DE", {weekday:"long"}); }
  function renderSleep(){
    var t = new Date(), y = new Date(), tm = new Date(); y.setDate(t.getDate() - 1); tm.setDate(t.getDate() + 1);
    $$("#slSeg button").forEach(function(b){
      var isL = b.dataset.n === "last", fromD = isL ? y : t, toD = isL ? t : tm, wk = dayId(toD), got = false;
      for (var q2 = 0; q2 < sessions.length; q2++) if (sessions[q2].id === wk && sessions[q2].sl) got = true;
      var sh = function(d){ return d.toLocaleDateString("de-DE", {weekday:"short"}).replace(".", ""); };
      b.innerHTML = "<b>" + (isL ? "Letzte Nacht" : "Heute Nacht") + (got ? " ✓" : "") + "</b><small>" + sh(fromD) + " → " + sh(toD) + "</small>";
      b.setAttribute("aria-pressed", String(b.dataset.n === slNight));
    });
    var wid = slWakeId(), ses = null, i;
    for (i = 0; i < sessions.length; i++) if (sessions[i].id === wid) ses = sessions[i];
    var sl = ses && ses.sl;
    if (!sleepDirty){
      var last = sl;
      if (!last) for (i = 0; i < sessions.length; i++) if (sessions[i].sl){ last = sessions[i].sl; break; }
      $("#slFrom").value = last ? last.from : "23:00"; $("#slTo").value = last ? last.to : "07:00";
    }
    var pv = cleanSleep({from:$("#slFrom").value, to:$("#slTo").value});
    $("#slDur").innerHTML = sl && !sleepDirty ? slHtml(sl.min) : pv ? slHtml(pv.min) : "";
    $("#slSave").textContent = "Speichern";
  }
  $("#slSeg").addEventListener("click", function(ev){ var b = ev.target.closest("button[data-n]"); if (!b) return; slNight = b.dataset.n; sleepDirty = false; renderSleep(); });
  function slPreview(){ sleepDirty = true; var pv = cleanSleep({from:$("#slFrom").value, to:$("#slTo").value}); $("#slDur").innerHTML = pv ? slHtml(pv.min) : ""; }
  $("#slFrom").addEventListener("input", slPreview);
  $("#slTo").addEventListener("input", slPreview);
  $("#slSave").addEventListener("click", function(){
    var v = cleanSleep({from:$("#slFrom").value, to:$("#slTo").value});
    if (!v){ toast("Bitte Uhrzeiten prüfen."); return; }
    saveSessionPatch({sl:{from:v.from, to:v.to}}, slWakeId()).then(function(){ sleepDirty = false; var sc = sleepScore(v.min); toast((sc >= 8 ? "😴 " : sc >= 5 ? "🙂 " : "🥱 ") + hrs(v.min) + " Schlaf · " + f1(sc) + "/10" + (sc < 5 ? " · heute ruhig angehen" : sc >= 9.5 ? " · top erholt" : "")); renderTraining(); }).catch(function(e){ toast(errText(e)); });
  });

  // ---------- Tagesbewertung ----------
  var GROUPS = [["Rücken", ["latzug", "rudern", "kabelrudern"]], ["Schulter", ["seitheben", "reverse_fly", "schulterpresse", "facepull"]], ["Arme", ["preacher", "trizeps_oh", "hammer", "rope", "reverse"]], ["Brust", ["butterfly", "brustpresse", "brustpresse_m"]], ["Beine", ["beinstrecker", "waden", "beinpresse", "beinbeuger", "kniebeuge", "rdl", "hipthrust", "adduktoren"]]];
  function prevKg(exId, beforeId){
    for (var i = 0; i < sessions.length; i++){
      var s = sessions[i]; if (s.id >= beforeId || !isTrainId(s.id)) continue;
      var e = s.entries && s.entries[exId]; if (e && firstKg(e) !== null) return firstKg(e);
    }
    return null;
  }
  function dayScore(id){
    var fd = null, wd = null, ses = null, i;
    for (i = 0; i < foodDays.length; i++) if (foodDays[i].id === id) fd = foodDays[i];
    for (i = 0; i < waterDays.length; i++) if (waterDays[i].id === id) wd = waterDays[i];
    for (i = 0; i < sessions.length; i++) if (sessions[i].id === id) ses = sessions[i];
    var f = sum(fd ? fd.items : []), ml = wd ? mlSum(wd.log) : 0, today = id === todayId();
    var entQ = ses && ses.entries ? ses.entries : {};
    var isTrain = id === todayId() ? TRAIN_DAYS.indexOf(dateOf(id).getDay()) >= 0 : sessionDone(id) >= 5, wg = waterGoal();
    var ent = ses && ses.entries ? ses.entries : {};
    var plannedN = planList(dateOf(id).getDay()).filter(function(e){ return e.kind !== "time"; }).length;
    var doneIds = ALLSTR.filter(function(ex){ return ent[ex.id]; }).map(function(ex){ return ex.id; });
    var tr = Math.min(1, doneIds.length / plannedN), kr = f.k / GOAL_KCAL, prog = 0, easy = 0, rated = 0;
    doneIds.forEach(function(x){
      var k = firstKg(ent[x]), pk = prevKg(x, id); if (k !== null && pk !== null && k > pk) prog++;
      var r = rating(ent[x].rating); if (r){ rated++; if (r === "leicht") easy++; }
    });
    var tPts = 2;
    if (isTrain){ tPts = tr >= 0.9 ? 1.5 : tr >= 0.6 ? 1 : tr >= 0.3 ? 0.5 : 0; if (tr > 0 && (prog > 0 || (rated && easy / rated < 0.5))) tPts += 0.5; }
    var sl = ses && ses.sl ? ses.sl : null;
    var score = Math.min(10, Math.round((Math.min(1, f.p / GOAL_PROT) * 5 + (kr >= 0.85 ? 2 : kr >= 0.7 ? 1 : 0) + Math.min(1, ml / wg) + tPts) * 10) / 10);
    var pm = Math.round(GOAL_PROT - f.p);
    var parts = [pm <= 10 ? "Eiweiß gut" : today ? "Noch " + pm + " g Eiweiß" : (f.p >= GOAL_PROT * 0.7 ? "Eiweiß knapp, −" : "Eiweiß zu wenig, −") + pm + " g"];
    if (isTrain){
      if (!doneIds.length) parts.push(today ? "Training offen" : "Training fehlt");
      else {
        var miss = GROUPS.filter(function(g){ return g[1].every(function(x){ return !ent[x]; }); }).map(function(g){ return g[0]; });
        if (miss.length) parts.push(miss.join(" und ") + (miss.length > 1 || /e$/.test(miss[0]) && miss[0] !== "Schulter" ? " fehlen" : " fehlt"));
        else if (rated && easy / rated >= 0.5) parts.push("Gewichte zu leicht");
        else parts.push(prog ? "Training stark" : tr >= 0.9 ? "Training komplett" : "Training fast komplett");
      }
    } else if (f.k > 0 && kr < 0.7 && !today) parts.push("zu wenig gegessen");
    if (sl) parts.push(sl.min < 390 ? "nur " + hrs(sl.min) + " Schlaf" : "Schlaf " + hrs(sl.min));
    var tTxt = !doneIds.length ? (today ? "noch offen" : "ausgefallen")
      : (function(){ var mi = GROUPS.filter(function(g){ return g[1].every(function(x){ return !ent[x]; }); }).map(function(g){ return g[0]; });
          if (mi.length) return mi.join(" und ") + (mi.length > 1 || mi[0] === "Arme" || mi[0] === "Beine" ? " fehlen" : " fehlt");
          if (rated && easy / rated >= 0.5) return "Gewichte zu leicht";
          return prog ? "stark, mehr Gewicht" : tr >= 0.9 ? "komplett" : "fast komplett"; })();
    var lines = [["Essen", f.k ? (pm <= 10 ? "Eiweiß gut" : f.p >= GOAL_PROT * 0.7 ? "Eiweiß knapp" : "Eiweiß zu wenig") + ", " + (kr >= 0.85 ? "Kalorien passen" : kr >= 0.7 ? "etwas wenig gegessen" : "zu wenig gegessen") : "nichts eingetragen"]];
    if (isTrain) lines.push(["Training", tTxt]);
    lines.push(["Schlaf", sl ? (sl.min < 360 ? "zu kurz" : sl.min < 420 ? "etwas kurz" : sl.min <= 570 ? "gut" : "sehr lang") : "nicht eingetragen"]);
    lines.push(["Wasser", ml ? (ml >= wg ? "gut" : ml >= wg * 0.7 ? "fast geschafft" : "zu wenig") : "nicht eingetragen"]);
    return {trMin: (ses && ses.tr && ses.tr.s && ses.tr.e) ? Math.round((Date.parse(ses.tr.e) - Date.parse(ses.tr.s)) / 60000) : null, score:score, kcal:f.k, prot:f.p, ml:ml, sl:sl, isTrain:isTrain, tTxt:tTxt, wg:wg, lines:lines, text: parts.join(", ") + (score >= 9 ? " 💪" : ""), has: !!((fd && fd.items.length) || ml || (ses && (doneIds.length || ses.note || ses.sl)))};
  }
  function hlDay(id){
    var li = $('#daysList li[data-id="' + id + '"]'); if (!li) return;
    var d = li.closest("details"); if (d && !d.open) d.open = true;
    $$("#daysList li.hl").forEach(function(x){ x.classList.remove("hl"); });
    li.classList.add("hl");
    $$("#wkChart .bcol").forEach(function(c){ c.classList.toggle("sel", c.dataset.id === id); });
    setTimeout(function(){ li.scrollIntoView({behavior:"smooth", block:"center"}); }, 60);
  }
  function f1(n){ return Number(n).toLocaleString("de-DE", {maximumFractionDigits:1}); }
  function slHtml(min){ var sc = sleepScore(min); return '<b class="slb ' + (sc >= 8 ? "g" : sc >= 5 ? "y" : "r") + '">Schlaf ' + f1(sc) + '/10</b> ' + hrs(min); }
  function sleepScore(min){ var g = PREFS.sleep, h = min / 60, sc = h < g ? 10 - (g - h) * 2.5 : h > g + 2.5 ? 10 - (h - g - 2.5) * 2 : 10; return Math.max(0, Math.round(sc * 10) / 10); }
  function renderBWProg(){
    var list = sessions.filter(function(x){ return x.bw > 0 && x.id <= todayId(); }).slice().sort(function(a, b){ return a.id < b.id ? -1 : 1; });
    var due0 = WEIGH_DAY >= 0 && (!list.length || weighDue(list[list.length - 1].id)), isWD = new Date().getDay() === WEIGH_DAY, due = due0 && isWD;
    var c = $("#bwDue"); if (c) c.hidden = !due;
    var dot = $("#tabDot"); if (dot) dot.hidden = !due;
    var wn = $("#weighNote");
    if (wn){
      var dd = list.length ? Math.round((dateOf(todayId()) - dateOf(list[list.length - 1].id)) / 86400000) : 0;
      wn.textContent = due0 && !isWD ? "⚖️ Wiegen diese Woche verpasst" + (list.length ? " (zuletzt vor " + dd + " Tagen)" : "") + ". Nächstes Mal " + DAYLONG[WEIGH_DAY] + (TRAIN_DAYS.indexOf(WEIGH_DAY) >= 0 ? " vor dem Training." : ".") : "";
      wn.hidden = !wn.textContent;
    }
    renderBody();
    var el = $("#bwProg"); if (!el) return;
    if (!list.length){ el.textContent = "Noch kein Gewicht eingetragen."; return; }
    var first = list[0].bw, last = list[list.length - 1].bw, d = Math.round((last - first) * 10) / 10;
    el.innerHTML = "<b>" + fmt(last) + " kg</b>" + (list.length > 1 ? ", seit " + dateShort(list[0].id) + " " + (d > 0 ? "+" : "") + fmt(d) + " kg" : "");
  }
  function renderBody(){
    if (!$("#bwNow")) return;
    var t0 = todayId(), list = sessions.filter(function(x){ return x.bw > 0 && x.id <= t0; }).slice().sort(function(a, b){ return a.id < b.id ? -1 : 1; });
    var last = list.length ? list[list.length - 1] : null, tr = $("#bwTrend"), pwG = null;
    $("#bwNow").textContent = last ? fmt(last.bw) : "–";
    tr.className = "kw-trend"; tr.innerHTML = "";
    if (!last){ tr.textContent = ""; }
    else if (list.length === 1){ tr.textContent = "Erster Eintrag, " + dateShort(last.id); }
    else {
      var ref = null; for (var i = list.length - 2; i >= 0; i--){ if ((dateOf(last.id) - dateOf(list[i].id)) / 86400000 >= 6){ ref = list[i]; break; } }
      if (!ref) ref = list[0];
      var days = Math.max(1, Math.round((dateOf(last.id) - dateOf(ref.id)) / 86400000)), pw = (last.bw - ref.bw) / days * 7, pwr = Math.round(pw * 10) / 10; pwG = pw;
      var good = pw >= 0.1 && pw <= 0.6, b1 = document.createElement("b"); b1.textContent = (pwr > 0 ? "+" : "") + fmt(pwr) + " kg / Woche";
      var s1 = document.createElement("span"); s1.textContent = good ? "Gut für Muskelaufbau" : pw < 0.1 ? "Zu wenig, mehr essen" : "Etwas schnell";
      tr.appendChild(b1); tr.appendChild(s1); tr.classList.add(good ? "good" : "warn");
    }
    var gEl = $("#bwGoal");
    if (gEl){
      var g = PREFS.goalBw;
      if (g && last){
        var diff = Math.round((g - last.bw) * 10) / 10, wks = pwG && Math.abs(pwG) >= 0.05 && diff / pwG > 0 ? Math.ceil(diff / pwG) : null;
        gEl.textContent = Math.abs(diff) < 0.15 ? "🎯 Zielgewicht " + fmt(g) + " kg erreicht" : "🎯 Ziel " + fmt(g) + " kg · noch " + (diff > 0 ? "+" : "−") + fmt(Math.abs(diff)) + " kg" + (wks && wks <= 104 ? " · bei diesem Tempo in ca. " + wks + (wks === 1 ? " Woche" : " Wochen") : "");
        gEl.hidden = false;
      } else gEl.hidden = true;
    }
    var sp = list.slice(-12), sw = $("#bwSparkW");
    sw.hidden = sp.length < 2;
    if (sp.length >= 2){
      var mn = Math.min.apply(null, sp.map(function(x){ return x.bw; })), mx = Math.max.apply(null, sp.map(function(x){ return x.bw; })), rg = (mx - mn) || 1;
      var pts = sp.map(function(x, i){ return [(i / (sp.length - 1) * 300).toFixed(1), (6 + (1 - (x.bw - mn) / rg) * 48).toFixed(1)]; });
      var line = pts.map(function(p, i){ return (i ? "L" : "M") + p[0] + "," + p[1]; }).join(" ");
      $("#bwSpark").innerHTML = '<path class="ka" d="' + line + ' L300,60 L0,60 Z"/><path class="kl" d="' + line + '"/>';
      $("#bwSparkL").textContent = dateShort(sp[0].id) + " · " + fmt(sp[0].bw) + " kg  →  " + fmt(sp[sp.length - 1].bw) + " kg";
    }
    var ids = [], d0 = new Date(); for (var k = 6; k >= 0; k--){ var dd = new Date(d0); dd.setDate(d0.getDate() - k); ids.push(dayId(dd)); }
    var wd = function(id){ return dateOf(id).toLocaleDateString("de-DE", {weekday:"short"}).replace(".", "").slice(0, 2); };
    var wg = waterGoal(), wv = ids.map(function(id){ var m = 0; waterDays.forEach(function(x){ if (x.id === id) m = mlSum(x.log); }); return m; });
    var wmax = Math.max(wg * 1.2, Math.max.apply(null, wv));
    $("#wMini").innerHTML = '<div class="mgoal" style="bottom:calc(18px + (100% - 18px) * ' + (wg / wmax).toFixed(3) + ')"></div>' + ids.map(function(id, i){
      return '<div class="mcol' + (id === t0 ? " today" : "") + '"><span class="mv">' + (wv[i] ? (Math.round(wv[i] / 100) / 10).toLocaleString("de-DE") : "") + '</span><i class="mb' + (wv[i] >= wg ? " ok" : "") + '" style="height:calc((100% - 34px) * ' + (wv[i] / wmax).toFixed(3) + ')"></i><span class="ml">' + wd(id) + '</span></div>';
    }).join("");
    var sv = ids.map(function(id){ var m = null; sessions.forEach(function(x){ if (x.id === id && x.sl) m = x.sl.min; }); return m; });
    var smax = Math.max(600, Math.max.apply(null, sv.map(function(v){ return v || 0; })));
    $("#slMini").innerHTML = '<div class="mgoal" style="bottom:calc(18px + (100% - 18px) * ' + (PREFS.sleep * 60 / smax).toFixed(3) + ')"></div>' + ids.map(function(id, i){
      var v = sv[i], sc = v ? sleepScore(v) : 0;
      return '<div class="mcol' + (id === t0 ? " today" : "") + '"><span class="mv">' + (v ? (Math.round(v / 6) / 10).toLocaleString("de-DE") : "") + '</span><i class="mb s ' + (v ? (sc >= 8 ? "g" : sc >= 5 ? "y" : "r") : "") + '" style="height:calc((100% - 34px) * ' + ((v || 0) / smax).toFixed(3) + ')"></i><span class="ml">' + wd(id) + '</span></div>';
    }).join("");
    var got = sv.filter(function(v){ return v; });
    $("#slAvg").textContent = got.length ? "Ø " + hrs(Math.round(got.reduce(function(a, b){ return a + b; }, 0) / got.length)) + " · 7 Nächte" : "";
    var log = todayWaterLog(), lastAt = null; log.forEach(function(e){ if (e.at) lastAt = e.at; });
    $("#wLast").textContent = log.length ? log.length + "× getrunken" + (lastAt && !isNaN(Date.parse(lastAt)) ? ", zuletzt " + new Date(lastAt).toLocaleTimeString("de-DE", {hour:"2-digit", minute:"2-digit"}) : "") : "";
  }
  // Sonntags ein kurzer Satz zur Woche
  function weekSentence(){
    var ids = [], d0 = new Date(); for (var i = 6; i >= 0; i--){ var d = new Date(d0); d.setDate(d0.getDate() - i); ids.push(dayId(d)); }
    var days = ids.map(function(id){ return dayScore(id); });
    var all = trainSessions(), wk = all.filter(function(x){ return x.id >= ids[0] && x.id <= ids[6]; });
    var trained = wk.length, planned = TRAIN_DAYS.length || 0;
    var fed = days.filter(function(x){ return x.kcal > 0; }), protOk = fed.filter(function(x){ return x.prot >= GOAL_PROT - 10; }).length;
    var sl = days.filter(function(x){ return x.sl; }), avgSl = sl.length ? sl.reduce(function(a, x){ return a + x.sl.min; }, 0) / sl.length : null;
    var ups = 0, prs = 0; wk.forEach(function(x){ exRowsFor(x, all).forEach(function(r){ if (r.tr.cls === "up") ups++; if (r.tr.cls === "pr"){ ups++; prs++; } }); });
    var bw = sessions.filter(function(x){ return x.bw > 0 && x.id >= ids[0] && x.id <= ids[6]; }).sort(function(a, b){ return a.id < b.id ? -1 : 1; });
    if (!trained && !fed.length && !sl.length) return "";
    var verdict = trained >= planned && planned && protOk >= 5 ? "Starke Woche 💪" : trained >= planned && planned ? "Gute Woche 👍" : trained ? "Solide Woche" : "Ruhige Woche";
    var facts = [trained + (planned ? " von " + planned : "") + (trained === 1 ? " Training" : " Trainings")];
    if (fed.length) facts.push(protOk + " " + (protOk === 1 ? "Tag" : "Tage") + " genug Eiweiß");
    if (ups) facts.push(prs === ups ? prs + (prs === 1 ? " neuer Rekord 🏆" : " neue Rekorde 🏆") : ups + "× stärker" + (prs ? ", davon " + prs + " Rekord" + (prs === 1 ? "" : "e") + " 🏆" : ""));
    if (bw.length > 1){ var dw = Math.round((bw[bw.length - 1].bw - bw[0].bw) * 10) / 10; facts.push("Gewicht " + (dw > 0 ? "+" : "") + fmt(dw) + " kg"); }
    var tip = planned && trained < planned ? "Nächste Woche: alle " + planned + " Trainings schaffen." : fed.length && protOk < 5 ? "Nächste Woche: jeden Tag auf 150 g Eiweiß kommen." : avgSl !== null && avgSl < 420 ? "Nächste Woche: früher schlafen (Ø " + hrs(Math.round(avgSl)) + ")." : "Genau so weiter!";
    var last = facts.pop();
    return verdict + ": " + (facts.length ? facts.join(", ") + " und " + last : last) + ". " + tip;
  }
  function renderWeekCard(){
    var sun = new Date().getDay() === 0, txt = sun ? weekSentence() : "";
    var c = $("#weekCard"); if (c){ c.hidden = !txt; $("#weekTxt").textContent = txt; }
    var v = $("#wkSum"); if (v) v.textContent = txt;
  }
  // Tagesart: Training, 1. Tag danach (Aufbau-Tag, am wichtigsten fürs Essen), 2. Tag danach, sonst Ruhetag
  function addDays(id, n){ var d = dateOf(id); d.setDate(d.getDate() + n); return dayId(d); }
  function trainedOn(id){ var x = sessionById(id); return !!(x && isRealSession(x)); }
  function dayType(id){ if (trainedOn(id)) return "train"; if (trainedOn(addDays(id, -1))) return "rest1"; if (trainedOn(addDays(id, -2))) return "rest2"; return "rest"; }
  function renderToday(t){
    var box = $("#todayStats"); if (!box) return;
    var wg = waterGoal(), tile = function(label, val, pc, cls){ return '<div class="st' + (cls ? " " + cls : "") + '"><span class="sl">' + label + '</span><b>' + val + '</b><i class="bar"><i class="' + (pc >= 100 ? "full" : "") + '" style="width:' + Math.min(100, Math.max(0, pc)).toFixed(0) + '%"></i></i></div>'; };
    box.innerHTML = tile("Kalorien", t.kcal.toLocaleString("de-DE"), t.kcal / GOAL_KCAL * 100) + tile("Eiweiß", t.prot + " g", t.prot / GOAL_PROT * 100, "p") + tile("Wasser", liters(t.ml), t.ml / wg * 100, "w") + tile("Schlaf", t.sl ? hrs(t.sl.min) : "–", t.sl ? sleepScore(t.sl.min) * 10 : 0, "s");
    var ts = todaySession(), done = PLAN.filter(function(ex){ return exDoneEntry(ex, todayEntry(ex.id)); }).length, any = ts && isRealSession(ts);
    var line = t.isTrain || any ? (done >= PLAN.length ? "💪 Training komplett" : any ? "🏋️ Training: " + done + " von " + PLAN.length + " Übungen" : "🏋️ Training noch offen") : "😌 Ruhetag";
    var tl = $("#todayLine"); tl.textContent = t.isTrain || any ? line : ""; tl.hidden = !tl.textContent;
    $("#tdMeta2").textContent = dateOf(todayId()).toLocaleDateString("de-DE", {weekday:"long", day:"numeric", month:"long"});
  }
  function renderScores(){
    var el = $("#dayScore"); if (!el) return;
    var late = new Date().getHours() >= 20, t = dayScore(todayId());
    el.hidden = !late; el.innerHTML = "";
    if (late){ el.appendChild(document.createTextNode("Heute ")); var b0 = document.createElement("b"); b0.textContent = f1(t.score) + "/10"; el.appendChild(b0); }
    var ids = [], d0 = new Date();
    for (var i = 6; i >= 0; i--){ var d = new Date(d0); d.setDate(d0.getDate() - i); ids.push(dayId(d)); }
    var rs = ids.map(function(id){ return {id:id, r:dayScore(id)}; });
    var rw = []; for (var j = 7; j >= 1; j--){ var dj = new Date(d0); dj.setDate(d0.getDate() - j); var idj = dayId(dj); rw.push({id:idj, r:dayScore(idj)}); }
    var wf = rw.filter(function(x){ return x.r.kcal > 0; }), ws = rw.filter(function(x){ return x.r.sl; });
    var aK = wf.length ? Math.round(wf.reduce(function(a, x){ return a + x.r.kcal; }, 0) / wf.length) : 0;
    var aP = wf.length ? Math.round(wf.reduce(function(a, x){ return a + x.r.prot; }, 0) / wf.length) : 0;
    var aS = ws.length ? Math.round(ws.reduce(function(a, x){ return a + sleepScore(x.r.sl.min); }, 0) / ws.length * 10) / 10 : null;
    if (!$("#wkK")) return;
    (function(){
      var trained = rw.filter(function(x){ return x.r.isTrain; }).length;
      var okProt = rw.filter(function(x){ return x.r.has && x.r.prot >= GOAL_PROT - 10; }).length;
      var parts = ["💪 " + trained + " von " + rw.length + " Trainingstagen", "🥩 " + okProt + "/" + rw.length + " Tage mit genug Eiweiß"];
      if (aS !== null) parts.push("😴 Schlaf Ø " + f1(aS) + "/10");
      var nowD = new Date(), showWeekly = nowD.getDay() === 0 && nowD.getHours() >= 17;
      var el = $("#wkSum"); if (el) el.textContent = "";
      renderWeekCard();
      var yDt = new Date(); yDt.setDate(yDt.getDate() - 1);
      var yId = dayId(yDt), yd = rw.filter(function(x){ return x.id === yId; })[0], ely = $("#wkYest");
      if (ely){
        if (yd && yd.r.has){
          var yp = [trainedOn(yId) ? "💪 trainiert" : dayType(yId) === "rest1" ? "🍽 Aufbau-Tag" : "😌 Ruhetag", "🔥 " + yd.r.kcal.toLocaleString("de-DE") + " kcal", "🥩 " + yd.r.prot + " g"];
          if (yd.r.sl) yp.push("😴 " + f1(sleepScore(yd.r.sl.min)) + "/10");
          ely.textContent = "Gestern: " + yp.join("  ·  ");
        } else ely.textContent = "";
      }
      var stk = $("#wkStreak");
      if (stk){
        var pS = 0, wS = 0, okP = true, okW = true, wg0 = waterGoal();
        for (var q = 0; q < 60 && (okP || okW); q++){
          var did = addDays(todayId(), -q), fd = foodDays.filter(function(x){ return x.id === did; })[0], wd0 = waterDays.filter(function(x){ return x.id === did; })[0];
          var pr0 = fd ? sum(fd.items).p : 0, ml0 = wd0 ? mlSum(wd0.log) : 0;
          if (okP){ if (pr0 >= GOAL_PROT - 10) pS++; else if (q > 0) okP = false; }
          if (okW){ if (ml0 >= wg0) wS++; else if (q > 0) okW = false; }
        }
        var parts = []; if (pS >= 2) parts.push("🔥 Eiweißziel " + pS + " Tage in Folge"); if (wS >= 2) parts.push("💧 Wasserziel " + wS + " Tage in Folge");
        stk.textContent = parts.join("  ·  "); stk.hidden = !parts.length;
      }
    })();
    var fallbk = "–";
    $("#wkK").textContent = aK ? aK.toLocaleString("de-DE") : fallbk; $("#wkKb").style.width = Math.min(100, aK / GOAL_KCAL * 100) + "%";
    $("#wkP").textContent = aP ? aP + " g" : fallbk; $("#wkPb").style.width = Math.min(100, aP / GOAL_PROT * 100) + "%";
    $("#wkS").textContent = aS !== null ? f1(aS) + "/10" : fallbk; $("#wkSb").style.width = (aS !== null ? aS * 10 : 0) + "%";
    var cdays = new Date().getHours() >= 18 ? rs : rw;
    var maxP = Math.max(160, Math.max.apply(null, cdays.map(function(x){ return x.r.prot; })));
    var chl = $("#wkChl"); if (chl) chl.textContent = "Ø ohne heute · Eiweiß pro Tag in g, Linie " + GOAL_PROT + " g";
    $("#wkGoal").style.bottom = "calc(24px + (100% - 42px) * " + (GOAL_PROT / maxP).toFixed(3) + ")";
    var ch = $("#wkChart"); ch.innerHTML = "";
    cdays.forEach(function(x){
      var col = document.createElement("div"); col.className = "bcol" + (x.id === todayId() ? " today" : "");
      var pr = x.r.prot, bar = document.createElement("i"); bar.className = "bar " + (!pr ? "none" : pr >= GOAL_PROT - 10 ? "good" : pr >= GOAL_PROT * 0.7 ? "mid" : "low");
      bar.style.height = pr ? "max(4px, calc((100% - 42px) * " + (pr / maxP).toFixed(3) + "))" : "4px"; bar.title = pr + " g Eiweiß";
      var bv = document.createElement("span"); bv.className = "bv"; bv.textContent = pr ? String(pr) : ""; col.appendChild(bv);
      var dt = dayType(x.id), lb = document.createElement("span"); lb.className = "bcl" + (dt === "train" ? " trd" : dt === "rest1" ? " r1" : dt === "rest2" ? " r2" : ""); lb.textContent = x.id === todayId() ? "Heute" : dateOf(x.id).toLocaleDateString("de-DE", {weekday:"short"}).replace(".", "");
      col.dataset.id = x.id; col.setAttribute("role", "button"); col.addEventListener("click", function(){ hlDay(x.id); });
      col.appendChild(bar); col.appendChild(lb); ch.appendChild(col);
    });
    renderToday(t);
    var ul = $("#daysList"); ul.innerHTML = "";
    rs.slice().reverse().forEach(function(x){
      var r = x.r, early = x.id === todayId() && !late; if (early) return;
      var li = document.createElement("li"), left = document.createElement("div"); left.className = "dleft"; li.dataset.id = x.id;
      var h = document.createElement("b"); h.textContent = dateOf(x.id).toLocaleDateString("de-DE", {weekday:"long", day:"numeric", month:"numeric"}); left.appendChild(h);
      function line(t){ var sp = document.createElement("span"); sp.textContent = t; left.appendChild(sp); }
      if (!r.has) line("Keine Einträge");
      else {
        line(r.kcal.toLocaleString("de-DE") + " kcal, " + r.prot + " g Eiweiß, " + liters(r.ml));
        var st = [r.prot >= GOAL_PROT - 10 ? "Eiweiß gut" : r.prot >= GOAL_PROT * 0.7 ? "Eiweiß knapp" : "Eiweiß zu niedrig"];
        if (r.isTrain) st.push(/fehl/.test(r.tTxt) ? r.tTxt : "Training " + r.tTxt);
        st.push(r.ml >= r.wg ? "Wasser gut" : r.ml >= r.wg * 0.7 ? "Wasser fast" : "Wasser zu wenig");
        if (r.trMin) line("Training " + r.trMin + " min");
        if (!early) line(st.join(", "));
        if (r.sl){ var sp = document.createElement("span"); sp.className = "slline"; sp.innerHTML = slHtml(r.sl.min); left.appendChild(sp); }
      }
      var ring = document.createElement("span"); ring.className = "ring2";
      if (r.has && !early){ ring.textContent = f1(r.score); ring.classList.add(r.score >= 8 ? "g" : r.score >= 5 ? "y" : "r"); } else ring.textContent = "–";
      li.appendChild(left); li.appendChild(ring); ul.appendChild(li);
    });
    var scd = rs.filter(function(x){ return x.r.has && !(x.id === todayId() && !late); });
    $("#wkMeta").textContent = "";
    $("#tageMeta").textContent = scd.length ? "Schnitt " + f1(Math.round(scd.reduce(function(a, x){ return a + x.r.score; }, 0) / scd.length * 10) / 10) : "";
    renderBWProg();
  }

  // ---------- Trainingstage & Einstellungen ----------
  var DAYN = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], DAYORDER = [1, 2, 3, 4, 5, 6, 0], setRef = null, SKEY = "settings-v1", booted = false;
  var PLAN_SHORT = {full:"Ganzkörper", fullA:"A", fullB:"B", fullC:"C", upperA:"Ober A", lowerA:"Unter A", upperB:"Ober B", lowerB:"Unter B", push:"Push", pull:"Pull", legs:"Beine", pushB:"Push B", pullB:"Pull B", legsB:"Beine B"};
  function setDays(list){ TRAIN_DAYS.length = 0; list.forEach(function(d){ d = Number(d); if (d >= 0 && d <= 6 && TRAIN_DAYS.indexOf(d) < 0) TRAIN_DAYS.push(d); }); }
  function daysText(){ return TRAIN_DAYS.length ? DAYORDER.filter(function(d){ return TRAIN_DAYS.indexOf(d) >= 0; }).map(function(d){ return DAYN[d]; }).join(", ") : "keine"; }
  function splitText(){ var n = TRAIN_DAYS.length; return n >= 6 ? "Push, Pull, Beine je 2×" : n === 5 ? "Ober/Unter + Push, Pull, Beine" : n === 4 ? "Oberkörper/Unterkörper je 2×" : n === 3 ? "Ganzkörper A, B, C" : "Ganzkörper"; }
  function renderTDays(){
    var box = $("#tDays"); if (!box) return; box.innerHTML = "";
    DAYORDER.forEach(function(d){ var b = document.createElement("button"); b.type = "button"; b.textContent = DAYN[d]; b.dataset.d = d; b.setAttribute("aria-pressed", String(TRAIN_DAYS.indexOf(d) >= 0)); box.appendChild(b); });
    $("#tdMeta").textContent = TRAIN_DAYS.length ? TRAIN_DAYS.length + (TRAIN_DAYS.length === 1 ? " Tag" : " Tage") + " pro Woche · " + splitText() : "Kein Trainingstag gewählt";
    var pl = $("#planLinkM"); if (pl) pl.textContent = daysText() + (TRAIN_DAYS.length ? " · " + (TRAIN_DAYS.length >= 3 ? splitText() : planName()) : "");
  }
  function applyDays(list){
    var before = TRAIN_DAYS.slice().sort().join(","); setDays(list);
    var changed = before !== TRAIN_DAYS.slice().sort().join(",");
    if (changed){ updatePlan(); buildList(); }
    renderTDays(); renderTraining(); renderWater(); renderMeals(TRAIN_DAYS.indexOf(new Date().getDay()) >= 0 ? "train" : "rest"); renderSettings();
    if (changed){ applyDrafts(); restoreOpen(); }
  }
  function settingsDoc(){ return {days:TRAIN_DAYS.slice(), prefs:JSON.parse(JSON.stringify(PREFS))}; }
  function saveSettings(){
    try { localStorage.setItem(SKEY, JSON.stringify(settingsDoc())); } catch (e) {}
    ready.then(function(){
      if (mode === "db" && setRef) enqueue(function(){ return withRetry(function(){ return setRef.set(settingsDoc()); }); }).catch(function(e){ toast(errText(e)); });
    });
  }
  function saveDays(){ saveSettings(); }
  $("#tDays").addEventListener("click", function(ev){
    var b = ev.target.closest("button[data-d]"); if (!b) return;
    var d = Number(b.dataset.d), next = TRAIN_DAYS.slice(), i = next.indexOf(d);
    if (i >= 0) next.splice(i, 1); else next.push(d);
    applyDays(next); saveDays();
  });
  function applyLook(){
    var r = document.documentElement;
    if (PREFS.theme === "auto") r.removeAttribute("data-theme"); else r.setAttribute("data-theme", PREFS.theme);
    r.classList.toggle("big", !!PREFS.big);
    var dark = PREFS.theme === "dark" || (PREFS.theme === "auto" && !!(window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches));
    var m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute("content", dark ? "#1E242C" : "#E9ECEF");
  }
  try { if (window.matchMedia) matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyLook); } catch (e) {}
  function setPrefs(next, opts){
    opts = opts || {};
    var prev = PREFS; PREFS = cleanPrefs(next);
    GOAL_KCAL = PREFS.kcal; GOAL_PROT = PREFS.prot; WEIGH_DAY = PREFS.weighDay;
    applyLook();
    if (opts.save) saveSettings();
    var planCh = JSON.stringify(prev.plans) !== JSON.stringify(PREFS.plans) || JSON.stringify(prev.tmp) !== JSON.stringify(PREFS.tmp);
    if (!booted){ if (planCh) updatePlan(); return; }
    if (planCh){ var op = $(".ex.open"), opId = op ? op.dataset.id : null; updatePlan(); buildList(); applyDrafts(); if (opId && opts.openId) opId = opts.openId; if (opId){ var nl = $('.ex[data-id="' + opId + '"]'); if (nl){ setOpen(nl, true); } } }
    renderTraining(); renderFood(); renderWater(); renderSettings();
  }
  function setPref(k, v){ var n = JSON.parse(JSON.stringify(PREFS)); n[k] = v; setPrefs(n, {save:true}); }
  var PLIM = {kcal:[1200, 6000, "kcal"], prot:[40, 350, "g"], water:[1000, 6000, "l"], sleep:[5, 10, "h"], fatMax:[20, 300, "g"], sugarMax:[10, 250, "g"], kcalMax:[1500, 8000, "kcal"], goalBw:[35, 250, "kg"]};
  function renderSettings(){
    var sh = $("#setSheet"); if (!sh) return;
    renderTDays();
    $$(".seg2[data-pref]", sh).forEach(function(g){ var v = String(PREFS[g.dataset.pref]); $$("button", g).forEach(function(b){ b.setAttribute("aria-pressed", String(b.dataset.v === v)); }); });
    $$("input.tg[data-pref]", sh).forEach(function(c){ c.checked = !!PREFS[c.dataset.pref]; });
    var lk = $("#lockAudio"); if (lk) lk.checked = lockOn();
    $$("input[data-pref]:not(.tg)", sh).forEach(function(inp){ if (document.activeElement === inp) return; var v = PREFS[inp.dataset.pref], sc = Number(inp.dataset.scale || 1); inp.value = v === null || v === undefined ? "" : String(Math.round(v / sc * 100) / 100).replace(".", ","); });
    var w = $("#pWeigh"); if (w) w.value = String(PREFS.weighDay);
    var cust = splitKeys().filter(function(k){ return PREFS.plans[k]; }).length;
    $("#planMeta").textContent = (TRAIN_DAYS.length >= 3 ? splitText() : planName()) + (cust ? " · angepasst" : "");
    if (!$("#setPlan").hidden) renderPlanEd();
  }
  var sheetHist = false;
  function openSheet(page){
    var sh = $("#setSheet"); if (!sh.hidden){ showSetPage(page || "main"); return; }
    sh.hidden = false; document.body.classList.add("shopen"); showSetPage(page || "main"); renderSettings(); renderDataBox(); renderVersion();
    try { history.pushState({bt:"sheet"}, ""); sheetHist = true; } catch (e) { sheetHist = false; }
    setTimeout(function(){ var x = $("#setX"); if (x) x.focus({preventScroll:true}); }, 30);
  }
  function closeSheet(fromPop){
    var sh = $("#setSheet"); if (sh.hidden) return;
    if (!$("#pickSheet").hidden) closePick();
    sh.hidden = true; document.body.classList.remove("shopen");
    if (!fromPop && sheetHist){ sheetHist = false; try { history.back(); } catch (e) {} } else sheetHist = false;
    var g = $("#setOpen"); if (g) g.focus({preventScroll:true});
  }
  window.addEventListener("popstate", function(){ if (!$("#pickSheet").hidden){ closePick(); if (!$("#setSheet").hidden){ try { history.pushState({bt:"sheet"}, ""); } catch (e) {} } return; } if (!$("#setSheet").hidden) closeSheet(true); });
  function showSetPage(p){
    $("#setMain").hidden = p !== "main"; $("#setPlan").hidden = p !== "plan"; $("#setBack").hidden = p === "main";
    $("#setT").textContent = p === "plan" ? "Plan anpassen" : "Einstellungen";
    if (p === "plan") renderPlanEd();
    var body = $(p === "plan" ? "#setPlan" : "#setMain"); if (body) body.scrollTop = 0;
  }
  $("#setOpen").addEventListener("click", function(){ openSheet("main"); });
  $("#planLink").addEventListener("click", function(){ openSheet("main"); });
  $("#setX").addEventListener("click", function(){ closeSheet(); });
  $("#setBack").addEventListener("click", function(){ showSetPage("main"); renderSettings(); });
  $("#planOpen").addEventListener("click", function(){ plEdit = PLAN_KEY; showSetPage("plan"); });
  document.addEventListener("keydown", function(ev){ if (ev.key !== "Escape") return; if (!$("#pickSheet").hidden) closePick(); else if (!$("#setSheet").hidden) closeSheet(); });
  $("#setSheet").addEventListener("click", function(ev){
    var sb = ev.target.closest(".seg2[data-pref] button"); if (!sb) return;
    var k = sb.parentNode.dataset.pref, v = sb.dataset.v;
    setPref(k, v === "true" ? true : v === "false" ? false : isNaN(Number(v)) ? v : Number(v));
  });
  $("#setSheet").addEventListener("change", function(ev){
    var t = ev.target;
    if (t.id === "pWeigh"){ setPref("weighDay", Number(t.value)); toast(Number(t.value) < 0 ? "Wiegen ausgeschaltet" : "Wiegetag: " + DAYLONG[Number(t.value)]); return; }
    if (t.matches("input.tg[data-pref]")){ setPref(t.dataset.pref, t.checked); return; }
    if (!t.matches("input[data-pref]")) return;
    var k = t.dataset.pref, sc = Number(t.dataset.scale || 1), raw = t.value.trim().replace(/\s/g, ""), lim = PLIM[k];
    if (/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(raw)) raw = raw.replace(/\./g, "");
    var v = raw === "" ? null : num(raw);
    if (v === null){ if (k === "goalBw" && raw === ""){ setPref(k, null); toast("Zielgewicht entfernt"); } else renderSettings(); return; }
    v = v * sc;
    if (lim && (v < lim[0] || v > lim[1])){ toast("Bitte zwischen " + fmt(lim[0] / sc) + " und " + fmt(lim[1] / sc) + " " + lim[2]); t.value = PREFS[k] === null ? "" : String(Math.round(PREFS[k] / sc * 100) / 100).replace(".", ","); return; }
    setPref(k, v); toast("Gespeichert ✓");
  });
  $("#sndTest").addEventListener("click", function(){ ensureAudio(); setTimeout(beep, 60); });
  $("#goalReset").addEventListener("click", function(){
    var n = JSON.parse(JSON.stringify(PREFS)); ["kcal", "prot", "water", "sleep", "fatMax", "sugarMax", "kcalMax"].forEach(function(k){ n[k] = PREF_DEF[k]; });
    setPrefs(n, {save:true}); toast("Ziele zurückgesetzt");
  });
  // Plan-Editor: pro Trainingstag-Plan tauschen, entfernen, hinzufügen, sortieren
  var plEdit = "full";
  function exLine(ex){ var m = MUSCLES[ex.id]; return ex.kind === "time" ? ex.target : ex.sets + " × " + ex.reps[0] + "–" + ex.reps[1] + (ex.drop ? " + Drop" : "") + (m && m.p[0] ? " · " + MNAMES[m.p[0]] : ""); }
  function renderPlanEd(){
    var keys = splitKeys(); if (keys.indexOf(plEdit) < 0) plEdit = keys.indexOf(PLAN_KEY) >= 0 ? PLAN_KEY : keys[0];
    var tabs = $("#plTabs"); tabs.innerHTML = ""; tabs.hidden = keys.length < 2;
    keys.forEach(function(k){ var b = document.createElement("button"); b.type = "button"; b.dataset.k = k; b.setAttribute("role", "tab"); b.setAttribute("aria-selected", String(k === plEdit)); b.textContent = PLAN_SHORT[k] || k; tabs.appendChild(b); });
    var ids = planIds(plEdit), list = ids.map(function(id){ return BYID[id]; });
    $("#plMeta").textContent = planName(plEdit) + " · " + ids.length + " Übungen · ca. " + estMinOf(list) + " min" + (PREFS.plans[plEdit] ? " · angepasst" : "");
    var ol = $("#plList"); ol.innerHTML = "";
    list.forEach(function(ex, i){
      var li = document.createElement("li"); li.dataset.i = i;
      var m = document.createElement("span"); m.className = "plm";
      var b = document.createElement("b"); b.textContent = ex.name; m.appendChild(b);
      var sm = document.createElement("small"); sm.textContent = exLine(ex); m.appendChild(sm);
      li.appendChild(m);
      [["up", "↑", "Nach oben"], ["down", "↓", "Nach unten"], ["swap", "⇄", "Tauschen"], ["rm", "✕", "Entfernen"]].forEach(function(a){
        var bt = document.createElement("button"); bt.type = "button"; bt.className = "plb " + a[0]; bt.dataset.act = a[0]; bt.textContent = a[1]; bt.setAttribute("aria-label", a[2] + ": " + ex.name);
        if ((a[0] === "up" && i === 0) || (a[0] === "down" && i === list.length - 1) || (a[0] === "rm" && list.length <= 1)) bt.disabled = true;
        li.appendChild(bt);
      });
      ol.appendChild(li);
    });
    $("#plReset").hidden = !PREFS.plans[plEdit];
  }
  function savePlanIds(key, ids){ var n = JSON.parse(JSON.stringify(PREFS)); if (ids.join() === PLANS[key].join()) delete n.plans[key]; else n.plans[key] = ids; setPrefs(n, {save:true}); }
  $("#plTabs").addEventListener("click", function(ev){ var b = ev.target.closest("button[data-k]"); if (b){ plEdit = b.dataset.k; renderPlanEd(); } });
  $("#plList").addEventListener("click", function(ev){
    var b = ev.target.closest("button[data-act]"); if (!b || b.disabled) return;
    var i = Number(b.closest("li").dataset.i), ids = planIds(plEdit), a = b.dataset.act, cur = ids[i];
    if (a === "up" && i > 0){ ids[i] = ids[i - 1]; ids[i - 1] = cur; savePlanIds(plEdit, ids); }
    else if (a === "down" && i < ids.length - 1){ ids[i] = ids[i + 1]; ids[i + 1] = cur; savePlanIds(plEdit, ids); }
    else if (a === "rm" && ids.length > 1){ ids.splice(i, 1); savePlanIds(plEdit, ids); toast(BYID[cur].name + " entfernt"); }
    else if (a === "swap") openPick({title:"Tauschen: " + BYID[cur].name, from:cur, exclude:ids, onPick:function(id){ var c2 = planIds(plEdit), k = c2.indexOf(cur); if (k >= 0) c2[k] = id; savePlanIds(plEdit, c2); toast(BYID[id].name + " statt " + BYID[cur].name); }});
  });
  $("#plAdd").addEventListener("click", function(){
    var ids = planIds(plEdit); if (ids.length >= 16){ toast("Höchstens 16 Übungen pro Plan"); return; }
    openPick({title:"Übung hinzufügen", exclude:ids, onPick:function(id){ var c2 = planIds(plEdit); if (c2.indexOf(id) < 0) c2.push(id); savePlanIds(plEdit, c2); toast(BYID[id].name + " hinzugefügt"); }});
  });
  $("#plReset").addEventListener("click", function(){ var n = JSON.parse(JSON.stringify(PREFS)); delete n.plans[plEdit]; setPrefs(n, {save:true}); toast("Standard wiederhergestellt"); });
  // Auswahl einer Übung (zum Tauschen oder Hinzufügen)
  var MGROUP = [["Brust", ["chest_u", "chest_l"]], ["Rücken", ["lats", "traps_m", "lower_back"]], ["Schultern", ["delts_f", "delts_s", "delts_b", "traps_u"]], ["Arme", ["biceps", "brach", "triceps", "brachiorad", "forearm_f", "forearm_e"]], ["Beine & Po", ["quads", "hams", "glutes", "adductors", "calves"]], ["Bauch", ["abs", "obl"]]];
  function groupOf(id){ var m = MUSCLES[id], p = m && m.p[0]; for (var i = 0; i < MGROUP.length; i++) if (MGROUP[i][1].indexOf(p) >= 0) return MGROUP[i][0]; return "Sonstiges"; }
  function musText(id){ var m = MUSCLES[id]; return m ? uniqNames(m.p).join(", ") : ""; }
  var pickCtx = null;
  function openPick(o){
    pickCtx = o; $("#pickT").textContent = o.title;
    var box = $("#pkList"); box.innerHTML = "";
    var cands = ALLSTR.filter(function(ex){ return (o.exclude || []).indexOf(ex.id) < 0; });
    var fromM = o.from && MUSCLES[o.from] ? MUSCLES[o.from].p : [];
    var best = fromM.length ? cands.filter(function(ex){ var m = MUSCLES[ex.id]; return m && m.p.some(function(k){ return fromM.indexOf(k) >= 0; }); }) : [];
    function sect(title, list){
      if (!list.length) return;
      var hh = document.createElement("h3"); hh.textContent = title; box.appendChild(hh);
      var ul = document.createElement("ul"); ul.className = "pkl";
      list.forEach(function(ex){
        var li = document.createElement("li"), b = document.createElement("button"); b.type = "button"; b.dataset.id = ex.id;
        var n = document.createElement("b"); n.textContent = ex.name; var s = document.createElement("small"); s.textContent = musText(ex.id) + " · " + ex.sets + " × " + ex.reps[0] + "–" + ex.reps[1];
        b.appendChild(n); b.appendChild(s); li.appendChild(b); ul.appendChild(li);
      });
      box.appendChild(ul);
    }
    sect("Passt am besten", best);
    MGROUP.concat([["Sonstiges", []]]).forEach(function(g){ sect(g[0], cands.filter(function(ex){ return best.indexOf(ex) < 0 && groupOf(ex.id) === g[0]; })); });
    $("#pickSheet").hidden = false; $("#pickSheet .sh-body").scrollTop = 0;
  }
  function closePick(){ $("#pickSheet").hidden = true; pickCtx = null; }
  $("#pickX").addEventListener("click", closePick);
  $("#pkList").addEventListener("click", function(ev){ var b = ev.target.closest("button[data-id]"); if (!b || !pickCtx) return; var c = pickCtx; closePick(); c.onPick(b.dataset.id); });
  try { var st0 = JSON.parse(localStorage.getItem(SKEY) || "{}"); if (Array.isArray(st0.days)) setDays(st0.days); setPrefs(st0.prefs || {}); updatePlan(); } catch (e) { applyLook(); }

  // ---------- Zuklapp-Zustand ----------
  var FOLDKEY = "folds-v1";
  function foldSt(){ try { return JSON.parse(localStorage.getItem(FOLDKEY) || "{}") || {}; } catch (e) { return {}; } }
  function keyFolds(){ $$("details").forEach(function(d){ if (!d.dataset.k && !d.hasAttribute("data-nofold")){ var t = d.querySelector("summary .ft") || d.querySelector("summary"); d.dataset.k = "d-" + (d.id || (t ? t.textContent.trim() : "")); } }); }
  function applyFolds(){ var st = foldSt(); $$("details[data-k]").forEach(function(d){ if (Object.prototype.hasOwnProperty.call(st, d.dataset.k)) d.open = !!st[d.dataset.k]; }); }
  document.addEventListener("toggle", function(ev){ var d = ev.target; if (!d || !d.dataset || !d.dataset.k) return; var st = foldSt(); st[d.dataset.k] = d.open; try { localStorage.setItem(FOLDKEY, JSON.stringify(st)); } catch (e) {} }, true);

  // ---------- Version ----------
  var APP_VERSION = "4.3", APP_BUILT = "2026-11-28T07:44:56Z";
  var CHANGES = [
    ["4.3", "Richtwerte nur noch als ruhiger Hinweis, Details bei „Letztes Training“ raus, keine blaue Umrandung für heute, „Heute gegessen“ aufklappbar"],
    ["4.2", "iPhone: kein Zoom mehr durch Doppeltippen, Hochformat, Vibrations-Einstellung raus"],
    ["4.1", "Aufgeräumt: Heute, Muskeln, Rekorde und Maße raus, Notiz und Tauschen aus der Übung raus (Tauschen nur in den Einstellungen). Neuer kurzer Pausen-Ton, Musik läuft weiter. Dead Hang als erster Schritt nach „Training starten“. Bewertungen ohne Emojis, kg und Wdh. mittig, Schnell hinzufügen unter Heute gegessen und zugeklappt."],
    ["4.0", "Einstellungen (Zahnrad): Ziele, Limits, Pausen, Töne, Wiegetag, Design, Schriftgröße. Plan selbst anpassen, Übung tauschen (auch nur heute), Notiz pro Übung, Rekord-Meldung. Neue Muskelbilder, Muskeln pro Woche und Rekorde im Verlauf, Maße und Zielgewicht, Essen nachträglich ändern. Sicherung als Datei und automatisch, startet offline, eigene Schriften, strengere Sicherheitsregeln."],
    ["3.9", "Rückmeldungen nach dem Eintragen zeigen, was noch fehlt, und feiern erreichte Ziele; Legende im Verlauf ohne Wochentage"],
    ["3.8", "Wiegen nur dienstags als fällig, sonst Hinweis im Verlauf; Aufbau-Tag-Nachricht zeigt, wie weit du bist"],
    ["3.7", "2-Tage-Plan: Butterfly zurück, Preacher raus, Waden zuletzt; Zucker-Limit 50 g"],
    ["3.6", "Kreuzheben raus, Preacher Curls zurück, Dead Hang mit Stoppuhr vor dem Training"],
    ["3.5", "Beinbeuger raus (2 Tage) → Rumänisches Kreuzheben, „Zuletzt“-Zeile weg, Pausen-Ton auch bei gesperrtem Handy"],
    ["3.4", "Trainingsplan passt sich an die Anzahl Trainingstage an (2–6), neue Übungen, Trizeps über Kopf zurück (Superset mit Hammer Curls)"],
    ["3.3", "Trizeps über Kopf raus (Zeit), Details zu Übungen und Werten aufklappbar"],
    ["3.2", "Aufbau-Tag nach dem Training markiert, Heute im Diagramm ab 18 Uhr, Übungen am Ruhetag aufklappbar"],
    ["3.1", "Unterarme: Hammer Curls mit Drop statt Preacher, Reverse Curls als Superset mit Waden"],
    ["3.0", "Neuer Plan für mehr Wachstum: Beinbeuger dazu, Dropsätze bei Isolationsübungen, sinnvolle Reihenfolge. Alte Daten (29.10.–02.11.) übernommen."],
    ["2.9", "Wiegen dienstags vor dem Training, Steigerung zählt ab dem nächsten Training, Tageswert entfernt"],
    ["2.8", "Verlauf: klareres Diagramm, Trainingstage markiert, Alle Trainings entfernt"],
    ["2.7", "Erledigte Übungen ausgegraut, Erholungs-Karte entfernt"],
    ["2.6", "Ruhetag ohne Tipps"],
    ["2.5", "Verlauf aufgeräumt, Ruhetag ohne Übungsliste"],
    ["2.4", "Bewertung pro Satz sichtbar und änderbar, Training nachträglich bewerten, Dauer im Verlauf ändern"],
    ["2.3", "Sonntags ein kurzer Satz zu deiner Woche"],
    ["2.2", "Wasser in Getränken (z. B. Whey mit 400 ml Wasser) zählt automatisch zum Wasser"],
    ["2.1", "Heute gegessen nach Tageszeit, kompakt mit Antippen für Aktionen. Schnell hinzufügen als Kacheln mit Suche. Verlauf zeigt heute."],
    ["2.0", "Offline-fähig: speichert ohne Netz und synchronisiert später. Sicherer (keine Fremd-Skripte, Sicherheits-Header). Detailliertere Muskelbilder. App-Icon."],
    ["1.7", "Ruhetag: Übungen sichtbar, trotzdem trainieren möglich"],
    ["1.6", "Versionsanzeige im Verlauf"],
    ["1.5", "Übungsvorschau ohne Bearbeiten, Testtrainings entfernt"],
    ["1.4", "Abschluss mit Muskelbild und Trainingswerten"],
    ["1.3", "Eigene Datenbank (Supabase) und Link auf Vercel"],
    ["1.2", "Lauter Pausen-Alarm mit Countdown"]
  ];
  function ago(iso){
    var m = Math.max(0, Math.round((Date.now() - Date.parse(iso)) / 60000));
    if (m < 1) return "gerade eben"; if (m < 60) return "vor " + m + " Min";
    var h = Math.round(m / 60); if (h < 24) return "vor " + h + " Std";
    var d = Math.round(h / 24); return "vor " + d + (d === 1 ? " Tag" : " Tagen");
  }
  function renderVersion(){
    var m = $("#verMeta"); if (!m) return;
    m.textContent = "v" + APP_VERSION + " · aktualisiert " + ago(APP_BUILT);
    $("#verList").innerHTML = CHANGES.map(function(c){ return "<li><b>v" + c[0] + "</b><span>" + c[1] + "</span></li>"; }).join("");
  }
  renderVersion(); setInterval(renderVersion, 60000);

  // ---------- Sicherung ----------
  function buildBackup(){
    var t = {}, f = {}, w = {};
    sessions.forEach(function(x){ var o = {entries:x.entries || {}}; if (x.note) o.note = x.note; if (x.bw) o.bw = x.bw; if (x.hang) o.hang = x.hang; if (x.ms) o.ms = x.ms; if (x.sl) o.sl = {from:x.sl.from, to:x.sl.to}; if (x.tr) o.tr = x.tr; t[x.id] = o; });
    foodDays.forEach(function(x){ if (x.items.length) f[x.id] = {items:x.items}; });
    waterDays.forEach(function(x){ if (x.log.length) w[x.id] = {log:x.log}; });
    return {app:"training", v:2, at:new Date().toISOString(), t:t, f:f, w:w, s:settingsDoc(), fav:favs};
  }
  function renderDataBox(){
    var el = $("#dataWhere"); if (!el) return;
    var lo = $("#lgOut"); if (lo) lo.hidden = !SB;
    var em = $("#lgMail2"); if (em) em.textContent = SB && SB.auth.email() ? "Angemeldet als " + SB.auth.email() : "";
    if (SB && mode === "db") el.textContent = "Deine Daten liegen in deiner eigenen Datenbank (Supabase) und sind auf allen Geräten gleich. Ohne Netz wird gespeichert, sobald du wieder Netz hast.";
    else el.textContent = mode === "local" ? "Deine Daten liegen nur auf diesem Gerät. Lade regelmäßig eine Sicherung herunter." : mode === "db" ? "Deine Daten liegen in deinem Claude-Konto." : "Speichern ist hier gerade nicht möglich.";
    $("#dataMeta").textContent = SB && mode === "db" ? "Supabase" : mode === "local" ? "Nur dieses Gerät" : "";
    var sl = snapList(), si = $("#snapInfo"), le = null; try { le = localStorage.getItem("bt-lastexport"); } catch (e) {}
    if (si) si.textContent = (sl.length ? "Automatische Sicherung auf diesem Gerät: " + ago(sl[0].at) + " (" + sl.length + (sl.length === 1 ? " Stand). " : " Stände). ") : "") + "Letzter Download: " + (le ? ago(le) : "noch nie") + ".";
    var sb = $("#snapBtn"); if (sb) sb.hidden = !sl.length;
  }
  // Automatische Sicherung: einmal am Tag ein kompletter Stand auf diesem Gerät (die letzten 3 Tage)
  var SNAPK = "bt-snap-v1", snapIdx = -1;
  function snapList(){ try { var a = JSON.parse(localStorage.getItem(SNAPK) || "[]"); return Array.isArray(a) ? a.filter(function(x){ return x && typeof x.data === "string" && typeof x.at === "string"; }) : []; } catch (e) { return []; } }
  function autoSnap(){
    var synced = mode === "db" ? firstSync.tr && firstSync.fo && firstSync.wa : mode === "local";
    if (!synced || (!sessions.length && !foodDays.length)) return;
    var list = snapList(), t = todayId(); if (list.length && list[0].d === t) return;
    list.unshift({d:t, at:new Date().toISOString(), data:JSON.stringify(buildBackup())}); list = list.slice(0, 3);
    for (var i = list.length; i > 0; i--){ try { localStorage.setItem(SNAPK, JSON.stringify(list.slice(0, i))); return; } catch (e) {} }
  }
  var snapT = null;
  function autoSnapSoon(){ clearTimeout(snapT); snapT = setTimeout(autoSnap, 4000); }
  // Importierte Trainingsdaten streng prüfen: nur bekannte Übungen, nur Zahlen und erlaubte Werte.
  function cleanEntries(x){
    var out = {}; if (!x || typeof x !== "object") return out;
    Object.keys(x).forEach(function(k){
      var ex = BYID[k], e = x[k]; if (!ex || !e || typeof e !== "object") return;
      var o = {}; if (typeof e.at === "string" && !isNaN(Date.parse(e.at))) o.at = e.at.slice(0, 40);
      if (ex.kind === "time"){ o.done = !!e.done; var m = clean(e.min), inc = clean(e.inc), sp = clean(e.spd); if (m !== null && m >= 0 && m < 600) o.min = Math.round(m); if (inc !== null && inc >= 0 && inc < 50) o.inc = inc; if (sp !== null && sp > 0 && sp < 40) o.spd = sp; out[k] = o; return; }
      o.v = 2;
      o.sets = entrySets(e).slice(0, 10).map(function(z){ return {kg: z.kg !== null && z.kg >= 0 && z.kg < 1000 ? z.kg : null, reps: z.reps !== null && z.reps >= 0 && z.reps < 200 ? Math.round(z.reps) : null, rating: z.rating || ""}; });
      o.kg = o.sets[0] ? o.sets[0].kg : null;
      var dk = cleanKg(e.dropKg), dr = clean(e.dropReps);
      o.dropKg = dk !== null && dk >= 0 && dk < 1000 ? dk : null; o.dropReps = dr !== null && dr >= 0 && dr < 200 ? Math.round(dr) : null;
      o.rating = rating(e.rating) || ""; o.dropRating = rating(e.dropRating) || "";
      out[k] = o;
    });
    return out;
  }
  function putDay(kind, id, body){
    return ready.then(function(){
      if (mode === "local"){ var key = kind === "f" ? FKEY : WKEY, o = loadLocal(key) || {}; o[id] = body; if (!writeLocal(key, o)) return Promise.reject({code:"local_failed"}); return; }
      var c = kind === "f" ? foodCol : waterCol; if (mode !== "db" || !c) return Promise.reject({code:"readonly"});
      return enqueue(function(){ return withRetry(function(){ return c.doc(id).set(body); }); });
    });
  }
  var outArm = false;
  $("#lgOut").addEventListener("click", function(){
    if (!SB) return;
    var n = SB.db.pending(), lb = $("#lgOut .sl").firstChild;
    if (!outArm){ outArm = true; lb.nodeValue = n ? "Noch " + n + " ungespeichert! Trotzdem abmelden?" : "Wirklich abmelden? Nochmal tippen"; setTimeout(function(){ outArm = false; lb.nodeValue = "Abmelden"; }, 4000); return; }
    SB.db.wipe();
    try { Object.keys(localStorage).forEach(function(k){ if (/^(fit-|fav-v1|ui-|bt-snap|settings-v1|training-log|food-log|water-log)/.test(k)) localStorage.removeItem(k); }); } catch (e) {}
    SB.auth.signOut().then(function(){ location.reload(); });
  });
  $("#exBtn").addEventListener("click", function(){
    var txt = JSON.stringify(buildBackup()), ta = $("#exText"); ta.value = txt; ta.hidden = false;
    var done = function(ok){ $("#dataSt").textContent = ok ? "Kopiert ✓ Füge die Sicherung z. B. in deine Notizen ein." : "Markiere den Text oben und kopiere ihn."; };
    try { navigator.clipboard.writeText(txt).then(function(){ done(true); try { localStorage.setItem("bt-lastexport", new Date().toISOString()); } catch (e) {} renderDataBox(); }, function(){ ta.focus(); ta.select(); done(false); }); } catch (e) { ta.focus(); ta.select(); done(false); }
  });
  function backupFile(){ return new File([JSON.stringify(buildBackup())], "training-sicherung-" + todayId() + ".json", {type:"application/json"}); }
  $("#exFile").addEventListener("click", function(){
    var st = $("#dataSt"), f; try { f = backupFile(); } catch (e) { st.textContent = "Konnte die Sicherung nicht erstellen."; return; }
    var mark = function(){ try { localStorage.setItem("bt-lastexport", new Date().toISOString()); } catch (e) {} st.textContent = "Sicherung erstellt ✓ (" + Math.max(1, Math.round(f.size / 1024)) + " KB)"; renderDataBox(); };
    var dl = function(){ var url = URL.createObjectURL(f), a = document.createElement("a"); a.href = url; a.download = f.name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function(){ URL.revokeObjectURL(url); }, 5000); mark(); };
    try { if (navigator.canShare && navigator.share && /iPhone|iPad|Android/i.test(navigator.userAgent) && navigator.canShare({files:[f]})){ navigator.share({files:[f], title:"Training Sicherung"}).then(mark, function(e){ if (!(e && e.name === "AbortError")) dl(); }); return; } } catch (e) {}
    dl();
  });
  $("#imFileBtn").addEventListener("click", function(){ $("#imFile").click(); });
  $("#imFile").addEventListener("change", function(){
    var f = this.files && this.files[0]; this.value = ""; if (!f) return;
    if (f.size > 8e6){ $("#dataSt").textContent = "Die Datei ist zu groß."; return; }
    var rd = new FileReader(); rd.onload = function(){ $("#imText").value = String(rd.result || ""); imArm = null; $("#imBtn").click(); }; rd.onerror = function(){ $("#dataSt").textContent = "Konnte die Datei nicht lesen."; }; rd.readAsText(f);
  });
  $("#snapBtn").addEventListener("click", function(){
    var sl = snapList(); if (!sl.length) return; snapIdx = (snapIdx + 1) % sl.length;
    $("#imText").value = sl[snapIdx].data; imArm = null;
    $("#dataSt").textContent = "Auto-Sicherung von " + new Date(sl[snapIdx].at).toLocaleString("de-DE", {weekday:"short", day:"numeric", month:"numeric", hour:"2-digit", minute:"2-digit"}) + " geladen. Tippe „Übernehmen“." + (sl.length > 1 ? " Nochmal tippen für ältere." : "");
  });
  var imArm = null;
  $("#imBtn").addEventListener("click", function(){
    var st = $("#dataSt"), raw = $("#imText").value, d, btn = this;
    try { d = JSON.parse(raw); } catch (e) { st.textContent = "Das ist keine gültige Sicherung."; return; }
    if (!d || d.app !== "training" || !d.t || typeof d.t !== "object"){ st.textContent = "Das ist keine gültige Sicherung."; return; }
    var nT = Object.keys(d.t).filter(isDateId), nF = Object.keys(d.f || {}).filter(isDateId), nW = Object.keys(d.w || {}).filter(isDateId);
    if (imArm !== raw){ imArm = raw; st.textContent = nT.length + " Tage Training/Körper, " + nF.length + " Tage Essen, " + nW.length + " Tage Wasser gefunden" + (d.at && !isNaN(Date.parse(d.at)) ? " (Stand " + new Date(d.at).toLocaleDateString("de-DE") + ")" : "") + ". Nochmal tippen zum Übernehmen."; btn.textContent = "Wirklich übernehmen"; return; }
    btn.disabled = true; st.textContent = "Übernehme …";
    var jobs = [];
    shadow = {};
    nT.forEach(function(id){ var x = d.t[id] || {}, p = {entries: cleanEntries(x.entries)};
      if (typeof x.note === "string") p.note = x.note.slice(0, 300); if (clean(x.bw)) p.bw = clean(x.bw); if (cleanHang(x.hang)) p.hang = cleanHang(x.hang); if (cleanMs(x.ms)) p.ms = cleanMs(x.ms);
      var sl = cleanSleep(x.sl); if (sl) p.sl = {from:sl.from, to:sl.to}; var tr = cleanTr(x.tr); if (tr) p.tr = tr;
      jobs.push(function(){ return saveSessionPatch(p, id); }); });
    nF.forEach(function(id){ var items = cleanItems(d.f[id] && d.f[id].items); jobs.push(function(){ return putDay("f", id, {date:id, items:items}); }); });
    nW.forEach(function(id){ var log = cleanLog(d.w[id] && d.w[id].log); jobs.push(function(){ return putDay("w", id, {date:id, ml:mlSum(log), log:log}); }); });
    jobs.reduce(function(p, j){ return p.then(j); }, Promise.resolve()).then(function(){
      if (Array.isArray(d.fav)){ cleanFavs(d.fav).forEach(addFav); saveFavs(); renderFavs(); }
      if (d.s && d.s.prefs && typeof d.s.prefs === "object") setPrefs(d.s.prefs, {save:true});
      if (d.s && Array.isArray(d.s.days)){ applyDays(d.s.days); saveDays(); }
      if (mode === "local"){ foodDays = foodFromLocal(loadLocal(FKEY) || {}); waterDays = waterFromLocal(loadLocal(WKEY) || {}); }
      renderTraining(); renderFood(); renderWater();
      st.textContent = "Sicherung übernommen ✓"; $("#imText").value = ""; imArm = null; snapIdx = -1;
    }).catch(function(e){ st.textContent = errText(e); }).then(function(){ btn.disabled = false; btn.textContent = "Übernehmen"; });
  });

  // ---------- Eigene Datenbank (Supabase), wenn in config.js eingetragen ----------
  // Direkt per fetch, ohne externe Bibliothek. Lokaler Zwischenspeicher + Warteschlange:
  // Eingaben gehen nie verloren, auch ohne Netz im Gym. Sobald Netz da ist, wird synchronisiert.
  var SB = null, SB_P = null;
  function sbConf(){
    var c = window.APP_CONFIG || {}, u = typeof c.supabaseUrl === "string" ? c.supabaseUrl.trim().replace(/\/+$/, "") : "";
    return /^https:\/\/[^\s/]+$/.test(u) && typeof c.supabaseAnonKey === "string" && c.supabaseAnonKey.trim() ? {url:u, key:c.supabaseAnonKey.trim()} : null;
  }
  function lsGet(k){ try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function lsSet(k, v){ try { if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  function readBody(r){ return r.text().then(function(t){ if (!t) return null; try { return JSON.parse(t); } catch (e) { return null; } }); }
  function setPath(o, path, v){ var ks = path.split("."), cur = o; for (var i = 0; i < ks.length - 1; i++){ if (!cur[ks[i]] || typeof cur[ks[i]] !== "object") cur[ks[i]] = {}; cur = cur[ks[i]]; } cur[ks[ks.length - 1]] = v; }

  function sbAuth(cfg){
    var KEY = "sb-auth-v1", s = lsGet(KEY), refreshing = null, onOut = null;
    function keep(d){ return {access_token:d.access_token, refresh_token:d.refresh_token, expires_at:d.expires_at || Math.floor(Date.now() / 1000) + (d.expires_in || 3600), uid:(d.user && d.user.id) || (s && s.uid) || null, email:(d.user && d.user.email) || (s && s.email) || ""}; }
    if (!s || !s.access_token){
      try { var ref = cfg.url.split("//")[1].split(".")[0], old = lsGet("sb-" + ref + "-auth-token"); if (old && old.access_token && old.refresh_token && old.user && old.user.id){ s = keep(old); lsSet(KEY, s); } } catch (e) {}
    }
    function save(d){ s = keep(d); lsSet(KEY, s); return s; }
    function call(path, body, token){
      var h = {"apikey":cfg.key, "Content-Type":"application/json"}; if (token) h.Authorization = "Bearer " + token;
      return fetch(cfg.url + "/auth/v1/" + path, {method:"POST", headers:h, body: body ? JSON.stringify(body) : undefined, cache:"no-store"}).then(function(r){
        return readBody(r).then(function(j){ if (!r.ok) throw {status:r.status, code:String((j && (j.error_code || j.error || j.code)) || ""), message:String((j && (j.msg || j.error_description || j.message)) || ("HTTP " + r.status))}; return j; });
      }, function(){ throw {network:true, message:"offline"}; });
    }
    var A = {
      uid: function(){ return s && s.uid; },
      email: function(){ return (s && s.email) || ""; },
      token: function(){ return (s && s.access_token) || cfg.key; },
      signedIn: function(){ return !!(s && s.access_token && s.refresh_token && s.uid); },
      onSignedOut: function(fn){ onOut = fn; },
      signIn: function(email, pw){ return call("token?grant_type=password", {email:email, password:pw}).then(function(j){ if (!j || !j.access_token) throw {message:"Anmeldung fehlgeschlagen"}; return save(j); }); },
      refresh: function(){
        if (!s || !s.refresh_token) return Promise.reject({auth:true, message:"nicht angemeldet"});
        if (!refreshing){
          refreshing = call("token?grant_type=refresh_token", {refresh_token:s.refresh_token}).then(function(j){ refreshing = null; return save(j); }, function(e){
            refreshing = null;
            if (!e.network && e.status >= 400 && e.status < 500){ s = null; lsSet(KEY, null); if (onOut) onOut(); }
            throw e;
          });
        }
        return refreshing;
      },
      fresh: function(){ return s && s.expires_at && Date.now() / 1000 > s.expires_at - 60 ? A.refresh() : Promise.resolve(); },
      signOut: function(){ var t = s && s.access_token; s = null; lsSet(KEY, null); lsSet("sb-" + cfg.url.split("//")[1].split(".")[0] + "-auth-token", null); return t ? call("logout", null, t).catch(function(){}) : Promise.resolve(); }
    };
    return A;
  }

  function sbRest(cfg, auth){
    var enc = encodeURIComponent;
    function req(method, q, body, prefer, again){
      return auth.fresh().catch(function(e){ if (!(e && e.network)) throw e; }).then(function(){
        var h = {"apikey":cfg.key, "Authorization":"Bearer " + auth.token(), "Content-Type":"application/json"}; if (prefer) h.Prefer = prefer;
        return fetch(cfg.url + "/rest/v1/" + q, {method:method, headers:h, body: body ? JSON.stringify(body) : undefined, cache:"no-store"}).then(function(r){ return r; }, function(){ throw {network:true, message:"offline"}; });
      }).then(function(r){
        if (r.status === 401 && !again) return auth.refresh().then(function(){ return req(method, q, body, prefer, true); });
        return readBody(r).then(function(j){
          if (!r.ok) throw {status:r.status, fatal:[400, 409, 413, 422].indexOf(r.status) >= 0, message:String((j && (j.message || j.msg)) || ("HTTP " + r.status))};
          return j;
        });
      });
    }
    return {
      list: function(coll){ return req("GET", "docs?select=doc_id,data&coll=eq." + enc(coll) + "&limit=10000"); },
      one: function(coll, id){ return req("GET", "docs?select=data&coll=eq." + enc(coll) + "&doc_id=eq." + enc(id) + "&limit=1").then(function(rows){ return Array.isArray(rows) && rows[0] ? rows[0].data : null; }); },
      put: function(coll, id, data){ return req("POST", "docs?on_conflict=user_id,coll,doc_id", [{user_id:auth.uid(), coll:coll, doc_id:id, data:data, updated_at:new Date().toISOString()}], "resolution=merge-duplicates,return=minimal"); },
      del: function(coll, id){ return req("DELETE", "docs?coll=eq." + enc(coll) + "&doc_id=eq." + enc(id), null, "return=minimal"); }
    };
  }

  // Zusammenführen, falls ein anderes Gerät denselben Tag inzwischen geändert hat (nichts geht verloren)
  function jeq(a, b){ return JSON.stringify(a) === JSON.stringify(b); }
  function isObj(x){ return !!x && typeof x === "object" && !Array.isArray(x); }
  function mergeArr(b, o, t){
    b = Array.isArray(b) ? b : []; o = Array.isArray(o) ? o : []; t = Array.isArray(t) ? t : [];
    function idOf(x){ return x && typeof x === "object" && typeof x.id === "string" ? x.id : null; }
    if (!o.concat(t).every(idOf)) return o;
    var bIds = b.map(idOf), oMap = {}, out = [], seen = {};
    o.forEach(function(x){ oMap[idOf(x)] = x; });
    t.forEach(function(x){ var id = idOf(x), bi = bIds.indexOf(id); if (bi >= 0 && !oMap[id]) return; out.push(oMap[id] && (bi < 0 || !jeq(oMap[id], b[bi])) ? oMap[id] : x); seen[id] = 1; });
    o.forEach(function(x){ var id = idOf(x); if (seen[id] || bIds.indexOf(id) >= 0) return; out.push(x); });
    return out;
  }
  function merge3(b, o, t){
    if (jeq(o, t) || jeq(t, b)) return o;
    if (jeq(o, b)) return t;
    if (Array.isArray(o) || Array.isArray(t)) return mergeArr(b, o, t);
    if (isObj(o) && isObj(t)){
      var bb = isObj(b) ? b : {}, out = {}, keys = {};
      [bb, o, t].forEach(function(x){ Object.keys(x).forEach(function(k){ keys[k] = 1; }); });
      Object.keys(keys).forEach(function(k){ var v = merge3(bb[k], o[k], t[k]); if (v !== undefined) out[k] = v; });
      return out;
    }
    return o;
  }
  function sbStore(rest, uid, onState){
    var CK = "sb-cache-" + uid, PK = "sb-pend-" + uid;
    var cache = lsGet(CK) || {}, pend = lsGet(PK) || [], listeners = [], flushing = false, retryT = null, cacheT = null, lastErr = "", inflight = {}, wseq = {}, dead = false;
    if (!Array.isArray(pend)) pend = [];
    function clone(v){ return v === undefined || v === null ? v : JSON.parse(JSON.stringify(v)); }
    function state(){ if (onState) onState({pending:pend.length, error:lastErr}); }
    function saveCache(){ if (dead) return; clearTimeout(cacheT); cacheT = setTimeout(function(){ if (!dead) lsSet(CK, cache); }, 300); }
    function savePend(){ if (dead) return; lsSet(PK, pend); state(); }
    function loaded(c){ return Object.prototype.hasOwnProperty.call(cache, c); }
    function view(c){
      var out = {}, base = cache[c] || {};
      Object.keys(base).forEach(function(k){ out[k] = base[k]; });
      pend.forEach(function(op){ if (op.c !== c) return; if (op.d) delete out[op.i]; else out[op.i] = op.v; });
      return out;
    }
    function emit(c){ listeners.slice().forEach(function(l){ if (l.coll === c) l.emit(); }); }
    function refresh(c){
      if (inflight[c]) return inflight[c];
      var s0 = wseq[c] || 0;
      inflight[c] = rest.list(c).then(function(rows){
        inflight[c] = null;
        if ((wseq[c] || 0) !== s0) return refresh(c);
        var m = {}; (Array.isArray(rows) ? rows : []).forEach(function(r){ if (r && typeof r.doc_id === "string") m[r.doc_id] = r.data; });
        cache[c] = m; saveCache(); if (!pend.length) lastErr = ""; state(); emit(c);
      }, function(e){ inflight[c] = null; throw e; });
      return inflight[c];
    }
    function add(op){
      var prev = null; pend.forEach(function(x){ if (x.c === op.c && x.i === op.i) prev = x; });
      op.b = prev ? (prev.d ? null : prev === pend[0] && flushing ? clone(prev.v) : prev.b) : clone(cache[op.c] ? cache[op.c][op.i] : undefined);
      pend = pend.filter(function(x, i){ return !(x.c === op.c && x.i === op.i) || (flushing && i === 0); });
      pend.push(op); savePend();
      Promise.resolve().then(function(){ emit(op.c); });
      flush();
    }
    function flush(){
      if (flushing || !pend.length || dead) return;
      flushing = true;
      var op = pend[0];
      (op.d ? rest.del(op.c, op.i) : rest.one(op.c, op.i).then(function(server){
        var v = op.v;
        if (server && !jeq(server, op.b === undefined ? null : op.b)) v = merge3(op.b, op.v, server);
        if (v && Array.isArray(v.log) && typeof v.ml === "number") v.ml = v.log.reduce(function(a, e){ return a + (e && e.ml > 0 ? e.ml : 0); }, 0);
        op.v = v;
        if (server && jeq(server, v)) return;
        return rest.put(op.c, op.i, v);
      })).then(function(){
        if (!cache[op.c]) cache[op.c] = {};
        if (op.d) delete cache[op.c][op.i]; else cache[op.c][op.i] = op.v;
        wseq[op.c] = (wseq[op.c] || 0) + 1;
        saveCache(); if (pend[0] === op) pend.shift(); lastErr = ""; flushing = false; savePend(); emit(op.c); flush();
      }, function(e){
        flushing = false;
        if (e && e.fatal){ lastErr = e.message || "Fehler"; if (pend[0] === op) pend.shift(); savePend(); flush(); return; }
        lastErr = e && !e.network ? (e.message || "Fehler") : ""; state();
        clearTimeout(retryT); retryT = setTimeout(flush, 15000);
      });
    }
    function listen(c, l, err){
      listeners.push(l);
      if (loaded(c)) l.emit();
      refresh(c).catch(function(e){ if (!loaded(c)) l.emit(true); if (err && e && !e.network) err(e); });
      return function(){ var i = listeners.indexOf(l); if (i >= 0) listeners.splice(i, 1); };
    }
    function Doc(path){
      var p = path.split("/"), c = p.slice(0, -1).join("/"), id = p[p.length - 1];
      function snap(){ var v = view(c)[id]; return {id:id, exists: v !== undefined && v !== null, data:function(){ return clone(v); }}; }
      return {
        id:id,
        collection: function(name){ return Coll(path + "/" + name); },
        get: function(){ return loaded(c) ? Promise.resolve(snap()) : refresh(c).then(snap, function(){ return snap(); }); },
        set: function(data){ add({c:c, i:id, v:clone(data)}); return Promise.resolve(); },
        update: function(patch){ var base = clone(view(c)[id]) || {}; Object.keys(patch).forEach(function(k){ setPath(base, k, clone(patch[k])); }); add({c:c, i:id, v:base}); return Promise.resolve(); },
        delete: function(){ add({c:c, i:id, d:1}); return Promise.resolve(); },
        onSnapshot: function(cb, err){
          var last;
          return listen(c, {coll:c, emit:function(force){ var v = view(c)[id], key = JSON.stringify(v === undefined ? null : v); if (key === last && !force) return; last = key; try { cb(snap()); } catch (e) { console.error(e); } }}, err);
        }
      };
    }
    function Coll(c, ord, lim){
      function build(){
        var v = view(c), ids = Object.keys(v).filter(function(k){ return v[k] && typeof v[k] === "object"; });
        if (ord){ ids = ids.filter(function(k){ return v[k][ord.f] !== undefined; }); ids.sort(function(a, b){ var x = v[a][ord.f], y = v[b][ord.f]; return (x < y ? -1 : x > y ? 1 : 0) * (ord.d === "desc" ? -1 : 1); }); }
        if (lim) ids = ids.slice(0, lim);
        return {docs: ids.map(function(k){ var d = v[k]; return {id:k, exists:true, data:function(){ return clone(d); }}; }), key: JSON.stringify(ids.map(function(k){ return [k, v[k]]; }))};
      }
      return {
        doc: function(id){ return Doc(c + "/" + id); },
        orderBy: function(f, d){ return Coll(c, {f:f, d:d}, lim); },
        limit: function(n){ return Coll(c, ord, n); },
        get: function(){ return (loaded(c) ? Promise.resolve() : refresh(c).catch(function(){})).then(build); },
        onSnapshot: function(cb, err){
          var last;
          return listen(c, {coll:c, emit:function(force){ var sn = build(); if (sn.key === last && !force) return; last = sn.key; try { cb(sn); } catch (e) { console.error(e); } }}, err);
        }
      };
    }
    function refreshAll(){ var seen = {}; listeners.forEach(function(l){ if (!seen[l.coll]){ seen[l.coll] = 1; refresh(l.coll).catch(function(){}); } }); }
    document.addEventListener("visibilitychange", function(){ if (!document.hidden){ flush(); refreshAll(); } });
    window.addEventListener("online", function(){ flush(); refreshAll(); });
    var lastFocus = 0; window.addEventListener("focus", function(){ if (Date.now() - lastFocus > 5000){ lastFocus = Date.now(); flush(); refreshAll(); } });
    window.addEventListener("pageshow", function(ev){ if (ev.persisted){ flush(); refreshAll(); } });
    setInterval(function(){ if (!document.hidden){ flush(); refreshAll(); } }, 60000);
    setTimeout(function(){ state(); flush(); }, 0);
    return {collection:function(p){ return Coll(p); }, doc:Doc, pending:function(){ return pend.length; }, flush:flush, fresh:function(p){ return refresh(p); }, wipe:function(){ dead = true; clearTimeout(cacheT); clearTimeout(retryT); lsSet(CK, null); lsSet(PK, null); }};
  }

  function authMsg(e){
    if (e && e.network) return "Keine Verbindung. Versuch es nochmal.";
    var c = String((e && e.code) || "") + " " + String((e && e.message) || "");
    if (/confirm/i.test(c)) return "Bestätige zuerst die E-Mail und melde dich dann an.";
    if (/invalid_credentials|invalid_grant|invalid login/i.test(c)) return "E-Mail oder Passwort ist falsch.";
    if (/user_already_exists|already registered/i.test(c)) return "Das Konto gibt es schon. Bitte anmelden.";
    if (/signup_disabled|signups not allowed/i.test(c)) return "Neue Konten sind gesperrt. Bitte anmelden.";
    if (/weak_password|password should/i.test(c)) return "Passwort ist zu schwach. Nimm mindestens 8 Zeichen.";
    if (/email_address_invalid|validate email|invalid.*email/i.test(c)) return "Die E-Mail-Adresse ist ungültig.";
    if (/rate|too many/i.test(c)) return "Zu viele Versuche. Warte kurz.";
    return "Hat nicht geklappt. Versuch es nochmal.";
  }
  // Anmelden (neue Konten nur über das Supabase-Dashboard). Nach Fehlversuchen wird kurz gesperrt.
  function showLogin(auth){
    return new Promise(function(res){
      var box = $("#login"), st = $("#lgSt"), form = $("#lgForm"), busy = false, fails = 0, lockUntil = 0; box.hidden = false;
      function go(){
        if (busy) return;
        var wait0 = Math.ceil((lockUntil - Date.now()) / 1000); if (wait0 > 0){ st.textContent = "Zu viele Versuche. Warte " + wait0 + " s."; return; }
        var m = $("#lgMail").value.trim(), pw = $("#lgPw").value;
        if (!/^\S+@\S+\.\S+$/.test(m) || m.length > 200){ st.textContent = "Gib deine E-Mail-Adresse ein."; $("#lgMail").focus(); return; }
        if (pw.length < 6 || pw.length > 200){ st.textContent = "Das Passwort braucht mindestens 6 Zeichen."; $("#lgPw").focus(); return; }
        busy = true; $("#lgIn").disabled = true; st.textContent = "Melde an …";
        auth.signIn(m, pw).then(function(){ box.hidden = true; $("#lgPw").value = ""; st.textContent = ""; res(); }, function(e){
          if (!(e && e.network)){ fails++; if (fails >= 3) lockUntil = Date.now() + Math.min(300, 15 * Math.pow(2, fails - 3)) * 1000; }
          st.textContent = authMsg(e);
        }).then(function(){ busy = false; $("#lgIn").disabled = false; });
      }
      form.onsubmit = function(ev){ ev.preventDefault(); go(); };
    });
  }
  var syncShowT = null;
  function syncState(st){
    var el = $("#syncInfo"); if (!el) return;
    clearTimeout(syncShowT);
    if (st.error){ el.textContent = "⚠ Synchronisieren hakt: " + st.error; el.className = "syncinfo err"; el.hidden = false; return; }
    if (!st.pending){ el.hidden = true; return; }
    syncShowT = setTimeout(function(){ el.textContent = navigator.onLine === false ? "Offline · " + st.pending + (st.pending === 1 ? " Änderung wird" : " Änderungen werden") + " gespeichert, sobald du Netz hast" : "Speichere " + st.pending + (st.pending === 1 ? " Änderung" : " Änderungen") + " …"; el.className = "syncinfo"; el.hidden = false; }, 2500);
  }
  function initSupabase(){
    var cfg = sbConf(); if (!cfg) return Promise.resolve(null);
    var auth = sbAuth(cfg);
    function start(){ var uid = auth.uid(); SB = {auth:auth, uid:uid, cfg:cfg, db:sbStore(sbRest(cfg, auth), uid, syncState)}; return SB; }
    auth.onSignedOut(function(){ showLogin(auth).then(function(){ location.reload(); }); });
    if (auth.signedIn()) return Promise.resolve(start());
    return showLogin(auth).then(start);
  }
  SB_P = sbConf() ? initSupabase() : null;

  // ---------- Start ----------
  function useCap(name){
    if (SB_P) return SB_P.then(function(sb){ if (!sb) return null; if (name === "db") return sb.db; if (name === "user") return {id:function(){ return sb.uid; }}; return null; });
    try { if (!window.claude || typeof window.claude.use !== "function") return Promise.resolve(null); return Promise.resolve(window.claude.use(name)).catch(function(){ return null; }); }
    catch (e) { return Promise.resolve(null); }
  }
  function setBanner(text){ var b = $("#banner"); if (text){ b.textContent = text; b.hidden = false; } else b.hidden = true; }
  function startLocal(note){
    var o = loadLocal(LKEY), f = loadLocal(FKEY), w = loadLocal(WKEY);
    if (o === null){ mode = "readonly"; setBanner("Speichern ist hier nicht verfügbar. Öffne die Seite in Claude, um einzutragen."); }
    else { mode = "local"; sessions = sessionsFromLocal(o); foodDays = f ? foodFromLocal(f) : []; waterDays = w ? waterFromLocal(w) : []; updateSyncBanner(); }
    updateSyncBanner(); readyResolve(); renderTraining(); renderFood(); renderWater(); if (mode === "local"){ purgeTests(); seedToday(); fixAccident(); }
  }
  var unsubT = null, unsubF = null;
  function subscribeTraining(){
    if (unsubT){ try { unsubT(); } catch (e) {} }
    unsubT = col.orderBy("date", "desc").limit(300).onSnapshot(function(snap){
      sessions = snap.docs.filter(function(d){ return d.exists && isDateId(d.id); }).map(function(d){
        var data = d.data() || {}; return {id:d.id, entries:(data.entries && typeof data.entries === "object") ? data.entries : {}, note: typeof data.note === "string" ? data.note.slice(0, 300) : "", bw: clean(data.bw), hang: cleanHang(data.hang), ms: cleanMs(data.ms), sl: cleanSleep(data.sl), tr: cleanTr(data.tr)};
      });
      known = {}; sessions.forEach(function(s){ known[s.id] = true; });
      firstSync.tr = true; updateSyncBanner();
      renderTraining(); purgeTests(); seedToday(); importOld(); fixAccident();
    }, function(err){
      if (err && (err.code === "unavailable" || err.code === "deadline-exceeded" || err.code === "aborted")){ setTimeout(subscribeTraining, 3000); return; }
      firstSync.tr = true; updateSyncBanner();
      if (err && err.code === "revoked"){ mode = "readonly"; setBanner("Speichern ist gerade nicht möglich."); renderTraining(); return; }
      setBanner("Verlauf konnte nicht geladen werden." + (err && err.message ? " (" + err.message + ")" : ""));
    });
  }
  function subscribeFood(){
    if (unsubF){ try { unsubF(); } catch (e) {} }
    unsubF = foodCol.orderBy("date", "desc").limit(400).onSnapshot(function(snap){
      foodDays = snap.docs.filter(function(d){ return d.exists && isDateId(d.id); }).map(function(d){
        var data = d.data() || {}; return {id:d.id, items:cleanItems(data.items)};
      });
      firstSync.fo = true; updateSyncBanner();
      renderFood();
      renderHistory();
    }, function(err){
      if (err && (err.code === "unavailable" || err.code === "deadline-exceeded" || err.code === "aborted")){ setTimeout(subscribeFood, 3000); return; }
      firstSync.fo = true; updateSyncBanner();
    });
  }

  var unsubW = null;
  function subscribeWater(){
    if (unsubW){ try { unsubW(); } catch (e) {} }
    unsubW = waterCol.orderBy("date", "desc").limit(400).onSnapshot(function(snap){
      waterDays = snap.docs.filter(function(d){ return d.exists && isDateId(d.id); }).map(function(d){
        var data = d.data() || {}; return {id:d.id, log:cleanLog(data.log)};
      });
      firstSync.wa = true; updateSyncBanner();
      renderWater();
      renderHistory();
    }, function(err){
      if (err && (err.code === "unavailable" || err.code === "deadline-exceeded" || err.code === "aborted")){ setTimeout(subscribeWater, 3000); return; }
      firstSync.wa = true; updateSyncBanner();
    });
  }

  Promise.all([useCap("db"), useCap("user"), useCap("sample")]).then(function(res){
    var db = res[0], user = res[1];
    sampleFn = res[2] || null; sampleOk = !!sampleFn;
    if (!sampleFn) hideCalc();
    else if (typeof sampleFn.limits === "function"){
      Promise.resolve(sampleFn.limits()).then(function(caps){
        if (caps && caps.images){
          $("#photoBtn").hidden = false;
          if (Array.isArray(caps.images.mediaTypes) && caps.images.mediaTypes.length) $("#foodPhoto").accept = caps.images.mediaTypes.join(",");
        }
      }).catch(function(){});
    }
    if (!db || !user){ startLocal("Gespeichert wird nur auf diesem Gerät."); return; }
    return Promise.resolve(user.id()).catch(function(){ return null; }).then(function(uid){
      if (!uid){ startLocal("Gespeichert wird nur auf diesem Gerät."); return; }
      col = db.collection("data/users/" + uid);
      foodCol = db.doc("data/users/" + uid + "/food").collection("days");
      waterCol = db.doc("data/users/" + uid + "/water").collection("days");
      setRef = db.doc("data/users/" + uid + "/settings");
      favRef = db.doc("data/users/" + uid + "/favs");
      favRef.onSnapshot(function(snap){ if (snap.exists){ var dd = snap.data() || {}; if (Array.isArray(dd.items)){ favs = cleanFavs(dd.items); try { localStorage.setItem(FAVKEY, JSON.stringify(favs)); } catch (e) {} renderFavs(); } } }, function(){});
      uiRef = db.doc("data/users/" + uid + "/ui");
      uiRef.onSnapshot(function(snap){
        if (!uiFirst) return; uiFirst = false;
        if (!snap.exists) return;
        var x = snap.data() || {};
        try {
          if (x.drafts && x.drafts.d === todayId() && x.drafts.ex && Object.keys(x.drafts.ex).length){
            var cur = readDrafts();
            if (!Object.keys(cur.ex).length){ draftMem = x.drafts; try { localStorage.setItem("fit-draft", JSON.stringify(x.drafts)); } catch (e) {} applyDrafts(); }
          }
          if (x.timer) runTimerFrom(x.timer);
          if (tmOn() && !$(".ex.open") && x.open && x.open.d === todayId() && BYID[x.open.id]){
            var li = $('.ex[data-id="' + x.open.id + '"]'); if (li){ setOpen(li, true); setTimeout(function(){ li.scrollIntoView({block:"start"}); }, 250); }
          }
        } catch (e) {}
      }, function(){});
      setRef.onSnapshot(function(snap){ if (snap.exists){ var dd = snap.data() || {}; if (dd.prefs && typeof dd.prefs === "object") setPrefs(dd.prefs); if (Array.isArray(dd.days)) applyDays(dd.days); try { localStorage.setItem(SKEY, JSON.stringify(settingsDoc())); } catch (e) {} } }, function(){});
      mode = "db"; readyResolve(); subscribeTraining(); subscribeFood(); subscribeWater();
    });
  }).catch(function(){ startLocal("Gespeichert wird nur auf diesem Gerät."); });

  // ---------- Interaktion Training ----------
  function setOpen(li, open){
    if (open) $$(".ex.open").forEach(function(o){ if (o !== li){ o.classList.remove("open"); $(".ex-head", o).setAttribute("aria-expanded", "false"); $(".ex-body", o).hidden = true; } });
    li.classList.toggle("open", open); $(".ex-head", li).setAttribute("aria-expanded", String(open)); $(".ex-body", li).hidden = !open;
    try { var op = $(".ex.open"); if (op) localStorage.setItem("fit-open", JSON.stringify({d:todayId(), id:op.dataset.id})); else localStorage.removeItem("fit-open"); } catch (e) {}
    uiPush();
    if (typeof tmUpdate === "function") tmUpdate();
  }
  $("#exlist").addEventListener("click", function(ev){
    var li = ev.target.closest(".ex"); if (!li) return;
    var ex = BYID[li.dataset.id];
    if (ev.target.closest(".ex-head")){
      var willOpen = !li.classList.contains("open"); setOpen(li, willOpen);
      if (willOpen){ refreshRow(ex); li.scrollIntoView({block:"nearest", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"}); }
      return;
    }
    var stepBtn = ev.target.closest(".step");
    if (stepBtn){ var mi = $(".min", li), mv = num(mi.value); mi.value = String(Math.max(0, (mv === null ? ex.min : mv) + Number(stepBtn.dataset.d))); markDirty(ex.id); return; }
    var rc = ev.target.closest(".rchips button");
    if (rc){ var rr0 = rc.closest(".setrow"), sb0 = $(".srate", rr0), exr0 = BYID[li_of(rr0)]; setSR(sb0, rc.dataset.r); markDirty(exr0.id); autoSave(exr0, rr0.closest(".ex")); maybeClose(exr0, rr0.closest(".ex")); return; }
    var sr = ev.target.closest(".srate");
    if (sr){ var row = sr.closest(".setrow"), isDrop = row.classList.contains("drop"), inp = $(isDrop ? ".d-reps" : ".s-reps", row), cur = sr.dataset.r || "";
      var tag2 = isDrop ? "d" : "s" + $$(".setrow:not(.drop) .srate", li).indexOf(sr);
      if (!cur){ if (inp) onSetDone(inp); else openRateDialog(ex, li, sr); return; }
      openRateDialog(ex, li, sr, null, {change:true, undo:function(){ if (inp) inp.value = inp.placeholder || ""; setSR(sr, null); li.classList.remove("tmfin"); if (autoDone[ex.id]) delete autoDone[ex.id][tag2]; markDirty(ex.id); autoSave(ex, li); tmUpdate(); }}); return; }
    var chip = ev.target.closest(".chip");
    if (chip){
      var on = chip.getAttribute("aria-pressed") !== "true";
      $$(".chip", li).forEach(function(c){ c.setAttribute("aria-pressed", "false"); });
      chip.setAttribute("aria-pressed", String(on)); markDirty(ex.id);
      if (todayEntry(ex.id)) saveRow(ex, li, true);
      return;
    }
    if (ev.target.closest(".rest")){ startTimer(ex); return; }
    var save = ev.target.closest(".save");
    if (save){
      saveRow(ex, li, false).then(function(ok){
        if (ok && ex.kind === "time") goNext(ex, li, false);
      });
    }
  });

  function collectEntry(ex, li){
    if (ex.kind === "time"){
      var m = num($(".min", li).value);
      var out = {done:true, min: m === null ? ex.min : Math.round(m), at:new Date().toISOString()};
      if (ex.id === "rennen"){ var ii = num($(".run-inc", li).value), ss = num($(".run-spd", li).value); if (ii !== null) out.inc = ii; if (ss !== null) out.spd = ss; }
      return out;
    }
    var kgs = $$(".s-kg", li).map(function(i){ return num(i.value); });
    var dn = $$(".setrow:not(.drop) .srate", li).map(function(b){ return !!b.dataset.r; });
    var reps = $$(".s-reps", li).map(function(i, k){ var n = num(i.value); return (n === null || !dn[k]) ? null : Math.round(n); });
    if (kgs[0] === null) return null;
    var srs = $$('.setrow:not(.drop) .srate', li).map(function(b){ return rating(b.dataset.r); });
    var sets = kgs.map(function(k, i){ return {kg: k === null ? null : q(k), reps: reps[i], rating: srs[i] || ""}; });
    var dk = ex.drop ? num($(".d-kg", li).value) : null, dr = (ex.drop && $(".setrow.drop .srate", li) && $(".setrow.drop .srate", li).dataset.r) ? num($(".d-reps", li).value) : null;
    var dsb = ex.drop ? $('.setrow.drop .srate', li) : null, dsr = dsb ? rating(dsb.dataset.r) : null, rr = null;
    sets.forEach(function(x){ if (x.rating) rr = x.rating; }); if (!rr) rr = dsr;
    return {v:2, kg:q(kgs[0]), sets:sets, dropKg: dk === null ? null : q(dk), dropReps: dr === null ? null : Math.round(dr),
            rating: rr || "", dropRating: dsr || "", at:new Date().toISOString()};
  }
  function saveRow(ex, li, quiet){
    var v0 = dv[ex.id] || 0, entry = collectEntry(ex, li), btn = $(".save", li);
    if (!entry){ if (!quiet){ toast("Trag erst das Gewicht für Satz 1 ein."); $(".s-kg", li).focus(); } return Promise.resolve(false); }
    if (btn) btn.disabled = true;
    return saveEntry(ex.id, entry).then(function(){
      if ((dv[ex.id] || 0) === v0){ delete dirty[ex.id]; clearDraft(ex.id); }
      if (!quiet) toast(ex.kind === "time" ? "Erledigt" : "Gespeichert");
      refreshRow(ex); renderDay(); return true;
    }).catch(function(e){ toast(errText(e)); return false; }).then(function(ok){ if (btn) btn.disabled = false; return ok; });
  }
  function nextOf(ex){ var i = PLAN.indexOf(ex); return i >= 0 && i < PLAN.length - 1 ? PLAN[i + 1] : null; }
  function goNext(ex, li, withPause){
    var nx = nextOf(ex);
    setOpen(li, false);
    if (withPause) startTimer(ex, Math.max(120, (ex.rest || 90) + 30), nx ? nextExLabel(nx) : "Fertig 💪");
    if (!nx){ toast("Training fertig 💪"); return; }
    var nli = $('.ex[data-id="' + nx.id + '"]');
    setOpen(nli, true); refreshRow(nx);
    var smooth = matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    setTimeout(function(){ nli.scrollIntoView({block:"start", behavior:smooth}); }, 60);
  }

  function partnerOf(ex){ var p = PAIR[ex.id] && BYID[PAIR[ex.id]]; return p && PLAN.indexOf(p) >= 0 ? p : null; }
  function isLastEx(ex){ return PLAN.length && PLAN[PLAN.length - 1] === ex; }
  function exDoneEntry(ex, te){
    if (!te) return false; if (ex.kind === "time") return true;
    var st = entrySets(te).slice(0, ex.sets);
    if (st.length < ex.sets) return false;
    if (!st.every(function(x){ return x.reps !== null && x.reps > 0 && !!x.rating; })) return false;
    if (ex.drop){ var dr = clean(te.dropReps), dRate = te.v === 2 ? rating(te.dropRating) : (rating(te.dropRating) || rating(te.rating)); if (!(dr !== null && dr > 0 && dRate)) return false; }
    return true;
  }
  function li_of(el){ var p = el.closest(".ex"); return p ? p.dataset.id : null; }
  function dkg(li){ var d = $(".d-kg", li), n = d ? num(d.value) : null; return n !== null ? fmt(n) + " kg" : ""; }
  function pairFlow(ex, pex, li, isSet, isDrop, i){
    var pli = $('.ex[data-id="' + pex.id + '"]'), first = PLAN.indexOf(ex) < PLAN.indexOf(pex);
    saveRow(ex, li, true);
    var exchange = function(){ if (!isLastEx(ex)) startTimer(ex, Math.max(90, (ex.rest || 90)), ""); autoStop(); };
    if (first){
      if (isSet){
        if (!repsDone(pli, i)){ startTimer(ex, 15, ""); goPartner(li, pex, "Superset: weiter mit " + pex.name); return; }
        startTimer(ex, ex.rest, ""); return;
      }
      if (pex.drop && !dropDone(pli)){ startTimer(ex, 10, ""); goPartner(li, pex, "Superset: weiter mit " + pex.name + " (Drop" + (dkg(pli) ? " " + dkg(pli) : "") + ")"); return; }
      exchange(); return;
    }
    if (isSet){
      if (i + 1 < pex.sets){ startTimer(ex, 15, ""); goPartner(li, pex, null); return; }
      if (pex.drop && !dropDone(pli)){ startTimer(ex, 10, ""); goPartner(li, pex, "Weiter mit " + pex.name + " (Drop" + (dkg(pli) ? " " + dkg(pli) : "") + ")"); return; }
      if (ex.drop && !dropDone(li)){ toast("Jetzt Drop" + (dkg(li) ? " mit " + dkg(li) : "") + ", ohne Pause"); return; }
    }
    exchange();
  }
  function goPartner(li, pex, msg){
    var top0 = $(".ex-head", li).getBoundingClientRect().top;
    setOpen(li, false);
    var pli = $('.ex[data-id="' + pex.id + '"]'); setOpen(pli, true); refreshRow(pex);
    window.scrollBy(0, $(".ex-head", pli).getBoundingClientRect().top - top0);
    if (msg) toast(msg);
  }
  function repsDone(li, k){ var b = $$(".setrow:not(.drop) .srate", li)[k]; return !!(b && b.dataset.r); }
  function dropDone(li){ var b = $(".setrow.drop .srate", li); return !!(b && b.dataset.r); }
  function autoRating(inp){
    var rv = num(inp.value), tg = num(inp.placeholder); if (!(rv > 0) || !(tg > 0)) return "passt";
    var row = inp.closest(".setrow"), ke = row && row.querySelector(".s-kg, .d-kg"), kv = ke ? num(ke.value) : null, ks = ke ? num(ke.dataset.sug) : null;
    var ratio = (kv > 0 && ks > 0) ? (kv * (1 + rv / 30)) / (ks * (1 + tg / 30)) : rv / tg;
    return ratio >= 1.15 ? "easy" : ratio >= 1.07 ? "leicht" : ratio >= 0.99 ? "passt" : ratio >= 0.92 ? "hart" : ratio >= 0.85 ? "limit" : "fail";
  }
  function tmOn(){ return document.body.classList.contains("tm"); }
  function tmIdx(){ var o = $(".ex.open"); return o ? PLAN.indexOf(BYID[o.dataset.id]) : -1; }
  function tmUpdate(){
    var bar = $("#tmBar"); if (!bar) return; var on = tmOn(); bar.hidden = !on; if (!on){ var nnh = $("#tmNextName"); if (nnh) nnh.hidden = true; dockUpdate(); return; }
    if (hangStep){ $("#tmN").textContent = "Dead Hang"; bar.classList.remove("fin"); bar.style.setProperty("--tp", "0%"); $("#tmNext").textContent = "Weiter ›"; var nh = $("#tmNextName"); if (nh) nh.hidden = true; dockUpdate(); return; }
    var i = tmIdx(), o = $(".ex.open"); $("#tmN").textContent = (i + 1) + "/" + PLAN.length;
    bar.classList.toggle("fin", !!o && o.classList.contains("tmfin"));
    bar.style.setProperty("--tp", (Math.max(0, i + 1) / PLAN.length * 100).toFixed(1) + "%");
    var nnf = $("#tmNextName"); if (nnf) nnf.classList.toggle("fin", bar.classList.contains("fin"));
    $("#tmNext").textContent = i >= PLAN.length - 1 ? "Fertig ✓" : "Weiter ›";
    var nn = $("#tmNextName");
    if (nn){
      if (i >= 0 && i < PLAN.length - 1){
        var nx = PLAN[i + 1], sg = nx.kind === "time" ? null : suggest(nx), det;
        if (!sg) det = nx.target;
        else det = fmt(sg.sets[0]) + " kg · " + nx.sets + "×" + (sg.reps[0] != null ? sg.reps[0] : nx.pr[0]);
        nn.innerHTML = "";
        var tx = document.createElement("span"); tx.className = "nx-tx";
        var l2 = document.createElement("b"); l2.textContent = nx.name;
        tx.appendChild(l2);
        var ar = document.createElement("span"); ar.className = "nx-ar"; ar.setAttribute("aria-hidden", "true"); ar.textContent = "›";
        nn.appendChild(tx); nn.appendChild(ar);
        nn.setAttribute("aria-label", "Weiter zu " + nx.name);
        nn.hidden = false;
      } else nn.hidden = true;
    }
    dockUpdate();
  }
  function dockUpdate(){ var d = $("#dock"); if (d) d.classList.toggle("on", !$("#timer").hidden || !$("#tmNextName").hidden); }
  $("#tmNextName").addEventListener("click", function(){ if (hangStep){ hangContinue(); return; } tmGo(tmIdx() + 1); });
  new MutationObserver(dockUpdate).observe($("#timer"), {attributes:true, attributeFilter:["hidden"]});
  function tmGo(i){
    if (i < 0) return; if (i >= PLAN.length){ tmStop(); return; }
    if (hangStep){ if (hang) finishHang(); hangStepOff(); }
    var li = $('.ex[data-id="' + PLAN[i].id + '"]'); if (!li) return;
    setOpen(li, true); refreshRow(PLAN[i]); window.scrollTo(0, 0); tmUpdate();
  }
  function tmRetro(){ try { return localStorage.getItem("fit-retro") === todayId(); } catch (e) { return false; } }
  function tmEdit(){
    try { localStorage.setItem("fit-retro", todayId()); localStorage.setItem("fit-tm", todayId()); } catch (e) {}
    document.body.classList.add("tm");
    var first = 0; for (var i = 0; i < PLAN.length; i++){ if (!exDoneEntry(PLAN[i], todayEntry(PLAN[i].id))){ first = i; break; } }
    tmGo(first);
  }
  function tmStart(){
    document.body.classList.add("tm"); try { localStorage.setItem("fit-tm", todayId()); } catch (e) {}
    var t0 = trState(); if (!t0 || t0.e) trSave({s:new Date().toISOString(), e:"", t:0});
    if (hangWanted()) hangStepOn(); else tmGo(firstOpenIdx());
  }
  function showDone(sI, eI){
    var min = Math.round((Date.parse(eI) - Date.parse(sI)) / 60000); if (min < 5) return;
    try { if (localStorage.getItem("fit-done") === todayId()) return; localStorage.setItem("fit-done", todayId()); } catch (e) {}
    var n = PLAN.filter(function(ex){ return exDoneEntry(ex, todayEntry(ex.id)); }).length; n = Math.max(n, $$("#exlist > li.done").length);
    $("#tmDoneP").textContent = min + " Minuten, " + n + " von " + PLAN.length + " Übungen. Jetzt Eiweiß essen, Wasser trinken und gut schlafen.";
    $("#tmDone").hidden = false;
  }
  function finishTraining(force){
    try { if (!force && localStorage.getItem("fit-fin") === todayId()) return; localStorage.setItem("fit-fin", todayId()); localStorage.setItem("fit-done", todayId()); } catch (e) {}
    stopTimer();
    var t = trState(), min = null;
    if (t && t.s){ var eI = t.e || new Date().toISOString(); min = Math.round((Date.parse(eI) - Date.parse(t.s)) / 60000); if (!t.e) trSave({s:t.s, e:eI, t:t.t || 0}); }
    var n = 0, sets = 0, vol = 0;
    PLAN.forEach(function(ex){
      var e = todayEntry(ex.id); if (!e) return; if (exDoneEntry(ex, e)) n++;
      entrySets(e).forEach(function(x){ if (x.reps > 0 && x.rating){ sets++; vol += (x.kg || 0) * x.reps; } });
      var dk = cleanKg(e.dropKg), dr = clean(e.dropReps); if (dk && dr && e.dropRating){ sets++; vol += dk * dr; }
    });
    var tsn = todaySession(), rws = tsn ? exRowsFor(tsn, trainSessions()) : [];
    var prevS = null, tIds = PLAN.map(function(e){ return e.id; }), tvol = tsn ? sessStats(tsn).vol : vol;
    trainSessions().some(function(s0){ if (s0.id >= todayId()) return false; var ov = ALLSTR.filter(function(x){ return entryOk(x, s0) && tIds.indexOf(x.id) >= 0; }).length; if (ov >= Math.max(3, Math.round(tIds.length * 0.6))){ prevS = s0; return true; } return false; });
    var cmp = "";
    if (prevS && tvol > 0){ var pv = sessStats(prevS).vol; if (pv > 0){ var dv = tvol - pv, dp = dv / pv * 100; cmp = Math.abs(dp) < 1 ? "Gleich viel bewegt wie letztes Mal" : dv > 0 ? "📈 " + kn(dv) + " kg mehr als letztes Mal (+" + f1(dp) + " %)" : "📉 " + kn(-dv) + " kg weniger als letztes Mal (−" + f1(-dp) + " %)"; } }
    var nPr = rws.filter(function(r){ return r.tr.cls === "pr"; }).length, pEl = $("#tmDoneP");
    pEl.textContent = [nPr ? "🏆 " + nPr + (nPr === 1 ? " Rekord" : " Rekorde") : "", cmp].filter(Boolean).join(" · "); pEl.hidden = !pEl.textContent;
    var allDone = PLAN.every(function(ex){ return exDoneEntry(ex, todayEntry(ex.id)); });
    $("#tmDoneT").textContent = allDone ? "Training fertig 💪" : "Training beendet";
    var hit = musclesOf(rws.map(function(r){ return r.ex.id; }));
    $("#tmDoneFig").innerHTML = '<div class="tdfw">' + fullBody(hit) + '<span class="tdv l">Vorne</span><span class="tdv r">Hinten</span></div>' +
      (hit.p.length ? '<div class="tdm">' + uniqNames(hit.p).map(function(n){ return '<span class="p">' + n + '</span>'; }).join("") + '</div>' + (function(){ var sn = uniqNames(hit.s).filter(function(n){ return uniqNames(hit.p).indexOf(n) < 0; }); return sn.length ? '<p class="tdn">Mittrainiert: ' + sn.join(", ") + '</p>' : ""; })() : '<p class="tdn">Noch kein Satz abgehakt.</p>');
    $("#tmDoneL").innerHTML = rws.map(function(r){ return '<li><div><b>' + r.ex.name + '</b><span class="vnext ' + r.nt.cls + '">Nächstes Mal: <b>' + r.nt.tx + '</b></span></div><span class="vt ' + r.tr.cls + '">' + r.tr.tx + '</span></li>'; }).join("");
    $("#tmDoneS").innerHTML = [[min ? (min >= 60 ? Math.floor(min / 60) + ":" + pad(min % 60) : min) : "–", min >= 60 ? "Stunden" : "Minuten"], [n + "/" + PLAN.length, "Übungen"], [sets, "Sätze"], [Math.round(vol).toLocaleString("de-DE"), "kg bewegt"]].map(function(x){ return '<div><b>' + x[0] + '</b><span>' + x[1] + '</span></div>'; }).join("");
    $("#tmDone").hidden = false;
  }
  $("#tmDoneOk").addEventListener("click", function(){ $("#tmDone").hidden = true; tmStop(); });
  function tmStop(){ if (hang) finishHang(); if (hangStep) hangStepOff(); var t1 = trState(); if (t1 && !t1.e){ var eI = new Date().toISOString(); trSave({s:t1.s, e:eI, t:t1.t || 0}); if (!t1.t) showDone(t1.s, eI); } document.body.classList.remove("tm"); try { localStorage.removeItem("fit-tm"); localStorage.removeItem("fit-retro"); } catch (e) {} $$(".ex.open").forEach(function(o){ setOpen(o, false); }); stopTimer(); tmUpdate(); window.scrollTo(0, 0); }
  function restoreTm(){
    try { if (localStorage.getItem("fit-tm") === todayId() && localStorage.getItem(HSKEY) === todayId() && PREFS.hang){ document.body.classList.add("tm"); hangStepOn(); return; } } catch (e) {}
    try { if (localStorage.getItem("fit-tm") === todayId()){ document.body.classList.add("tm"); restoreOpen(); if (!$(".ex.open")){ var f = 0; for (var i = 0; i < PLAN.length; i++){ if (!exDoneEntry(PLAN[i], todayEntry(PLAN[i].id))){ f = i; break; } } tmGo(f); } } } catch (e) {}
    tmUpdate();
  }
  setInterval(function(){ var t = trState(), tt = $("#tmTime"); if (tt && t) tt.textContent = dur((t.e ? Date.parse(t.e) : Date.now()) - Date.parse(t.s)); }, 1000);
  $("#tmTest").addEventListener("click", function(){
    document.body.classList.add("tm"); try { localStorage.setItem("fit-tm", todayId()); } catch (e) {}
    trSave({s:new Date().toISOString(), e:"", t:1});
    if (hangWanted()) hangStepOn(); else tmGo(firstOpenIdx());
  });
  $("#tmStart").addEventListener("click", tmStart);
  $("#tmAny").addEventListener("click", tmStart);
  $("#tmEdit").addEventListener("click", tmEdit);
  $("#tmExit").addEventListener("click", tmStop);
  $("#tmPrev").addEventListener("click", function(){ if (hangStep) return; if (tmIdx() === 0 && PREFS.hang){ hangStepOn(); return; } tmGo(tmIdx() - 1); });
  $("#tmNext").addEventListener("click", function(){ if (hangStep){ hangContinue(); return; } if (tmIdx() >= PLAN.length - 1) finishTraining(true); else tmGo(tmIdx() + 1); });
  var rateCtx = null;
  function openRateDialog(ex, li, srateBtn, afterFn, opts){
    rateCtx = {exId: ex.id, li: li, btn: srateBtn, after: afterFn, opts: opts || null};
    $("#rdReset").hidden = !(opts && opts.change);
    $$("#rateDlg .rdgrid button").forEach(function(b){ b.classList.toggle("cur", !!(opts && opts.change) && b.dataset.r === srateBtn.dataset.r); });
    var row = srateBtn.closest(".setrow"), k = row && $(".s-kg,.d-kg", row), rp = row && $(".s-reps,.d-reps", row);
    $("#rdSub").textContent = ex.name + " · " + (row ? $(".sl", row).textContent : "") + (k && k.value ? " · " + k.value + " kg" : "") + (rp && rp.value ? " × " + rp.value : "");
    $("#rateDlg").hidden = false;
  }
  function closeRateDialog(){ $("#rateDlg").hidden = true; rateCtx = null; }
  $("#rateDlg").addEventListener("click", function(ev){
    if (ev.target.id === "rateDlg"){ closeRateDialog(); return; }
    if (ev.target.id === "rdReset"){ var cx = rateCtx; closeRateDialog(); if (cx && cx.opts && cx.opts.undo) cx.opts.undo(); return; }
    var b = ev.target.closest("button[data-r]"); if (!b || !rateCtx) return;
    var ctx = rateCtx, exr = BYID[ctx.exId];
    setSR(ctx.btn, b.dataset.r); markDirty(exr.id); autoSave(exr, ctx.li); maybeClose(exr, ctx.li);
    closeRateDialog();
    if (ctx.after) ctx.after();
  });
  var rateT = {};
  function rateCommit(ex, li, btn){
    var row = btn.closest(".setrow"), isDrop = row.classList.contains("drop");
    var key = ex.id + ":" + (isDrop ? "d" : $$(".setrow:not(.drop) .srate", li).indexOf(btn));
    btn.classList.add("pend"); clearTimeout(rateT[key]); autoSave(ex, li);
    rateT[key] = setTimeout(function(){
      btn.classList.remove("pend");
      var inp = $(isDrop ? ".d-reps" : ".s-reps", row);
      if (btn.dataset.r && inp && !(num(inp.value) > 0) && num(inp.placeholder) > 0){
        inp.value = inp.placeholder;
        inp.dispatchEvent(new Event("input", {bubbles:true})); inp.dispatchEvent(new Event("change", {bubbles:true}));
      } else { autoSave(ex, li); maybeClose(ex, li); }
    }, 5000);
  }
  var asTimer = {};
  function autoSave(ex, li){ if (!ex || !li) return; clearTimeout(asTimer[ex.id]); asTimer[ex.id] = setTimeout(function(){ saveRow(ex, li, true); }, 900); }
  function exComplete(ex, li){
    var reps = $$(".s-reps", li).every(function(x){ var n = num(x.value); return n !== null && n > 0; });
    var rts = $$(".setrow:not(.drop) .srate", li).every(function(b){ return !!b.dataset.r; });
    var drop = true;
    if (ex.drop){ var dr = $(".d-reps", li), db = $(".setrow.drop .srate", li), n2 = dr ? num(dr.value) : null; drop = n2 !== null && n2 > 0 && !!(db && db.dataset.r); }
    return reps && rts && drop;
  }
  function maybeClose(ex, li){
    if (!ex || !li || !li.classList.contains("open") || !exComplete(ex, li)) return;
    saveRow(ex, li, true).then(function(ok){ if (ok && PLAN.every(function(x){ return exDoneEntry(x, todayEntry(x.id)); })) finishTraining(); if (ok) setTimeout(function(){ if (li.classList.contains("open") && exComplete(ex, li)){ if (tmOn()){ li.classList.add("tmfin"); tmUpdate(); } else setOpen(li, false); autoStop(); } }, 700); });
  }
  $("#exlist").addEventListener("change", function(ev){
    var t = ev.target; if (!(t.classList.contains("s-reps") || t.classList.contains("d-reps"))) return;
    var li = t.closest(".ex"); if (li) maybeClose(BYID[li.dataset.id], li);
  });
  var uiRef = null, uiTimer = null, uiFirst = true, draftMem = null;
  function uiPush(now){
    if (!(mode === "db" && uiRef)) return;
    clearTimeout(uiTimer);
    var run = function(){ try { var op = $(".ex.open"), pr = uiRef.set({open: op ? {d:todayId(), id:op.dataset.id} : null, drafts: readDrafts(), timer: (tState && !tState.over) ? {end:tState.end, total:tState.total} : null, at: new Date().toISOString()}); if (pr && pr.catch) pr.catch(function(){}); } catch (e) {} };
    if (now) run(); else uiTimer = setTimeout(run, SB ? 1500 : 400);
  }
  // Automatischer Ablauf: Satz mit "Fertig" abhaken → Pause; letzter Satz → Drop sofort → Pause → nächste Übung
  var autoDone = {};
  $("#exlist").addEventListener("change", function(ev){
    var t = ev.target, li0 = t.closest(".ex"); if (!li0) return;
    if (t.matches(".s-kg,.d-kg,.s-reps,.d-reps") && todayEntry(li0.dataset.id)) saveRow(BYID[li0.dataset.id], li0, true);
  });
  $("#exlist").addEventListener("focusin", function(ev){ var t = ev.target; if (t.matches && t.matches(".num input")) setTimeout(function(){ try { t.select(); } catch (e) {} }, 0); });
  // Rekord-Meldung direkt nach dem Satz (nur wenn es schon frühere Trainings mit der Übung gibt)
  var prSeen = {};
  function prCheck(ex, kg, reps){
    if (!(kg > 0) || !(reps > 0) || ex.kind === "time") return;
    var t = todayId(), key = t + ":" + ex.id; if (prSeen[key]) return;
    var best = 0; sessions.forEach(function(s){ if (s.id < t && entryOk(ex, s)) best = Math.max(best, bestE1(s.entries[ex.id])); });
    if (!best || e1(kg, reps) <= best * 1.005) return;
    prSeen[key] = true;
    toast("🏆 Neuer Rekord: " + ex.name + " " + fmt(kg) + " kg × " + reps, true); vibe([60, 40, 60, 40, 160]);
  }
  function onSetDone(t){
    var isSet = t.classList.contains("s-reps"), isDrop = t.classList.contains("d-reps");
    var li = t.closest(".ex"), ex = BYID[li.dataset.id], row = t.closest(".setrow");
    if (!(num(t.value) > 0) && num(t.placeholder) > 0) t.value = t.placeholder;
    if (!(num(t.value) > 0)){ toast("Trag die Wiederholungen ein."); t.focus(); return; }
    if (TRAIN_DAYS.indexOf(new Date().getDay()) >= 0 && !tmRetro()) autoStart();
    var rb0 = $(".srate", row), i = isSet ? Number(t.dataset.i) : -1;
    var st = autoDone[ex.id] || (autoDone[ex.id] = {}); st[isDrop ? "d" : "s" + i] = true;
    var pex0 = partnerOf(ex);
    var doPacing = function(){
      if (!rb0.dataset.r || tmRetro()) return;
      if (isSet) prCheck(ex, num($(".s-kg", row).value), num(t.value));
      if (pex0){ pairFlow(ex, pex0, li, isSet, isDrop, i); return; }
      var doneMain = $$(".setrow:not(.drop) .srate", li).map(function(b){ return !!b.dataset.r; });
      var allMain = doneMain.every(Boolean), dropOk = !ex.drop || dropDone(li);
      if (isSet && !allMain){
        var nextOpen = doneMain.indexOf(false);
        if (nextOpen >= 0) startTimer(ex, ex.rest, "");
        return;
      }
      if (allMain && !dropOk){
        stopTimer();
        var dkv = num($(".d-kg", li).value);
        toast("Jetzt sofort Drop" + (dkv !== null ? " mit " + fmt(dkv) + " kg" : "") + ", ohne Pause");
        return;
      }
      if (allMain && dropOk && !isLastEx(ex)) startTimer(ex, Math.max(120, (ex.rest || 90) + 30), "");
    };
    openRateDialog(ex, li, rb0, doPacing);
  }
  $("#exlist").addEventListener("input", function(ev){ var li = ev.target.closest(".ex"); if (li && !ev.target.classList.contains("exni")){ markDirty(li.dataset.id); if (ev.target.matches && ev.target.matches(".s-kg,.s-reps,.d-kg,.d-reps")) autoSave(BYID[li.dataset.id], li); } });

  var delTimer = null;
  $("#history").addEventListener("click", function(ev){
    var du = ev.target.closest(".durb");
    if (du){
      var s0 = sessionById(du.dataset.id), cur = s0 && s0.tr && s0.tr.s && s0.tr.e ? Math.round((Date.parse(s0.tr.e) - Date.parse(s0.tr.s)) / 60000) : 0;
      var f = document.createElement("div"); f.className = "durf";
      var inp = document.createElement("input"); inp.inputMode = "numeric"; inp.placeholder = "z. B. 1:24"; inp.value = cur ? Math.floor(cur / 60) + ":" + pad(cur % 60) : ""; inp.setAttribute("aria-label", "Dauer (Stunden:Minuten)");
      var ok = document.createElement("button"); ok.type = "button"; ok.className = "btn primary"; ok.textContent = "Speichern";
      f.appendChild(inp); f.appendChild(ok); var old = du.closest(".vrow").nextElementSibling; if (old && old.classList.contains("durf")) old.remove(); du.closest(".vrow").after(f); inp.focus();
      ok.addEventListener("click", function(){
        var min = parseDur(inp.value); if (!min || min < 1 || min > 600){ toast("Dauer eingeben, z. B. 1:24"); inp.focus(); return; }
        var id = du.dataset.id, ss = sessionById(id), e = ss && ss.tr && ss.tr.e ? Date.parse(ss.tr.e) : dateOf(id).getTime() + 20 * 3600000;
        saveSessionPatch({tr:{s:new Date(e - min * 60000).toISOString(), e:new Date(e).toISOString(), t:0}}, id).then(function(){ toast("Dauer: " + hm(min)); renderHistory(); }).catch(function(er){ toast(errText(er)); });
      });
      return;
    }
    var b = ev.target.closest(".del"); if (!b) return;
    if (!b.classList.contains("confirm")){
      $$(".del.confirm").forEach(function(x){ x.classList.remove("confirm"); x.textContent = x.classList.contains("ic") ? "🗑" : "Training löschen"; });
      b.classList.add("confirm"); b.textContent = b.classList.contains("ic") ? "Löschen?" : "Wirklich löschen? Nochmal tippen";
      clearTimeout(delTimer); delTimer = setTimeout(function(){ b.classList.remove("confirm"); b.textContent = b.classList.contains("ic") ? "🗑" : "Training löschen"; }, 4000);
      return;
    }
    clearTimeout(delTimer);
    deleteSession(b.dataset.id).then(function(){ toast("Training gelöscht"); }).catch(function(e){ toast(errText(e)); });
  });

  function renderMeals(kind){
    var ul = $("#meals"); if (!ul) return; ul.innerHTML = "";
    MEALS[kind].forEach(function(m){
      var li = document.createElement("li");
      var w = document.createElement("span"); w.className = "when"; w.textContent = m[0];
      var t = document.createElement("span"); t.className = "what"; t.textContent = m[1];
      if (m[2]){ var s = document.createElement("small"); s.textContent = m[2]; t.appendChild(s); }
      li.appendChild(w); li.appendChild(t); ul.appendChild(li);
    });
    $$(".seg button").forEach(function(b){ b.setAttribute("aria-pressed", String(b.dataset.day === kind)); });
  }
  $(".seg").addEventListener("click", function(ev){ var b = ev.target.closest("button[data-day]"); if (b) renderMeals(b.dataset.day); });

  var VIEWS = ["training", "verlauf", "essen", "wasser"];
  function showView(){
    var h = (location.hash || "").replace("#", ""), v = VIEWS.indexOf(h) >= 0 ? h : "training";
    $$(".view").forEach(function(s){ s.hidden = s.dataset.name !== v; });
    $$(".tabs a").forEach(function(a){ if (a.dataset.view === v) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  }
  window.addEventListener("hashchange", function(){ showView(); window.scrollTo(0, 0); });

  // ---------- Timer ----------
  var tState = null, tIv = null, audio = null;
  // iPhone: "ambient" = Töne laufen über die Musik, ohne sie anzuhalten (nur der Sperrbildschirm-Modus braucht "playback")
  function audioMode(){ try { if (navigator.audioSession) navigator.audioSession.type = lockOn() ? "playback" : "ambient"; } catch (e) {} }
  function ensureAudio(){ try { audioMode(); if (!audio){ var AC = window.AudioContext || window.webkitAudioContext; if (AC) audio = new AC(); } if (audio && audio.state === "suspended") audio.resume(); } catch (e) { audio = null; } }
  function volF(){ return [0, 0.22, 0.55, 1][PREFS.vol] || 1; }
  function vibe(p){ try { if (PREFS.vib && navigator.vibrate) navigator.vibrate(p); } catch (e) {} }
  // Kurzer, klarer Doppel-Gong (hoch und rein, schneidet durch Musik). Grundton + leise Obertöne = glockiger Klang.
  function chime(t0, f, dur, peak, dest){
    [[1, 1], [2, 0.3], [3, 0.12]].forEach(function(p){
      var o = audio.createOscillator(), g = audio.createGain(); o.type = "sine"; o.frequency.value = f * p[0]; o.connect(g); g.connect(dest);
      g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(Math.max(0.001, peak * p[1]), t0 + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.start(t0); o.stop(t0 + dur + 0.03);
    });
  }
  function beep(){
    if (!audio || lockActive()){ vibe([180, 90, 260]); return; }
    try {
      var comp = audio.createDynamicsCompressor(); comp.threshold.value = -20; comp.knee.value = 6; comp.ratio.value = 10; comp.connect(audio.destination);
      var t = audio.currentTime + 0.02, v = volF();
      chime(t, 1568, 0.42, v, comp); chime(t + 0.17, 2093, 0.62, v, comp);
    } catch (e) {}
    vibe([180, 90, 260]);
  }
  // Sperrbildschirm-Modus: Pause als Audiospur (läuft auch bei gesperrtem Handy, zeigt Fortschritt im Sperrbildschirm)
  var LOCK_KEY = "fit-lockaudio", lockEl = null, lockUrl = null;
  // Einmalig: Sperrbildschirm-Ton aus, damit die Musik weiterläuft (in den Einstellungen wieder einschaltbar)
  try { if (!localStorage.getItem("fit-lockaudio-m41")){ localStorage.setItem(LOCK_KEY, "0"); localStorage.setItem("fit-lockaudio-m41", "1"); } } catch (e) {}
  function lockOn(){ try { return localStorage.getItem(LOCK_KEY) === "1"; } catch (e) { return false; } }
  function lockActive(){ return !!(lockEl && !lockEl.paused); }
  function pauseWav(secs){
    var R = 8000, tail = 1.2, n = Math.round((secs + tail) * R), buf = new ArrayBuffer(44 + n), v = new DataView(buf), a = new Uint8Array(buf, 44);
    function str(o, t){ for (var i = 0; i < t.length; i++) v.setUint8(o + i, t.charCodeAt(i)); }
    str(0, "RIFF"); v.setUint32(4, 36 + n, true); str(8, "WAVEfmt "); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
    v.setUint32(24, R, true); v.setUint32(28, R, true); v.setUint16(32, 1, true); v.setUint16(34, 8, true); str(36, "data"); v.setUint32(40, n, true);
    a.fill(128);
    function tone(t0, dur, f, amp, h2){ var s0 = Math.round(t0 * R), len = Math.round(dur * R); for (var i = 0; i < len && s0 + i < n; i++){ if (s0 + i < 0) continue; var tt = i / R, env = Math.exp(-tt * 7 / dur) * Math.min(1, tt / 0.006), v0 = Math.sin(2 * Math.PI * f * tt) + (h2 ? 0.3 * Math.sin(4 * Math.PI * f * tt) : 0), cur = a[s0 + i] - 128; a[s0 + i] = Math.max(0, Math.min(255, Math.round(128 + cur + amp * env * v0 / (h2 ? 1.3 : 1)))); } }
    var vf = Math.max(0.35, volF());
    if (PREFS.cdBeep) for (var c = 3; c >= 1; c--) if (secs - c > 0) tone(secs - c, 0.08, 1046, Math.round(60 * vf), false);
    tone(secs, 0.42, 1568, Math.round(118 * vf), true); tone(secs + 0.17, 0.62, 2093, Math.round(118 * vf), false);
    return URL.createObjectURL(new Blob([buf], {type:"audio/wav"}));
  }
  function lockStop(){ try { if (lockEl){ lockEl.pause(); lockEl.removeAttribute("src"); lockEl.load(); } if (lockUrl) URL.revokeObjectURL(lockUrl); lockUrl = null; if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "none"; } catch (e) {} }
  function lockPlay(){
    if (!lockOn() || !tState || tState.over) return;
    var secs = Math.max(1, Math.round((tState.end - Date.now()) / 1000));
    try {
      lockStop();
      if (!lockEl){ lockEl = new Audio(); lockEl.setAttribute("playsinline", ""); lockEl.addEventListener("ended", lockStop); }
      lockUrl = pauseWav(secs); lockEl.src = lockUrl; lockEl.volume = 1;
      var pr = lockEl.play(); if (pr && pr.catch) pr.catch(function(){});
      if ("mediaSession" in navigator && window.MediaMetadata){
        var at = new Date(tState.end).toLocaleTimeString("de-DE", {hour:"2-digit", minute:"2-digit"});
        navigator.mediaSession.metadata = new MediaMetadata({title:"Pause · weiter um " + at, artist:tState.name ? "nach " + tState.name : "Training", album:"Body Tracking", artwork:[{src:"icon-512.png", sizes:"512x512", type:"image/png"}]});
        navigator.mediaSession.playbackState = "playing";
        try { navigator.mediaSession.setPositionState({duration:secs + 1.2, position:0, playbackRate:1}); } catch (e) {}
      }
    } catch (e) {}
  }
  var lastCd = null;
  function countBeep(){
    if (!audio || lockActive() || !PREFS.cdBeep) return;
    try { var o = audio.createOscillator(), g = audio.createGain(); o.type = "sine"; o.frequency.value = 1046; o.connect(g); g.connect(audio.destination);
      var s = audio.currentTime; g.gain.setValueAtTime(0.0001, s); g.gain.exponentialRampToValueAtTime(0.45 * volF(), s + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, s + 0.08); o.start(s); o.stop(s + 0.1); } catch (e) {}
  }
  function startBeep(){
    if (!audio) return;
    try { var o = audio.createOscillator(), g = audio.createGain(); o.frequency.value = 600; o.connect(g); g.connect(audio.destination);
      var s = audio.currentTime; g.gain.setValueAtTime(0.0001, s); g.gain.exponentialRampToValueAtTime(0.18, s + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, s + 0.14);
      o.start(s); o.stop(s + 0.16);
    } catch (e) {}
  }
  function mmss(ms){ var s = Math.ceil(ms / 1000); return Math.floor(s / 60) + ":" + pad(s % 60); }
  function tick(){
    if (!tState) return;
    var rem = Math.max(0, tState.end - Date.now()); $("#tTime").textContent = mmss(rem);
    var cd = Math.ceil(rem / 1000); if (cd >= 1 && cd <= 3 && cd !== lastCd){ lastCd = cd; countBeep(); } if (cd > 3) lastCd = null;
    $("#timer").style.setProperty("--p", (tState.total ? Math.min(100, (1 - rem / (tState.total * 1000)) * 100) : 0) + "%");
    if (rem === 0 && !tState.over){ tState.over = true; $("#timer").classList.add("over"); $("#tName").textContent = "Los geht’s"; $("#live").textContent = "Pause vorbei"; beep(); clearInterval(tIv); tIv = null; var ts0 = tState; setTimeout(function(){ if (tState === ts0 && ts0.over){ tState = null; var tm = $("#timer"); tm.classList.add("out"); setTimeout(function(){ if (!tState) tm.hidden = true; tm.classList.remove("out"); }, 300); } }, 2000); }
  }
  var wakeLock = null;
  function keepAwake(){
    try { if (navigator.wakeLock && !wakeLock) navigator.wakeLock.request("screen").then(function(l){ wakeLock = l; l.addEventListener("release", function(){ wakeLock = null; }); }).catch(function(){}); } catch (e) {}
  }
  function persistTimer(){
    try { localStorage.setItem("fit-timer", JSON.stringify(tState && !tState.over ? {end:tState.end, total:tState.total, d:todayId()} : null)); } catch (e) {}
    uiPush();
  }
  function runTimerFrom(o){
    if (!o || !o.end || o.end < Date.now() + 500 || tState) return;
    tState = {total:o.total || 90, end:o.end, over:false, name:"", label:"Pause"};
    var t = $("#timer"); t.hidden = false; t.classList.remove("over"); t.classList.remove("out"); $("#tName").textContent = "";
    keepAwake(); clearInterval(tIv); tIv = setInterval(tick, 250); tick();
  }
  function restoreTimer(){ try { var o = JSON.parse(localStorage.getItem("fit-timer") || "null"); if (o && o.d === todayId()) runTimerFrom(o); } catch (e) {} }
  function startTimer(ex, secs, label){
    ensureAudio(); keepAwake(); startBeep();
    var lbl = label || "Pause";
    var sec = Math.max(20, (secs || ex.rest || 90) + PREFS.restAdj);
    tState = {total:sec, end:Date.now() + sec * 1000, over:false, name:ex.name, label:lbl};
    var t = $("#timer"); t.hidden = false; t.classList.remove("over"); t.classList.remove("out"); $("#tName").textContent = "";
    clearInterval(tIv); tIv = setInterval(tick, 250); tick(); persistTimer(); lockPlay();
  }
  $("#tPlus").addEventListener("click", function(){
    if (!tState) return;
    if (tState.over){ tState.over = false; tState.end = Date.now() + 30000; $("#timer").classList.remove("over"); $("#tName").textContent = tState.label || ("Pause nach " + tState.name); clearInterval(tIv); tIv = setInterval(tick, 250); }
    else tState.end += 30000;
    tick(); persistTimer(); lockPlay();
  });
  function stopTimer(){ lockStop(); if (!tState && $("#timer").hidden) return; clearInterval(tIv); tIv = null; tState = null; $("#timer").hidden = true; persistTimer(); }
  $("#tStop").addEventListener("click", stopTimer);

  // Meldungen: wichtige (z. B. Rekord) bleiben kurz stehen, andere warten so lange
  var toastT = null, toastHold = 0, toastQ = [];
  function toast(msg, hold){
    var now = Date.now(); if (!msg) return;
    if (!hold && now < toastHold){ toastQ.push(msg); return; }
    var t = $("#toast"); t.textContent = msg; t.hidden = false; t.classList.toggle("win", !!hold);
    var d = hold ? 2800 : msg.length > 32 ? 3200 : 2200; if (hold) toastHold = now + d;
    clearTimeout(toastT); toastT = setTimeout(function(){ t.hidden = true; t.classList.remove("win"); toastHold = 0; if (toastQ.length){ var m = toastQ[toastQ.length - 1]; toastQ = []; toast(m); } }, d);
  }

  var lkIn = $("#lockAudio");
  if (lkIn) lkIn.addEventListener("change", function(){ try { localStorage.setItem(LOCK_KEY, lkIn.checked ? "1" : "0"); } catch (e) {} audioMode(); if (!lkIn.checked) lockStop(); else if (tState && !tState.over) lockPlay(); toast(lkIn.checked ? "An: Ton auch gesperrt, Musik stoppt dabei" : "Aus: Musik läuft weiter"); });
  buildList(); showView(); keyFolds(); applyFolds(); renderTDays(); renderMeals(TRAIN_DAYS.indexOf(new Date().getDay()) >= 0 ? "train" : "rest"); renderTraining(); renderFood(); renderWater(); applyDrafts(); restoreOpen(); restoreTimer(); restoreTm();
  booted = true; renderSettings();
  // iPhone: Zoomen per Zwei-Finger-Geste verhindern (Doppeltippen verhindert das CSS)
  ["gesturestart", "gesturechange"].forEach(function(t){ document.addEventListener(t, function(e){ e.preventDefault(); }, {passive:false}); });
  // Offline-Hülle (nur auf der echten Seite per HTTPS)
  try { if ("serviceWorker" in navigator && location.protocol === "https:") window.addEventListener("load", function(){ navigator.serviceWorker.register("sw.js").catch(function(){}); }); } catch (e) {}
  setInterval(renderScores, 60000);
})();

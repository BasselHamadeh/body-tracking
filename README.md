# Body Tracking

Training, Essen, Körper und Verlauf in einer App. Statische Seite (`index.html`), Daten in Supabase.

## Aufbau

```
index.html          Seitengerüst (Tabs, Karten, Dialoge, Einstellungen)
css/app.css         Aussehen
css/fonts.css       Schriften (Barlow, selbst gehostet in fonts/)
js/app.js           App-Logik (Training, Essen, Körper, Verlauf, Einstellungen, Datenbank)
sw.js               Offline-Hülle (App startet auch ohne Netz)
config.js           Supabase-Zugang (nur der öffentliche Publishable Key)
supabase/schema.sql Tabelle + Zugriffsregeln (+ optionale Härtung)
vercel.json         Sicherheits-Header
manifest.webmanifest, *.png   App-Icon für den Home-Bildschirm
```

## Einrichten

1. **Supabase**: Projekt anlegen → *SQL Editor* → Inhalt von `supabase/schema.sql` ausführen.
   Unter *Authentication → Sign In / Providers → Email* „Confirm email“ ausschalten (sonst erst E-Mail bestätigen).
2. **config.js**: Unter *Project Settings → API* die Project URL und den `anon public` Key eintragen.
3. **Vercel**: *Add New → Project* → dieses Repo importieren → Framework „Other“ → *Deploy*. Kein Build nötig.
4. Konto in Supabase unter *Authentication → Users → Add user* anlegen (die App selbst erstellt keine Konten).
5. Link öffnen, anmelden. Auf dem iPhone: Teilen → „Zum Home-Bildschirm“.

## Einstellungen

Zahnrad oben rechts: Trainingstage, Plan anpassen (tauschen, entfernen, hinzufügen, sortieren), Pausenlänge,
Wiegetag, Töne, Ziele und Limits, Design, Schriftgröße, Daten. Alles wird mit dem Konto synchronisiert.

## Daten sichern und umziehen

Einstellungen → Daten → „Sicherung herunterladen“ (JSON-Datei) oder „Kopieren“.
Wiederherstellen: Einstellungen → Daten → Wiederherstellen → Datei wählen oder einfügen → „Übernehmen“.
Zusätzlich legt die App einmal am Tag automatisch eine Sicherung auf dem Gerät ab (die letzten 3 Tage).

Ohne Einträge in `config.js` speichert die App nur lokal im Browser.

## Sicherheit

- Daten liegen pro Nutzer getrennt (Row Level Security, `supabase/schema.sql`).
- Keine externen Skripte, keine externen Schriften, Zugriff auf Supabase direkt per `fetch`.
- Sicherheits-Header in `vercel.json` (CSP ohne Inline-Skripte, HSTS, kein Einbetten in fremde Seiten).
- Anmeldung wird nach Fehlversuchen kurz gesperrt, alle Eingaben und Importe werden geprüft.
- Nach dem Anlegen deines Kontos in Supabase unter *Authentication → Sign In / Providers* „Allow new users to sign up“ ausschalten.

## Offline

Die App selbst startet auch ohne Netz (`sw.js`, immer zuerst die neueste Version aus dem Netz).
Eingaben werden sofort auf dem Gerät gespeichert und automatisch hochgeladen, sobald wieder Netz da ist.
Ändern zwei Geräte denselben Tag, werden die Änderungen zusammengeführt.

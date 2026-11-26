# Body Tracking

Training, Essen, Körper und Verlauf in einer App. Statische Seite (`index.html`), Daten in Supabase.

## Einrichten

1. **Supabase**: Projekt anlegen → *SQL Editor* → Inhalt von `supabase/schema.sql` ausführen.
   Unter *Authentication → Sign In / Providers → Email* „Confirm email“ ausschalten (sonst erst E-Mail bestätigen).
2. **config.js**: Unter *Project Settings → API* die Project URL und den `anon public` Key eintragen.
3. **Vercel**: *Add New → Project* → dieses Repo importieren → Framework „Other“ → *Deploy*. Kein Build nötig.
4. Link öffnen, Konto erstellen. Auf dem iPhone: Teilen → „Zum Home-Bildschirm“.

## Daten umziehen

Alte App: Verlauf → Daten sichern → „Sicherung kopieren“.
Neue App: Verlauf → Daten sichern → einfügen → „Wiederherstellen“.

Ohne Einträge in `config.js` speichert die App nur lokal im Browser.

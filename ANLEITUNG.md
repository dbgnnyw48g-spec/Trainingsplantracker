# Trainings-App – Installation

Die App besteht aus 6 Dateien: `index.html`, `sw.js`, `manifest.webmanifest`, `icon-180.png`, `icon-192.png` und `icon-512.png`.
Sie braucht kein Konto, keine KI und keinen Server. Deine Daten bleiben auf dem iPhone.

## 1. Kostenlos online stellen (GitHub Pages)

1. Auf github.com ein kostenloses Konto anlegen.
2. Oben rechts **+ → New repository** wählen, als Namen `training` eingeben, **Public** auswählen und auf **Create repository** tippen.
3. Auf **uploading an existing file** tippen und die 6 Dateien hineinziehen (die Dateien selbst, nicht den Ordner). Danach **Commit changes**.
4. **Settings → Pages**: Bei Source **Deploy from a branch** wählen, Branch **main** und Ordner **/ (root)** einstellen, dann **Save**.
5. Nach ca. 1–2 Minuten läuft die App unter `https://DEINNAME.github.io/training/`.

Diese Datei (ANLEITUNG.md) musst du nicht hochladen.

## 2. Auf dem iPhone installieren

1. Die Adresse in **Safari** öffnen.
2. **Teilen → Zum Home-Bildschirm** antippen.
3. Die App ab jetzt **immer über das Icon** öffnen. Nach dem ersten Start läuft sie auch offline.

Wichtig: Die App auf dem Home-Bildschirm hat ihren eigenen Speicher, getrennt von Safari.
Wenn du das Icon löschst, sind auch die Daten weg. Mach vorher ein Backup.

## 3. Backup

Unter **Infos → Backup exportieren** speicherst du die Datei über „In Dateien sichern“, zum Beispiel in iCloud Drive.
Nach 3 Wochen ohne Backup erinnert dich die App daran.
Mit **Backup importieren** holst du die Daten zurück, etwa auf einem neuen iPhone.

## 4. Updates

Wenn sich der Plan ändert, bekommst du eine neue `index.html` und eine neue `sw.js`. Lade beide in das Repository hoch und ersetze damit die alten Dateien.
Danach die App einmal mit Internet öffnen, schließen und wieder öffnen. Deine Daten bleiben dabei erhalten.

## Alternative ohne öffentliches Repository

Netlify (app.netlify.com/drop): Den Ordner hineinziehen und ein kostenloses Konto anlegen, damit die Seite dauerhaft bleibt.

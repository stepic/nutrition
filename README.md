# Lista della spesa – Dieta Blanca

Questa mini web app genera la lista della spesa a partire dal piano alimentare nel file **Blanca.pdf** e consente di gestire l'inventario della dispensa.

## Funzionalità
- **Dieta del giorno** con ingredienti e quantità.
- **Controllo dispensa**: segnala cosa manca e crea la lista della spesa.
- **Turno notturno**: attiva lo spuntino notturno con un toggle.
- **Dati salvati in locale** sul dispositivo (localStorage).

## Avvio rapido
Apri `index.html` con un browser (anche da mobile) o carica i file su un hosting statico (Netlify, Vercel, GitHub Pages) per accesso cloud.

## Note
Le quantità e gli ingredienti derivano dal PDF. Per ingredienti alternativi (es. *radicchio o lattuga*), la UI mostra una scelta: se non c'è disponibilità in dispensa, viene suggerito di acquistare una delle opzioni.

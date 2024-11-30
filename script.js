if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker registriert'))
    .catch(error => console.error('Service Worker Fehler:', error));
}
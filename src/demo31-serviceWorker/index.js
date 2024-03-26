window.addEventListener('load', () => {
  navigator.serviceWorker.register('./service-worker.js', {scope: './'}).then(registration => {
    if (registration.installing) {
      console.log('Service Worker is Installing')
    }
  })
})

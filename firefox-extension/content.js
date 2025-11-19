// content.js
(function sendActivityToLocal() {
  try {
    const payload = {
      url: location.href,
      title: document.title || location.hostname
    };

    console.log('[content.js] sending activity', payload);

    fetch('http://localhost:3001/activity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      // no-cors is not desired — we rely on the server CORS above
    })
    .then(res => {
      console.log('[content.js] server response', res.status);
    })
    .catch(err => {
      console.error('[content.js] fetch failed', err);
    });
  } catch (e) {
    console.error('[content.js] error', e);
  }
})();

function userIdAdd(userId) {
    let element = document.querySelector('#idUser');
    element.innerHTML = userId;
}

// Initialize the agent at application startup.
const fpPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.onload = resolve;
    script.onerror = reject;
    script.async = true;
    script.src = 'https://cdn.jsdelivr.net/npm/'
      + '@fingerprintjs/fingerprintjs-pro@3/dist/fp.min.js';
    document.head.appendChild(script);
  })
    .then(() => FingerprintJS.load({ token: '5R08P6HR05D915qsFmBd' }));

  // Get the visitor identifier when you need it.
  fpPromise
    .then(fp => fp.get())
    .then(result => userIdAdd(result.visitorId));

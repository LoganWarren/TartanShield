chrome.runtime.onInstalled.addListener(() => {
    console.log('Phishing Detector extension installed.');
  });
  
  // Example of sending a request to your server
  function checkURL(url) {
    fetch('http://yourserver.com/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: url })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  }
  
// Replace this URL with the URL of your Cloud Function
const FUNCTION_URL = 'https://us-central1-tartanhacks2024-413218.cloudfunctions.net/predict';

// Function to send a URL to the Cloud Function and log the result
function checkUrl(url) {
  fetch(FUNCTION_URL, {
    method: 'POST',
    mode: 'cors', // Explicitly state the mode
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url: url }),
  })
  
  .then(response => response.json())
  .then(data => {
    console.log('Prediction result:', data);
    // You can update the extension's UI based on the prediction result here
  })
  .catch(error => {
    console.error('Error calling the prediction API:', error);
  });
  sendPredictionToPopup();
}
// Example of sending a message to the popup
function sendPredictionToPopup(prediction) {
  chrome.runtime.sendMessage({prediction: prediction});
}

// Example usage: Send a URL to be checked
// You'll replace this part with the actual logic for triggering checks based on your extension's functionality
checkUrl('http://example.com');

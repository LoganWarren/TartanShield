// This script updates the popup based on messages from the background script

document.addEventListener('DOMContentLoaded', () => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      // Assume message contains the prediction result
      if (message.prediction) {
        document.getElementById('result').textContent = 'Prediction: ' + message.prediction;
      }
    });
  });
  
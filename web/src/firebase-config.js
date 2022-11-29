/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */


const config = {
  apiKey: "AIzaSyBfeU-FJQtY54GqutEBWYo06bdl081h1FM",
  authDomain: "fir-chat-4284a.firebaseapp.com",
  projectId: "fir-chat-4284a",
  storageBucket: "fir-chat-4284a.appspot.com",
  messagingSenderId: "598623757327",
  appId: "1:598623757327:web:cb0c900d279dd26ff96f7a",
  measurementId: "G-BKZNM6ZGNN"
};

const app = initializeApp(config);
const analytics = getAnalytics(app);

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
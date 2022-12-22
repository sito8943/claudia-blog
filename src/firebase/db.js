const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const config = require("../config");

const firebaseConfig = {
  ...config.firebaseConfig,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

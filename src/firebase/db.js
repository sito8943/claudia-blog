import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
} from "firebase/firestore";

import config from "../config";

console.log(config);

const firebaseConfig = {
  ...config.firebaseConfig,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

/**
 * @param {string} table
 * @param {string} key
 * @param {any} value
 */
export const insert = async (table, key, value) => {
  await setDoc(doc(db, table, key), value);
};

/**
 * @param {string} table
 * @param {string} key
 * @param {any} value
 */
export const update = async (table, key, value) => {
  const dataRef = doc(db, table, key);
  const dataSnap = await getDoc(dataRef);
  if (dataSnap.exists()) {
    const localData = { ...dataSnap.data(), ...value };
    await setDoc(doc(db, table, key), localData);
  }
};

/**
 * @param {string} table
 * @param {string} key
 */
export const getValue = async (table, key) => {
  const dataRef = doc(db, table, key);
  const dataSnap = await getDoc(dataRef);
  if (dataSnap.exists()) return dataSnap.data();
  return undefined;
};

/**
 * @param {string} table
 */
export const getTable = async (table) => {
  const querySnapshot = await getDocs(collection(db, table));
  let resultList = [];
  querySnapshot.forEach((doc) => resultList.push(doc.data()));
  return resultList;
};

/**
 *
 * @param {string} table
 * @param {object} newValue
 */
export const setTable = async (table, newValue) => {
  for (const key of Object.keys(newValue)) {
    const dataRef = doc(db, table, key);
    const dataSnap = await getDoc(dataRef);
    if (dataSnap.exists()) {
      const localData = { ...newValue[key] };
      await setDoc(doc(db, table, key), localData);
    }
  }
  return true;
};

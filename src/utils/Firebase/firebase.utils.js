import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBccE5F3I66ObR4kjYozYFItramXIEgUys',
  authDomain: 'flix-app-db.firebaseapp.com',
  projectId: 'flix-app-db',
  storageBucket: 'flix-app-db.appspot.com',
  messagingSenderId: '868066721936',
  appId: '1:868066721936:web:85887c5f9d7ac953165815',
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

//Function to add moviesAndShows data to firebase - firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.type.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

//Function to retrieve documents from firestore - need to import query and getDocs
//This type of helper function isolates the areas that our application interfaces with things that change
// i.e. third party libraries - bad thing about google and firebase.
// This way we only have to change this one function rather than chase problems through the app if something changes
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'moviesAndShows');
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map(docSnapshot => docSnapshot.data()) //This will return the data as an array

  //This code will return the data as a map(object), not an array
  // const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
  //   const { type, items } = docSnapShot.data();
  //   acc[type.toLowerCase()] = items;
  //   return acc;
  // }, {});

  //return categoryMap;
};

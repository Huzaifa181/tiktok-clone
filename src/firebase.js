import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyD7aoqNmk69elgIuJtbx-6d7Uy3cQdI3Es",
  authDomain: "tiktok-clone-d8ecf.firebaseapp.com",
  projectId: "tiktok-clone-d8ecf",
  storageBucket: "tiktok-clone-d8ecf.appspot.com",
  messagingSenderId: "925472516807",
  appId: "1:925472516807:web:3373b5e7a83511a7beece2"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {db,provider}
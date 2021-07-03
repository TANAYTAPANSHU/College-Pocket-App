import firebase  from "firebase/app";
import "firebase/firestore" ;

const firebaseConfig = {
    apiKey: 'AIzaSyDxTKx66EJUweyv9Sp_7suIyzJDhkBC5zY',
    authDomain: 'native-collegebeats.firebaseapp.com',
    databaseURL: 'https://native-collegebeats-default-rtdb.firebaseio.com',
    projectId: 'native-collegebeats',
    storageBucket: 'native-collegebeats.appspot.com',
    messagingSenderId: '870351467576',
    appId: '1:870351467576:web:916f19c1925c0d31cf22cd',
    measurementId: 'G-QTKFHTVDHS',
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase; 
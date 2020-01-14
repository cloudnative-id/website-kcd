import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ 
      apiKey:process.env.VUE_APP_APIKEY,
      authDomain: process.env.VUE_APP_AUTHDOMAIN,
      databaseURL: process.env.VUE_APP_DATABASE_URL,
      projectId: process.env.VUE_APP_PROJECTID,
      messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
      appId: process.env.VUE_APP_APPID      
    })
  .firestore()

import firebase from 'firebase'

// Here if where you'll want to get your own firebase credentials....

const config = {

}
firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

require('@firebase/database');
class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyCcTyFrYfgAaRXhjK2xQCkqzLrRF8K2PPE",
                authDomain: "chatmobal.firebaseapp.com",
                projectId: "chatmobal",
                storageBucket: "chatmobal.appspot.com",
                messagingSenderId: "296203758193",
                appId: "1:296203758193:web:c210060310e2d48fab09d0"
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            console.log("SEND")
            console.log(item)
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            };
            this.db.push(message);
        });
    };

    parse = message => {
        console.log("PARSE")
        console.log(message)
        const { user, text, timestamp } = message.val()
        const { key: _id } = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off();
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new Fire();
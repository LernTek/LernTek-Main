import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./communitychat.css"
// Firebase imports
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy, limit, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// react-firebase-hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCE37RifhV4vZDQCIWO8QZujZUJ38nTaqY",
    authDomain: "communitychat-62443.firebaseapp.com",
    projectId: "communitychat-62443",
    storageBucket: "communitychat-62443.appspot.com",
    messagingSenderId: "70458127041",
    appId: "1:70458127041:web:37b0c2c291c03bae291a40",
    measurementId: "G-R4YSFG3W76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
getAnalytics(app);

const Communityback = ({ title, img }) => {
    const location = useLocation();
    const [user] = useAuthState(auth);


    return (
        <>
            <section>
                <div className="chatApp">
                    <header>
                        <h1>💬 Community Chat</h1>
                        <SignOut />
                    </header>

                    <section>
                        {user ? <ChatRoom /> : <SignIn />}
                    </section>
                </div>
            </section>
            {/* <div className='margin'></div> */}
        </>
    );
};


function SignIn() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    return (
        <>
            <button className="sign-in signInButton" onClick={signInWithGoogle}>Sign in with Google</button>
            <p className='chatPara'>Do not violate the community guidelines or you will be banned for life!</p>
        </>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button className="sign-out" onClick={() => signOut(auth)}>Sign Out</button>
    )
}

function ChatRoom() {
    const dummy = useRef();
    const messagesRef = collection(firestore, 'messages');
    const q = query(messagesRef, orderBy('createdAt'), limit(25));

    const [messages] = useCollectionData(q, { idField: 'id' });

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await addDoc(messagesRef, {
            text: formValue,
            createdAt: serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <main className='messageMain'>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <span ref={dummy}></span>
            </main>

            <form className='messageForm' onSubmit={sendMessage}>
                <input className='messageInput' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
                <button className='submitButton' type="submit" disabled={!formValue}>Send 🚀</button>
            </form>
        </>
    )
}

function ChatMessage(props) {
    const { text, uid, photoURL, displayName } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <>
            <div className={`message ${messageClass}`}>
                <img className='avatarImg' src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="" />
                <p className='chatPara'>{text}</p>
            </div>
        </>
    )
}


export default Communityback;

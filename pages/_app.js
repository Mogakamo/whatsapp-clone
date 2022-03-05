import { useAuthState } from "react-firebase-hooks/auth";
import { db, provider, auth } from "../firebase";
import Login from "./login";
import Loading from "../components/Loading";
import { useEffect } from "react";
import {
  doc,
  collection,
  serverTimestamp,
  setDoc,
  FieldValue,
  addDoc,
  getDoc,
} from "firebase/firestore";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(async () => {
    if (user) {
      const userId = user.uid;
      await setDoc(
        doc(collection(db, "users"), `${userId}`),
        {
          email: user.email,
          lastSeen: serverTimestamp(),
          photoURL: user.photoURL,
        },
        { capital: true },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;

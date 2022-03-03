import {useAuthState} from "react-firebase-hooks/auth"
import {db, provider, auth} from "../firebase"

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  if (!user) return <Login />

  return <Component {...pageProps} />;
}

export default MyApp;

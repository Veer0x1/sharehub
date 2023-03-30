import "@/styles/globals.css";
import { AuthContextProvider } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
      <Toaster/>
    </AuthContextProvider>
  );
}

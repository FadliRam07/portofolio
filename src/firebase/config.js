import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDnqE94JIgsi784EUGsow9A9tkz2VScAkQ",
  authDomain: "portfolio-login-8e9d5.firebaseapp.com",
  projectId: "portfolio-login-8e9d5",
  storageBucket: "portfolio-login-8e9d5.firebasestorage.app",
  messagingSenderId: "516419220297",
  appId: "1:516419220297:web:923e7c242888ae7ba6a098",
  measurementId: "G-KMD9X7CKRB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Optional: force account selection
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export default app;
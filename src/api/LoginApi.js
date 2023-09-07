import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../FirebaseConfig";

export const RegisterWithGoogle = async () => {
  try {
    let googleAuthProvider = new GoogleAuthProvider();
    let res = await signInWithPopup(auth, googleAuthProvider);
    return res;
  } catch (error) {
    return error;
  }
};

export const LoginApi = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // You can access the user object from userCredential
    const user = userCredential.user;
    return user; // Return the user object, not JSON
  } catch (error) {
    // alert(error.message);
    throw error; // Rethrow the error so you can handle it in your component
  }
};

export const RegisterApi = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // You can access the user object from userCredential
    const user = userCredential.user;
    return user; // Return the user object, not JSON
  } catch (error) {
    // alert(error.message);
    throw error; // Rethrow the error so you can handle it in your component
  }
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_MkGSno-GaJX-ZLBLdKaW613ks3ris8U",
  authDomain: "appgame-c0f5a.firebaseapp.com",
  projectId: "appgame-c0f5a",
  storageBucket: "appgame-c0f5a.appspot.com",
  messagingSenderId: "335584399999",
  appId: "1:335584399999:web:ddd3fbe89b0c151a58a54a",
  measurementId: "G-R95E97FY8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const LoginWithFirebase = async (email, password) => {
  try {
    const provider = await firebaseAuth.signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return provider;
  } catch (e) {
    alert(e);
  }
};

const LoginWithGoogle = async () => {
  try {
    const googleProvider = new firebaseAuth.GoogleAuthProvider();
    return await firebaseAuth.signInWithPopup(auth, googleProvider);
  } catch (e) {
    alert(e);
  }
};

const RegistWithFirebase = async (email, password, name) => {
  try {
    const provider = await firebaseAuth.createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const displayName = await firebaseAuth.updateProfile(provider.user, {
      displayName: name,
    });
    return provider;
  } catch (e) {
    throw new Error(e);
  }
};

const UploadImage = async (file) => {
  const user = auth.currentUser;
  const storageRef = ref(storage, Date.now().toString());
  await uploadBytes(storageRef, file);
  const imageUrl = await getDownloadURL(storageRef);
  const profile = await firebaseAuth.updateProfile(user, {
    photoURL: imageUrl,
  });
  return imageUrl;
};

const EditDisplayName = async (name) => {
  const user = auth.currentUser;
  let userDetail;
  const displayName = await firebaseAuth.updateProfile(user, {
    displayName: name,
  });
  userDetail = {
    name: user.displayName,
    email: user.email,
    uid: user.uid,
  };
  return userDetail;
};

const ForgotPassword = async (email) => {
  try {
    const resetProvider = await firebaseAuth.sendPasswordResetEmail(
      auth,
      email
    );
    alert("คำร้องขอการเปลี่ยนรหัสผ่านได้ถูกส่งไปยังอีเมลเเล้ว");
    return resetProvider;
  } catch (error) {
    alert(e);
  }
};

//------------------------ Mange Data -----------------------------------------------

const fetchNewsData = async () => {
  const data = collection(db, "news");
  const newsList = await getDocs(data);
  const news = newsList.docs.map((doc) => doc.data());
  return { news };
};

const fetchTimeline = async () => {
  const data = collection(db, "timeline");
  const timelineList = await getDocs(data);
  const timeline = timelineList.docs.map((doc) => doc.data());
  const id = timelineList.docs.map((doc) => doc.id);
  timeline.forEach((data, i) => (data.id = id[i]));
  return { timeline };
};

const fetchHopitalData = async () => {
  const data = collection(db, "hospital");
  const hospitalList = await getDocs(data);
  const hospital = hospitalList.docs.map((doc) => doc.data());
  return { hospital };
};

const createTimeline = async (payload) => {
  await addDoc(collection(db, "timeline"), { payload });
  // await setDoc(doc(db, "timeline"), payload);
  // console.log("successed");
};

const deleteTimeline = async (id) => {
  await deleteDoc(doc(db, "timeline", id));
  // await setDoc(doc(db, "timeline"), payload);
  // console.log("successed");
};

export {
  auth,
  UploadImage,
  EditDisplayName,
  deleteTimeline,
  createTimeline,
  fetchTimeline,
  fetchNewsData,
  fetchHopitalData,
  ForgotPassword,
  LoginWithGoogle,
  LoginWithFirebase,
  RegistWithFirebase,
};


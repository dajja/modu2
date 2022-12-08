const model = {};
  const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBuZ9fmm6Ct2OpzrBQypcrUIUfjXr-z8rU",
    authDomain: "module2-a5e4a.firebaseapp.com",
    projectId: "module2-a5e4a",
    storageBucket: "module2-a5e4a.appspot.com",
    messagingSenderId: "661296133426",
    appId: "1:661296133426:web:e6c5428d21a58cd3fa932b"
  });
// const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
model.register = async (data) => {
  try {
      // console.log("register model", data);
      let dataUser = '';
      let response = await auth.createUserWithEmailAndPassword(data.Email, data.Password);
      view.setScreenActive("loginPage");
      auth.currentUser.sendEmailVerification();
      //    console.log("434",auth.currentUser);
      await firebase.auth().currentUser.updateProfile({
          displayName:data.Firstname + data.Lastname
      })
      dataUser = auth.currentUser.displayName;
      view.dataUser(dataUser);
  } catch (error) {
      console.log(error.message);
  }
}
model.login = async (data) => {
  try {
      console.log("login model", data);
      let response = await auth.signInWithEmailAndPassword(data.Email, data.Password);
      if (auth.currentUser.emailVerified) {
          view.setScreenActive("mainWeb");
      } else {
          alert("pls verify ur email");
      }
  } catch (error) {
      console.log(error.message);
  }
}
model.dataSendFirebase = (data) => {
  let uid = "rzEG0kw22ghwXaqR5sPM"
  const firestoreQueries = async () =>{
      try {
          let response = await firebase.firestore()
          .collection("listMessage")
          .doc(uid)
          .update({message: firebase.firestore.FieldValue.arrayUnion(data)});
      } catch (error) {
          console.log(error);
      }   
  }
  firestoreQueries();
}
model.getListMessage = async () => {
  try {
      let response = await firebase.firestore()
      .collection("listMessage")
      .doc("rzEG0kw22ghwXaqR5sPM")
      .get()
      let result = response.data().message
      console.log(result);
      view.renderListChat(result);
  }  catch (error) {
      console.log(error)
  }
}
model.authUser = undefined;
model.loginSuccess = (authUser) => {
  model.authUser = authUser;
};
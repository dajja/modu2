window.onload = () => {
       auth.onAuthStateChanged(user => {
              if (user) {
                  view.setScreenActive("mainWeb");
                  model.getListMessage1 = async () => {
                      try {
                          let response = await firebase.firestore()
                          .collection("listMessage")
                          .doc("rzEG0kw22ghwXaqR5sPM")
                          .get()
                      let result = response.data().message;
                      view.renderListChat(result);
                      }  catch (error)  {
                          console.log(error);
                      }
                  }
              } else {
                  view.setScreenActive("registerPage");
              }
          
          });

          firebase.firestore().collection("listMessage").doc("rzEG0kw22ghwXaqR5sPM")
          .onSnapshot((doc) => {
              console.log("Current data: ", doc.data());
              view.renderListChat(doc.data().message);
          });
};
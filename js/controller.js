const controller ={};
controller.register= (data) => {
    console.log("111",data);
    if (data.Firstname == "")  {
        view.setErrorMessage("firstname","Input ur firstname");
    } else  {
        view.setErrorMessage("firstname","");
    }
    if (data.Lastname == "")  {
        view.setErrorMessage("lastname","Input ur lastname");
    } else  {
        view.setErrorMessage("lastname","");
    }
    if (data.Email == "")  {
        view.setErrorMessage("email","Input ur email");
    } else  {
        view.setErrorMessage("email","");
    }
    if (data.Password == "")  {
        view.setErrorMessage("password","Input ur password");
    } else  {
        view.setErrorMessage("password","");
    }
    if (data.Confirmpassword == "")  {
        view.setErrorMessage("confirmpassword","Input ur confirmpassword");
    } else if (data.Confirmpassword !== data.Password) {
        view.setErrorMessage("confirmpassword","MK khong trung");
    }  else {
        view.setErrorMessage("confirmpassword","");
    }
    if (data.Firstname != "" && data.Lastname != "" && data.Email != "" && data.Password != "" && data.Confirmpassword == data.Password) {
        model.register(data);
    }
}
controller.login= (data) => {
    console.log("332",data);
    if (data.Email == "")  {
        view.setErrorMessage("email","Input ur email");
    } else  {
        view.setErrorMessage("email","");
    }
    if (data.Password == "")  {
        view.setErrorMessage("password","Input ur password");
    } else  {
        view.setErrorMessage("password","");
    }
    if (data.Email && data.Password)  {
        model.login(data);
    }
}
controller.checkMessage = (checkMessage) => {
    let listChat = document.getElementById("listChat");
    if(checkMessage.message.content !=""){
        listChat.scrollTop = listChat.scrollHeight;
        model.dataSendFirebase(checkMessage);
        
    }
};

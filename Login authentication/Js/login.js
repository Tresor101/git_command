function verify(){
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("usePassword").value;

    if (userEmail == userPassword){
        alert("LogIn Successfully");
        return false;
    }else{
        alert("Unsuccessful LogIn");
    }
}

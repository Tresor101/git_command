function verification(){
    const userEmail = document.getElementById('userEmail1').value;
    const password = document.getElementById('password1').value;
    if (userEmail == password){
        alert("LogIn Successfuln");
    }else{
        alert("Unsuccessful LogIn");
    }
} 

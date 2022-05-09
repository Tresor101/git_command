function verification(){
    const userEmail = document.getElementById('userEmail').value;
    const password = document.getElementById('password').value;
    if (userEmail == password){
        alert("LogIn fiontonton");
    }else{
        alert("Unsuccessful LogIn");
    }
} 


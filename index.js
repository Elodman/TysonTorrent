function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementsByClassName("jelszo")[0].value;
    if(username=="Elodman" && password=="asd")
    {document.getElementById("btn").addEventListener('click', ()=> { window.location.href = 'TysonTorrent.html'; });
       
    }
    else
    {
        alert("Helytelen bejelntkezés!")
    }
}


function myFunction() {
    var x = document.getElementById("myInput");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");


    if (x.type === 'password') {
        x.type = "block";
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}
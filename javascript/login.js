function logar() {
    const senha = document.getElementById("password").value;
    const usuario = document.getElementById("usuario").value;
    const gmail = document.getElementById("email").value
    if (senha == "123456" && usuario == "Mariorei" && gmail == "mario123@gmail.com") 
        {
        alert("Login Feito com Sucesso")
        window.location.href = "../html/index.html"
    } 
    else{
        alert("Login ou senha incorretos")
    }
}


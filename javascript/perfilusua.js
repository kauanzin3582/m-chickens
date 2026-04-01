function atualizardados() {
    const atzdados = document.querySelectorAll('.bt-atz');
    const salvardados = document.querySelector('.botao-salvar');
    const atualizardados = document.querySelector('.botao-atualizar');
    atzdados.forEach(item => {
        if (item.hasAttribute('disabled')) {
        item.removeAttribute('disabled');
        salvardados.removeAttribute('hidden');
        atualizardados.setAttribute('hidden','')
    }
  });
}

function salvardados() {
    const salvardados = document.querySelector('.botao-salvar');
    const atzdados = document.querySelectorAll('.bt-atz');
    const atualizardados = document.querySelector('.botao-atualizar');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const novoemail = document.getElementById('novo-email');
    const novasenha = document.getElementById('nova-senha');
    atzdados.forEach(item => {
        if (!item.hasAttribute('disabled')) {
        item.setAttribute('disabled','');
        salvardados.setAttribute('hidden','');
        atualizardados.removeAttribute('hidden');
        novasenha.value = senha.value;
        novoemail.value = email.value;
    }
  })
}

function mudartamanho() {
    const parteb = document.querySelector('.perfil');
    const texto = document.querySelector('.texto-erro');
        parteb.style.height = "320px";
        texto.removeAttribute('hidden');   
        setTimeout(()=>{
            texto.setAttribute('hidden','');
            parteb.style.height = "280px";
        },3000)
}

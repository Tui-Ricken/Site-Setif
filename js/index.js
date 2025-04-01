document.addEventListener("DOMContentLoaded", (event) => {
    //buscarInscritos();
    construirModal();

    const temaLocal =localStorage.getItem("tema");
    document.body.setAttribute("data-theme", temaLocal);
});

function construirModal() {
    const botaoSaibaMais = document.getElementById("saiba-mais");
    const modal = document.getElementById("modal");
    botaoSaibaMais.addEventListener("click", ()=>{modal.classList.remove("hidden");
    });
    
    window.addEventListener("click", (e)=>{console.log(e.target);
        if(e.target == modal){
        modal.classList.add("hidden");
        }
    });

    const fechar = document.getElementById("fechar-modal");
    fechar.addEventListener("click" ,(e)=>{modal.classList.add("hidden");

    });

}

function alterarTema() {
    //DOM -> document object model
    const tema = document.body.getAttribute("data-theme");
    const novoTema = tema === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", novoTema);

    const bAlterarTema = document.getElementById("bAlterarTema");
    bAlterarTema.textContent = novoTema === "dark" ? "🌙" : "☀️";

    localStorage.setItem("tema", novoTema);
    document.body.setAttribute("data-theme", novoTema);


}

function buscarInscritos() {
    fetch("json/inscritos.json").then(res => res.json()).then(res => {
        //alert("Na requisição")
        const divIncritos = document.getElementById("inscritos");
        res.forEach(user => {
            const novoParagrafo = document.createElement("p");
            novoParagrafo.textContent = `Nome: ${user.nome}`;
            divIncritos.appendChild(novoParagrafo);
        });
    }).catch(e => console.log(e));

    //alert("OPA")
}
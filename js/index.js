document.addEventListener("DOMContentLoaded", (event)=>{
    buscarInscritos();
});

function alterarTema(){
    //DOM -> document object model
    const tema = document.body.getAttribute("data-theme");
    const novoTema = tema === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", novoTema);
    
    const bAlterarTema = document.getElementById("bAlterarTema");
    bAlterarTema.textContent = novoTema === "dark" ? "🌙" : "☀️";

}

function buscarInscritos(){
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res => {
    
    const divIncritos = document.getElementById("inscritos");
    res.forEach(user => {
        const novoParagrafo = document.createElement("p");
        novoParagrafo.textContent = `Nome: ${user.name}`;
        divIncritos.appendChild(novoParagrafo);
    });
}).catch(e=>console.log(e));
}
 //Input = vai guardar informações do iten
//Botão vai ter uma função que captura o imput

//Arvore de documentos nativo
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const menu = document.querySelector(".to_do")

let array = [];

function search(){
    const value =  input.value;
    array.push(value)
    render()
}

function render(){
    //Metodo
    menu.innerHTML = ""
    array.forEach( value => {
        const p = document.createElement("p");
        const button = document.createElement("button");
        button.className = "remove";
        const div = document.createElement("div");
        p.innerText = value;
        div.appendChild(p);
        button.innerText = "Excluir";
        button.addEventListener("click", ()=>{
            deleteItem(value)
        })
        div.appendChild(button);
        menu.appendChild(div)
    });
}

function deleteItem(value){
    const newArray = array.filter((item)=>{
       return item !== value;
    })
   array = newArray;
   render()
}

//Escuta tudo que pedimos 
button.addEventListener("click", search)




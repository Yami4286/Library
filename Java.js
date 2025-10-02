let Lib = [];
let selec = document.getElementById("add");

let btn = document.querySelector("btn");

btn.addEventListener("click", ()=> { AdToLib(selec)});


function Books(Name, Author , published , id){
 this.Name = Name;
 this.Author = Author;
 this.published = published;
}

function AdToLib(Name, Author , published){
const NewBook = new Books(Name, Author, published, crypto.randomUUID());
Lib.push(NewBook);
}
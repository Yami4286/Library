let Lib = [];

let form = document.querySelector("#bookform");

let get = document.querySelectorAll(".add");

let scr = document.querySelector(".screen");

form.addEventListener("submit", (e)=> {

    e.preventDefault();
    
     
    const values = [];
    get.forEach(gets => values.push(gets.value));

    if(values.some(v=> v.trim() === "")){
        alert("Please fill out all fields");
        return;
    }

    AdToLib(...values);



});


function Books(Name, Author , published , id){
 this.Name = Name;
 this.Author = Author;
 this.published = published;
 this.id = id;
}

function AdToLib(Name, Author , published){
const NewBook = new Books(Name, Author, published, crypto.randomUUID());
Lib.push(NewBook);


    let CreBook = document.createElement("div");

let Ti = document.createElement("div");
let Au = document.createElement("div");
let Pu = document.createElement("div");
let IDA = document.createElement("div");

Ti.textContent = `Title:${NewBook.Name}`;
Au.textContent = `Author:${NewBook.Author}`;
Pu.textContent = `Published:${NewBook.published}`;
IDA.textContent = `ID:${NewBook.id}`;

CreBook.appendChild(Ti);
CreBook.appendChild(Au);
CreBook.appendChild(Pu);
CreBook.appendChild(IDA);

scr.appendChild(CreBook);

get.forEach(input => input.value = '');

}





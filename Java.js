let Lib = [];

let form = document.querySelector("#bookform");

let get = document.querySelectorAll(".add");

let scr = document.querySelector(".cards");

let App = document.getElementById("Popup");

let btn = document.querySelector(".bt");

let st = document.querySelector("#btn");

btn.addEventListener("click", ()=> {
    App.classList.remove("hidden");
})



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

st.addEventListener("click", ()=>{
    
App.classList.add("hidden");
})



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
    CreBook.classList.add("card");

let Ti = document.createElement("div");
let Au = document.createElement("div");
let Pu = document.createElement("div");
let IDA = document.createElement("div");

Ti.innerHTML = `<strong>Title:</strong>  ${NewBook.Name}`;
Au.innerHTML = `<strong>Author:</strong>  ${NewBook.Author}`;
Pu.innerHTML = `<strong>Published:</strong>  ${NewBook.published}`;
IDA.innerHTML = `<strong>ID:</strong>  ${NewBook.id}`;

CreBook.appendChild(Ti);
CreBook.appendChild(Au);
CreBook.appendChild(Pu);
CreBook.appendChild(IDA);

scr.appendChild(CreBook);

get.forEach(input => input.value = '');


}


AdToLib('Mystic', 'shadow', '1978');
AdToLib('Echoes of Dawn', 'Arlen Frost', '1991');
AdToLib('Silent Horizon', 'Mira Solis', '2003');
AdToLib('Crimson Quill', 'Dorian Vale', '1987');
AdToLib('Twilight Loom', 'Selene Hart', '2015');
AdToLib('Forgotten Spire', 'Lysander Crowe', '1972');

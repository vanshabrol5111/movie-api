import create from "./movie.js";
const sidebar = document.querySelector(".infolist")
const movieDisplay = document.querySelector(".movieContainer");
const favouriteItems = document.querySelector(".favouriteItems")
function activatesidebar(button){
    button.addEventListener("click",()=>{
     
        if(Array.from(sidebar.classList).includes("active"))
        {
            sidebar.classList.remove("active")
        }
        else
        {
            sidebar.classList.add("active")
        }
    })
}


function likeUnlike(like,data){
    like.addEventListener("click",()=>{
        getFavs(like,data);
       
    })

 
}

function getFavs(like,data){
    const favourites = JSON.parse(localStorage.getItem("favourites"))
if(!favourites)
{
    const emptyfavourites = [];
    localStorage.setItem("favourites",JSON.stringify(emptyfavourites));
}
console.log("APPPP",favourites.find((elem)=>elem.Title === data.Title))

if(favourites.find((elem)=>elem.Title === data.Title))
{
    like.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" width="18px" height="18px">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>`
const found = favourites.find((elem)=>elem.Title === data.Title);
  
    const index = favourites.indexOf(found);
    favourites.splice(index,1)
}
else{
//     like.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="#fd0808"   class="bi bi-heart red" viewBox="0 0 16 16">
// <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
// </svg>`

like.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" stroke="red" width="18px" height="18px">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>`

    favourites.push(data)
}
localStorage.setItem("favourites",JSON.stringify(favourites));
}

function manageFavs(){
    
    favouriteItems.addEventListener("click",()=>{
        
        movieDisplay.innerHTML='';
        const data = JSON.parse(localStorage.getItem("favourites"))
    //   const reqdata =  data.map((element) => {
    //         return{Title:element}
    //     });
        console.log("Favouritedata",data);
        const backbutton = document.createElement("div");
        console.log("BACK1 HERE",backbutton)
        backbutton.innerHTML= `<svg fill="white" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26.676 26.676" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59 c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815 C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029 c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562 C26.18,21.891,26.141,21.891,26.105,21.891z"></path> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>`;
        backbutton.classList.add("back");

        backbutton.addEventListener("click",()=>{
            location.reload()
        })
        create.create(data);
        movieDisplay.appendChild(backbutton)
        sidebar.classList.remove("active")
    })
}

export default {activatesidebar,likeUnlike,manageFavs};
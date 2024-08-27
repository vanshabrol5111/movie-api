const movieDisplay = document.querySelector(".movieContainer");
import likeUnlike from "./listeners.js"


function create(data){
 
    console.log("createe",data)
   
 try{
  data.map(async(data1)=>
    {
        const data2 = await fetch(`http://www.omdbapi.com/?i=${data1.imdbID}&apikey=51cb8783`);
        const data = await data2.json();
        const Cardcontainer = document.createElement("div");
        const dataContainer = document.createElement("div")
        const image = document.createElement("img");
        const genre = document.createElement("p");
        const imdbRating = document.createElement("P")
        const duration = document.createElement("p")
        const title = document.createElement("p")
        const like = document.createElement("span")

        
        let favourites = JSON.parse(localStorage.getItem("favourites")) 
        if(!favourites)
            {
                const emptyfavourites = [];
                localStorage.setItem("favourites",JSON.stringify(emptyfavourites));
                favourites = JSON.parse(localStorage.getItem("favourites"))
            }

            favourites = JSON.parse(localStorage.getItem("favourites")) 

            like.innerHTML = favourites.find((elem)=>elem.Title === data.Title)? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" stroke="red" width="18px" height="18px">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>` : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" width="18px" height="18px">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>`;
      
    like.classList.add("like")
 
  likeUnlike.likeUnlike(like,data)
   
  
        Cardcontainer.classList.add("card")
        title.innerHTML = `<b>Title :</b> ${data?.Title}`
        title.classList.add("title")
        genre.innerHTML =  `<b>Genre:</b> ${data?.Genre}`;
        genre.classList.add("genre")
        image.src = data?.Poster;
        image.classList.add("image")

       dataContainer.classList.add("datacontainer")
    
    
    
        Cardcontainer.appendChild(image);
        dataContainer.appendChild(title);
        dataContainer.appendChild(genre);
        Cardcontainer.appendChild(dataContainer);
        Cardcontainer.appendChild(like);
        movieDisplay.appendChild(Cardcontainer);
       }

  )
 }
 catch (err){
  console.log("Error Fetching Movies");
  const refresh=document.createElement("div");
  refresh.innerHTML= "Click to Refresh" + `<svg fill="White" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 383.748 383.748" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M62.772,95.042C90.904,54.899,137.496,30,187.343,30c83.743,0,151.874,68.13,151.874,151.874h30 C369.217,81.588,287.629,0,187.343,0c-35.038,0-69.061,9.989-98.391,28.888C70.368,40.862,54.245,56.032,41.221,73.593 L2.081,34.641v113.365h113.91L62.772,95.042z"></path> <path d="M381.667,235.742h-113.91l53.219,52.965c-28.132,40.142-74.724,65.042-124.571,65.042 c-83.744,0-151.874-68.13-151.874-151.874h-30c0,100.286,81.588,181.874,181.874,181.874c35.038,0,69.062-9.989,98.391-28.888 c18.584-11.975,34.707-27.145,47.731-44.706l39.139,38.952V235.742z"></path> </g> </g></svg>`;
  refresh.style.cssText="color:white;display:flex;justify-items:center;align-items: center;height:100vh;gap:0.4rem;width:100vw;text-align: center;padding-left:48%"
  movieDisplay.appendChild(refresh);
  refresh.addEventListener("click",()=>{
    location.reload();
  })
 }
       
     
    }

    function bigsearch(elem,query){
         elem.addEventListener("click",()=>{
           
            opensearchitem()
            })

            function opensearchitem(){
               
                const data = [query];
              
               movieDisplay.innerHTML=''
            
                const backbutton = document.createElement("div");
                backbutton.innerHTML= `<svg fill="white" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26.676 26.676" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59 c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815 C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029 c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562 C26.18,21.891,26.141,21.891,26.105,21.891z"></path> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>`;
                backbutton.classList.add("back");

                backbutton.addEventListener("click",()=>{
                    location.reload()
                })
            
                create(data);
                movieDisplay.appendChild(backbutton);
            }

        }
        
     
    
        export default {create,bigsearch};
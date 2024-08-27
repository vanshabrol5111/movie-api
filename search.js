const searchinput = document.querySelector(".searchinput");
const searchButton = document.querySelector("[searchbutton]");
const searchResult = document.querySelector("[searchResult]");
import bigsearch from "./movie.js"
function searchinputevent(elem,data){
  
    elem.addEventListener("input",(event)=>{
      console.log("result",searchinput);
   
      
        
        search(event.target.value);
        if(searchResult.children.length>0)
            {
                searchinput.classList.add("activeinput")
            }
        
     
    })

    elem.addEventListener("blur",(event)=>{
        setTimeout(()=>{
            searchResult.style.display = "none";
       
            searchinput.classList.remove("activeinput")
            console.log("hello",searchinput.classList);
        },200)
      
       
      })

      elem.addEventListener("focus",()=>{
        console.log(searchResult.children);
        searchResult.style.display = "flex";
        if(searchResult.children.length>0)
        {
            searchinput.classList.add("activeinput")
        }
        
       
       
      })
    
    function search(query){
        console.log("QUERY",query)
        searchResult.innerHTML = ''
       const input = query.toLowerCase();
        const Data = data;
     
   

        Data.filter((item)=>item.Title.toLowerCase().includes(input))
        .map((item)=>{
            console.log("ATTACK3",item)
            const para = document.createElement("p");
            bigsearch.bigsearch(para,item);
           
            para.innerHTML = item.Title;
            para.classList.add("resultitem")
      
            console.log("Apple",searchResult);
            searchResult.appendChild(para);
        })
        console.log(searchResult)
        
    }

}





export default {searchinputevent}
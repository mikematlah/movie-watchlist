let moviesData = []
let myWatchlist = []

let movie =""
const movieContainer= document.getElementById("movie-content")
const inputEl= document.getElementById("input-el")
const searchBtn = document.getElementById("search")
const dataFromStorage = JSON.parse(localStorage.getItem("List"))
const addEl = document.getElementById("add")
let movieHtml=""



console.log(localStorage)
//localStorage.clear()
if(dataFromStorage){
    myWatchlist = dataFromStorage
}
console.log(myWatchlist)





movieContainer.addEventListener("click",function(event){

    if(event.target.tagName ==="BUTTON"){
        console.log("hi")
        event.target.style.visibility = 'hidden'
        const movieName = event.target.dataset.id
        for(let el=0;el < moviesData.length; el++){

            if(movieName === moviesData[el].Title){
                console.log(moviesData[el])
                myWatchlist.push(moviesData[el])
                console.log(myWatchlist)
               
            

            }
        }
      
        localStorage.setItem('List',JSON.stringify(myWatchlist))
        
     
     
    }
  
})


searchBtn.addEventListener("click",function(){

    movie = inputEl.value
    inputEl.value = ""

    
    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=7fe910e0`,{method:"GET"})
        .then(response=>response.json())
        .then(data=>{
           
           
        
           
           
            console.log(data.Response)
            if(data.Response === "True"){

             
                moviesData.push(data)
                console.log(moviesData)
                //saveData(data)
                console.log(localStorage)
            
           
                movieHtml = 
                    `
                    <div class="movie-info">
                    <img src="${data.Poster}">
                    <div class="description">
                        <div class="title">
                            <h3>${data.Title}</h3> 
                            <p>⭐ ${data.imdbRating}</p>
                        </div>
                        <div class="length-and-genre">
                            <P>${data.Runtime}</P>
                            <p class="genre">${data.Genre}</p>
                            <div id="add" class="add">
                                <button data-id="${data.Title}" class="add-btn">+</button> 
                                <p>Watchlist</p>
                            </div>    
                        </div>
                        <p class="script"> 
                            ${data.Plot}
                        </p>
                    </div>
                    
              `
          
            movieContainer.innerHTML=movieHtml
            
           
          
            }
            
          
         })
     
      
    })


          
    
       
         
             
             
      


 

   
        
    





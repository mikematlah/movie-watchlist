const myMovies = document.getElementById("movie-content")
let myList = []
let removedMovies = []
const dataFromStorage = JSON.parse(localStorage.getItem("List"))
let myMoviesHtml = ""
if(dataFromStorage){
    myList = dataFromStorage
}


myMovies.addEventListener("click",function(event){

    
    if(event.target.tagName ==="BUTTON"){
        console.log("hi")
        const movieName = event.target.dataset.id
        for(let el=0;el < myList.length; el++){

            if(movieName === myList[el].Title){
                console.log(myList)
                console.log(myList[el])
                myList.splice(el,1)
                console.log(myList)
                localStorage.clear()
                localStorage.setItem("List",JSON.stringify(myList))

            
              
            }
        }
      
     
        if(dataFromStorage){
            myList = dataFromStorage
        }
        render()
        
    }
  
})


function render(){

    myMovies.innerHTML = ""
    for(let el in myList){
       

        myMoviesHtml = `
        <div class="movie-info">
        <img src="${myList[el].Poster}">
        <div class="description">
            <div class="title">
                <h3>${myList[el].Title}</h3> 
                <p>⭐ ${myList[el].imdbRating}</p>
            </div>
            <div class="length-and-genre">
                <P>${myList[el].Runtime}</P>
                <p class="genre">${myList[el].Genre}</p>
                <div class="add">
                    <button data-id="${myList[el].Title}" class="add-btn">-</button> 
                    <p>Remove</p>
                </div>    
            </div>
            <p class="script"> 
                ${myList[el].Plot}
            </p>
        </div>
        `
        myMovies.innerHTML += myMoviesHtml
    }

  
}


render()


let imgSlides = Array.from(document.querySelectorAll(".images-slides img"));
console.log(imgSlides.length);
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let imagesNumber = document.querySelector(".images-number");

let index = 1;
checker();


function nextSide(){
    console.log("next");
    if(next.classList.contains("disabled")){
        return false;
    }else{
        index++;
        checker(); 
    }
}

function prevSide(){
    console.log("previous");
    if(prev.classList.contains("disabled")){
        return false;
    }else{
        index--;
        checker();

    }
}

function checker(){
    imagesNumber.textContent = "slide #"+(index)+" of "+(imgSlides.length);
    
    removeActive();

    imgSlides[index - 1].classList.add("active");

    if(index == 1){
        prev.classList.add("disabled");
    }else{
        prev.classList.remove("disabled");
    }

    if(index == imgSlides.length){
        next.classList.add("disabled");
    }else{
        next.classList.remove("disabled");
    }
}

function removeActive(){
    imgSlides.forEach(function(e){
        e.classList.remove("active");

    })    
}
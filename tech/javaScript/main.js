var myHttp = new XMLHttpRequest()
var all = []

myHttp.open('GET', `https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=fa466f364d20453b9a45f6df6839953f`)
myHttp.send()

myHttp.addEventListener('readystatechange', function(){
    if(myHttp.readyState == 4){
        all = JSON.parse(myHttp.response).articles
        display()
        displaySlide()
    }
})


function display(){
    var box = ``;
    for(i=0 ; i < all.length; i++){
        box+=`
    <div class="col-md-4">
        <div class="item my-3 bg-light p-3 rounded-3">
            <div class="image ">
                <img class = "w-100 img-fluid" src="${all[i].urlToImage}" alt="">
            </div>
            <div class="desc py-2 px-4 my-2">
                <h2 class=" fs-5">${all[i].title}</h2>
                <p></p>
            </div>
            <div class="more px-4 my-4">
                <div class="cont">
                    <a class="button" href="${all[i].url}">...لمعرفة المزيد</a>
                </div>
            </div>
        </div>
    </div>`
    }
    document.getElementById('data').innerHTML = box
}

function displaySlide(){
    var slider =``
    for(i=0; i< all.length; i++){
        slider+=`
        <p class="d-inline m-0 py-5 fw-bold">
        ${all[i].title}
        </p>
        <div class="d-inline sep my-0 mx-4">
        </div>
        `
    }
    document.getElementById('slide').innerHTML = slider
}

var home = document.getElementById("home")

home.addEventListener("click", function(e){
    window.open("../index.html")
})

var up = document.getElementById("up")
var nav = document.getElementById ("nav")

window.addEventListener("scroll", function(){
    if(window.scrollY > 0 ){
        nav.style.top = "0"
    }else if(window.scrollY = 0){
        nav.style.top = "0"
    }
})

window.addEventListener("scroll", function(){
    if(window.scrollY >= 600){
        up.classList.add("d-block")
        console.log("block");
    }else if(window.scrollY < 600){
        up.classList.remove("d-block")
    }
})  

up.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})
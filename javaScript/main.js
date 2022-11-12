var sports = document.getElementById("sports")
var business = document.getElementById("business")
var tech = document.getElementById("tech")
var health = document.getElementById("health")
var landing = document.getElementById('landing')

var i = 0;
var imgList = []
var time = 2000

imgList[0] = 'images/sports.jpeg' 
imgList[1] = 'images/business.jpeg'
imgList[2] = 'images/tech.jpeg'
imgList[3] = 'images/health.jpg'

function changeBackground(){
    landing.style.backgroundImage = `url(${imgList[i]})`;
    if( i < imgList.length - 1){
        i++
    }else{
        i = 0
    }
    setTimeout("changeBackground()", time)
}
window.onload = changeBackground()

sports.addEventListener('click', function(e){
    window.open("sports/index.html")
})

business.addEventListener('click', function(e){
    window.open('business/index.html')
})

tech.addEventListener('click', function(e){
    window.open('tech/index.html')
})

health.addEventListener('click', function(e){
    window.open('health/index.html')
})

var myHttp = new XMLHttpRequest()
var all = []

myHttp.open('GET', `https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=fa466f364d20453b9a45f6df6839953f`)
myHttp.send()

myHttp.addEventListener('readystatechange', function(){
    if(myHttp.readyState == 4){
        all = JSON.parse(myHttp.response).articles
        displaySlide()
    }
})

function displaySlide(){
    var boxSlide = ``;
    for(i=0 ; i < all.length; i++){
        boxSlide+=`<p class="d-inline m-0 py-5 fw-bold">
        ${all[i].title}
        </p>
        <div class="d-inline sep my-0 mx-4">
        </div>
        `
    }
    document.getElementById('slide').innerHTML = boxSlide
}
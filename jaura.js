var urlmain = document.URL;
var param = document.URL.split("/")[3].replace("?m=1","").replace("?m=0","");
var dataUrl = [

"https://dev-neomoviefj.pantheonsite.io//movies/arafar",
"https://dev-filmflixss.pantheonsite.io/",
"https://dev-neoflimfj.pantheonsite.io//movies/tvmovies",
"https://dev-neofilmfj.pantheonsite.io/movies/search",
"https://dev-filmfj.pantheonsite.io/"

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;

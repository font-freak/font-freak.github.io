window.addEventListener('load', function () {
// SCRAPE URL FOR PARAMETERS
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// GET FILE ID
var file = getUrlVars().get;
document.getElementById("grab").src = 'https://drive.google.com/uc?export=download&id=' + file;

// GET BITLY ANALYTICS LINK
var bitly = getUrlVars().id;
document.querySelector("img[id*='bitly']").src = 'https://bit.ly/' + bitly;
})
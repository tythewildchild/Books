let home = document.getElementById('home');
home.addEventListener("click", function(evt){
    evt.preventDefault();
    window.location.assign("index.html");
    return false;
});
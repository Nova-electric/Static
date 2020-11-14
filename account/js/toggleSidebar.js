
var sideBar = document.querySelector('.side-bar')
var contentBar = document.querySelector('.content-wrap')


var isClosed = false;

if(window.innerWidth <= 800 ){
    isClosed = true
}
else{
    isClosed = false;
}
function togglesidebar(){
if(isClosed == true){
sideBar.className+=" closed"
contentBar.className+=" expand"
isClosed = false;
}
else{
    sideBar.className="side-bar"
contentBar.className="content-wrap"
isClosed=true;
}




}


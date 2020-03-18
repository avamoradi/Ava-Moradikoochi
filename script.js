window.onload = function(){
	var popup = document.getElementById('popup');
    var overlay = document.getElementById('backgroundOverlay');
    var openButton = document.getElementById('openDiv');
    document.onclick = function(e){
        if(e.target.id == 'backgroundOverlay'){
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }
        if(e.target === openButton){
         	popup.style.display = 'block';
            overlay.style.display = 'block';
        }
    };
};

function functionAlert() {
  alert("Hello! This is not working right now");
  
}
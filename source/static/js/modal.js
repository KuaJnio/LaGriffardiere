var modal = document.getElementById('modal');

var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

var images = document.getElementsByClassName("vignette");
for(var i = 0; i < images.length; i++)
{
   images.item(i).onclick = function(){
       modal.style.display = "block";
       modalImg.src = this.src;
       captionText.innerHTML = this.alt;
   }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function() {
  modal.style.display = "none";
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
        modal.style.display = "none";
    }
};

startMyGallery(".gallery__picture");

function showMore(name, n) {
    thumbnails = Array.prototype.slice.call(document.querySelectorAll(name));
  

  thumbLength = thumbnails.length; 
  n = (n < thumbLength) ? n : thumbLength;
  
  for (var i = 0; i < n; i++) {
    thumbnails[i].style.display = "block"; 
  }
  
  var buttonMore = document.getElementById("gallery__more");
  buttonMore.addEventListener("click", handleButtonMore);
  
  function handleButtonMore(event) {    
    event.preventDefault();
    if(n >= thumbLength) {
      return;
    }; 
    
    if(buttonMore.classList.contains("shown")) {
        for (var i = n; i < thumbLength; i++) {
          thumbnails[i].style.display = "none"; 
        }

        buttonMore.innerHTML = "Show more...";
        buttonMore.classList.remove("shown");
      
      
    } else {
        for (var i = n; i < thumbLength; i++) {
          thumbnails[i].style.display = "block"; 
        }

        buttonMore.innerHTML = "Hide gallery";
        buttonMore.classList.add("shown");
    }
  }  
};

showMore(".gallery__item", 12);
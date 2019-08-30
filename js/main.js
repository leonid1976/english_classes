  document.addEventListener('DOMContentLoaded', function() {
    init();
  }
);

startMyGallery(".gallery__picture");

function showMore(name, n) {
    thumbnailsMore = Array.prototype.slice.call(document.querySelectorAll(name));
  

  thumbLengthMore = thumbnailsMore.length; 
  n = (n < thumbLengthMore) ? n : thumbLengthMore;
  
  for (var i = 0; i < n; i++) {
    thumbnailsMore[i].style.display = "block"; 
  }
  
  var buttonMore = document.getElementById("gallery__more");
  buttonMore.addEventListener("click", handleButtonMore);
  
  function handleButtonMore(event) {    
    event.preventDefault();
    if(n >= thumbLengthMore) {
      return;
    }; 
    
    if(buttonMore.classList.contains("shown")) {
        for (var i = n; i < thumbLengthMore; i++) {
          thumbnailsMore[i].style.display = "none"; 
        }

        buttonMore.innerHTML = "Show more...";
        buttonMore.classList.remove("shown");
      
      
    } else {
        for (var i = n; i < thumbLengthMore; i++) {
          thumbnailsMore[i].style.display = "block"; 
        }

        buttonMore.innerHTML = "Hide gallery";
        buttonMore.classList.add("shown");
    }
  }  
};


showMore(".gallery__item", 12);
(function BurgerMenu() {
  let toggleButton = document.querySelector(".cmn-toggle-switch__htx");
  toggleButton.addEventListener("click", toggleMenu);



  function toggleMenu() {

    let overlayElement = document.querySelector(".site-overlay");
    let bodyElement = document.body;
    let menuElements = Array.prototype.slice.call(document.querySelectorAll(".home-link a"));
    
    function menuSwitchOn() {
      toggleButton.classList.add("active");   //change button to cross
      overlayElement.classList.remove("noActive");  //show overlay  
      overlayElement.addEventListener("click", handleOverlay);      
      bodyElement.classList.add("stop-scrolling"); // stop scrolling   
      
      for (var i = 0; i < menuElements.length; i++) {
          menuElements[i].addEventListener("click", handleMenu);
      }
      
      
    }
    
    function menuSwithOff() {
      toggleButton.classList.remove("active");  //change button to normal 
      overlayElement.removeEventListener("click", handleOverlay);
      overlayElement.classList.add("noActive");  //hide overlay 
      bodyElement.classList.remove("stop-scrolling"); // stop scrolling
      for (var i = 0; i < menuElements.length; i++) {
          menuElements[i].removeEventListener("click", handleMenu);
      }      
    }
    
    function handleOverlay() {
        menuSwithOff();  
    }
    
    function handleMenu() {
      setTimeout(menuSwithOff, 300);
    }

    if(toggleButton.classList.contains("active")) {
        menuSwithOff();

    } else {
        menuSwitchOn();
    }
    
    
  } 
})();
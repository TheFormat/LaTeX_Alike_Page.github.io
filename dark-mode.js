document
  .querySelector("#dark-mode-toggle")
  .addEventListener('click', (event) => {
     document.body.classList.toggle("latex-dark");
    const isDarkMode = document.body.classList.contains("latex-dark");
    
    if (isDarkMode) {
        event.currentTarget.innerText = "밝게"; 
    } else {
        event.currentTarget.innerText = "어둡게";
    }
   });

// Restore the state of the side bar based on the current page
document.querySelectorAll(".navigation__link-list-item--active").forEach(activeItem => {
    const parent = activeItem.parentElement;

    parent.style.transition = "none";

    parent.classList.add("open");
    parent.style.maxHeight = parent.scrollHeight + "px";

    parent.offsetHeight;
    parent.style.transition = "";
});

document.querySelectorAll(".dropdown-btn").forEach(toggle => {
  const dropdown = toggle.nextElementSibling;
  const key = toggle.dataset.menu;

  toggle.addEventListener("click", () => {
    // Create a dynamic height depending on the number of items avaiable in the dropdown menu
    // Store the value in cache to keep the same menu when navigating through pages
    if (dropdown.classList.toggle("open")){
      dropdown.style.maxHeight = dropdown.scrollHeight + "px";
      localStorage.setItem(key, "open");
    }else{
      dropdown.style.maxHeight = "0px";
      localStorage.setItem(key, "closed");
    }
  });
});

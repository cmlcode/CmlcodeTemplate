// Gets the items by id
const menu_wrapper = document.querySelector(".header_menu_wrapper")
const menu_button = document.querySelector(".header_menu")
const open_menu_button = document.querySelector(".header_menu_open")
const menu_box = document.querySelector(".header_expanded")

// Checks when the menu button is clicked
menu_wrapper.addEventListener('click', () => {
  // Sets menu visibilities
  if (menu_button.classList.contains("invisible")){
    // Runs if links are supposed to be invisible

    // Make the closed hamburger menu button visible
    menu_button.classList.remove("invisible");
    // Makes the open hamburger menu button invisible
    open_menu_button.classList.add("invisible");
    // Makes the link box invisible
    menu_box.classList.add("invisible")
  }
  else{
    // Each line does the inverse of previous actions

    menu_button.classList.add("invisible");
    open_menu_button.classList.remove("invisible");
    menu_box.classList.remove("invisible")
  }
})

/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const createButton = (menuItems) => {
  // Create menu item
  const menu = document.createElement('div');
  menu.classList.add('menu');

  // Create a ul with a forEach menuItem
  const nav = document.createElement('ul');

  menuItems.forEach(item => {
    const link = document.createElement('li');
    link.textContent = item;
    nav.appendChild(link);
  })

  menu.appendChild(nav);

  //Always remember to return the item at the end of the component function
  return menu;
}

//Grab the menuButton and give it a click event that toggles 'menu--open'
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', (e) => {
  menu.classList.toggle('menu--open');
})

//Add to Menu to the DOM with the header as the mounting point.
const menu = createButton(menuItems);

const header = document.querySelector('.header');

header.appendChild(menu);



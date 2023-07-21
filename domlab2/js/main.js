// Menu data structure (Task 5.0)
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Task 1.0
const mainEl = document.querySelector('main');

// Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2
mainEl.innerHTML = '<h1>LEARNING THE DOM!</h1>';

// Task 1.3
mainEl.classList.add('flex-ctr');

// Task 2.0
const topMenuEl = document.getElementById('top-menu');

// Task 2.1
topMenuEl.style.height = '100%'

// Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3
topMenuEl.classList.add('flex-around');

// Task 3.0
// menuLinks data structure copied at the top

// Task 3.1
menuLinks.forEach(function(link) {
  const linkEl = document.createElement('a');
  linkEl.setAttribute('href', link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});

// Task 4.0
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById('sub-menu');

// Task 4.1
// Set the height subMenuEl element to be 100%.
subMenuEl.style.height = '100%';

// Task 4.2
// Set the background color of subMenuEl using the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

// Task 4.4
// Set the CSS position property of subMenuEl to the value of absolute.

subMenuEl.style.position = 'absolute';

// Task 4.5
subMenuEl.style.top = '0';

// Task 5.0
// menuLinks array updated at the top

// Task 5.1
const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.

// The first line of code of the event listener function should call the event object’s preventDefault() method.

// The second line of code function should immediately return if the element clicked was not an <a> element.

// 👀 Hint: DOM elements have a tagName property.

// console.log the content of the <a> to verify the handler is working.
topMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  const link = evt.target;
  //evt.target refers to the clicked <li> element
  if (link.tagName !== 'A') return;
  console.log(link.textContent);


// Task 5.3
// This feature “deselects” the menu item if it’s clicked when it’s currently active, resulting in the sub-menu sliding up as well.

// Next in the event listener, if the clicked <a> link has a class of active:

// Remove the active class from the clicked <a> element.
// Set the showingSubMenu to false.
// Set the CSS top property of subMenuEl to 0.
// return; from the event listener function.
  if (link.classList.contains('active')) {
    // link.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }


  // Task 5.4
  // At this point, a new menu item has been clicked and it’s time to “reset” any currently active menu item…
  
  // Add code to the bottom of the the event listener that iterates over each <a> element in topMenuLinks and removes the class name of active, regardless of whether the <a> element has a class of active or not.
  
  // Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
  
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  });


// Task 5.5
// Next, the event listener should add a class name of active to the <a> element that was clicked.
  link.classList.add('active');
  

//   Task 5.6
// Next, add code in the event listener that sets showingSubMenu to true if the clicked <a> element’s “link” object within menuLinks has a subLinks property (all do, except for the “link” object for ABOUT), otherwise, set it to false.

// Hint: Saving the “link” object in a variable will come in handy for passing its subLinks array in Task 5.7

// Task 5.6
  const linkData = menuLinks.find(function(linkObj) {
    return linkObj.text === link.textContent;
  });
  showingSubMenu = 'subLinks' in linkData;
  // Task 6.4
  
  
  // Task 5.7
  // Next in the event listener…
  
  // If showingSubMenu is true:
  
  // Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element.
  // Set the CSS top property of subMenuEl to 100%.
  // Otherwise (showingSubMenu is false):
  
  // Set the CSS top property of subMenuEl to 0.
  // Since the About link has been clicked, set mainEl.innerHTML to '<h1>about</h1>'.
  if (showingSubMenu) {
    buildSubMenu(linkData.subLinks);
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0';
    mainEl.innerHTML = '<h1>about</h1>';
  }
});

// Task 5.8
// Code the buildSubMenu function so that it:

// Clears the contents of subMenuEl.
// Iterates over the subLinks array passed as an argument; and for each “link” object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the “link” object.
// Set the new element’s content to the value of the text property of the “link” object.
// Append the new element to the subMenuEl element.
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(function(link) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    subMenuEl.appendChild(linkEl);
  });
}

// Task 6.0
// Attach a delegated ‘click’ event listener to subMenuEl.

// The first line of code of the event listener function should call the event object’s preventDefault() method.

// The second line of code function should immediately return if the element clicked was not an <a> element.

// console.log the content of the <a> to verify the handler is working.
subMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  const link = evt.target;
  if (link.tagName !== 'A') return;
  console.log(link.textContent);
  
  
  // Task 6.1
  // Next, subMenuEl’s event listener should:
  
  // Set showingSubMenu to false.
  // Set the CSS top property of subMenuEl to 0.
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  
  // Task 6.2
  // Next, subMenuEl’s event listener should remove the class name of active from each <a> element in topMenuLinks - whether the active class exists or not.
  topMenuLinks.forEach(function(link) {
  link.classList.remove('active');
  });
  
  // Task 6.3
  // Next, subMenuEl’s event listener should update the contents of mainEl to the contents of the <a> element, within an <h1>, clicked within subMenuEl.

  mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});



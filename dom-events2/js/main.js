// Cached elements -- means storing / creating
const button = document.querySelector('button');
// Above is a function.
const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');


button.addEventListener('click', function(event) {
    const newCommentEl = document.createElement('li');
    // created an li tag / element in the dom
    //Access the inputs text
    const commentText = inputEl.value;
    // created a variable named comments thats is assigned to the input element and appended to 
    newCommentEl.innerText = commentText;
    ulEl.append(newCommentEl);
    inputEl.value = '';
});
// add event listener is a method
// Within the parameter it has two arguments. Which is the name of the event = click and the callback function = anonmymous function.

// Here is the syntax for attaching an event listener for a given event:

// element.addEventListener(<event-name>, <callback>);
// event-name is the name of the event (string)
// callback is the function we want executed when the event happens. When called by the JS engine, it will be passed an event object as an argument.


ulEl.addEventListener('click', handleClick);
// Add event listener is a callback routine
// We are creating an event delegation.
// The callback function is handleclick
function handleClick(evt) {
    console.log(evt.target)
    evt.target.style.color = 'green';
// .target is a property of an event object that refers to the element that triggered the event. This can be useful for identifying which element an event originated from, which is often necessary when working with event listeners.
}


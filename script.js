//
// JavaScript adds interactivity and dynamic content.
// This includes interacting with the back-end code.
//

// 1. Get references to the HTML elements we need to interact with.
const button = document.getElementById('actionButton');
const myList = document.getElementById('myList');

// 2. "Listen" for the click event on the button and run the function.
// This connects the user action (click) to the code logic (handleClick function).
button.addEventListener('click', handleClick);

// 3. Define a function that will be executed when the button is clicked.
// Note that this function calls the back-end code
// Note the use of: async/await keywords
async function handleClick() {

    // set back-end code url - CHANGE IT TO YOUR OWN URL!
    const backendUrl = "https://week3-backend-nu.vercel.app/";  // IMPORTANT: no slash at the end

    // fetch the data by calling 'backendUrl/route' (note the slash before the route)
    let resp = await fetch(`${backendUrl}/list`);           
    let data = await resp.json();

    // do something with the data
    let listItem
    for(rec of data ) {
        listItem = document.createElement('li')
        listItem.textContent = rec.name

        myList.appendChild(listItem)
    }   
    greetingText.textContent = data.message;    
    
}
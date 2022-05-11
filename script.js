//console.log('hey it works')

const menuElement = document.querySelector('#menu')

fetch('https://codice-boca.web.app/menu')
.then(response => response.json()) //getting raw data
.then(cleanData => {
    const menuCards = cleanData.map((menuItem) => { //have an array, map thru it and return
        console.log('menuItem here', menuItem)
        //returning an array of divs
        return `<div class="menu-item"> 
        <h3>${menuItem.title}</h3>  
        <p>${menuItem.description}</p>
    </div>` 
    }) //div is a string 

    menuElement.innerHTML = menuCards.join('')

}) //logging clean JSON data
.catch(err => console.err(err))




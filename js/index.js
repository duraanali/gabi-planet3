// SELECTORS

// Select logo

// getElementById

// const logo = document.getElementById('logo')

// const logo2 = document.getElementsByClassName('logo')

// THE NEW WAY
// querySelector and querySelectorAll

const logo = document.querySelector('#logo')

// querySelectorAll

const menu = document.querySelectorAll('.menu-item')

// Select Card title

const cardTitle = document.querySelectorAll('.card-title')

cardTitle.forEach(item => {
    item.style.color = "red",
    item.textContent = "WHATEVER"

})


// Classlist
// We can remove or add any class, we can also toggle classes
// classList methods = add, remove, toggle

// const lastCard = document.querySelector(".extra-stuff")

// lastCard.classList.add('extra-stuff')

// Creating new Element
// use the method = createElement

const footer = document.createElement('footer')

footer.textContent = "Created by Gabi School";
footer.classList.add("footer")
footer.style.color = "white"
footer.style.padding = '20px'
footer.style.fontSize = '20px'
footer.style.textAlign = 'center'

// appendChild or Prepend

const parentElement = document.querySelector('body')

parentElement.appendChild(footer)


// Event Listeners

const cardImage = document.querySelector('.card-img-top')

cardImage.addEventListener('mouseenter', () => {
    cardImage.style.transform = "scale(1.2)";
    cardImage.style.transition = "all 0.3s"
})

cardImage.addEventListener('mouseleave', () => {
    cardImage.style.transform = "scale(1)";
})


const lastCard = document.querySelector(".extra-stuff")

lastCard.addEventListener('click', (event) => {
    lastCard.classList.toggle('extra-stuff')
})



const content = {
    title: "Earth Day",
    nav_bar: {
        nav1: "Home",
        nav2: "contact",
        nav3: "about us"
    },
}


const websiteTitle = document.querySelector('#logo-title')

websiteTitle.textContent = content.title;
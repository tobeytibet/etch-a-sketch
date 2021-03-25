let gridSize
let r = 255
let g = 255
let b = 255


do {
    
    gridSize = prompt('How many boxes per side (between 1-10): ')
    if (gridSize === null) {
        alert('Enter a number please')
    
    }
}
while (gridSize > 10 || gridSize <= 0) 

const container = document.querySelector('.container')


const myButton = document.querySelector('.button')
myButton.addEventListener('click', () => {
    location.reload()
    return gridSize
    
})



for (let i = 0; i < (gridSize**2); i++) {
    let test = 100/gridSize
    console.log(test)
    const createDiv = document.createElement('div')
    totalBoxes = parseInt(i) + 1
    createDiv.classList.add(`box`) //do i need to change the class of every box made?
    createDiv.textContent = `box ${totalBoxes}`
    createDiv.style.width = `${test}%`
    createDiv.style.height = createDiv.style.width
    createDiv.style.verticalAlign = 'middle'
    container.appendChild(createDiv)
}

const changeColour = document.querySelectorAll('.box')

for (let i=0; i < changeColour.length; i++)
    changeColour[i].addEventListener('mouseenter', () => {
        
        changeColour[i].style.background = `rgb(${r}, ${g}, ${b})`
        r -= 25.5
        g -= 25.5
        b -= 25.5
        // for (let j = 0; j < 10; j++) {
        //     changeColour[i].style.background = `rgb(${r}, ${g}, ${b})`
        //     r -= 25.5
        //     g -= 25.5
        //     b -= 25.5
            
        // }  
        // changeColour[i].style.background = 'black'
        // changeColour[i].style.background = "#" + Math.floor(Math.random()*16777215).toString(16) changes it to random colours
    })




const body = document.getElementsByTagName("body")[0]
const button = document.getElementsByTagName("button")[0]

console.log(body)
console.log(button)



//body.style.backgroundColor = "red"

function setColor(name)
    {

            body.style.backgroundColor = name;
        
    }


function randomColor(name)
    {
        body.style.backgroundColor = name;
        const red = Math.round(Math.random() * 255)
        const green = Math.round(Math.random() * 255)
        const blue = Math.round(Math.random() * 255)
        const color = `rgb(${red},${green},${blue})`
        body.style.backgroundColor = color;
    }


const $container = document.getElementById('container')
const $addRed = document.getElementById ('add-red')
const $addGreen = document.getElementById ('add-green')
const $addBlue = document.getElementById ('add-blue')

const $buttonSet = document.getElementById('bottun-set')

const itemInfo = {
    title:'apple',
    price: 9.99,
    discription:'good food yes',
    quantity: 10
}

let itemCount = 0
function capitalize(inputString) {
        
    return(inputString[0].toUpperCase() + inputString.substring(1))
}
function addItem(event){
    
    const color =event.target.dataset.color
    

    capitalize('red')
    const itemelement = `
    <div id='item-${itemCount}' class='item'>
    <p>${capitalize(color)}${itemInfo.title}</p>
    <p>${itemInfo.price}</p>
    <p>${itemInfo.discription}</p>
    <p>${itemInfo.quantity}</p>
    <p>
    <span>Quantity</span>
    <button class='plus'>+</button>
    <button class='minus'>-</button>
    <span class='quantity'>0</span>
    </p>
    <p>
    <button class='add-to-cart>Add To Cart</button>
    </p>
    
   
    </div>
`

$container.insertAdjacentHTML('beforeend', itemelement)

    const $icon = document.createElement('i')
    $icon.classList.add('fa','fa-apple')
    $icon.style.fontSize = '100px'
    //change color
    $icon.style.color = color
    const $item = document.getElementById(`item-${itemCount}`)
    
    $item.insertBefore($icon, $item.firstElementChild)

    document.querySelector(`#item-${itemCount} .plus`) .addEventListener('click',plusItem )
    document.querySelector(`#item-${itemCount} .minus`) .addEventListener('click',minusItem )
    document.querySelector(`#item-${itemCount} .plus`) .addEventListener('click',plusItem )

    itemCount++
}

function plusItem(event){
    console.log(event.target.parentElement.children[3].textContent++)
    
} 
function minusItem(event){
    console.log(event.target.parentElement.children[3].textContent++)
    
}

function addToCart(event){
    CaretPosition.push('new item')
    console.log(`Cart: item-566f 69`)

}

$buttonSet.addEventListener('click', addItem) 
$addGreen.addEventListener('click', addItem) 
$addBlue.addEventListener('click', addItem) 


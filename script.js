import myJson from './data.json' assert {type: 'json'};

let container = document.getElementById("container");


console.log(myJson);


for(let i = 0; i < myJson.length; i++){
    let food = myJson[i];
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h2>${food.name}</h2>
        <p>${food.price}</p>
        `;

    let button = document.createElement("button");
    button.innerText = "Add to cart";
    button.addEventListener("click", () => {
        addToCart(food);
    })
    card.appendChild(button);
    container.appendChild(card);
}


class Food{
    /**
     * @param {string} id
     * @param {string} name
     * @param {number} price
     * @param {number} stock
     */

    constructor(id, name, price, stock){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
/**@type {Food[]} */
let cart = [];



function addToCart(food){
    let index = cart.findIndex((item) => {
        return item.id == food.id;
    })
    if(index != -1){
        cart[index].quantity++;
        console.log(cart);
        return;
    }
    cart.push({
        id: food.id,
        quantity: 1
    })
    console.log(cart);
    return;
}

let chargeButton = document.createElement("button");
chargeButton.innerHTML = "Thanh toán";
chargeButton.addEventListener("click", () => {
    tinhTien();
})

container.appendChild(chargeButton);

function tinhTien(){
    if(cart.length == 0){
        alert("Chưa có món ăn nào trong giỏ hàng");
    }
    let total = 0;
    cart.forEach((item) => {
        myJson.forEach((food) => {
            if(food.id == item.id){
                total += food.price * item.quantity;
            }
        })
    })
    alert("Tổng tiền là: " + total);
    cart = [];
}





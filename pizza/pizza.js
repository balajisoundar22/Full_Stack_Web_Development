function calculateTotal() {
    var total = 0;

    // get pizza size
    var pizzaSize = document.getElementById("size").value;
    if (pizzaSize === "small") {
        total += 99;
    } else if (pizzaSize === "medium") {
        total += 199;
    } else if (pizzaSize === "large") {
        total += 399;
    }

    // check if deep pan 
    var isDeepPan = document.getElementById("deep-pan").checked;
    if (isDeepPan) {
        total += 20;
    }

    // add extra toppings
    var toppings = document.getElementsByName("topping");
    for (var i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            if (toppings[i].value === "mushrooms") {
                total += 15;
            } else if (toppings[i].value === "olives") {
                total += 10;
            } else if (toppings[i].value === "fingernail") {
                total += 30;
            } else if (toppings[i].value === "spicy-beef") {
                total += 20;
            }
        }
    }

    // check if home delivery
    var isHomeDelivery = document.getElementById("home-delivery").checked;
    if (isHomeDelivery) {
        total += 25;
    }

    // display total
    document.getElementById("total").innerHTML = "Total: ₹" + total;
}
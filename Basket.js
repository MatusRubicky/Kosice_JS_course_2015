var products = [{
    name: "test",
    price: 12.9,
    inventory: 20
}, {
    name: "test2",
    price: 30,
    inventory: 80
}];

function ProductLineItem(product) {

}

ProductLineItem.prototype = {
    //implement
};

var basket = (function () {
    var b = [];
    return {
        addProduct: function (productID) {
            if (products[productID].inventory > 0 || (productID >= 0 && productID < products.length)) {
                var index;
                for (i = 0; i < b.length; i++) {
                    if (b[i][0] == productID) {
                        index = i;
                    } else {
                        index = undefined;
                    }
                }
                if (index === undefined) {
                    b.push([productID, 1])
                    products[productID].inventory--;
                } else {
                    b[index][1]++
                }
                products[productID].inventory--;
                console.log("product added successfuly");
            } else {
                console.log("product is out of stock");
            }
        },
        removeProduct: function (productID) {
            if (productID >= 0 && productID < products.length) {
                var index
                for (i = 0; i < b.length; i++) {
                    if (b[i][0] == productID) {
                        index = i;
                        b[index][1] = 0;
                    }
                }
            }
        },
        updateProductQuantity: function (productID, quantity) {

            if (products[productID].inventory >= quantity) {
                for (i = 0; i < b.length; i++) {
                    if (b[i][0] == productID) {
                        index = i;
                    } else {
                        index = undefined;
                    }
                }

                if (index === undefined) {
                    b.push([productID, quantity])
                    products[productID].inventory -= quantity
                } else {
                    b[index][1] = quantity;
                    products[productID].inventory -= quantity
                }

            }
        },
        getTotalPrice: function () {
            var sum = 0;
            for (i = 0; i < b.length; i++) {
                sum += (products[b[i][0]].price) * b[i][1];
            }
            console.log(sum);
        }
    }
})();
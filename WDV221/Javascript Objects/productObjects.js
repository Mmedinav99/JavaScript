// Constructor function for Product objects
function Product(name, number, wholesalePrice) {
    this.name = name;
    this.number = number;
    this.wholesalePrice = wholesalePrice;
    this.retailPrice = wholesalePrice * 1.67; 
}

// Create productList array using data from productArrays.js
const productList = [];
for (let i = 0; i < productNames.length; i++) {
    productList.push(new Product(
        productNames[i],
        productNumbers[i],
        productManPrices[i]
    ));
}

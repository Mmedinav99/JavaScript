// Format currency as USD
const usdFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

// Get output div
const outputDiv = document.getElementById("output");

// Display number of products
outputDiv.innerHTML += `<p>Number of Products in Product List: ${productList.length}</p>`;

// Loop through productList and display details
for (let product of productList) {
    outputDiv.innerHTML += `
        <p>
            Product: ${product.name}<br>
            Product Number: ${product.number}<br>
            Product Wholesale Price: ${usdFormat.format(product.wholesalePrice)}<br>
            Product Suggested Retail Price: ${usdFormat.format(product.retailPrice)}
        </p>
    `;
}

// Convert one product to JSON and display in console
console.log("JSON version of first product:", JSON.stringify(productList[0]));

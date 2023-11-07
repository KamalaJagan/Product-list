// describe the product data like name, price and description.
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    description: "Describe the product",
  },
  {
    id: 2,
    name: "Product 2",
    price: 12,
    description: "Describe the product",
  },
  {
    id: 3,
    name: "Product 3",
    price: 10,
    description: "Describe the product",
  },
  {
    id: 4,
    name: "Product 4",
    price: 12,
    description: "Describe the product",
  },
  {
    id: 5,
    name: "Product 5",
    price: 10,
    description: "Describe the product",
  },
  {
    id: 6,
    name: "Product 6",
    price: 12,
    description: "Describe the product",
  },
  {
    id: 1,
    name: "Product 1",
    price: 10,
    description: "Describe the product",
  },
  {
    id: 2,
    name: "Product 2",
    price: 12,
    description: "Describe the product",
  },
  {
    id: 3,
    name: "Product 3",
    price: 10,
    description: "Describe the product",
  },
  {
    id: 4,
    name: "Product 4",
    price: 12,
    description: "Describe the product",
  },
  {
    id: 5,
    name: "Product 5",
    price: 10,
    description: "Describe the product",
  },
  {
    id: 6,
    name: "Product 6",
    price: 12,
    description: "Describe the product",
  },
];
// define how many items are in the one page.
const itemsPerPage = 4;
let currentPage = 1;
// define retrive of the HTML element
function displayProducts() {
  const searchQuery = document.getElementById("search").value.toLowerCase();
  const productList = document.getElementById("product-list");
  const pagination = document.getElementById("pagination");
  // filtering product are used in the search qyery.
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );
  // calculate the range of the product
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // clarify the looping of the product list
  productList.innerHTML = "";
  for (
    let i = startIndex;
    i < Math.min(endIndex, filteredProducts.length);
    i++
  ) {
    const product = filteredProducts[i];
    const productItem = document.createElement("li");
    productItem.className = "product";
    productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        `;
    productList.appendChild(productItem);
  }
  // create a pagination link in the product list.
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "javascript:void(0)";
    pageLink.textContent = i;
    pageLink.addEventListener("click", () => {
      currentPage = i;
      displayProducts();
    });
    pagination.appendChild(pageLink);
  }
}
displayProducts();
document.getElementById("search").addEventListener("input", displayProducts);

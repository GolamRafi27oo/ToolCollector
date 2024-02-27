// JavaScript code
const products = [
    { name: "ChatGPT AI", category: "electronics", link: "https://chat.openai.com/", image: "https://cdn.oaistatic.com/_next/static/media/favicon-32x32.be48395e.png" },
    { name: "Laptop", category: "electronics", link: "https://example.com/laptop", image: "https://via.placeholder.com/150" },
    { name: "Laptop", category: "electronics", link: "https://example.com/laptop", image: "https://via.placeholder.com/150" },

    { name: "Laptop", category: "electronics", link: "https://example.com/laptop", image: "https://via.placeholder.com/150" },
    { name: "Laptop", category: "electronics", link: "https://example.com/laptop", image: "https://via.placeholder.com/150" },
    { name: "Laptop", category: "electronics", link: "https://example.com/laptop", image: "https://via.placeholder.com/150" },

    { name: "Laptop", category: "electronics", link: "https://example.com/laptop", image: "https://via.placeholder.com/150" },

    { name: "Laptop", category: "electronics", link: "https://example.com/laptop", image: "https://via.placeholder.com/150" },
    { name: "T-shirt", category: "clothing", link: "https://example.com/tshirt", image: "https://via.placeholder.com/150" },
    { name: "Jeans", category: "clothing", link: "https://example.com/jeans", image: "https://via.placeholder.com/150" },
    { name: "Book", category: "books", link: "https://example.com/book", image: "https://via.placeholder.com/150" }
    // Add more products as needed
  ];

let searchCounts = localStorage.getItem("searchCounts");
searchCounts = searchCounts ? JSON.parse(searchCounts) : {};

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const electronicsList = document.getElementById("electronicsList");
const clothingList = document.getElementById("clothingList");
const booksList = document.getElementById("booksList");
const mostSearchedList = document.getElementById("mostSearchedList");

// Function to display products based on search and category filters
function displayProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value.toLowerCase();

  // Clear existing product lists
  electronicsList.innerHTML = "";
  clothingList.innerHTML = "";
  booksList.innerHTML = "";

  // Filter products and display in respective lists
  products.forEach((product) => {
    const nameMatches = product.name.toLowerCase().includes(searchTerm);
    const categoryMatches =
      selectedCategory === "" || product.category === selectedCategory;

    if (nameMatches && categoryMatches) {
      const li = document.createElement("li");
      li.classList.add("product-item");

      const link = document.createElement("a");
      link.href = product.link;
      link.textContent = product.name;
      link.target = "_blank";

      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;

      link.prepend(image);
      li.appendChild(link);

      switch (product.category) {
        case "electronics":
          electronicsList.appendChild(li);
          break;
        case "clothing":
          clothingList.appendChild(li);
          break;
        case "books":
          booksList.appendChild(li);
          break;
      }
    }
  });
}

// Function to update most searched products
function updateMostSearched() {
  mostSearchedList.innerHTML = "";

  const sortedProducts = Object.keys(searchCounts).sort(
    (a, b) => searchCounts[b] - searchCounts[a]
  );

  sortedProducts.slice(0, 10).forEach((productName) => {
    const product = products.find((p) => p.name === productName);
    if (product) {
      const li = document.createElement("li");
      li.classList.add("product-item");

      const link = document.createElement("a");
      link.href = product.link;
      link.textContent = product.name;
      link.target = "_blank";

      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;

      link.prepend(image);
      li.appendChild(link);

      mostSearchedList.appendChild(li);
    }
  });
}

// Event listeners for search input and category filter
searchInput.addEventListener("input", () => {
  displayProducts();
  updateMostSearched();
});
categoryFilter.addEventListener("change", () => {
  displayProducts();
  updateMostSearched();
});

// Increment search count for a product
function incrementSearchCount(productName) {
  searchCounts[productName] = (searchCounts[productName] || 0) + 1;
  localStorage.setItem("searchCounts", JSON.stringify(searchCounts));
}

// Trigger search count increment when a search is made
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  products.forEach((product) => {
    if (product.name.toLowerCase().includes(searchTerm)) {
      incrementSearchCount(product.name);
    }
  });
});

// Initial display of products
displayProducts();

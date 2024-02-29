// JavaScript code
const products = [
  //generator////////////////////
  {
    name: "ChatGPT (AI text generator)",
    category: "generator",
    link: "https://chat.openai.com/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/800px-ChatGPT_logo.svg.png",
  },
  {
    name: "Copy.ai Copywriter (AI text generator)",
    category: "generator",
    link: "https://www.copy.ai/ ",
    image:
      "https://assets-global.website-files.com/60e5f2de011b865a06c30ddd/65dcba3a99cec622d2eaf147_649f3be5d6633f87a930d6d4_channels4_profile.jpg",
  },
  {
    name: "DALL-E 2 (AI Image Generator)",
    category: "generator",
    link: "https://labs.openai.com/",
    image:
      "https://chatgptaihub.com/wp-content/uploads/2023/06/ChatGpt-Logo-with-Black-Background.png",
  },
  {
    name: "Canva (AI Image Generator)",
    category: "generator",
    link: "https://www.canva.com/ai-image-generator/",
    image:
      "https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1581894810/catalog/canva/icon128x128.png",
  },
  {
    name: "Canva (AI Art Image Generator)",
    category: "generator",
    link: "https://www.canva.com/ai-art-generator/",
    image:
      "https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1581894810/catalog/canva/icon128x128.png",
  },
  {
    name: "Canva Resumes (Generator/ Maker)",
    category: "generator",
    link: "https://www.canva.com/create/resumes/",
    image:
      "https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1581894810/catalog/canva/icon128x128.png",
  },
  {
    name: "Canva CV (Generator/ Maker)",
    category: "generator",
    link: "https://www.canva.com/create/cv/",
    image:
      "https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1581894810/catalog/canva/icon128x128.png",
  },
  {
    name: "lumen5 (AI video generator)",
    category: "generator",
    link: "https://lumen5.com/",
    image:
      "https://lumen5.com/learn/wp-content/uploads/2022/03/L5-logo-fullColor-rgb-Purple-Square.png",
  },
  {
    name: "QR Code Generator",
    category: "generator",
    link: "https://login.qr-code-generator.com/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMATwt_sLg_HbFkjWp0PLwhqrd4B0O1QNQ97CwQBkxA&s",
  },

  //Editor//////////////////////
  {
    name: "Photopea (Image/Photo Editor)",
    category: "editor",
    link: "https://www.photopea.com/",
    image: "https://www.photopea.com/promo/icon512.png",
  },
  {
    name: "Remove Background(Image/Photo Editor)",
    category: "editor",
    link: "https://www.remove.bg/",
    image: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_2b713d78181e35c5c49c07a0989b8095/remove-bg.png",
  },
  {
    name: "Image Resizer(Image/Photo Editor)",
    category: "editor",
    link: "https://imageresizer.com/",
    image: "https://imageresizer.com/favicon.ico",
  },
  {
    name: "ClipChamp (Video editor)",
    category: "editor",
    link: "https://app.clipchamp.com/login",
    image: "https://yt3.googleusercontent.com/Wi1EZjCgoZCqz7DsKcmBxKO7o39jIthf1XFnO2Qe__HGzgCNd0lAbZAXEZWkljIhrVEN710TvQ=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Adobe (Reverse video editor)",
    category: "editor",
    link: "https://www.adobe.com/express/feature/video/reverse",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZj0RpOrWVBqsxGrKFUT3vx9lHvueYfWDJhI9uFZfzw&s",
  },
  {
    name: "Soundtrap (Audio editor/maker/music)",
    category: "editor",
    link: "https://www.soundtrap.com/musicmakers",
    image: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1506951068/cmqicf4r1zaqksnmmib8.jpg",
  },
  {
    name: "Sejda (PDF editor)",
    category: "editor",
    link: "https://www.sejda.com/pdf-editor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiM727lFwaeOpKBKvfmgGqX10NQqYe8dwsnykVtUVcg&s",
  },
  {
    name: "Book",
    category: "books",
    link: "https://example.com/book",
    image: "https://via.placeholder.com/150",
  },
  // Add more products as needed
];

let searchCounts = localStorage.getItem("searchCounts");
searchCounts = searchCounts ? JSON.parse(searchCounts) : {};

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const generatorlist = document.getElementById("generatorlist");
const editorList = document.getElementById("editorList");
const booksList = document.getElementById("booksList");
const weatherList = document.getElementById("weatherList");
const mostSearchedList = document.getElementById("mostSearchedList");

// Function to display products based on search and category filters
function displayProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value.toLowerCase();

  // Clear existing product lists
  generatorlist.innerHTML = "";
  editorList.innerHTML = "";
  booksList.innerHTML = "";
  weatherList.innerHTML = "";
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
        case "generator":
          generatorlist.appendChild(li);
          break;
        case "editor":
          editorList.appendChild(li);
          break;
        case "books":
          booksList.appendChild(li);
          break;
        case "books":
          weatherList.appendChild(li);
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

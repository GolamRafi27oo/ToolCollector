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
    name: "Gemini GPT (AI text generator)",
    category: "generator",
    link: "https://gemini.google.com/app",
    image:
      "https://assets.anakin.ai/app/app-icon/custom/20231227/syTfHWQJgP9gfyzl.jpeg",
  },
  {
    name: "Copilot GPT (AI text/ image/ Vacation /Cooking /Fitness/ Notebook generator)",
    category: "generator",
    link: "https://copilot.microsoft.com/",
    image:
      "https://victorycto.com/wp-content/uploads/2024/02/Microsoft-Copilot.png",
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
    name: "Adobe Firefly (AI Image Generator)",
    category: "generator",
    link: "https://firefly.adobe.com/generate/images",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Adobe_Firefly_Logo.svg/2101px-Adobe_Firefly_Logo.svg.png",
  },
  {
    name: "Adobe Express (Socail post, flyers, videos etc generator)",
    category: "generator",
    link: "https://new.express.adobe.com/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZj0RpOrWVBqsxGrKFUT3vx9lHvueYfWDJhI9uFZfzw&s",
  },
  {
    name: "Image Creator From Microsft (AI Image Generator)",
    category: "generator",
    link: "https://www.bing.com/images/create",
    image:
      "https://store-images.s-microsoft.com/image/apps.59810.14282385397322807.c2ae4608-6889-4e10-816d-7f8254d76cad.c6b7e4a4-1f74-4c8f-8639-28fef3c09030",
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
    name: "Invideo (AI video generator)",
    category: "generator",
    link: "https://ai.invideo.io/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKu0roO5M-n-1BKgyDh1VzKZf8vUBVzbnRJhGGSqYwA&s",
  },
  {
    name: "QR Code Generator",
    category: "generator",
    link: "https://login.qr-code-generator.com/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMATwt_sLg_HbFkjWp0PLwhqrd4B0O1QNQ97CwQBkxA&s",
  },
  {
    name: "Quillbot (Citation generator)",
    category: "generator",
    link: "https://quillbot.com/citation-generator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV0YMgEJ2ME2GDuGIahQ_USD5bXB3Ngi9qvnaGaPyRKY_ovTknRbD4V8ifM_nIl7VYmI&usqp=CAU",
  },

  //Editor//////////////////////
  {
    name: "Photopea (Image/ Photo Editor)",
    category: "editor",
    link: "https://www.photopea.com/",
    image: "https://www.photopea.com/promo/icon512.png",
  },
  {
    name: "Remove Background (Image/Photo Editor)",
    category: "editor",
    link: "https://www.remove.bg/",
    image:
      "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_2b713d78181e35c5c49c07a0989b8095/remove-bg.png",
  },
  {
    name: "Image Resizer (Image/ Photo Editor)",
    category: "editor",
    link: "https://imageresizer.com/",
    image: "https://imageresizer.com/favicon.ico",
  },
  {
    name: "ClipChamp (Video editor)",
    category: "editor",
    link: "https://app.clipchamp.com/login",
    image:
      "https://yt3.googleusercontent.com/Wi1EZjCgoZCqz7DsKcmBxKO7o39jIthf1XFnO2Qe__HGzgCNd0lAbZAXEZWkljIhrVEN710TvQ=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Adobe (Reverse video editor)",
    category: "editor",
    link: "https://www.adobe.com/express/feature/video/reverse",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZj0RpOrWVBqsxGrKFUT3vx9lHvueYfWDJhI9uFZfzw&s",
  },
  {
    name: "Soundtrap music (Audio editor/maker)",
    category: "editor",
    link: "https://www.soundtrap.com/musicmakers",
    image:
      "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1506951068/cmqicf4r1zaqksnmmib8.jpg",
  },
  {
    name: "Sejda (PDF editor)",
    category: "editor",
    link: "https://www.sejda.com/pdf-editor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiM727lFwaeOpKBKvfmgGqX10NQqYe8dwsnykVtUVcg&s",
  },
  {
    name: "123 Apps (Remove Logo & Watermark from Videos)",
    category: "editor",
    link: "https://online-video-cutter.com/remove-logo",
    image:
      "https://cdn-1.webcatalog.io/catalog/123apps/123apps-icon-filled-256.png?v=1675597540496",
  },
  // converter
  {
    name: "Ilovepdf (Convert to PDF/ convert from PDF)",
    category: "converter",
    link: "https://www.ilovepdf.com/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ilovepdf.svg/1161px-Ilovepdf.svg.png",
  },
  {
    name: "Video Converter (Convert video to other format)",
    category: "converter",
    link: "https://video-converter.com/",
    image:
      "https://cdn-1.webcatalog.io/catalog/123apps/123apps-icon-filled-256.png?v=1675597540496",
  },

  // productivity /////////////////////////
  {
    name: "Quillbot (Paraphraser/ Grammar check/ Summarize/ Translate/ Citation generator )",
    category: "productivity",
    link: "https://quillbot.com/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV0YMgEJ2ME2GDuGIahQ_USD5bXB3Ngi9qvnaGaPyRKY_ovTknRbD4V8ifM_nIl7VYmI&usqp=CAU",
  },
  /*
  {
    name: "Quillbot (Grammar check)",
    category: "productivity",
    link: "https://quillbot.com/grammar-check",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV0YMgEJ2ME2GDuGIahQ_USD5bXB3Ngi9qvnaGaPyRKY_ovTknRbD4V8ifM_nIl7VYmI&usqp=CAU",
  },
  {
    name: "Quillbot (Summarize)",
    category: "productivity",
    link: "https://quillbot.com/summarize",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV0YMgEJ2ME2GDuGIahQ_USD5bXB3Ngi9qvnaGaPyRKY_ovTknRbD4V8ifM_nIl7VYmI&usqp=CAU",
  },
  {
    name: "Quillbot (Translate)",
    category: "productivity",
    link: "https://quillbot.com/translate",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV0YMgEJ2ME2GDuGIahQ_USD5bXB3Ngi9qvnaGaPyRKY_ovTknRbD4V8ifM_nIl7VYmI&usqp=CAU",
  },
  {
    name: "Quillbot (Citation-generator)",
    category: "productivity",
    link: "https://quillbot.com/citation-generator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV0YMgEJ2ME2GDuGIahQ_USD5bXB3Ngi9qvnaGaPyRKY_ovTknRbD4V8ifM_nIl7VYmI&usqp=CAU",
  },
  */
  {
    name: "Grammarly (Plagiarism-checker)",
    category: "productivity",
    link: "https://www.grammarly.com/plagiarism-checker",
    image: "https://www.mooclab.club/showcase/grammarly.503/cover-image",
  },
  {
    name: "Planner5d (House desinger)",
    category: "productivity",
    link: "https://planner5d.com/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Planner_5D_logo.png",
  },
  {
    name: "Anonymouse Mail(Sent mail)",
    category: "productivity",
    link: "https://anonymousemail.me/",
    image:
      "https://cdn6.aptoide.com/imgs/c/c/2/cc2d46d7a9055e15c478aeec17ea8682_icon.png",
  },
  {
    name: "Mail.tm (Receive temporary mail)",
    category: "productivity",
    link: "https://mail.tm/en/",
    image:
      "https://api.nuget.org/v3-flatcontainer/smorcirl.tempmail/2.0.2/icon",
  },

  // weather ///////////////////
  {
    name: "Windy (weather)",
    category: "weather",
    link: "https://www.windy.com/",
    image:
      "https://s.cafebazaar.ir/images/icons/com.windyty.android-1c048d7d-4928-4732-8f94-73f66bd0cfb1_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize",
  },

  // downloader ///////////////
  {
    name: "Ninite (Download all software for windows)",
    category: "downloader",
    link: "https://ninite.com/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrlCXXFoZbkAMscczaNnQUfxATaCznIQc066Tpew9FA&s",
  },
  {
    name: "SnapSave (Download video from anywhere)",
    category: "downloader",
    link: "https://en.savefrom.net/284/sf",
    image:
      "https://store-images.s-microsoft.com/image/apps.50147.2c2f078f-dc17-4078-96ee-c1e04ebba238.e6061426-57b5-401f-9bb7-545af122a08a.14c779f1-f982-4ccb-a267-6550ab97c644",
  },
  {
    name: "Fdown (Download from facebook)",
    category: "downloader",
    link: "https://fdown.net/download.php",
    image: "https://pic.clubic.com/v1/images/2092956/raw",
  },
  {
    name: "Savefrom (Download from instagram)",
    category: "downloader",
    link: "https://en.savefrom.net/274/download-from-instagram",
    image:
      "https://store-images.s-microsoft.com/image/apps.50147.2c2f078f-dc17-4078-96ee-c1e04ebba238.e6061426-57b5-401f-9bb7-545af122a08a.14c779f1-f982-4ccb-a267-6550ab97c644",
  },
  {
    name: "YTMP3 (Download MP3/ audio from youtube)",
    category: "downloader",
    link: "https://ytmp3.nu/gK9p/",
    image:
      "https://cdn.bio.link/uploads/profile_pictures/2022-08-17/QgcURBBQsq5HwFXXbCNQqqx3sTw7wwtc.png",
  },
  {
    name: "YTS (Download movie)",
    category: "downloader",
    link: "https://yts.mx/",
    image: "https://yts.mx/assets/images/website/og_yts_logo.png",
  },
  {
    name: "Pirate Bay (Download anything)",
    category: "downloader",
    link: "https://www.tpbproxypirate.com/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/The_Pirate_Bay_logo.svg/1200px-The_Pirate_Bay_logo.svg.png",
  },
  // Add more products as needed
];

let searchCounts = localStorage.getItem("searchCounts");
searchCounts = searchCounts ? JSON.parse(searchCounts) : {};

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const generatorlist = document.getElementById("generatorlist");
const editorList = document.getElementById("editorList");
const converterList = document.getElementById("converterList");
const productivityList = document.getElementById("productivityList");
const weatherList = document.getElementById("weatherList");
const downloaderList = document.getElementById("downloaderList");
const mostSearchedList = document.getElementById("mostSearchedList");

// Set the copyright year dynamically
function getCopyrightYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}
document.getElementById("footer").innerHTML =
  "&copy; " + getCopyrightYear() + " MyCompany. All rights reserved.";

// Function to display products based on search and category filters
function displayProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value.toLowerCase();

  // Clear existing product lists
  generatorlist.innerHTML = "";
  editorList.innerHTML = "";
  converterList.innerHTML = "";
  productivityList.innerHTML = "";
  weatherList.innerHTML = "";
  downloaderList.innerHTML = "";

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
        case "converter":
          converterList.appendChild(li);
          break;
        case "productivity":
          productivityList.appendChild(li);
          break;
        case "weather":
          weatherList.appendChild(li);
          break;
        case "downloader":
          downloaderList.appendChild(li);
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

  sortedProducts.slice(0, 9).forEach((productName) => {
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
updateMostSearched();

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

//sticky search bar//
$(window).scroll(function (e) {
  var $el = $(".fixedElement");
  var isPositionFixed = $el.css("position") == "fixed";
  if ($(this).scrollTop() > 200 && !isPositionFixed) {
    $el.css({ position: "fixed", top: "0px" });
  }
  if ($(this).scrollTop() < 200 && isPositionFixed) {
    $el.css({ position: "static", top: "0px" });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');
  const cartBox = document.getElementById('cart-box');
  const cartCount = document.getElementById('cart-count');
const favorites = [];
let compareQueue = [];

const cartItems = [];

// // Gadgets specs object
const gadgets = [
  // Headphones
  {
    name: 'Volkano Falcon Aux Headphones',
    category: 'headphones',
    price: 'R899',
    image: 'Images/c1200cb7c0e722593d46acdb7f1c4580.jpg',
    specs: {
      Type: "Wired",
      DriverSize: "40mm",
      FrequencyResponse: "20Hz-20kHz",
      Impedance: "32Ω"
    }
  },
  {
    name: 'Amplify Steller Series Headphones',
    category: 'headphones',
    price: 'R4,999',
    image: 'Images/shared image (5).jpg',
    specs: {
      Type: "Wireless",
      BatteryLife: "30 hours",
      NoiseCancelling: "Yes",
      Bluetooth: "5.0"
    }
  },
  {
    name: 'JBL Live 770NC noise cancelling',
    category: 'headphones',
    price: 'R3,799',
    image: 'Images/b6d2fb1c59f75e411725da3ae033a6cd.jpg',
    specs: {
      Type: "Wireless",
      BatteryLife: "50 hours",
      NoiseCancelling: "Yes",
      Bluetooth: "5.1"
    }
  },
  
  // Laptops
  {
    name: 'MacBook Pro 14" M2',
    category: 'laptops',
    price: 'R24,999',
    image: 'Images/c8be0ec1c57632ee81be32da25d3d435.jpg',
    specs: {
      Processor: "Apple M2",
      RAM: "16GB",
      Storage: "512GB SSD",
      Display: "14.2-inch Retina"
    }
  },
  {
    name: 'Dell XPS 15',
    category: 'laptops',
    price: 'R19,999',
    image: 'Images/fdfe814947bdf4b3750147224e17fe98.jpg',
    specs: {
      Processor: "Intel i7-11800H",
      RAM: "16GB",
      Storage: "1TB SSD",
      Display: "15.6-inch 4K"
    }
  },
  {
    name: 'HP Envy 13',
    category: 'laptops',
    price: 'R15,999',
    image: 'Images/50253ac0de45a6ff9a30b4bb375bc0b1.jpg',
    specs: {
      Processor: "Intel i5-1135G7",
      RAM: "8GB",
      Storage: "256GB SSD",
      Display: "13.3-inch FHD"
    }
  },
  
  // AirPods
  {
    name: 'JBL Airpods',
    category: 'airpods',
    price: 'R3,299',
    image: 'Images/f74b2d2d50d05d3a722d77447d7317a3.jpg',
    specs: {
      BatteryLife: "6 hours",
      CaseBattery: "24 hours",
      Waterproof: "IPX4",
      Bluetooth: "5.0"
    }
  },
  {
    name: 'Apple AirPods Pro',
    category: 'airpods',
    price: 'R6,499',
    image: 'Images/b1ff5240a025a166334af758abd8f111.jpg',
    specs: {
      BatteryLife: "4.5 hours",
      CaseBattery: "24 hours",
      NoiseCancelling: "Yes",
      Bluetooth: "5.0"
    }
  },
  {
    name: 'Beats Powerbeats Pro',
    category: 'airpods',
    price: 'R2,499',
    image: 'Images/d1b1f6a70993138d9f267339149a94c7.jpg',
    specs: {
      BatteryLife: "9 hours",
      CaseBattery: "24 hours",
      Waterproof: "IPX4",
      Bluetooth: "5.0"
    }
  },
  
  // Watches
  {
    name: 'Apple Watch Series 8',
    category: 'watches',
    price: 'R6,999',
    image: 'Images/37a8ae2095512429d5d0ffa5d8675378.jpg',
    specs: {
      Display: "Always-On Retina",
      BatteryLife: "18 hours",
      WaterResistance: "50m",
      HealthFeatures: "ECG, SpO2"
    }
  },
  {
    name: 'Xiaomi Redmi Watch 5 Active',
    category: 'watches',
    price: 'R5,999',
    image: 'Images/2a9c1c6769eabeb9ca78f521ba38f070.jpg',
    specs: {
      Display: "1.96-inch AMOLED",
      BatteryLife: "12 days",
      WaterResistance: "5ATM",
      HealthFeatures: "Heart rate, SpO2"
    }
  },
  {
    name: 'Samsung Galaxy Fit3',
    category: 'watches',
    price: 'R2,499',
    image: 'Images/cc5d51a8e94ffea5ccaf19d42eef3a55.jpg',
    specs: {
      Display: "1.6-inch AMOLED",
      BatteryLife: "13 days",
      WaterResistance: "5ATM",
      HealthFeatures: "Heart rate, sleep tracking"
    }
  },
  
];


const productGrid = document.querySelector(".product-grid");

// for (const [name, data] of Object.entries(gadgets)) {
//   const card = document.createElement("div");
//   card.className = `product-card ${data.category}`;

//   card.innerHTML = `
//     <img src="${data.image}" alt="${name}">
//     <h3>${name}</h3>
//     <ul>
//       <li><strong>CPU:</strong> ${data.specs.CPU}</li>
//       <li><strong>RAM:</strong> ${data.specs.RAM}</li>
//       <li><strong>Storage:</strong> ${data.specs.Storage}</li>
//       <li><strong>Display:</strong> ${data.specs.Display}</li>
//       <li><strong>Price:</strong> ${data.specs.Price}</li>
//     </ul>
//     <button>Add to Cart</button>
//     <button onclick="bookmark('${name}')">Bookmark</button>
//     <button onclick="selectForCompare('${name}')">Compare</button>
//   `;

//   productGrid.appendChild(card);
// }

// Search filter
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();

  const cards = document.querySelectorAll('.product-card');
  let matchFound = false;

  cards.forEach(card => {
    const titleElement = card.querySelector('h3');
    if (!titleElement) return;

    const title = titleElement.textContent.toLowerCase();
    const match = title.includes(query);

    card.style.display = match ? 'block' : 'none';
    if (match) matchFound = true;
  });

  if (!matchFound) {
    console.log("No matching gadgets found.");
    // Optionally display a message to the user
  }
});

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    
    // Update active button styling
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    document.querySelectorAll('.product-card').forEach(card => {
      const category = card.dataset.category.toLowerCase();
      if (filter === 'all' || category === filter.toLowerCase()) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});




// Attach event listeners to all product cards dynamically
document.querySelectorAll('.product-card').forEach(card => {
  const name = card.querySelector('h3').textContent;
  const price = card.querySelector('p').textContent;
  const image = card.querySelector('img').src;

  // Add to Cart
  const addToCartBtn = card.querySelector('.add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      cartItems.push({ name, price });
      updateCart();
    });
  }

  // Bookmark
  const bookmarkBtn = card.querySelector('.bookmark-btn');
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', (e) => {
      e.target.classList.toggle('bookmarked');
      bookmark(name);
    });
  }
  // Compare
const compareBtn = card.querySelector('.compare-btn');
if (compareBtn) {
  compareBtn.addEventListener('click', (e) => {
    compare(name);

    const isSelected = compareQueue.includes(name);
    e.target.classList.toggle('selected', isSelected);
    e.target.textContent = isSelected ? "Remove Compare" : "Compare";
  });
}
  // Print
  const printBtn = card.querySelector('.print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      printProduct(card);
    });
  }

  // View detailed specs when clicking the product title
  const titleElement = card.querySelector('h3');
  if (titleElement) {
    titleElement.style.cursor = 'pointer';
    titleElement.addEventListener('click', () => {
      showProductDetails(name);
    });
  }
});

// Update Cart UI
function updateCart() {
  cartBox.style.display = 'block';
  cartBox.innerHTML = '<h3>Your Cart</h3>' + cartItems.map(item => `<p>${item.name} - ${item.price}</p>`).join('') + '<button onclick="checkout()">Checkout</button>';
  cartCount.textContent = cartItems.length;
}

window.checkout = function() {
  if (cartItems.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const confirmation = confirm("Are you sure you want to complete the checkout?");
  if (!confirmation) return;

  alert('Checkout complete. Thank you for your purchase!');
  
  // Clear the cart array
  cartItems.length = 0;

  // Hide the cart box
  cartBox.style.display = 'none';

  // Reset cart UI and counter
  cartBox.innerHTML = '<h3>Your Cart</h3><p>Your cart is empty.</p>';
  cartCount.textContent = '0';
}


// Bookmark functions
function bookmark(name) {
  const index = favorites.indexOf(name);

  if (index === -1) {
    favorites.push(name);
  } else {
    favorites.splice(index, 1); // Remove if already bookmarked
  }

  localStorage.setItem('bookmarkedItems', JSON.stringify(favorites));
  updateFavoritesUI();
}

function updateFavoritesUI() {
  const favoritesList = document.getElementById("favorites-list");
  favoritesList.innerHTML = "";

  const favoriteGadgets = gadgets.filter(g => favorites.includes(g.name));

  favoriteGadgets.forEach(gadget => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${gadget.image}" alt="${gadget.name}">
      <h3>${gadget.name}</h3>
      <p>${gadget.price}</p>
    `;
    favoritesList.appendChild(card);
  });

  updateComparisonTable(favoriteGadgets);
}

// Detailed product specs display
function showProductDetails(name) {
  const container = document.getElementById('product-details');
  if (!container) {
    alert("Product details container missing in HTML!");
    return;
  }

  const gadget = gadgets[name];
  if (!gadget) {
    container.innerHTML = `<p>Details not available for "${name}".</p>`;
    return;
  }

  const specsHtml = Object.entries(gadget.specs).map(([key, val]) => `<tr><td>${key}</td><td>${val}</td></tr>`).join('');
  
  container.innerHTML = `
    <h2>${name} Details</h2>
    <img src="${gadget.image}" alt="${name}" style="max-width: 300px; border-radius: 8px; margin-bottom: 1rem;">
    <table border="1" style="width: 100%; max-width: 400px; margin-bottom: 1rem;">
      <tbody>${specsHtml}</tbody>
    </table>
    <button onclick="closeDetails()">Close</button>
  `;
  container.style.display = 'block';
}

function closeDetails() {
  const container = document.getElementById('product-details');
  container.style.display = 'none';
  container.innerHTML = '';
}

const cartIcon = document.querySelector('.bx-cart'); // or more specific selector if needed

cartIcon.addEventListener('click', () => {
  if (cartBox.style.display === 'block') {
    cartBox.style.display = 'none';
  } else {
    cartBox.style.display = 'block';
  }
});

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // your search code here
});

function updateComparisonTable(gadgetList) {
  const table = document.getElementById("comparison-table");
  table.innerHTML = "";

  if (gadgetList.length === 0) {
    table.innerHTML = "<tr><td>No gadgets to compare.</td></tr>";
    return;
  }

  // Build spec keys
  const allSpecs = new Set();
  gadgetList.forEach(g => Object.keys(g.specs).forEach(k => allSpecs.add(k)));

  // Table header
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `<th>Specs</th>` + gadgetList.map(g => `<th>${g.name}</th>`).join("");
  table.appendChild(headerRow);

  // Each spec row
  allSpecs.forEach(specKey => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${specKey}</td>` + gadgetList.map(g => `<td>${g.specs[specKey] || "—"}</td>`).join("");
    table.appendChild(row);
  });

  // Price row
  const priceRow = document.createElement("tr");
  priceRow.innerHTML = `<td>Price</td>` + gadgetList.map(g => `<td>${g.price}</td>`).join("");
  table.appendChild(priceRow);
}

});

function compare(name) {
  const index = compareQueue.indexOf(name);

  if (index === -1) {
    if (compareQueue.length < 2) {
      compareQueue.push(name);
    } else {
      alert("You can only compare 2 products at a time.");
      return;
    }
  } else {
    compareQueue.splice(index, 1); // Remove if already selected
  }

  const selected = gadgets.filter(g => compareQueue.includes(g.name));
  updateComparisonTable(selected);
}

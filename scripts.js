


  // Gadgets specs object
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
  const productGrid = document.getElementById('product-grid');
  const detailSection = document.querySelector("#product-details");
  
  function renderProducts(products) {
    productGrid.innerHTML = '';
    products.forEach((product, index) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button class="toggle-specs-btn">More Info</button>
        <button onclick="printProduct(${index})">Print</button>
        <div class="specs" style="display:none;">
          <table>
            ${Object.entries(product.specs).map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
          </table>
        </div>
      `;
  
      const toggleBtn = card.querySelector('.toggle-specs-btn');
      const specsDiv = card.querySelector('.specs');
      toggleBtn.addEventListener('click', () => {
        specsDiv.style.display = specsDiv.style.display === 'none' ? 'block' : 'none';
      });
  
      productGrid.appendChild(card);
    });
  }

 function viewDetails(index) {
  const product = gadgets[index];
  const specs = Object.entries(product.specs)
    .map(([key, val]) => `<tr><td><strong>${key}</strong></td><td>${val}</td></tr>`)
    .join('');
  
  detailSection.innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.image}" style="max-width:300px;" alt="${product.name}" />
    <p><strong>Price:</strong> ${product.price}</p>
    <table border="1" cellpadding="5" cellspacing="0">${specs}</table>
    <button onclick="detailSection.innerHTML = ''">Close</button>
  `;
}
 window.viewDetails = viewDetails;

 // Handle Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const filter = this.dataset.filter;
    if (filter === 'all') {
      renderProducts(gadgets);
    } else {
      const filtered = gadgets.filter(g => g.category.toLowerCase() === filter);
      renderProducts(filtered);
    }
  });
});

  function printProduct(index) {
    const product = gadgets[index];
    const specs = Object.entries(product.specs)
      .map(([key, val]) => `<tr><td>${key}</td><td>${val}</td></tr>`)
      .join('');
    const html = `
      <h1>${product.name}</h1>
      <img src="${product.image}" style="max-width:300px;" />
      <p><strong>Price:</strong> ${product.price}</p>
      <table>${specs}</table>
    `;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.title = product.name;
    printWindow.document.body.innerHTML = html;
    printWindow.print();
  }
  
  function addToCart(productName) {
    alert(`${productName} added to cart!`);
  }
  
  renderProducts(gadgets);

// 1. Simular datos de la tienda (puedes completar con productos reales de HSN)
const products = [
    {
      name: 'EvoWhey Protein',
      price: 10.62,
      seller: 'HSN',
      image: 'https://www.hsnstore.com/media/catalog/product/e/v/evowhey-gral-new-front-hsn_1.webp',
      category: 'Proteínas'
    },
    {
        name: 'Proteína de cañamo',
        price: 9.22,
        seller: 'HSN',
        image: 'https://www.hsnstore.com/media/catalog/product/h/e/hemp-protein-powder-hsn_1.jpg',
        category: 'Proteínas'
      },
      {
        name: 'Proteína de Soja Aislada 2.0',
        price: 7.48,
        seller: 'HSN',
        image: 'https://www.hsnstore.com/media/catalog/product/s/o/soy-protein-isolate-gral-front-hsn_1.webp',
        category: 'Proteínas'
      },
      {
        name: 'Proteína de arroz integral',
        price: 23.14,
        seller: 'HSN',
        image: 'https://www.hsnstore.com/media/catalog/product/r/i/rice-protein-powder-hsn_1.jpg',
        category: 'Proteínas'
      },
      {
        name: 'Proteina de Guisantes',
        price: 7.48,
        seller: 'HSN',
        image: 'https://www.hsnstore.com/media/catalog/product/p/e/pea-protein-isolate-powder-hsn_1.jpg',
        category: 'Proteínas'
      },
   
    {
      name: 'Beta-Alanina',
      price: 14.47,
      seller: 'HSN',
      image: 'https://www.hsnstore.com/media/catalog/product/1/0/100-pure-beta-alanine-front-gral-hsn_1.webp',
      category: 'Aminoácidos'
    },
    {
        name: "Aminoácidos esenciales EAA'S",
        price: 7.48,
        seller: 'HSN',
        image: 'https://www.hsnstore.com/media/catalog/product/e/a/eaas-powder-hsn_1.jpg',
        category: 'Aminoácidos'
      },
      {
        name: 'EvoHMB',
        price: 4.00,
        seller: 'HSN',
        image: 'https://www.hsnstore.com/media/catalog/product/e/v/evohmb-gral-coated-tabs-front-hsn_1.webp',
        category: 'Aminoácidos'
      },
      {
        name: 'L-Taurina',
        price: 4.00,
        seller: 'HSN',
        image: 'https://www.hsnstore.com/media/catalog/product/l/-/l-taurine-powder-hsn_1.jpg',
        category: 'Aminoácidos'
      },
      {
        name: 'Glicina',
        price: 4.50,
        seller: 'HSN',
        image: 'https://www.hsnstore.com/media/catalog/product/1/0/100-pure-glycine-powder-gral-front-hsn_1.webp',
        category: 'Aminoácidos'
      },
    {
      name: 'GABA en polvo',
      price: 6.90,
      seller: 'RAW SERIES',
      image: 'https://www.hsnstore.com/media/catalog/product/g/a/gaba-powder-hsn_1.webp',
      category: 'Sueño'
    },
    {
      name: 'GABA 600 mg',
      price: 8.65,
      seller: 'FLAVOUR SERIES',
      image: 'https://www.hsnstore.com/media/catalog/product/1/0/100-puro-gaba-front-gral-veg-caps-hsn_1.webp',
      category: 'Sueño'
    },
    {
      name: 'L-Triptófano en polvo',
      price: 15.60,
      seller: 'RAW SERIES',
      image: 'https://www.hsnstore.com/media/catalog/product/l/-/l-tryptophan-powder-hsn1_1.jpg',
      category: 'Sueño'
    },
    {
      name: 'L-Triptófano 500 mg + Vitaminas B6 & B3',
      price: 3.42,
      seller: 'ESSENTIAL SERIES',
      image: 'https://www.hsnstore.com/media/catalog/product/l/-/l-tryptophan-veg-caps-hsn_1.jpg',
      category: 'Sueño'
    },
    {
      name: 'Melatonina',
      price: 5.74,
      seller: 'ESSENTIAL SERIES',
      image: 'https://www.hsnstore.com/media/catalog/product/m/e/melatonin-1-9mg-front-gral-hsn_1.webp',
      category: 'Sueño'
    },
    {
      name: 'Melatonina Complex',
      price: 18.90,
      seller: 'ESSENTIAL SERIES',
      image: 'https://www.hsnstore.com/media/catalog/product/m/e/melatonin-complex-gral-gummies-front-hsn_1.webp',
      category: 'Sueño'
    },
    {
        name: 'EvoRecovery',
        price: 43.44,
        seller: 'RAW SERIES',
        image: 'https://www.hsnstore.com/media/catalog/product/e/v/evorecovery-powder-hsn_1.jpg',
        category: 'Recuperación'
      },
      {
        name: 'EvoZMA',
        price: 4.00,
        seller: 'SPORT SERIES',
        image: 'https://www.hsnstore.com/media/catalog/product/e/v/evozma-gral-vcaps-front-hsn_1.webp',
        category: 'Recuperación'
      },
      {
        name: 'Tart Cherry 500 mg (CherryPURE®)',
        price: 8.06,
        seller: 'ESSENTIAL SERIES',
        image: 'https://www.hsnstore.com/media/catalog/product/t/a/tart-cherry-extract-cherrypure-front-gral-noqr-hsn_1.webp',
        category: 'Recuperación'
      },
      {
        name: 'EvoLytes (sales de electrolitos)',
        price: 9.22,
        seller: 'SPORT SERIES',
        image: 'https://www.hsnstore.com/media/catalog/product/e/v/evolytes-veg-caps-gral-front-hsn_1.webp',
        category: 'Recuperación'
      },
      {
        name: 'EvoBCAA\'s Complex en polvo',
        price: 3.80,
        seller: 'SPORT SERIES',
        image: 'https://www.hsnstore.com/media/catalog/product/e/v/evobcaas-complex-powder-hsn_1.jpg',
        category: 'Recuperación'
      }
  
  ];
  
  // 2. Detectar DOM listo
  document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts(products);
  });
  
  // 3. Renderizar categorías únicas
  function renderCategories() {
    const ul = document.getElementById('category-list');
    const categories = [...new Set(products.map(p => p.category))];
    categories.forEach(cat => {
      const li = document.createElement('li');
      li.textContent = cat;
      li.addEventListener('click', () => {
        // Filtro dinámico
        const filtered = products.filter(p => p.category === cat);
        renderProducts(filtered);
      });
      ul.appendChild(li);
    });
  
    // Opción “Todas”
    const allLi = document.createElement('li');
    allLi.textContent = 'Todas';
    allLi.addEventListener('click', () => renderProducts(products));
    ul.insertBefore(allLi, ul.firstChild);
  }
  
  // 4. Renderizar productos
  function renderProducts(list) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // limpiar previos
    const template = document.getElementById('product-template').content;
  
    list.forEach(p => {
      const clone = document.importNode(template, true);
      clone.querySelector('.product-image').src = p.image;
      clone.querySelector('.product-image').alt = p.name;
      clone.querySelector('.product-name').textContent = p.name;
      clone.querySelector('.product-seller').textContent = p.seller;
      clone.querySelector('.product-price').textContent = `${p.price.toFixed(2)}€`;
      container.appendChild(clone);
    });
  }
  
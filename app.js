const planes = [
    {
      nombre: "Plan inicio",
      imagen: "assets/IMG_3066.JPG",
      enlace: "#enlaceplaninicio",
      alt: "foto de Ricardo",
      categoria: "inicio"
    },
    {
      nombre: "Plan intermedio",
      imagen: "assets/3C74544B-D5FD-49C2-AA1A-DA8CBB0A9FAE.jpg",
      enlace: "#enlaceplanintermedio",
      alt: "foto con kettlebell",
      categoria: "intermedio"
    },
    {
      nombre: "Plan avanzado",
      imagen: "assets/IMG_0159.JPG",
      enlace: "#enlaceplanavanzado",
      alt: "foto con barra olímpica",
      categoria: "training"
    },
    {
      nombre: "Plan Hybrid Básico",
      imagen: "assets/Hybridbásico.webp",
      enlace: "#enlaceplanhybridbasico",
      alt: "plan híbrido básico",
      categoria: "hybrid"
    },
    {
      nombre: "Plan Hybrid Avanzado",
      imagen: "assets/Hyrbid avanzado.webp",
      enlace: "#enlaceplanhybridavanzado",
      alt: "plan híbrido avanzado",
      categoria: "hybrid"
    },
    {
      nombre: "Plan Hybrid Nutrition",
      imagen: "assets/Hybrid nutrition.webp",
      enlace: "#enlaceplanHybridnutrition",
      alt: "plan nutrición",
      categoria: "nutrition"
    },
    {
      nombre: "Plan Hybrid Nutrition Keto",
      imagen: "assets/Plan keto.webp",
      enlace: "#enlaceplanhybridnutritionketo",
      alt: "nutrición keto",
      categoria: "nutrition"
    },
    {
      nombre: "Plan Hybrid Nutrition Veggie",
      imagen: "assets/Nutricion veggie.webp",
      enlace: "#enlaceplanhybridnutritionveggie",
      alt: "nutrición vegana",
      categoria: "nutrition"
    },
    {
      nombre: "Plan Training Home",
      imagen: "assets/training home.webp",
      enlace: "#enlaceplantraininghome",
      alt: "entrenamiento en casa",
      categoria: "training"
    },
    {
      nombre: "Plan Training Gym",
      imagen: "assets/Training gym.webp",
      enlace: "#enlaceplantrainingGym",
      alt: "entrenamiento en gimnasio",
      categoria: "training"
    }
  ];
  
  const lista = document.getElementById("lista-planes");
  
  function renderPlanes(filtrados) {
    lista.innerHTML = "";
    for (const plan of filtrados) {
      const li = document.createElement("li");
      li.innerHTML = `
        <article>
          <img src="${plan.imagen}" alt="${plan.alt}">
          <h3>${plan.nombre}</h3>
          <a href="${plan.enlace}" target="_blank" rel="noopener">Ver más</a>
        </article>
      `;
      lista.appendChild(li);
    }
  }
  
  // Mostrar todos al cargar
  renderPlanes(planes);
  
  // Filtro por botones
  const botones = document.querySelectorAll("#filtros button");
  
  for (const btn of botones) {
    btn.addEventListener("click", () => {
      const categoria = btn.getAttribute("data-categoria");
  
      if (categoria === "todos") {
        renderPlanes(planes);
      } else {
        const filtrados = planes.filter(plan => plan.categoria === categoria);
        renderPlanes(filtrados);
      }
    });
  }
  
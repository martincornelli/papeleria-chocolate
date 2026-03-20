/* ============================================
   Papelería Chocolate — script.js
   ============================================ */

const products = [
  {
    name: "Impresión color A4",
    cat: "impresion",
    price: "$12",
    emoji: "🖨️",
    tag: "Impresión",
    tagColor: "#4FC3F7",
    tagText: "#0a4f6e",
    desc: "Por hoja, doble faz disponible"
  },
  {
    name: "Encuadernación térmica",
    cat: "impresion",
    price: "$180",
    emoji: "📗",
    tag: "Impresión",
    tagColor: "#4FC3F7",
    tagText: "#0a4f6e",
    desc: "Incluye tapa transparente"
  },
  {
    name: "Plano A0 color",
    cat: "impresion",
    price: "$350",
    emoji: "🗺️",
    tag: "Impresión",
    tagColor: "#4FC3F7",
    tagText: "#0a4f6e",
    desc: "Gran formato, alta resolución"
  },
  {
    name: "Etiquetas x50",
    cat: "personalizados",
    price: "$390",
    emoji: "🏷️",
    tag: "Personalizado",
    tagColor: "#FF6B9D",
    tagText: "#6e0a2e",
    desc: "5x2cm, vinilo, troqueladas"
  },
  {
    name: "Lámina comestible",
    cat: "personalizados",
    price: "Consultar",
    emoji: "🎂",
    tag: "Personalizado",
    tagColor: "#FF6B9D",
    tagText: "#6e0a2e",
    desc: "Para tortas y cupcakes"
  },
  {
    name: "Vaso egresados",
    cat: "personalizados",
    price: "$110 c/u",
    emoji: "🥤",
    tag: "Personalizado",
    tagColor: "#FF6B9D",
    tagText: "#6e0a2e",
    desc: "400ml, mínimo 12 unidades"
  },
  {
    name: "Cuaderno universitario",
    cat: "papeleria",
    price: "$290",
    emoji: "📓",
    tag: "Papelería",
    tagColor: "#69D54A",
    tagText: "#1e4d0a",
    desc: "100 hojas, tapa dura"
  },
  {
    name: "Set de marcadores",
    cat: "papeleria",
    price: "$350",
    emoji: "🖊️",
    tag: "Papelería",
    tagColor: "#69D54A",
    tagText: "#1e4d0a",
    desc: "12 colores, punta fina"
  }
];

function renderProducts(filter) {
  const grid = document.getElementById("products-grid");
  const filtered = filter === "todos"
    ? products
    : products.filter(p => p.cat === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-img" style="background: ${p.tagColor}22;">${p.emoji}</div>
      <div class="product-info">
        <span class="product-tag" style="background:${p.tagColor}33; color:${p.tagText};">${p.tag}</span>
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
        <div class="product-footer">
          <span class="product-price">${p.price}</span>
          <button class="add-btn" onclick="consultarProducto('${p.name}')">Consultar</button>
        </div>
      </div>
    </div>
  `).join("");
}

function filterCat(btn, cat) {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderProducts(cat);
}

function consultarProducto(nombre) {
  const msg = encodeURIComponent(`Hola! Quiero consultar por: ${nombre}`);
  window.open(`https://wa.me/59899214898?text=${msg}`, "_blank");
}

// Init
renderProducts("todos");

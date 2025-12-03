/* --- BASE DE DATOS DE GUSTOS (ACTUALIZADA CON TUS IMÁGENES) --- */
const gustos = [
    // --- FRUTALES (AL AGUA) ---
    { cat: 'frutal', nombre: 'Naranja', desc: 'Naranja al agua.', img: 'naranja.webp' }, 
    { cat: 'frutal', nombre: 'Durazno', desc: 'Dulce y refrescante sabor a durazno.', img: 'durazno.webp' }, 
    { cat: 'frutal', nombre: 'Limón Tropical', desc: 'Limón con salsa de frutas.', img: 'limontropical.webp' },
    { cat: 'frutal', nombre: 'Frutilla', desc: 'Clásico al agua con frutillas seleccionadas.', img: 'frutillaagua.webp' }, 
    { cat: 'frutal', nombre: 'Ananá', desc: 'La frescura tropical del ananá.', img: 'anana.webp' }, 
    { cat: 'frutal', nombre: 'Limón', desc: 'Ácido y refrescante, ideal para limpiar el paladar.', img: 'limonagua.webp' }, 
    { cat: 'frutal', nombre: 'Maracuyá', desc: 'Intenso sabor a fruta.', img: 'maracuya.webp' }, 
    { cat: 'frutal', nombre: 'Frutos del Bosque', desc: 'Mix de frutos rojos  al agua.', img: 'frutosdelbosque.webp' }, 

    // --- CREMAS ---
    { cat: 'crema', nombre: 'Banana', desc: 'Cremoso helado de fruta natural.', img: 'banana.webp' },
    { cat: 'crema', nombre: 'Banana Split', desc: 'Banana con dulce de leche y granizado de chocolate.', img: 'bananasplit.webp' },
    { cat: 'crema', nombre: 'Choc. Black', desc: 'Chocolate amargo, intenso y artesanal.', img: 'chocblack.webp' }, 
    { cat: 'crema', nombre: 'Choc. San Marco', desc: 'Nuestra especialidad, semiamargo.', img: 'chocolate.webp' }, 
    { cat: 'crema', nombre: 'Chocolate Blanco', desc: 'Suave y dulce, chocolate blanco real.', img: 'chocolateblanco.webp' },
    { cat: 'crema', nombre: 'Chocolate con Almendras', desc: 'Chocolate con almendras caramelizadas y bañadas en chocolate.', img: 'chocalmendras.webp' },
    { cat: 'crema', nombre: 'Choc. Suizo', desc: 'Chocolate con bombones y dulce de leche.', img: 'chocsuizo.webp' },
    { cat: 'crema', nombre: 'Chocolate Marroc', desc: 'Chocolate y bocaditos Marroc.', img: 'marroc.webp' }, 
    { cat: 'crema', nombre: 'Choc. Kinder', desc: 'Blanco granizado con trozos de Kinder.', img: 'chockinder.webp' }, 
    { cat: 'crema', nombre: 'Cerezas al Cherry', desc: 'Crema con cerezas con cerezas al Cherry.', img: 'cerezas.webp' }, 
    { cat: 'crema', nombre: 'Chantilly', desc: 'La crema clásica batida.', img: 'chantilly.webp' }, 
    { cat: 'crema', nombre: 'Chantilly a la Reina', desc: 'Chantilly con frutillas.', img: 'reina.webp' }, 
    { cat: 'crema', nombre: 'Crema de Vainilla', desc: 'Crema exquisita sabor vainilla.', img: 'vainilla.webp' },
    { cat: 'crema', nombre: 'Crema San Marco', desc: 'Vainilla, dulce de leche y merenguitos.', img: 'cremasanmarco.webp' }, 
    { cat: 'crema', nombre: 'Crema Rusa', desc: 'Sabor a nuez con trocitos crocantes.', img: 'cremarusa.webp' },
    { cat: 'crema', nombre: 'Crema Oreo', desc: 'Americana sembrada con galletitas Oreo.', img: 'cremaoreo.webp' }, 
    { cat: 'crema', nombre: 'Crema del Cielo', desc: 'El favorito de los chicos, suave vainilla.', img: 'cremadelcielo.webp' }, 
    { cat: 'crema', nombre: 'Dulce de Leche', desc: 'El clásico argentino, textura perfecta.', img: 'dulcedeleche.webp' }, 
    { cat: 'crema', nombre: 'DDL Granizado', desc: 'Dulce de leche con lluvia de chocolate.', img: 'DDLgranizado.webp' }, 
    { cat: 'crema', nombre: 'Dulce con Nuez', desc: 'Dulce de leche y nueces seleccionadas.', img: 'dulceconnuez.webp' }, 
    { cat: 'crema', nombre: 'Super DDL', desc: 'Dulce de leche con veteado de dulce de leche natural.', img: 'superDDL.webp' },
    { cat: 'crema', nombre: 'DDL Cabsha', desc: 'Sabor al famoso bocadito de chocolate.', img: 'dulcecabsha.webp' },  
    { cat: 'crema', nombre: 'Frutilla a la Crema', desc: 'Crema de frutillas.', img: 'frutillacrema.webp' }, 
    { cat: 'crema', nombre: 'Flan', desc: 'Sabor casero con dulce de leche.', img: 'flan.webp' }, 
    { cat: 'crema', nombre: 'Granizado', desc: 'Americana con lluvia de chocolate.', img: 'granizado.webp' }, 
    { cat: 'crema', nombre: 'Kinotos al Whisky', desc: 'Kinotos en almíbar macerados en whisky.', img: 'quinotos.webp' }, 
    { cat: 'crema', nombre: 'Menta Granizada', desc: 'Refrescante menta y chocolate.', img: 'mentagranizada.webp' }, 
    { cat: 'crema', nombre: 'Mousse de Limón', desc: 'Suave, cremoso y cítrico.', img: 'moussedelimon.webp' }, 
    { cat: 'crema', nombre: 'Sambayón', desc: 'crema a base de yemas y vino marsala.', img: 'sambayon.webp' },
    { cat: 'crema', nombre: 'Pistacho', desc: 'crema de pistacho.', img: 'pistacho.webp' }, 
    { cat: 'crema', nombre: 'Tramontana', desc: 'Americana, dulce de leche y microgalletitas.', img: 'tramontana.webp' }, 
    { cat: 'crema', nombre: 'Tiramisú', desc: 'Postre italiano con café y cacao.', img: 'tiramisu.webp' }, 
    { cat: 'crema', nombre: 'Mantecol', desc: 'Sabor a pasta de maní con trozos del autentico mantecol.', img: 'mantecol.webp' }, 
    { cat: 'crema', nombre: 'Mascarpone', desc: 'Queso mascarpone con frutos rojos.', img: 'mascarpone.webp' }, 
    { cat: 'crema', nombre: 'Alfajor Havanna', desc: 'Crema de alfajor con chocolate y DDL.', img: 'alfajorhavanna.webp' },
    { cat: 'crema', nombre: 'Bananita Dolca', desc: 'Sabor a la golosina de banana y chocolate.', img: 'bananitadolca.webp' }, 
    
];

/* --- LÓGICA DE FUNCIONAMIENTO (NO HACE FALTA TOCAR NADA AQUÍ) --- */

document.addEventListener('DOMContentLoaded', () => {
    renderMenu(gustos);
});

const modal = document.getElementById('modal-menu');

function abrirMenu() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarMenu() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) cerrarMenu();
});

function renderMenu(lista) {
    const grid = document.getElementById('modal-grid-sabores');
    grid.innerHTML = '';

    lista.forEach(g => {
        const item = document.createElement('div');
        item.className = 'sabor-item';
        
        // Aquí se construye la ruta final: img/gustos/nombre_de_tu_archivo.webp
        const imgPath = `img/gustos/${g.img}`;
        
        item.innerHTML = `
            <div class="sabor-img-box">
                <img src="${imgPath}" onerror="this.src='img/logo-sinfondo.png'" alt="${g.nombre}">
                <div class="mini-logo"><img src="img/logo-sinfondo.png"></div>
            </div>
            <div class="sabor-info">
                <h3>${g.nombre}</h3>
                <p>${g.desc}</p>
            </div>
        `;
        grid.appendChild(item);
    });
}

function filtrarMenu(categoria) {
    const botones = document.querySelectorAll('.tab-btn');
    botones.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (categoria === 'todos') {
        renderMenu(gustos);
    } else {
        const filtrados = gustos.filter(g => g.cat === categoria);
        renderMenu(filtrados);
    }
}

/* =========================================
   SISTEMA DE HORARIOS
   ========================================= */
function checkStatus() {
    const statusBadge = document.getElementById('status-badge');
    const statusText = document.getElementById('status-text');
    const avisoBox = document.getElementById('aviso-manual');

    if (!statusBadge || !statusText) return;

    // const avisoManual = "Cerrado porque Nico no quiere trabajar";
    if (typeof avisoManual !== 'undefined' && avisoManual !== "") {
        statusBadge.style.display = 'none';
        avisoBox.style.display = 'inline-block';
        avisoBox.innerHTML = `<i class="fas fa-bullhorn"></i> ${avisoManual}`;
        return;
    }

    const ahora = new Date();
    const dia = ahora.getDay();
    const hora = ahora.getHours();

    let estaAbierto = false;
    let abre = 0;
    let cierra = 0;
    let esDiaLaborable = true;

    if (dia === 1) { 
        esDiaLaborable = false;
    } else if (dia === 6) { 
        abre = 13; cierra = 24; 
    } else if (dia === 0) {
        abre = 13; cierra = 23;
    } else {
        abre = 14; cierra = 23;
    }

    if (esDiaLaborable && hora >= abre && hora < cierra) {
        estaAbierto = true;
    }

    statusBadge.classList.remove('loading');
    
    if (estaAbierto) {
        statusBadge.classList.add('abierto');
        statusBadge.classList.remove('cerrado');
        statusText.innerText = "ABIERTO AHORA";
    } else {
        statusBadge.classList.add('cerrado');
        statusBadge.classList.remove('abierto');
        statusText.innerText = "CERRADO AHORA";
        if (dia === 1) statusText.innerText = "CERRADO (Lunes)";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkStatus();
});

/* =========================================
   MENÚ HAMBURGUESA
   ========================================= */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

const navLinksItems = document.querySelectorAll('.nav-links a');
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

/* =========================================
   EFECTO HEADER INTELIGENTE
   ========================================= */
function ajustarHeaderYHero() {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');
    if (!header || !hero) return;

    const esMovil = window.innerWidth <= 768;

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        hero.style.marginTop = '120px';
    } else {
        header.classList.remove('scrolled');
        if (esMovil) {
            hero.style.marginTop = '150px'; 
        } else {
            hero.style.marginTop = '220px';
        }
    }
}

window.addEventListener('scroll', ajustarHeaderYHero);
window.addEventListener('load', ajustarHeaderYHero);
window.addEventListener('resize', ajustarHeaderYHero);
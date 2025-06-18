// Navegación móvil
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
        // Cierra el menú si el enlace lleva a una sección de la misma página
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});
// Slider de imágenes
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= totalSlides) currentSlide = 0;
    else if (currentSlide < 0) currentSlide = totalSlides - 1;
    showSlide(currentSlide);
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => changeSlide(1), 5000);
}

let sliderInterval = setInterval(() => changeSlide(1), 5000);

// Modal de emergencia
const emergencyBtn = document.getElementById('emergencyBtn');
const emergencyModal = document.getElementById('emergencyModal');

function blockScroll() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}
function allowScroll() {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
}
function showEmergencyModal() {
    emergencyModal.style.display = 'block';
    blockScroll();
}
function closeEmergencyModal() {
    emergencyModal.style.display = 'none';
    allowScroll();
}

emergencyBtn.addEventListener('click', showEmergencyModal);
emergencyModal.addEventListener('click', (e) => {
    if (e.target === emergencyModal) closeEmergencyModal();
});

// Carrito de compras
let cart = [];
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartSummary = document.getElementById('cartSummary');
const cartTotal = document.getElementById('cartTotal');

function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) existingItem.quantity += 1;
    else cart.push({ name, price: parseFloat(price), image, quantity: 1 });
    updateCartUI();
    showCartNotification(name);
}

function updateCartUI() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartSummary.style.display = 'none';
        cartItems.innerHTML = '';
    } else {
        cartEmpty.style.display = 'none';
        cartSummary.style.display = 'block';
        renderCartItems();
        updateCartTotal();
    }
}

function renderCartItems() {
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${index}, -1)" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                <span class="quantity-number">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${index})">×</button>
        `;
        cartItems.appendChild(cartItem);
    });
}

window.updateQuantity = function(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
    updateCartUI();
};

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartUI();
};

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

function showCartModal() {
    cartModal.style.display = 'block';
    blockScroll();
}
function closeCartModal() {
    cartModal.style.display = 'none';
    allowScroll();
}

cartIcon.addEventListener('click', showCartModal);
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) closeCartModal();
});

function proceedToCheckout() {
    alert('Redirigiendo al proceso de pago...\n\nTotal: $' + cartTotal.textContent);
}

// Notificación de carrito
function showCartNotification(productName) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--gentle-green);
        color: var(--dark-text);
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 1001;
        font-weight: 600;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
    `;
    notification.textContent = `"${productName}" agregado al carrito`;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (document.body.contains(notification)) document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Botones "Agregar al carrito"
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const image = button.getAttribute('data-image');
            addToCart(name, price, image);
        });
    });
    updateCartUI();
});

// Login modal
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');

function showLoginModal() {
    loginModal.style.display = 'block';
    blockScroll();
}
function closeLoginModal() {
    loginModal.style.display = 'none';
    allowScroll();
}
loginBtn.addEventListener('click', showLoginModal);
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) closeLoginModal();
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    if (!email || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    const submitButton = loginForm.querySelector('.login-submit');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Iniciando sesión...';
    submitButton.disabled = true;
    setTimeout(() => {
        alert('¡Bienvenido! Has iniciado sesión correctamente.');
        loginBtn.textContent = 'Mi Cuenta';
        loginBtn.style.background = 'var(--gentle-green)';
        loginBtn.style.color = 'var(--dark-text)';
        closeLoginModal();
        loginForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

function showRegisterForm() {
    alert('Funcionalidad de registro en desarrollo...');
}

// Scroll suave para enlaces
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    setTimeout(() => {
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Animaciones al hacer scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('loading');
    });
}, observerOptions);

document.querySelectorAll('.about-card, .resource-card, .product-card').forEach(el => {
    observer.observe(el);
});

// Efecto de scroll en header
let lastScrollTop = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Animaciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.hero-content, .floating-card').forEach(el => {
            el.classList.add('loading');
        });
    }, 100);
    updateCartUI();
});

// Botón de emergencia animación
emergencyBtn.addEventListener('mouseenter', () => {
    emergencyBtn.style.animation = 'none';
});
emergencyBtn.addEventListener('mouseleave', () => {
    emergencyBtn.style.animation = 'pulse 2s infinite';
});

// Accesibilidad con teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeEmergencyModal();
        closeCartModal();
        closeLoginModal();
    }
    if (e.key === 'Enter' && e.target === emergencyBtn) {
        showEmergencyModal();
    }
    if (e.key === 'ArrowLeft') changeSlide(-1);
    else if (e.key === 'ArrowRight') changeSlide(1);
});

// Lazy loading y observer solo para imágenes que NO sean el logo
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.transition = 'opacity 0.3s ease-in-out';
            // Si la imagen ya está cargada, muestra de inmediato
            if (img.complete) {
                img.style.opacity = '1';
            } else {
                img.onload = () => {
                    img.style.opacity = '1';
                };
            }
            observer.unobserve(img);
        }
    });
});

// Aplica observer y loading="lazy" solo a imágenes que NO sean el logo
document.querySelectorAll('img:not(.logo)').forEach(img => {
    img.setAttribute('loading', 'lazy');
    img.style.opacity = '0';
    imageObserver.observe(img);
});

// Donaciones
const donacionesForm = document.getElementById('donacionesForm');
if (donacionesForm) {
    donacionesForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('donacionGracias').style.display = 'block';
        donacionesForm.reset();
        setTimeout(() => {
            document.getElementById('donacionGracias').style.display = 'none';
        }, 4000);
    });
}
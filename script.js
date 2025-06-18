// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    showSlide(currentSlide);
}

// Auto-play slider
setInterval(() => {
    changeSlide(1);
}, 5000);

// Emergency Modal
const emergencyBtn = document.getElementById('emergencyBtn');
const emergencyModal = document.getElementById('emergencyModal');

function showEmergencyModal() {
    emergencyModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeEmergencyModal() {
    emergencyModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

emergencyBtn.addEventListener('click', showEmergencyModal);

// Close modal when clicking outside
emergencyModal.addEventListener('click', (e) => {
    if (e.target === emergencyModal) {
        closeEmergencyModal();
    }
});

// Shopping Cart Functionality
let cart = [];
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartSummary = document.getElementById('cartSummary');
const cartTotal = document.getElementById('cartTotal');

// Add to cart functionality
function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: parseFloat(price),
            image: image,
            quantity: 1
        });
    }
    
    updateCartUI();
    showCartNotification(name);
}

// Update cart UI
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

// Render cart items
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

// Update quantity
function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    updateCartUI();
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Update cart total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

// Show cart modal
function showCartModal() {
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close cart modal
function closeCartModal() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cart icon click
cartIcon.addEventListener('click', showCartModal);

// Close cart modal when clicking outside
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        closeCartModal();
    }
});

// Proceed to checkout
function proceedToCheckout() {
    alert('Redirigiendo al proceso de pago...\n\nTotal: $' + cartTotal.textContent);
    // Here you would typically redirect to a payment processor
}

// Show cart notification
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
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add event listeners for "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const image = button.getAttribute('data-image');
            addToCart(name, price, image);
        });
    });
});

// Login Modal Functionality
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');

// Show login modal
function showLoginModal() {
    loginModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close login modal
function closeLoginModal() {
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Login button click
loginBtn.addEventListener('click', showLoginModal);

// Close login modal when clicking outside
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        closeLoginModal();
    }
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Basic validation
    if (!email || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    
    // Simulate login process
    const submitButton = loginForm.querySelector('.login-submit');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Iniciando sesión...';
    submitButton.disabled = true;
    
    // Simulate API call
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

// Show register form (placeholder)
function showRegisterForm() {
    alert('Funcionalidad de registro en desarrollo...');
}

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add click handlers for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loading');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.about-card, .resource-card, .product-card').forEach(el => {
    observer.observe(el);
});

// Header scroll effect
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add loading class to elements that should animate on load
    setTimeout(() => {
        document.querySelectorAll('.hero-content, .floating-card').forEach(el => {
            el.classList.add('loading');
        });
    }, 100);
    
    // Initialize cart UI
    updateCartUI();
});

// Emergency button additional functionality
emergencyBtn.addEventListener('mouseenter', () => {
    emergencyBtn.style.animation = 'none';
});

emergencyBtn.addEventListener('mouseleave', () => {
    emergencyBtn.style.animation = 'pulse 2s infinite';
});

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    // ESC key for modals
    if (e.key === 'Escape') {
        closeEmergencyModal();
        closeCartModal();
        closeLoginModal();
    }
    
    // Enter key for emergency button
    if (e.key === 'Enter' && e.target === emergencyBtn) {
        showEmergencyModal();
    }
    
    // Arrow keys for slider navigation
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Performance optimization: Lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease-in-out';
            
            img.onload = () => {
                img.style.opacity = '1';
            };
            
            observer.unobserve(img);
        }
    });
});

// Observe all images for lazy loading
document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
});

// ...código existente...

// 1. Mejoras para el slider: reinicia el intervalo al cambiar manualmente
let sliderInterval = setInterval(() => {
    changeSlide(1);
}, 5000);

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= totalSlides) currentSlide = 0;
    else if (currentSlide < 0) currentSlide = totalSlides - 1;
    showSlide(currentSlide);

    // Reinicia el autoplay si el usuario navega manualmente
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// 2. Mejora: Evita doble scroll en modales en móviles
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
function showCartModal() {
    cartModal.style.display = 'block';
    blockScroll();
}
function closeCartModal() {
    cartModal.style.display = 'none';
    allowScroll();
}
function showLoginModal() {
    loginModal.style.display = 'block';
    blockScroll();
}
function closeLoginModal() {
    loginModal.style.display = 'none';
    allowScroll();
}

// 3. Mejora: Accesibilidad para modales (focus trap básico)
function trapFocus(modal) {
    const focusableEls = modal.querySelectorAll('button, [href], input, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableEls.length === 0) return;
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];
    modal.addEventListener('keydown', function(e) {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
            if (document.activeElement === firstEl) {
                lastEl.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastEl) {
                firstEl.focus();
                e.preventDefault();
            }
        }
    });
}
emergencyBtn.addEventListener('click', () => {
    showEmergencyModal();
    setTimeout(() => trapFocus(emergencyModal), 100);
});
cartIcon.addEventListener('click', () => {
    showCartModal();
    setTimeout(() => trapFocus(cartModal), 100);
});
loginBtn.addEventListener('click', () => {
    showLoginModal();
    setTimeout(() => trapFocus(loginModal), 100);
});

// 4. Mejora: Cerrar menú móvil al hacer scroll o redimensionar
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// 5. Mejora: Lazy loading real para imágenes (usa loading="lazy" si es posible)
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
});

// Donaciones - Manejo del formulario
const donacionesForm = document.getElementById('donacionesForm');
if (donacionesForm) {
    donacionesForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Puedes agregar aquí la lógica para enviar la donación a un backend o pasarela de pago real
        document.getElementById('donacionGracias').style.display = 'block';
        donacionesForm.reset();
        setTimeout(() => {
            document.getElementById('donacionGracias').style.display = 'none';
        }, 4000);
    });
}

// ...código existente...
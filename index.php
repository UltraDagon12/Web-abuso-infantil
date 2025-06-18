<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Protección Infantil - Prevención y Ayuda</title>
    <link rel="stylesheet" href="styles.css?v=<?php echo time(); ?>">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
  body, h1, h2, h3, h4, h5, h6, p, a, button, input, textarea {
    font-family: 'Poppins', sans-serif !important;
  }
</style>
</head>
<body>
    <!-- Emergency Button -->
    <div class="emergency-button" id="emergencyBtn">
        <span>🚨 EMERGENCIA</span>
    </div>

    <!-- Header -->
    <header class="header">
        <nav class="nav">
            <div class="nav-container">
                <div class="logo">
                    <a href="index.html">
                        <img src="images/Logo.png" alt="Logo" class="logo-img">
                    </a>
                </div>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#sobre">Sobre nosotros</a></li>
                    <li><a href="#historias">Historias que hablan</a></li>
                    <li><a href="#tienda">Tienda solidaria</a></li>
                    <li><a href="#contacto">Contactos</a></li>
                    <li><a href="#donaciones">Donaciones</a></li>
                </ul>
                <div class="nav-actions">
                    <div class="cart-icon" id="cartIcon">
                        🛒
                        <span class="cart-count" id="cartCount">0</span>
                    </div>
                    <button class="login-btn" id="loginBtn">Iniciar Sesión</button>
                    <div class="hamburger" id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="inicio" class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Protegiendo a Nuestros Niños</h1>
            <p class="hero-subtitle">Información, recursos y apoyo para prevenir el abuso infantil y crear entornos seguros para todos los niños.</p>
            <div class="hero-buttons">
                <button class="btn btn-primary" onclick="scrollToSection('recursos')">Obtener Ayuda</button>
                <button class="btn btn-emergency" onclick="showEmergencyModal()">Línea de Emergencia</button>
            </div>
        </div>
        <div class="hero-image">
            <div class="floating-card">
                <h3>¿Necesitas ayuda inmediata?</h3>
                <p>Llama al <strong>911</strong> o <strong>01-800-123-4567</strong></p>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="sobre" class="about">
        <div class="container">
            <div class="section-header">
                <h2>La Importancia de la Protección Infantil</h2>
                <p>Crear conciencia y proporcionar herramientas para proteger a los menores de edad.</p>
            </div>
            <div class="about-grid">
                <div class="about-card">
                    <div class="card-icon">🛡️</div>
                    <h3>Prevención</h3>
                    <p>Educación y recursos para identificar y prevenir situaciones de riesgo antes de que ocurran.</p>
                </div>
                <div class="about-card">
                    <div class="card-icon">💬</div>
                    <h3>Comunicación</h3>
                    <p>Fomentar la comunicación abierta entre adultos y niños para crear espacios seguros.</p>
                </div>
                <div class="about-card">
                    <div class="card-icon">🤝</div>
                    <h3>Apoyo</h3>
                    <p>Proporcionar apoyo integral a familias y comunidades para fortalecer la protección infantil.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Image Slider Section -->
    <section class="slider-section">
        <div class="container">
            <h2>Educación Visual</h2>
            <div class="slider" id="imageSlider">
                <div class="slide active">
                    <img src="https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Familia feliz">
                    <div class="slide-content">
                        <h3>Familias Unidas</h3>
                        <p>La comunicación familiar es clave para la protección infantil.</p>
                    </div>
                </div>
                <div class="slide">
                    <img src="https://images.pexels.com/photos/8613103/pexels-photo-8613103.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Niños jugando seguros">
                    <div class="slide-content">
                        <h3>Espacios Seguros</h3>
                        <p>Crear entornos donde los niños puedan crecer sin temor.</p>
                    </div>
                </div>
                <div class="slide">
                    <img src="https://images.pexels.com/photos/8613284/pexels-photo-8613284.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Educación infantil">
                    <div class="slide-content">
                        <h3>Educación Preventiva</h3>
                        <p>Enseñar a los niños sobre seguridad personal de manera apropiada.</p>
                    </div>
                </div>
            </div>
            <div class="slider-controls">
                <button class="prev" onclick="changeSlide(-1)">‹</button>
                <button class="next" onclick="changeSlide(1)">›</button>
            </div>
        </div>
    </section>

    <!-- Resources Section -->
    <section id="recursos" class="resources">
        <div class="container">
            <div class="section-header">
                <h2>Recursos y Ayuda</h2>
                <p>Líneas de ayuda, información y recursos disponibles las 24 horas.</p>
            </div>
            <div class="resources-grid">
                <div class="resource-card emergency-card">
                    <h3>🚨 Emergencia</h3>
                    <p>Situaciones que requieren atención inmediata</p>
                    <div class="phone-numbers">
                        <div class="phone">📞 911</div>
                        <div class="phone">📞 01-800-123-4567</div>
                    </div>
                    <button class="btn btn-emergency">Llamar Ahora</button>
                </div>
                <div class="resource-card">
                    <h3>💬 Línea de Apoyo</h3>
                    <p>Orientación y apoyo psicológico</p>
                    <div class="phone-numbers">
                        <div class="phone">📞 01-800-987-6543</div>
                    </div>
                    <p class="hours">Disponible 24/7</p>
                </div>
                <div class="resource-card">
                    <h3>📚 Materiales Educativos</h3>
                    <p>Guías para padres y educadores</p>
                    <button class="btn btn-secondary">Descargar Recursos</button>
                </div>
                <div class="resource-card">
                    <h3>👥 Grupos de Apoyo</h3>
                    <p>Comunidades de apoyo mutuo</p>
                    <button class="btn btn-secondary">Encontrar Grupos</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Sección de audiovisuales: Historias que hablan -->
    <section id="historias" class="historias-section">
        <div class="container">
            <div class="section-header">
                <h2>Historias que hablan</h2>
                <p>Testimonios y relatos audiovisuales para crear conciencia y esperanza.</p>
            </div>
            <div class="historias-videos" style="display: flex; gap: 24px; flex-wrap: wrap; justify-content: center;">
                <div>
                    <iframe width="320" height="180" src="https://www.youtube.com/embed/2Vv-BfVoq4g" title="Historia 1" frameborder="0" allowfullscreen></iframe>
                    <p style="text-align:center;">Historia 1: Un nuevo comienzo</p>
                </div>
                <div>
                    <iframe width="320" height="180" src="https://www.youtube.com/embed/3JZ_D3ELwOQ" title="Historia 2" frameborder="0" allowfullscreen></iframe>
                    <p style="text-align:center;">Historia 2: Rompiendo el silencio</p>
                </div>
                <div>
                    <iframe width="320" height="180" src="https://www.youtube.com/embed/LsoLEjrDogU" title="Historia 3" frameborder="0" allowfullscreen></iframe>
                    <p style="text-align:center;">Historia 3: Caminando juntos</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Store Section -->
    <section id="tienda" class="store">
        <div class="container">
            <div class="section-header">
                <h2>Tienda Solidaria</h2>
                <p>Merchandise y materiales educativos. Todos los ingresos apoyan nuestros programas.</p>
            </div>
            <div class="store-grid">
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.pexels.com/photos/1620769/pexels-photo-1620769.jpeg" alt="Camiseta solidaria">
                    </div>
                    <div class="product-info">
                        <h3>Camiseta "Proteger es Amar"</h3>
                        <p>Camiseta de algodón orgánico con mensaje de concienciación.</p>
                        <div class="price">$25.00</div>
                        <button class="btn btn-primary add-to-cart" data-name="Camiseta 'Proteger es Amar'" data-price="25.00" data-image="https://images.pexels.com/photos/1620769/pexels-photo-1620769.jpeg">Agregar al Carrito</button>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.pexels.com/photos/6929186/pexels-photo-6929186.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Libro educativo">
                    </div>
                    <div class="product-info">
                        <h3>Llavero "cuidado"</h3>
                        <p>Guía ilustrada para enseñar a los niños sobre seguridad personal.</p>
                        <div class="price">$15.00</div>
                        <button class="btn btn-primary add-to-cart" data-name="Llavero 'cuidado'" data-price="15.00" data-image="https://images.pexels.com/photos/6929186/pexels-photo-6929186.jpeg?auto=compress&cs=tinysrgb&w=400">Agregar al Carrito</button>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.pexels.com/photos/8088493/pexels-photo-8088493.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Kit educativo">
                    </div>
                    <div class="product-info">
                        <h3>Kit Educativo para Padres</h3>
                        <p>Conjunto de materiales y guías para la educación preventiva.</p>
                        <div class="price">$40.00</div>
                        <button class="btn btn-primary add-to-cart" data-name="Kit Educativo para Padres" data-price="40.00" data-image="https://images.pexels.com/photos/8088493/pexels-photo-8088493.jpeg?auto=compress&cs=tinysrgb&w=400">Agregar al Carrito</button>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.pexels.com/photos/8500999/pexels-photo-8500999.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Taza solidaria">
                    </div>
                    <div class="product-info">
                        <h3>Taza "Juntos Protegemos"</h3>
                        <p>Taza de cerámica con diseño inspirador.</p>
                        <div class="price">$12.00</div>
                        <button class="btn btn-primary add-to-cart" data-name="Taza 'Juntos Protegemos'" data-price="12.00" data-image="https://images.pexels.com/photos/8500999/pexels-photo-8500999.jpeg?auto=compress&cs=tinysrgb&w=400">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

<!-- Apartado de Donaciones -->
<section id="donaciones" class="donaciones-section">
    <div class="container">
        <div class="section-header">
            <h2>Donaciones</h2>
            <p>Tu apoyo es fundamental para proteger a la infancia. ¡Cada aporte cuenta!</p>
        </div>
        <form class="donaciones-form" id="donacionesForm">
            <div class="form-group">
                <label for="donadorNombre">Nombre completo</label>
                <input type="text" id="donadorNombre" placeholder="Tu nombre" required>
            </div>
            <div class="form-group">
                <label for="donadorEmail">Correo electrónico</label>
                <input type="email" id="donadorEmail" placeholder="tu@email.com" required>
            </div>
            <div class="form-group">
                <label for="donacionMonto">Monto a donar (USD)</label>
                <input type="number" id="donacionMonto" placeholder="Ej: 20" min="1" required>
            </div>
            <button type="submit" class="btn btn-primary">Donar Ahora</button>
        </form>
        <div id="donacionGracias" style="display:none; margin-top:20px; color:green; font-weight:600;">
            ¡Gracias por tu generosidad! Tu donación ayuda a proteger a más niños.
        </div>
    </div>
</section>

    <!-- Contact Section -->
    <section id="contacto" class="contact">
        <div class="container">
            <div class="section-header">
                <h2>Contacto</h2>
                <p>¿Tienes preguntas? Estamos aquí para ayudarte.</p>
            </div>
            <div class="contact-grid">
                <div class="contact-info">
                    <div class="contact-item">
                        <h3>📧 Email</h3>
                        <p>info@protegerinfancia.org</p>
                    </div>
                    <div class="contact-item">
                        <h3>📍 Dirección</h3>
                        <p>Av. Protección Infantil 123<br>Ciudad, País</p>
                    </div>
                    <div class="contact-item">
                        <h3>🕒 Horarios</h3>
                        <p>Lunes a Viernes: 9:00 - 18:00<br>Emergencias: 24/7</p>
                    </div>
                </div>
                <form class="contact-form" id="contactForm">
                    <div class="form-group">
                        <input type="text" id="name" placeholder="Nombre completo" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" placeholder="Correo electrónico" required>
                    </div>
                    <div class="form-group">
                        <textarea id="message" placeholder="Mensaje" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>ProtegerInfancia</h3>
                    <p>Trabajando juntos para crear un mundo más seguro para todos los niños.</p>
                </div>
                <div class="footer-section">
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#sobre">Información</a></li>
                        <li><a href="#recursos">Recursos</a></li>
                        <li><a href="#tienda">Tienda</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Emergencias</h4>
                    <p>📞 911</p>
                    <p>📞 01-800-123-4567</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 ProtegerInfancia. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>

    <!-- Emergency Modal -->
    <div id="emergencyModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>🚨 Líneas de Emergencia</h2>
                <span class="close" onclick="closeEmergencyModal()">&times;</span>
            </div>
            <div class="modal-body">
                <div class="emergency-numbers">
                    <div class="emergency-item">
                        <h3>Emergencia General</h3>
                        <a href="tel:911" class="emergency-link">📞 911</a>
                    </div>
                    <div class="emergency-item">
                        <h3>Línea de Protección Infantil</h3>
                        <a href="tel:01-800-123-4567" class="emergency-link">📞 01-800-123-4567</a>
                    </div>
                    <div class="emergency-item">
                        <h3>Apoyo Psicológico 24/7</h3>
                        <a href="tel:01-800-987-6543" class="emergency-link">📞 01-800-987-6543</a>
                    </div>
                </div>
                <div class="emergency-note">
                    <p><strong>Importante:</strong> Si estás en peligro inmediato, llama al 911. Si necesitas hablar con alguien sobre una situación preocupante, todas nuestras líneas están disponibles las 24 horas.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Cart Modal -->
    <div id="cartModal" class="modal">
        <div class="modal-content cart-modal-content">
            <div class="modal-header">
                <h2>🛒 Carrito de Compras</h2>
                <span class="close" onclick="closeCartModal()">&times;</span>
            </div>
            <div class="modal-body">
                <div id="cartItems" class="cart-items">
                    <!-- Cart items will be dynamically added here -->
                </div>
                <div class="cart-empty" id="cartEmpty">
                    <p>Tu carrito está vacío</p>
                    <button class="btn btn-primary" onclick="closeCartModal()">Seguir Comprando</button>
                </div>
                <div class="cart-summary" id="cartSummary" style="display: none;">
                    <div class="cart-total">
                        <h3>Total: $<span id="cartTotal">0.00</span></h3>
                    </div>
                    <div class="cart-actions">
                        <button class="btn btn-secondary" onclick="closeCartModal()">Seguir Comprando</button>
                        <button class="btn btn-primary" onclick="proceedToCheckout()">Proceder al Pago</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Login Modal -->
    <div id="loginModal" class="modal">
        <div class="modal-content login-modal-content">
            <div class="modal-header">
                <h2>👤 Iniciar Sesión</h2>
                <span class="close" onclick="closeLoginModal()">&times;</span>
            </div>
            <div class="modal-body">
                <form class="login-form" id="loginForm">
                    <div class="form-group">
                        <label for="loginEmail">Correo Electrónico</label>
                        <input type="email" id="loginEmail" placeholder="tu@email.com" required>
                    </div>
                    <div class="form-group">
                        <label for="loginPassword">Contraseña</label>
                        <input type="password" id="loginPassword" placeholder="Tu contraseña" required>
                    </div>
                    <div class="form-options">
                        <label class="checkbox-label">
                            <input type="checkbox" id="rememberMe">
                            <span class="checkmark"></span>
                            Recordarme
                        </label>
                        <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
                    </div>
                    <button type="submit" class="btn btn-primary login-submit">Iniciar Sesión</button>
                </form>
                <div class="login-divider">
                    <span>o</span>
                </div>
                <div class="register-section">
                    <p>¿No tienes cuenta?</p>
                    <button class="btn btn-secondary" onclick="showRegisterForm()">Crear Cuenta</button>
                </div>
            </div>
        </div>
    </div>
<script src="script.js?v=<?php echo time(); ?>"></script>
</body>
</html>
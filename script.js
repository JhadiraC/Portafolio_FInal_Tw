document.addEventListener('DOMContentLoaded', function() {
  // =============================================
  // ACTUALIZAR AÑO EN EL FOOTER
  // =============================================
  document.getElementById('year').textContent = new Date().getFullYear();

  // =============================================
  // MENÚ HAMBURGUESA (TOGGLE)
  // =============================================
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Alternar clase 'active' para mostrar/ocultar menú
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Transformar icono hamburguesa a X
    if (menuToggle.classList.contains('active')) {
      menuToggle.querySelector('span:first-child').style.transform = 'rotate(45deg) translate(5px, 5px)';
      menuToggle.querySelector('span:last-child').style.transform = 'rotate(-45deg) translate(5px, -5px)';
      menuToggle.querySelector('span:nth-child(2)').style.opacity = '0';
    } else {
      // Volver a icono hamburguesa
      menuToggle.querySelector('span:first-child').style.transform = 'none';
      menuToggle.querySelector('span:last-child').style.transform = 'none';
      menuToggle.querySelector('span:nth-child(2)').style.opacity = '1';
    }
  }
  
  // Hacer la función accesible globalmente para el HTML
  window.toggleMenu = toggleMenu;
  
  // =============================================
  // SCROLL SUAVE PARA ENLACES INTERNOS
  // =============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Scroll suave con ajuste para la navbar fija
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Cerrar menú en dispositivos móviles
        if (window.innerWidth <= 768) {
          toggleMenu();
        }
      }
    });
  });
  
  // =============================================
  // ANIMACIONES AL HACER SCROLL
  // =============================================
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.project-card, .about-grid, .contact-form');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      // Añadir clase 'animate' cuando el elemento es visible
      if (elementPosition < screenPosition) {
        element.classList.add('animate');
      }
    });
  };
  
  // Escuchar evento scroll y ejecutar al cargar la página
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
  
  // =============================================
  // VALIDACIÓN DE FORMULARIO DE CONTACTO
  // =============================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Obtener valores de los campos
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Validar campos vacíos
      if (!name || !email || !message) {
        alert('Por favor completa todos los campos');
        return false;
      }
      
      // Simular envío (en producción reemplazar con fetch/AJAX)
      alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
      this.reset();
      return true;
    });
  }
  
  // =============================================
  // EFECTO DE NAVBAR AL HACER SCROLL
  // =============================================
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // =============================================
  // EFECTO MAQUINA DE ESCRIBIR (TYPEWRITER)
  // =============================================
  const text = "¡Hola, soy Jhadira!";
  const typewriterElement = document.getElementById('typewriter-text');
  const cursor = document.querySelector('.cursor');
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      // Añadir letra por letra
      typewriterElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 150); // Velocidad de escritura (150ms por letra)
    } else {
      // Detener animación del cursor al finalizar
      cursor.style.animation = 'none';
    }
  }

  // Iniciar animación después de breve delay
  setTimeout(typeWriter, 500);
});
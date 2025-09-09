// Main JavaScript for Aaron Frank Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initImageSwapping();
    initViewTransitions();
    initScrollEffects();
    initMobileMenu();
    initMouseFollower();
    init3DImageEffect();
    initParticleEffects();
});

// Image swapping functionality
function initImageSwapping() {
    const categoryTags = document.querySelectorAll('.category-tag');
    const categoryTagsContainer = document.querySelector('.category-tags');
    const heroImage = document.getElementById('hero-image');
    
    if (!heroImage || !categoryTagsContainer) return;
    
    // Image mapping - these will be populated by the server
    const imageMap = {
        'traveling': '/static/images/hero/traveling.jpg',
        'sports': '/static/images/hero/sports.jpg',
        'music': '/static/images/hero/music.jpg',
        'technology': '/static/images/hero/technology.jpg',
        'about': '/static/images/hero/about.jpg',
        'default': '/static/images/hero/default.jpg'
    };
    
    let currentCategory = 'default';
    
    // Handle individual tag hover - ONLY mouseenter events
    categoryTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            const category = this.dataset.category;
            if (imageMap[category] && category !== currentCategory) {
                currentCategory = category;
                swapImage(imageMap[category]);
            }
        });
    });
    
    // Handle leaving the entire container - ONLY this mouseleave event
    categoryTagsContainer.addEventListener('mouseleave', function() {
        // When leaving the entire container, show default image
        currentCategory = 'default';
        swapImage(imageMap['default']);
    });
}

// Smooth image swapping with transition
function swapImage(newSrc) {
    const heroImage = document.getElementById('hero-image');
    if (!heroImage) return;
    
    // Add fade out effect
    heroImage.style.opacity = '0.7';
    heroImage.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        heroImage.src = newSrc;
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'scale(1)';
    }, 150);
}

// Hide image (show no image)
function hideImage() {
    const heroImage = document.getElementById('hero-image');
    if (!heroImage) return;

    // Fade out to transparent
    heroImage.style.opacity = '0.3';
    heroImage.style.transform = 'scale(0.9)';
}

// View Transitions API implementation
function initViewTransitions() {
    // Check if View Transitions API is supported
    if (!('startViewTransition' in document)) {
        console.log('View Transitions API not supported, using fallback');
        return;
    }
    
    // Add click handlers to navigation links
    const navLinks = document.querySelectorAll('a[href^="/"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only handle internal links
            if (this.hostname === window.location.hostname || this.hostname === '') {
                e.preventDefault();
                
                const href = this.getAttribute('href');
                
                // Use View Transitions API for smooth page transitions
                document.startViewTransition(() => {
                    window.location.href = href;
                });
            }
        });
    });
}

// Scroll effects and animations
function initScrollEffects() {
    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
}

// Mobile menu functionality (not needed for single page)
function initMobileMenu() {
    // No mobile menu needed for single page layout
}

// Mouse follower effect
function initMouseFollower() {
    const mouseFollower = document.querySelector('.mouse-follower');
    if (!mouseFollower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Move gradient spheres based on mouse position
        const spheres = document.querySelectorAll('.gradient-sphere');
        const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
        const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
        
        spheres.forEach((sphere, index) => {
            const intensity = (index + 1) * 0.3;
            sphere.style.transform = `translate(${moveX * intensity}px, ${moveY * intensity}px)`;
        });
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        mouseFollower.style.left = followerX - 10 + 'px';
        mouseFollower.style.top = followerY - 10 + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
}

// 3D Image effect based on mouse position
function init3DImageEffect() {
    const heroImage = document.getElementById('hero-image');
    if (!heroImage) return;

    const container = heroImage.closest('.hero-image-container');
    if (!container) return;

    let isHovering = false;

    container.addEventListener('mouseenter', () => {
        isHovering = true;
    });

    container.addEventListener('mouseleave', () => {
        isHovering = false;
        heroImage.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });

    container.addEventListener('mousemove', (e) => {
        if (!isHovering) return;

        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const rotateX = (mouseY / rect.height) * -20;
        const rotateY = (mouseX / rect.width) * 20;
        const scale = 1.05;
        
        heroImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    });
}

// Utility function for smooth scrolling
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Particle Effects from CodePen
function initParticleEffects() {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;
    
    const particleCount = 80;
    
    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size (small)
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Initial position
        resetParticle(particle);
        
        particlesContainer.appendChild(particle);
        
        // Animate
        animateParticle(particle);
    }
    
    function resetParticle(particle) {
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = '0';
        
        return {
            x: posX,
            y: posY
        };
    }
    
    function animateParticle(particle) {
        // Initial position
        const pos = resetParticle(particle);
        
        // Random animation properties
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        // Animate with GSAP-like timing
        setTimeout(() => {
            particle.style.transition = `all ${duration}s linear`;
            particle.style.opacity = Math.random() * 0.3 + 0.1;
            
            // Move in a slight direction
            const moveX = pos.x + (Math.random() * 20 - 10);
            const moveY = pos.y - Math.random() * 30; // Move upwards
            
            particle.style.left = `${moveX}%`;
            particle.style.top = `${moveY}%`;
            
            // Reset after animation completes
            setTimeout(() => {
                animateParticle(particle);
            }, duration * 1000);
        }, delay * 1000);
    }
    
    // Enhanced mouse interaction with particles
    document.addEventListener('mousemove', (e) => {
        // Create particles at mouse position
        const mouseX = (e.clientX / window.innerWidth) * 100;
        const mouseY = (e.clientY / window.innerHeight) * 100;
        
        // Create temporary particle
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Small size
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Position at mouse
        particle.style.left = `${mouseX}%`;
        particle.style.top = `${mouseY}%`;
        particle.style.opacity = '0.6';
        
        particlesContainer.appendChild(particle);
        
        // Animate outward
        setTimeout(() => {
            particle.style.transition = 'all 2s ease-out';
            particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
            particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
            particle.style.opacity = '0';
            
            // Remove after animation
            setTimeout(() => {
                particle.remove();
            }, 2000);
        }, 10);
        
        // Enhanced movement of gradient spheres
        const spheres = document.querySelectorAll('.gradient-sphere');
        const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
        const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
        
        spheres.forEach((sphere, index) => {
            const intensity = (index + 1) * 0.3;
            sphere.style.transform = `translate(${moveX * intensity}px, ${moveY * intensity}px)`;
        });
    });
}

// Add loading states for images
function preloadImages() {
    const imageUrls = [
        '/static/images/hero/traveling.jpg',
        '/static/images/hero/sports.jpg',
        '/static/images/hero/music.jpg',
        '/static/images/hero/technology.jpg',
        '/static/images/hero/about.jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize image preloading
preloadImages();

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero-image {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

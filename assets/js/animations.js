/**
 * ABC Management Website - Interactive Animations & Features
 * This file handles all interactive features including:
 * - Scroll animations
 * - Dark mode toggle
 * - Hero carousel/slider
 * - Enhanced hover effects
 */

// ==========================================
// 1. DARK MODE TOGGLE
// ==========================================

class DarkModeToggle {
    constructor() {
        this.darkMode = localStorage.getItem('darkMode') === 'true';
        this.init();
    }

    init() {
        // Apply saved preference on load
        if (this.darkMode) {
            document.documentElement.classList.add('dark');
        }

        // Create toggle button (will be injected by HTML)
        this.attachEventListeners();
    }

    attachEventListeners() {
        // Wait for DOM to be ready
        document.addEventListener('DOMContentLoaded', () => {
            const toggleBtn = document.getElementById('darkModeToggle');
            if (toggleBtn) {
                toggleBtn.addEventListener('click', () => this.toggle());
            }
        });
    }

    toggle() {
        this.darkMode = !this.darkMode;
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', this.darkMode);

        // Update icon
        this.updateIcon();
    }

    updateIcon() {
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');

        if (this.darkMode) {
            sunIcon?.classList.remove('hidden');
            moonIcon?.classList.add('hidden');
        } else {
            sunIcon?.classList.add('hidden');
            moonIcon?.classList.remove('hidden');
        }
    }
}

// Initialize dark mode
const darkModeToggle = new DarkModeToggle();


// ==========================================
// 2. SCROLL ANIMATIONS
// ==========================================

class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        // Create intersection observer
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Optionally unobserve after animation
                    // this.observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        // Observe all elements with animation classes
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll(
                '.fade-in-up, .fade-in, .fade-in-left, .fade-in-right'
            );

            animatedElements.forEach(el => {
                this.observer.observe(el);
            });
        });
    }
}

// Initialize scroll animations
const scrollAnimations = new ScrollAnimations();


// ==========================================
// 3. HERO CAROUSEL/SLIDER
// ==========================================

class HeroCarousel {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.slides = this.container.querySelectorAll('.carousel-slide');
        this.currentSlide = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = 5000; // 5 seconds

        this.init();
    }

    init() {
        if (this.slides.length === 0) return;

        // Create navigation dots
        this.createDots();

        // Create arrow buttons
        this.createArrows();

        // Show first slide
        this.showSlide(0);

        // Start autoplay
        this.startAutoplay();

        // Pause autoplay on hover
        this.container.addEventListener('mouseenter', () => this.stopAutoplay());
        this.container.addEventListener('mouseleave', () => this.startAutoplay());
    }

    createDots() {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20';

        this.slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-all';
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        this.container.appendChild(dotsContainer);
        this.dots = dotsContainer.querySelectorAll('.carousel-dot');
    }

    createArrows() {
        // Previous arrow
        const prevArrow = document.createElement('button');
        prevArrow.className = 'carousel-arrow carousel-arrow-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all backdrop-blur-sm';
        prevArrow.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>';
        prevArrow.addEventListener('click', () => this.previousSlide());

        // Next arrow
        const nextArrow = document.createElement('button');
        nextArrow.className = 'carousel-arrow carousel-arrow-next absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all backdrop-blur-sm';
        nextArrow.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';
        nextArrow.addEventListener('click', () => this.nextSlide());

        this.container.appendChild(prevArrow);
        this.container.appendChild(nextArrow);
    }

    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
            slide.classList.add('hidden');
        });

        // Update dots
        this.dots?.forEach(dot => {
            dot.classList.remove('bg-white');
            dot.classList.add('bg-white/50');
        });

        // Show current slide
        this.slides[index].classList.remove('hidden');
        this.slides[index].classList.add('active');

        // Update current dot
        if (this.dots && this.dots[index]) {
            this.dots[index].classList.remove('bg-white/50');
            this.dots[index].classList.add('bg-white');
        }

        this.currentSlide = index;
    }

    goToSlide(index) {
        this.showSlide(index);
        this.resetAutoplay();
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(next);
        this.resetAutoplay();
    }

    previousSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prev);
        this.resetAutoplay();
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoplayDelay);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }

    resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new HeroCarousel('heroCarousel');
});


// ==========================================
// 4. SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});


// ==========================================
// 5. NAVIGATION SCROLL EFFECT
// ==========================================

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const nav = document.querySelector('nav');

    if (currentScroll > 100) {
        nav?.classList.add('scrolled');
    } else {
        nav?.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});


// ==========================================
// 6. BACK TO TOP BUTTON
// ==========================================

class BackToTop {
    constructor() {
        this.button = null;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.createButton();
            this.attachEventListeners();
        });
    }

    createButton() {
        this.button = document.createElement('button');
        this.button.id = 'backToTop';
        this.button.className = 'fixed bottom-8 right-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-4 rounded-full shadow-lg opacity-0 pointer-events-none transition-all duration-300 hover:scale-110 z-50';
        this.button.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>';
        this.button.setAttribute('aria-label', 'Back to top');

        document.body.appendChild(this.button);
    }

    attachEventListeners() {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.button.classList.remove('opacity-0', 'pointer-events-none');
                this.button.classList.add('opacity-100');
            } else {
                this.button.classList.add('opacity-0', 'pointer-events-none');
                this.button.classList.remove('opacity-100');
            }
        });

        // Scroll to top on click
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize back to top button
const backToTop = new BackToTop();


// ==========================================
// 7. ENHANCED CARD HOVER EFFECTS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-hover, .team-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});


// ==========================================
// 8. NUMBER COUNTER ANIMATION (for stats)
// ==========================================

class NumberCounter {
    constructor() {
        this.counters = [];
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            const counterElements = document.querySelectorAll('.counter');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                        this.animateCounter(entry.target);
                        entry.target.classList.add('counted');
                    }
                });
            }, { threshold: 0.5 });

            counterElements.forEach(el => observer.observe(el));
        });
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target') || element.textContent);
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepValue = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += stepValue;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, duration / steps);
    }
}

// Initialize number counter
const numberCounter = new NumberCounter();


// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DarkModeToggle,
        ScrollAnimations,
        HeroCarousel,
        BackToTop,
        NumberCounter
    };
}

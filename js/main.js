// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.5)';
    cursorFollower.style.transform = 'scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursorFollower.style.transform = 'scale(1)';
});

// Hover effect on buttons
const buttons = document.querySelectorAll('button, a');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(2)';
    });
    button.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from('.hero-badge', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'back.out(1.7)'
});

gsap.from('h1', {
    duration: 1,
    scale: 0.5,
    opacity: 0,
    delay: 0.3,
    ease: 'back.out(1.7)'
});

gsap.from('p', {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.6
});

gsap.from('.btn-primary, .btn-secondary', {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.9,
    stagger: 0.2
});

gsap.from('.stat-card', {
    scrollTrigger: {
        trigger: '.stat-card',
        start: 'top 80%',
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2
});

// Service Cards Animation
gsap.from('.service-card', {
    scrollTrigger: {
        trigger: '#services',
        start: 'top 70%',
    },
    duration: 0.8,
    x: -50,
    opacity: 0,
    stagger: 0.15
});

// Tech Items Animation
gsap.from('.tech-item', {
    scrollTrigger: {
        trigger: '#tech',
        start: 'top 70%',
    },
    duration: 0.6,
    scale: 0,
    opacity: 0,
    stagger: 0.05,
    ease: 'back.out(1.7)'
});

// Why Cards Animation
gsap.from('.why-card', {
    scrollTrigger: {
        trigger: '#whyus',
        start: 'top 70%',
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2
});

// Contact Card Animation
gsap.from('.contact-card', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
    },
    duration: 1,
    scale: 0.9,
    opacity: 0,
    ease: 'back.out(1.7)'
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuBtn.querySelector('i').classList.toggle('fa-bars');
        menuBtn.querySelector('i').classList.toggle('fa-times');
    });
}

// Smooth Scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuBtn.querySelector('i').classList.add('fa-bars');
            menuBtn.querySelector('i').classList.remove('fa-times');
        }
    }
}

// Add click handlers to all nav links
document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Parallax Effect on Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#home');
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Typing Effect (Optional - Add to hero)
const textElement = document.querySelector('.gradient-text');
if (textElement && textElement.closest('h1')) {
    const originalText = textElement.innerText;
    // يمكن إضافة تأثير كتابة هنا إذا أردت
}

// Count Up Animation for Stats
const stats = document.querySelectorAll('.stat-card .text-3xl');
const animateNumbers = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.innerText);
        if (!isNaN(target) && !stat.hasAttribute('data-counted')) {
            let current = 0;
            const increment = target / 50;
            const updateNumber = () => {
                current += increment;
                if (current < target) {
                    stat.innerText = Math.floor(current) + '+';
                    requestAnimationFrame(updateNumber);
                } else {
                    stat.innerText = target + '+';
                    stat.setAttribute('data-counted', 'true');
                }
            };
            updateNumber();
        }
    });
};

// Trigger count up when stats come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
        }
    });
});

const statsContainer = document.querySelector('.grid.grid-cols-2.md\\:grid-cols-4');
if (statsContainer) {
    observer.observe(statsContainer);
}

// Add smooth background transition on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 100) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
    }
});

// Console Welcome Message
console.log('%c🔥 Don\'t Worry Tech | احترافية في التنفيذ', 'color: #00d2ff; font-size: 20px; font-weight: bold;');
console.log('%c📞 تواصل معنا على تيليجرام: @Donot_Worry_Tech', 'color: #ff0066; font-size: 14px;');

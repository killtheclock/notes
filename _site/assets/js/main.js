"use strict";
// Scroll-triggered animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    elements.forEach((el) => observer.observe(el));
};
// Cursor glow effect
const initCursorGlow = () => {
    const glow = document.createElement('div');
    glow.style.cssText = `
    position: fixed; pointer-events: none; z-index: 9999;
    width: 300px; height: 300px; border-radius: 50%;
    background: radial-gradient(circle, rgba(126,184,247,0.06) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    top: 0; left: 0;
  `;
    document.body.appendChild(glow);
    let x = 0, y = 0, tx = 0, ty = 0;
    document.addEventListener('mousemove', (e) => {
        tx = e.clientX;
        ty = e.clientY;
    });
    document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });
    const animate = () => {
        x += (tx - x) * 0.08;
        y += (ty - y) * 0.08;
        glow.style.left = x + 'px';
        glow.style.top = y + 'px';
        requestAnimationFrame(animate);
    };
    animate();
};
// Smooth anchor scroll
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (!href)
                return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
};
// Stagger card animations on load
const initStaggerLoad = () => {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, i * 60);
    });
};
// Init
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    initCursorGlow();
    initSmoothScroll();
    initStaggerLoad();
});

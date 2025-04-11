// Cursor spotlight effect
document.addEventListener('DOMContentLoaded', () => {
    const spotlight = document.querySelector('.cursor-spotlight');
    
    // Update spotlight position based on mouse movement
    document.addEventListener('mousemove', (e) => {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;
    });
    
    // Handle smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add subtle animation to sections when they come into view
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add hover effect for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 5px 15px rgba(100, 255, 218, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = 'none';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');
    const overlay = document.querySelector('.overlay');
    
    // Mobile Menu Toggle
    if (mobileMenuBtn && mobileMenu && overlay) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Close menu function
        function closeMenu() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Close button event
        if (mobileCloseBtn) {
            mobileCloseBtn.addEventListener('click', closeMenu);
        }
        
        // Overlay click event
        overlay.addEventListener('click', closeMenu);
        
        // Mobile menu links
        const mobileLinks = document.querySelectorAll('.mobile-links a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});

// Initialize Lucide icons
lucide.createIcons();

// DOM elements
const navbar = document.getElementById('navbar');
const navDesktop = document.querySelector('.nav-desktop');
const navMobile = document.querySelector('.nav-mobile');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const emailModal = document.getElementById('emailModal');
const modalClose = document.getElementById('modalClose');
const emailForm = document.getElementById('emailForm');
const faqQuestions = document.querySelectorAll('.faq-question');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    if (scrollTop > 50) {
        navDesktop.classList.add('scrolled');
        navMobile.classList.add('scrolled');
    } else {
        navDesktop.classList.remove('scrolled');
        navMobile.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Toggle menu icon
    const menuIcon = mobileMenuBtn.querySelector('[data-lucide="menu"]');
    const closeIcon = mobileMenuBtn.querySelector('[data-lucide="x"]');
    
    if (mobileMenu.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const menuIcon = mobileMenuBtn.querySelector('[data-lucide="menu"]');
        const closeIcon = mobileMenuBtn.querySelector('[data-lucide="x"]');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });
});

// Smooth scrolling for navigation links
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

// Email modal functionality
function openEmailModal(subject = '', message = '', buttonText = 'Send Message') {
    const modalSubject = document.getElementById('modalSubject');
    const modalMessage = document.getElementById('modalMessage');
    const modalSubmit = document.getElementById('modalSubmit');
    
    modalSubject.value = subject;
    modalMessage.value = message;
    modalSubmit.textContent = buttonText;
    
    emailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEmailModal() {
    emailModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Modal event listeners
modalClose.addEventListener('click', closeEmailModal);

emailModal.addEventListener('click', (e) => {
    if (e.target === emailModal) {
        closeEmailModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && emailModal.classList.contains('active')) {
        closeEmailModal();
    }
});

// Email form submission
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(emailForm);
    const subject = formData.get('subject') || document.getElementById('modalSubject').value;
    const message = formData.get('message') || document.getElementById('modalMessage').value;
    const email = document.getElementById('modalEmail').value;
    const name = document.getElementById('modalName').value;
    
    // Here you would typically send the email data to your server
    // For now, we'll just show a success message and close the modal
    
    console.log('Email form submitted:', {
        subject,
        message,
        email,
        name
    });
    
    // Show success message (you can customize this)
    alert('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form and close modal
    emailForm.reset();
    closeEmailModal();
});

// Button click handlers
document.getElementById('startProjectBtn').addEventListener('click', () => {
    openEmailModal(
        'Project Inquiry - NextVolve',
        `Hi NextVolve team,

I'm interested in starting a software development project. I'd like to discuss my requirements and get a quote.

Project details:
- 

Please contact me to schedule a consultation.

Best regards,`,
        'Send Project Inquiry'
    );
});

document.getElementById('scheduleConsultationBtn').addEventListener('click', () => {
    openEmailModal(
        'Schedule a Consultation - NextVolve',
        `Hi NextVolve team,

I'm interested in scheduling a consultation to discuss my software development project.

Project details:
- Type of software: 
- Timeline: 
- Budget range: 
- Specific requirements: 

Preferred consultation time:
- 

Please let me know your availability.

Best regards,`,
        'Schedule Consultation'
    );
});

document.getElementById('getStartedBtn').addEventListener('click', () => {
    openEmailModal(
        '',
        '',
        'Start My Project'
    );
});

document.getElementById('startProjectCtaBtn').addEventListener('click', () => {
    openEmailModal(
        'Project Inquiry - NextVolve',
        `Hi NextVolve team,

I'm ready to start my software development project! I'd like to discuss my requirements and get a detailed quote.

Project details:
- 

Please contact me to schedule a consultation.

Best regards,`,
        'Send Project Inquiry'
    );
});

document.getElementById('contactEmailBtn').addEventListener('click', () => {
    openEmailModal(
        'General Inquiry - NextVolve',
        `Hi NextVolve team,

I have some questions about your software development services.

Questions:
- 

Please get back to me at your earliest convenience.

Best regards,`,
        'Send Message'
    );
});

document.getElementById('sendEmailBtn').addEventListener('click', () => {
    openEmailModal(
        'Free Consultation Request - NextVolve',
        `Hi NextVolve team,

I have some questions about your software development services and would like to schedule a free consultation.

Questions:
- 

Project details:
- 

Please get back to me at your earliest convenience.

Best regards,`,
        'Send Inquiry'
    );
});

document.getElementById('footerEmailBtn').addEventListener('click', () => {
    openEmailModal(
        'General Inquiry - NextVolve',
        `Hi NextVolve team,

I have some questions about your software development services.

Questions:
- 

Please get back to me at your earliest convenience.

Best regards,`,
        'Send Message'
    );
});

// FAQ functionality
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = answer.classList.contains('active');
        
        // Close all other FAQ answers
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.classList.remove('active');
        });
        
        // Toggle current answer
        if (!isActive) {
            answer.classList.add('active');
        }
    });
});

// Add hover effects for buttons
document.querySelectorAll('.btn-hero-primary, .btn-primary, .btn-cta-primary, .btn-nextvolve').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.process-step, .comparison-card, .feature-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add loading state
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    // Simulate loading
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize any additional functionality
    console.log('NextVolve landing page loaded successfully!');
});

// Add some interactive effects
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add parallax effect to hero section (optional)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        const rate = scrolled * -0.5;
        heroSection.style.transform = `translateY(${rate}px)`;
    }
});

// Add typing effect to hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment the following lines to add typing effect
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// }

// Add counter animation for stats (optional)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Add intersection observer for counter animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const value = parseInt(target.textContent);
            animateCounter(target, value);
            counterObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

// Observe counter elements
document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});

// Add smooth reveal animation for sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// Add hover effects for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#16a34a';
        this.style.background = 'rgba(34, 197, 94, 0.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.color = '';
        this.style.background = '';
    });
});

// Add form validation
document.querySelectorAll('input[required], textarea[required]').forEach(input => {
    input.addEventListener('blur', function() {
        if (!this.value.trim()) {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = '#22c55e';
        }
    });
    
    input.addEventListener('input', function() {
        if (this.value.trim()) {
            this.style.borderColor = '#22c55e';
        }
    });
});

// Add loading states for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('btn-modal-submit')) {
            const originalText = this.textContent;
            this.textContent = 'Sending...';
            this.disabled = true;
            
            // Simulate sending (replace with actual form submission)
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        }
    });
});

// Add keyboard navigation for FAQ
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        const activeElement = document.activeElement;
        if (activeElement.classList.contains('faq-question')) {
            e.preventDefault();
            activeElement.click();
        }
    }
});

// Add accessibility improvements
document.querySelectorAll('button, a').forEach(element => {
    if (!element.hasAttribute('aria-label') && !element.textContent.trim()) {
        element.setAttribute('aria-label', element.getAttribute('title') || 'Button');
    }
});

// Add focus management for modal
emailModal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        const focusableElements = emailModal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    }
});

// Add error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Add performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});

// Blog description toggle functionality
function toggleDescription(button) {
    const description = button.previousElementSibling;
    const isExpanded = description.classList.contains('expanded');
    
    if (isExpanded) {
        // Collapse the description
        description.classList.remove('expanded');
        description.classList.add('collapsed');
        button.textContent = 'Read More';
        button.classList.remove('btn-see-less');
        button.classList.add('btn-read-more');
    } else {
        // Expand the description
        description.classList.remove('collapsed');
        description.classList.add('expanded');
        button.textContent = 'See Less';
        button.classList.remove('btn-read-more');
        button.classList.add('btn-see-less');
    }
}

// Export functions for potential external use
window.NextVolve = {
    openEmailModal,
    closeEmailModal,
    typeWriter,
    animateCounter,
    toggleDescription
};

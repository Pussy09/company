document.addEventListener('DOMContentLoaded', () => {

    lucide.createIcons();


    const services = [
        {
            id: '01',
            title: 'Residential Roofing',
            desc: 'Tailored solutions for premium homes. We combine aesthetic elegance with uncompromised storm protection.',
            icon: 'home'
        },
        {
            id: '02',
            title: 'Commercial Roofing',
            desc: 'High-capacity systems for warehouses and industrial complexes. Engineered for durability and longevity.',
            icon: 'factory'
        },
        {
            id: '03',
            title: 'Roof Installation',
            desc: 'Precision-led full installations using industry-leading materials that withstand the Delta climate.',
            icon: 'hammer'
        },
        {
            id: '04',
            title: 'Expert Repairs',
            desc: 'Rapid-response repair services for leaks, structural damage, and weather-related degradation.',
            icon: 'wrench'
        },
        {
            id: '05',
            title: 'Full Replacement',
            desc: 'Revitalize your property with a complete roof overhaul that increases market value and safety.',
            icon: 'refresh-ccw'
        },
        {
            id: '06',
            title: 'General Construction',
            desc: 'Beyond roofing—our team handles structural reinforcements and custom building projects.',
            icon: 'layout'
        }
    ];


    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        services.forEach((service, index) => {
            const card = document.createElement('div');
            card.className = 'service-card p-10 rounded-[2.5rem] bg-[#181a1f] border border-white/5 flex flex-col h-full reveal-up';
            card.setAttribute('data-delay', index * 100);
            card.innerHTML = `
                <div class="service-icon w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 text-[#FF8C00]">
                    <i data-lucide="${service.icon}" class="w-8 h-8"></i>
                </div>
                <span class="text-xs font-black text-[#FF8C00] mb-3 tracking-[0.3em] uppercase">${service.id}</span>
                <h3 class="text-2xl font-black mb-5">${service.title}</h3>
                <p class="text-gray-400 leading-relaxed mb-8 flex-grow font-light text-lg">${service.desc}</p>
                <a href="tel:08065018616" class="text-sm font-black flex items-center gap-3 group/btn uppercase tracking-widest text-[#FF8C00]">
                    Inquire Now <i data-lucide="arrow-right" class="w-5 h-5 group-hover/btn:translate-x-2 transition-transform"></i>
                </a>
            `;
            servicesGrid.appendChild(card);
        });
    }


    lucide.createIcons();


    gsap.registerPlugin(ScrollTrigger);


    const heroTl = gsap.timeline();
    heroTl.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.4,
        ease: 'expo.out'
    }).from('.hero-content img', {
        scale: 1.2,
        duration: 2,
        ease: 'power2.out'
    }, 0);


    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach(el => {
        const delay = el.getAttribute('data-delay') || 0;
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: delay / 1000,
            ease: 'power4.out'
        });
    });


    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    const toggleMenu = (state) => {
        if (state) {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
            gsap.from('.menu-link', {
                x: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
                delay: 0.3
            });
        } else {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    menuToggle?.addEventListener('click', () => toggleMenu(true));
    closeMenu?.addEventListener('click', () => toggleMenu(false));
    menuLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

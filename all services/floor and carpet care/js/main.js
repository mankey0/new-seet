
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", this.window.scrollY > 0)
})

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", function () {
    const langBtn = document.getElementById("lang-btn");

    if (!langBtn) {
        console.error("عنصر زر اللغة غير موجود!");
        return;
    }

    const translations = {
        en: {
            home: "Home",
            about: "About Us",
            services: "Services",
            contact: "Contact",
            menu: "Menu",
            clean_glass: "Glass facade cleaning for buildings",
            floor_care: "Floor and carpet care",
            common_cleaning: "Routine cleaning services in common areas",
            pool_cleaning: "Pool cleaning",
            unit_cleaning: "Cleaning all units",
            tank_cleaning: "Cleaning, washing, and disinfecting tanks inside and out",
            high_surface: "Cleaning and maintaining high surfaces",
            stone_cleaning: "Stone facade cleaning",
            post_construction: "Post-construction cleaning for new buildings",
            steam_sand_cleaning: "Building cleaning using steam and sand heating",
            tile_polishing: "Tile and marble polishing",
            lang: "ع",
            title_hero_1: 'SEET &nbsp;<span>Saudia</span>',
            desc_hero_1: "We offer innovative and high-quality services to meet your needs. From maintenance to restoration, we are here to ensure the comfort and safety of your home. Discover our services now and give your space a fresh new look!",
            services_title: "our services",
            facade: "Glass facade cleaning for buildings",
            floor: "Floor and carpet care",
            routine: "Routine cleaning services in common areas",
            pool: "Pool cleaning",
            unit: "Cleaning all units",
            tank: "Cleaning, washing, and disinfecting tanks inside and out",
            surface: "Cleaning and maintaining high surfaces",
            stone: "Stone facade cleaning",
            post: "Post-construction cleaning for new buildings",
            steam: "Building cleaning using steam and sand heating",
            tile: "Tile and marble polishing",
            desc_footer: `Seet Saudi - Providing top-quality cleaning services with professionalism and
                    reliability. We ensure spotless spaces with eco-friendly solutions and expert care. Contact us for a
                    cleaner, healthier environment.`,
            Maintenance_services_title: "Maintenance and Repair Services",
            Pest_control: "Pest control",
            Pest_control_desc: "Protect your home and health effective pest control for a pest-free life.",
            Roof_insulation: "Roof insulation",
            Roof_insulation_desc: "roof insulation reducing heat loss in winter and keeping your home cool in summer.",
            Water_tank_insulation: "Water tank insulation",
            Water_tank_insulation_desc: "Water tank insulation conserves heat, reduces energy loss.",
            Water_leak_insulation: "Water leak insulation",
            Water_leak_insulation_desc: "Water leak insulation detection prevents damage, and conserves resources.",
            Interior_exterior: "Interior and exterior building restoration",
            Interior_exterior_desc: "Bringing buildings back to life."
        },
        ar: {
            home: "الرئيسية",
            about: "من نحن",
            services: "خدماتنا",
            contact: "اتصل بنا",
            menu: "القائمة",
            clean_glass: "تنظيف الواجهات الزجاجية للمباني",
            floor_care: "العناية بالأرضيات والسجاد",
            common_cleaning: "خدمات التنظيف الدورية في المناطق المشتركة",
            pool_cleaning: "تنظيف المسابح",
            unit_cleaning: "تنظيف جميع الوحدات",
            tank_cleaning: "تنظيف وغسيل وتعقيم الخزانات من الداخل والخارج",
            high_surface: "تنظيف وصيانة الأسطح المرتفعة",
            stone_cleaning: "تنظيف الواجهات الحجرية",
            post_construction: "تنظيف ما بعد البناء للمباني الجديدة",
            steam_sand_cleaning: "تنظيف المباني باستخدام البخار والتسخين الرملي",
            tile_polishing: "تلميع البلاط والرخام",
            lang: "EN",
            title_hero_1: 'صيت&nbsp;<span>السعودية</span>',
            desc_hero_1: "نحن نقدم لك خدمات مبتكرة وعالية الجودة لتلبية احتياجاتك. من الصيانة إلى الترميم، نحن هنا لضمان راحة منزلك وأمانه. اكتشف خدماتنا الآن وامنح مكانك لمسة جديدة!",
            services_title: "خدمـــاتنا",
            facade: "تنظيف الواجهات الزجاجية للمباني",
            floor: "العناية بالأرضيات والسجاد",
            routine: "خدمات التنظيف الدورية في المناطق المشتركة",
            pool: "تنظيف المسابح",
            unit: "تنظيف جميع الوحدات",
            tank: "تنظيف وغسيل وتعقيم الخزانات من الداخل والخارج",
            surface: "تنظيف وصيانة الأسطح المرتفعة",
            stone: "تنظيف الواجهات الحجرية",
            post: "تنظيف ما بعد البناء للمباني الجديدة",
            steam: "تنظيف المباني باستخدام البخار والتسخين الرملي",
            tile: "تلميع البلاط والرخام",
            desc_footer: `صيت السعودية – نقدم خدمات تنظيف عالية الجودة باحترافية وموثوقية. نضمن لك مساحات نظيفة باستخدام حلول صديقة للبيئة وعناية خبرائنا. تواصل معنا للحصول على بيئة أنظف وأكثر صحة.`,
            Maintenance_services_title: "خدمـــات الصيـانة والإصـلاح",
            Pest_control: "مكافحة الآفات",
            Pest_control_desc: "احمِ منزلك وصحتك مع خدمات فعّالة لمكافحة الآفات لحياة خالية من الحشرات.",
            Roof_insulation: "عزل السقف",
            Roof_insulation_desc: "يساعد عزل السقف على تقليل فقدان الحرارة في الشتاء ويحافظ على برودة المنزل في الصيف.",
            Water_tank_insulation: "عزل خزان المياه",
            Water_tank_insulation_desc: "يساعد عزل خزان المياه في الحفاظ على الحرارة وتقليل فقدان الطاقة.",
            Water_leak_insulation: "كشف تسربات المياه",
            Water_leak_insulation_desc: "يساعد الكشف المبكر عن تسربات المياه على منع الأضرار والحفاظ على الموارد.",
            Interior_exterior: "ترميم المباني الداخلي والخارجي",
            Interior_exterior_desc: "إعادة الحياة إلى المباني."
        }
    };

    let currentLang = localStorage.getItem('lang') || 'ar';
    document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;


    const elements = {
        home: document.getElementById("home"),
        about: document.getElementById("about"),
        services: document.getElementById("dropdownMenuButton"),
        contact: document.getElementById("contact"),
        menu: document.getElementById("menu"),
        clean_glass: document.getElementById("clean_glass"),
        floor_care: document.getElementById("floor_care"),
        common_cleaning: document.getElementById("common_cleaning"),
        pool_cleaning: document.getElementById("pool_cleaning"),
        unit_cleaning: document.getElementById("unit_cleaning"),
        tank_cleaning: document.getElementById("tank_cleaning"),
        high_surface: document.getElementById("high_surface"),
        stone_cleaning: document.getElementById("stone_cleaning"),
        post_construction: document.getElementById("post_construction"),
        steam_sand_cleaning: document.getElementById("steam_sand_cleaning"),
        tile_polishing: document.getElementById("tile_polishing"),
        lang: langBtn,
        title_hero_1: document.getElementById("title_hero_1"),
        desc_hero_1: document.getElementById("desc_hero_1"),
        title_hero_2: document.getElementById("title_hero_2"),
        desc_hero_2: document.getElementById("desc_hero_2"),
        services_title: document.getElementById("services_title"),
        facade: document.getElementById("facade"),
        floor: document.getElementById("floor"),
        routine: document.getElementById("routine"),
        pool: document.getElementById("pool"),
        unit: document.getElementById("unit"),
        tank: document.getElementById("tank"),
        surface: document.getElementById("surface"),
        stone: document.getElementById("stone"),
        post: document.getElementById("post"),
        steam: document.getElementById("steam"),
        tile: document.getElementById("tile"),
        desc_footer: document.getElementById("desc_footer"),
        Maintenance_services_title: document.getElementById("Maintenance_services_title"),
        Pest_control: document.getElementById("Pest_control"),
        Pest_control_desc: document.getElementById("Pest_control_desc"),
        Roof_insulation: document.getElementById("Roof_insulation"),
        Roof_insulation_desc: document.getElementById("Roof_insulation_desc"),
        Water_tank_insulation: document.getElementById("Water_tank_insulation"),
        Water_tank_insulation_desc: document.getElementById("Water_tank_insulation_desc"),
        Water_leak_insulation: document.getElementById("Water_leak_insulation"),
        Water_leak_insulation_desc: document.getElementById("Water_leak_insulation_desc"),
        Interior_exterior: document.getElementById("Interior_exterior"),
        Interior_exterior_desc: document.getElementById("Interior_exterior_desc"),

    };

    function updateTexts() {
        document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = currentLang;

        for (const key in elements) {
            if (elements[key]) {
                if (key === "title_hero_1") {
                    elements[key].innerHTML = translations[currentLang][key];
                } else {
                    elements[key].textContent = translations[currentLang][key];
                }
            }
        }

        document.querySelectorAll(".dropdown-menu .truncate-text").forEach(item => {
            const maxLength = 20;
            const fullText = translations[currentLang][item.id] || item.getAttribute("data-full-text") || item.textContent;
            item.setAttribute("data-full-text", fullText);
            item.textContent = fullText.length > maxLength ? fullText.substring(0, maxLength) + "..." : fullText;
        });
        sortDropdownItems();

        if (elements.dropdownMenu) {
            elements.dropdownMenu.style.direction = currentLang === "ar" ? "rtl" : "ltr";
            elements.dropdownMenu.style.textAlign = currentLang === "ar" ? "right" : "left";
        }
    }


    langBtn.addEventListener("click", function (event) {
        event.preventDefault();
        currentLang = currentLang === "en" ? "ar" : "en";
        localStorage.setItem('lang', currentLang);
        updateTexts();
    });

    function sortDropdownItems() {
        const dropdownMenu = document.querySelector(".dropdown-menu");
        if (!dropdownMenu) return;
        let items = Array.from(dropdownMenu.children);
        items.sort((a, b) => {
            const textA = (translations[currentLang][a.querySelector("a").id] || a.textContent).trim();
            const textB = (translations[currentLang][b.querySelector("a").id] || b.textContent).trim();
            return textA.localeCompare(textB, currentLang === "ar" ? "ar" : "en");
        });
        items.forEach(item => dropdownMenu.appendChild(item));
    }

    updateTexts();
});

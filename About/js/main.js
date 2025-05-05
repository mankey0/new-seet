
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
            lang: "ع",
            title_hero_1: ' about&nbsp;<span>us</span>',
            desc_hero_1: "We ensure top cleaning and disinfection standards using advanced equipment and eco-friendly materials for a safe environment.",
            about_title: "about_title",
            about_desc: `"Seet" is a pioneering, specialized, and innovative company in deep
                                cleaning, pest control, and maintenance.
                                Established after extensive market research in Saudi Arabia, "Seet" aims to set new,
                                creative, and advanced
                                standards and services that distinguish our offerings from those of other companies.
                                We take pride in providing high-quality services to residential and commercial sectors,
                                as well as exhibitions and
                                events. "Seet" remains at the forefront of its specialized fields by adopting the latest
                                technologies available in the
                                Saudi labor marke`,
            read_more_about: "read more",
            title_services: "our services",
            service_title_1: "Pool cleaning",
            service_title_2: "Floor and carpet care",
            service_title_3: "Cleaning all units",
            service_title_4: "Stone facade cleaning",
            service_title_5: "Cleaning and maintaining high surfaces",
            service_title_6: "Tile and marble polishing",
            read_more_service: "read more",
            desc_footer: `Seet Saudi - Providing top-quality cleaning services with professionalism and
                    reliability. We ensure spotless spaces with eco-friendly solutions and expert care. Contact us for a
                    cleaner, healthier environment.`,
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
            about_title: "about us",
            about_desc: `"Seet" is a pioneering, specialized, and innovative
                                company in deep
                                cleaning, pest control, and maintenance.
                                Established after extensive market research in Saudi Arabia, "Seet" aims to set new,
                                creative, and advanced
                                standards and services that distinguish our offerings from those of other companies.
                                We take pride in providing high-quality services to residential and commercial sectors,
                                as well as exhibitions and
                                events. "Seet" remains at the forefront of its specialized fields by adopting the latest
                                technologies available in the
                                Saudi labor market`,
            standards_title: "our standards",
            safety: "safety",
            quality: "quality",
            honesty: "honesty",
            Commitment: "Commitment",
            choose_title: "why you choose us",
            choose_desc: `we use environmentally friendly strategies to safely
                        manage
                        cleaning and pest control businesses and use the latest
                        methods in maintenance services to ensure the highest quality`,
            desc_point_1: `A dedicated team executes the services according to this customized plan.`,
            desc_point_2: `Our quality department conducts an internal audit to ensure that the
                        required standards are met.`,
            desc_point_3: `Careful consideration is given to sensitive areas and surfaces on which
                        materials are used and handling them with high-quality tools, materials, and
                        competencies to ensure the perfect result`,
        },
        ar: {
            home: "الرئيسية",
            about: "من نحن",
            services: "خدماتنا",
            contact: "اتصل بنا",
            menu: "القائمة",
            lang: "EN",
            title_hero_1: 'صيت&nbsp;<span>السعودية</span>',
            desc_hero_1: "نحن نضمن أعلى معايير التنظيف والتعقيم باستخدام معدات متطورة ومواد صديقة للبيئة لبيئة آمنة.",
            about_title: "من نحن",
            about_desc: `"صيت" هي شركة رائدة ومتخصصة ومبتكرة في مجال التنظيف العميق، ومكافحة الحشرات، والصيانة.
                            تأسست بعد دراسة سوقية معمقة في المملكة العربية السعودية، وتهدف إلى تقديم معايير وخدمات جديدة ومبتكرة ومتقدمة تميزها عن الشركات الأخرى.
                            نفتخر بتقديم خدمات عالية الجودة للقطاعات السكنية والتجارية، بالإضافة إلى المعارض والفعاليات.
                            تظل "صيت" في طليعة مجالاتها المتخصصة من خلال تبني أحدث التقنيات المتاحة في سوق العمل السعودي.`,
            read_more_about: "اقرأ المزيد",
            title_services: "خدمـــاتنا",
            service_title_1: "تنظيف المسابح",
            service_title_2: "العناية بالأرضيات والسجاد",
            service_title_3: "تنظيف جميع الوحدات",
            service_title_4: "تنظيف الواجهات الحجرية",
            service_title_5: "تنظيف وصيانة الأسطح العالية",
            service_title_6: "تلميع البلاط والرخام",
            read_more_service: "اقرأ المزيد",
            desc_footer: `صيت السعودية – نقدم خدمات تنظيف عالية الجودة باحترافية وموثوقية.
                        نضمن لك مساحات نظيفة باستخدام حلول صديقة للبيئة وعناية خبرائنا. تواصل معنا للحصول على بيئة أنظف وأكثر صحة.`,
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
            about_title: "من نحن",
            about_desc: `صيت هي شركة رائدة ومتخصصة ومبتكرة في مجالات التنظيف العميق، ومكافحة الحشرات، والصيانة.
                        تأسست بعد إجراء بحث سوقي مكثف في المملكة العربية السعودية،
                        وتهدف إلى وضع معايير وخدمات جديدة،
                        إبداعية ومتطورة، تميزنا عن الشركات الأخرى.
                        نحن نفخر بتقديم خدمات عالية الجودة للقطاعات السكنية والتجارية، بالإضافة إلى المعارض والفعاليات.
                        وتبقى صيت في طليعة مجالاتها المتخصصة من خلال تبني أحدث التقنيات المتاحة في سوق العمل السعودي.`,
            standards_title: "معــــــاييرنا",
            safety: "الامانة",
            quality: "الجودة",
            honesty: "الامانة",
            Commitment: "الالتزام",
            choose_title: "لماذا تختارنا",
            choose_desc: " نستخدم استراتيجيات صديقة للبيئة لإدارة أعمال التنظيف ومكافحة الحشرات بشكل آمن، ونستخدم أحدث الطرق في خدمات الصيانة لضمان أعلى مستوى من الجودة.",
            desc_point_1: "يقوم فريق مخصص بتنفيذ الخدمات وفقًا لهذا الخطة المخصصة.",
            desc_point_2: "إدارة الجودة لدينا تقوم بإجراء تدقيق داخلي لضمان تحقيق المعايير المطلوبة.",
            desc_point_3: "يتم إعطاء اهتمام دقيق للمناطق الحساسة والأسطح التي تُستخدم عليها المواد، ويتم التعامل معها باستخدام أدوات ومواد عالية الجودة وكفاءات متخصصة لضمان النتيجة المثالية.",
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
        lang: langBtn,
        title_hero_1: document.getElementById("title_hero_1"),
        desc_hero_1: document.getElementById("desc_hero_1"),
        title_services: document.getElementById("title_services"),
        service_title_1: document.getElementById("service_title_1"),
        service_title_2: document.getElementById("service_title_2"),
        service_title_3: document.getElementById("service_title_3"),
        service_title_4: document.getElementById("service_title_4"),
        service_title_5: document.getElementById("service_title_5"),
        service_title_6: document.getElementById("service_title_6"),
        read_more_service: document.getElementById("read_more_service"),
        desc_footer: document.getElementById("desc_footer"),
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
        about_title: document.getElementById("about_title"),
        about_desc: document.getElementById("about_desc"),
        standards_title: document.getElementById("standards_title"),
        safety: document.getElementById("safety"),
        quality: document.getElementById("quality"),
        honesty: document.getElementById("honesty"),
        Commitment: document.getElementById("Commitment"),
        choose_title: document.getElementById("choose_title"),
        choose_desc: document.getElementById("choose_desc"),
        desc_point_1: document.getElementById("desc_point_1"),
        desc_point_2: document.getElementById("desc_point_2"),
        desc_point_3: document.getElementById("desc_point_3"),
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
// *******************************************


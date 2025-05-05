document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("splash-screen").classList.add("hidden");
    }, 1000);

    window.addEventListener("scroll", function () {
        var nav = document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY > 0);
    });

});

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const btns = document.querySelectorAll(".nav-btn");
const videoSlides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content-wrapper");

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    videoSlides.forEach((videoSlide) => {
        videoSlide.classList.remove("active");
    });
    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    videoSlides[manual].classList.add("active");
    contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
            title_hero_1: 'SEET &nbsp;<span>Saudia</span>',
            desc_hero_1: "We ensure top cleaning and disinfection standards using advanced equipment and eco-friendly materials for a safe environment.",
            title_hero_2: "Comprehensive Cleaning &nbsp;<span>Solutions</span>",
            desc_hero_2: "We offer complete cleaning services for homes, offices, hotels, hospitals, and commercial complexes with quality and professionalism.",
            title_hero_3: " Professional &nbsp; <span>Team</span>",
            desc_hero_3: "We offer complete cleaning services for homes, offices, hotels, hospitals, and commercial complexes with quality and professionalism.",
            about_title: "about us",
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
            tile_polishing: "Tile and marble polishing"

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
            title_hero_2: " حلول &nbsp;<span>التنظيف</span>&nbsp; الشاملة ",
            desc_hero_2: "نحن نقدم خدمات تنظيف متكاملة للمنازل والمكاتب والفنادق والمستشفيات والمجمعات التجارية بجودة واحترافية.",
            title_hero_3: "فريق &nbsp;<span>احترافي</span>",
            desc_hero_3: "نحن نقدم خدمات تنظيف متكاملة للمنازل والمكاتب والفنادق والمستشفيات والمجمعات التجارية بجودة واحترافية.",
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
            desc_footer: `صيت السعودية – نقدم خدمات تنظيف عالية الجودة باحترافية وموثوقية. نضمن لك مساحات نظيفة باستخدام حلول صديقة للبيئة وعناية خبرائنا. تواصل معنا للحصول على بيئة أنظف وأكثر صحة.`,
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
            tile_polishing: "تلميع البلاط والرخام"
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
        title_hero_2: document.getElementById("title_hero_2"),
        desc_hero_2: document.getElementById("desc_hero_2"),
        title_hero_3: document.getElementById("title_hero_3"),
        desc_hero_3: document.getElementById("desc_hero_3"),
        about_title: document.getElementById("about_title"),
        about_desc: document.getElementById("about_desc"),
        read_more_about: document.getElementById("read_more_about"),
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
        tile_polishing: document.getElementById("tile_polishing")
    };

    function updateTexts() {
        document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = currentLang;

        for (const key in elements) {
            if (elements[key]) {
                if (key === "title_hero_1" || key === "title_hero_2" || key === "title_hero_3") {
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

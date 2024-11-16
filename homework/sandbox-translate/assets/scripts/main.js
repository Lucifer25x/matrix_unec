// Initialize AOS
AOS.init();

// Translate
const data = {
    en: {
        navbar: [
            "Demos",
            "Pages",
            "Projects",
            "Blog",
            "Blocks",
            "Documentation"
        ],
        main: [
            "We bring solutions to make life <span>easier</span>",
            "We are a creative company that focuses on long term relationships with customers.",
            "Read More"
        ],
        cards: [
            "Content Marketing",
            "Social Engagement",
            "Identity & Branding",
            "Product Design",
            "Learn More"
        ],
        why: [
            "WHY CHOOSE SANDBOX?",
            "Here are a few reasons why our customers choose Sandbox.",
            [
                "Collect Ideas",
                "Data Analysis",
                "Finalize Product"
            ]
        ],
        collect: "Collect Ideas",
        projects: [
            "LATEST PROJECTS",
            "Check out some of our awesome projects with creative ideas and great design."
        ],
        trusted: [
            "JOIN OUR COMMUNITY",
            "We are trusted by over 5000+ clients. Join them now and grow your business.",
            "Get Started"
        ]
    },
    az: {
        navbar: [
            "Demolar",
            "Səhifələr",
            "Proyektlər",
            "Bloq",
            "Bloklar",
            "Dokumentasiya"
        ],
        main: [
            "Biz həyatı daha <span>asan</span> etmək üçün həllər gətiririk",
            "Biz müştərilərlə uzun müddətli əlaqələrə fokuslanmış bir şirkətik.",
            "Daha çox oxu"
        ],
        cards: [
            "Kontent Marketinqi",
            "Sosial İştirak",
            "Kimlik & Brendinq",
            "Produkt dizaynı",
            "Daha çox öyrən"
        ],
        why: [
            "NİYƏ SANDBOX?",
            "Müştərilərimizin niyə Sandbox seçməsinin bəzi səbəbləri",
            [
                "İdeyaları Toplama",
                "Data Analizi",
                "Produktu Yekunlaşdırma"
            ]
        ],
        collect: "İdeyaları Toplama",
        projects: [
            "SON PROYEKTLƏR",
            "Kreativ ideyalarla və möhtəşəm dizaynla heyrətamiz proyektlərimizi gözdən keçirin."
        ],
        trusted: [
            "BİRLİYİMİZƏ QOŞULUN",
            "Biz 5000+ müştəri tərəfindən güvənilirik. Onlara qoşularaq biznesini genişləndirin.",
            "Başlayın"
        ]
    }
}

function changeLang(lang){
    const translatedData = data[lang];
    
    // Translate navbar part
    const navbar_elements = document.querySelectorAll('.navbar_element');
    navbar_elements.forEach((el, ind) => {
      el.textContent = translatedData.navbar[ind];  
    })

    // Translate main part
    const main_elements = document.querySelectorAll(".main_element");
    main_elements.forEach((el, ind) => {
        el.innerHTML = translatedData.main[ind];
    })

    // Translate cards part
    const card_elements = document.querySelectorAll('.card_element');
    card_elements.forEach((el, ind) => {
        el.textContent = translatedData.cards[ind];
    })

    // Translate why part
    document.querySelector('.why_sub').textContent = translatedData.why[0]
    document.querySelector('.why_title').textContent = translatedData.why[1];
    const why_parts = document.querySelectorAll('.why_part');
    why_parts.forEach((el, ind) => {
        el.textContent = translatedData.why[2][ind];
    })

    // Translate collect part
    document.querySelector('.collect_title').textContent = translatedData.collect;

    // Translate projects part
    document.querySelector('.projects_title').textContent = translatedData.projects[0];
    document.querySelector('.projects_desc').textContent = translatedData.projects[1];

    // Translate trusted part
    const trusted_elements = document.querySelectorAll('.trusted_part');
    trusted_elements.forEach((el, ind) => {
        el.textContent = translatedData.trusted[ind];
    })
}

// Translate button
const translate_btn = document.getElementById('translate');
translate_btn.addEventListener('click', () => {
    if(translate_btn.textContent === 'AZ'){
        changeLang("az");
        translate_btn.textContent = 'EN';
        localStorage.setItem('lang', 'az');
    } else {
        changeLang("en");
        translate_btn.textContent = 'AZ';
        localStorage.setItem('lang', 'en');
    }
})

// Load the language automatically
window.addEventListener('load', () => {
    const lang = localStorage.getItem('lang');
    if(lang.length > 0){
        if(lang == 'az'){
            translate_btn.textContent = 'EN';
        }
        changeLang(lang);
    }
})
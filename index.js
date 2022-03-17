
    // NAVBAR
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");
    const upperSection = document.querySelector("#upper-section");
    const lowerSection = document.querySelector("#lower-section");

    hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    upperSection.classList.toggle("opacity");
    lowerSection.classList.toggle("opacity");
    })

    document.querySelectorAll(".nav-links").forEach(
    n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        upperSection.classList.remove("opacity");
        lowerSection.classList.remove("opacity");
    }))

    // LANGUAGE SELECTOR MODAL 
    function selectorMethod(){
    const selectorList = document.querySelector(".selector-list");
    selectorList.classList.toggle("selectorActive");
    }

    //  lANGUAGE CHANGE FUNCTION
    function languageChange(language){
    const languageValue = document.getElementById("languageValue");
    languageValue.innerHTML = Translations[language].languageValue;
 
     // NAVBAR VARIABLES
     const profit = document.getElementById("profit");
     const Product = document.getElementById("Product");
     const Contact = document.getElementById("Contact");
     const faq = document.getElementById("faq");
     const navButton = document.getElementById("navButton");

     // NAVBAR LANGUAGE CHANGE
     profit.innerHTML = Translations[language].profit;
     Product.innerHTML =  Translations[language].Product;
     Contact.innerHTML = Translations[language].Contact;
     faq.innerHTML = Translations[language].faq;
     navButton.innerHTML = Translations[language].navButton;
 
     // UPPER SECTION VARIABLES
     const upperTxt = document.getElementById("upperTxt");
     const innerTxt1 = document.getElementById("innerTxt-1");
     const innerTxt2 = document.getElementById("innerTxt-2");

     // UPPER SECTION LANGUAGE CHANGE 
     upperTxt.innerHTML = Translations[language].upperTxt;
     innerTxt1.innerHTML = Translations[language].innerTxt1;
     innerTxt2.innerHTML = Translations[language].innerTxt2;
 
     // LOWER SECTION VARIABLES
     const saveTxt = document.getElementById("saveTxt");
     const billTxt = document.getElementById("billTxt");
     const boxTxt1 = document.getElementById("boxTxt1");
     const boxTxt2 = document.getElementById("boxTxt2");
     const boxTxt3 = document.getElementById("boxTxt3");
     const boxTxt4 = document.getElementById("boxTxt4");
     const lowTxt1 = document.getElementById("lowTxt1");
     const lowTxt2 = document.getElementById("lowTxt2");
     const lowTxt3 = document.getElementById("lowTxt3");
     const lowTxt4 = document.getElementById("lowTxt4");
     const lowTxt5 = document.getElementById("lowTxt5");
     const lowTxt6 = document.getElementById("lowTxt6");

     // LOWER SECTION LANGUAGE CHANGE 
     saveTxt.innerHTML = Translations[language].saveTxt;
     billTxt.innerHTML = Translations[language].billTxt;
     boxTxt1.innerHTML = Translations[language].boxTxt1;
     boxTxt2.innerHTML = Translations[language].boxTxt2;
     boxTxt3.innerHTML = Translations[language].boxTxt3;
     boxTxt4.innerHTML = Translations[language].boxTxt4;
     lowTxt1.innerHTML = Translations[language].lowTxt1;
     lowTxt2.innerHTML = Translations[language].lowTxt2;
     lowTxt3.innerHTML = Translations[language].lowTxt3;
     lowTxt4.innerHTML = Translations[language].lowTxt4;
     lowTxt5.innerHTML = Translations[language].lowTxt5;
     lowTxt6.innerHTML = Translations[language].lowTxt6;
   
     selectorMethod();
 
  }
    // CALCULATOR FUNCTIONALITY 
    const input1 = document.getElementById("input1");

    input1.addEventListener("input", (e)=> {

        
        const newInput1 = e.target.value;

        const input2 = document.getElementById("input2");

        input2.addEventListener("input", (e)=> {
        const newInput2 = e.target.value;

        const lowTxt2 = document.getElementById("lowTxt2");
        const calculator = 12 * (newInput1 * newInput2 - newInput1 * newInput2 / 5);

        lowTxt2.innerHTML = calculator + " zł";
        });
    });

    // SCROLL REVEAL ANIMATION 

    ScrollReveal({ 
        distance:"50px",
        duration: 1000,
        delay:100
    });

    ScrollReveal().reveal('.nav-item',  { delay: 0, interval:100 });
    ScrollReveal().reveal('.logo-icon', { delay: 800, origin: "left" });
    ScrollReveal().reveal('.selector', { delay: 800, origin: "right" });
    ScrollReveal().reveal('.nav-button', { delay: 400, origin: "right" });
    ScrollReveal().reveal('.hamburger', { delay: 0, origin: "right" });
    ScrollReveal().reveal('.upperTxt', { delay: 1200, origin: "bottom" });
    ScrollReveal().reveal('.bottle-img', { delay: 1800, origin:"bottom" });
    ScrollReveal().reveal('.middleTxt-container', { delay: 400, origin:"top" });
    ScrollReveal().reveal('.innerTxt-1', { delay: 800, origin:"right" });
    ScrollReveal().reveal('.innerTxt-2', { delay: 800, origin:"left" });
    ScrollReveal().reveal('.save-text', { delay: 400, origin:"left" });
    ScrollReveal().reveal('.bill-text', { delay: 400, origin:"right" });
    ScrollReveal().reveal('.inner-text', { delay: 400, origin:"bottom" });
    ScrollReveal().reveal('.innerBox', { delay: 600, origin:"bottom" });
    ScrollReveal().reveal('.cal-middle', { delay: 400, origin:"top" });
    ScrollReveal().reveal('.middle-text', { delay: 600, interval: 200 });
    ScrollReveal().reveal('.lower-text', { delay: 400, origin:"right" });
    ScrollReveal().reveal('.lower-button', { delay: 400, origin:"bottom" });
    ScrollReveal().reveal('.lower-text2', { delay: 400, origin:"left" });
    ScrollReveal().reveal('.bag-img', { delay: 800, origin:"right" });



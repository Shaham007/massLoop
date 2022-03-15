// NAVBAR

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const upperSection = document.querySelector("#upper-section");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    upperSection.classList.toggle("opacity");
})

document.querySelectorAll(".nav-links"),forEach(
    n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        upperSection.classList.remove("opacity");
    }))

function selectorFunc(){
    const selectorList = document.querySelector(".selector-list");
    selectorList.classList.toggle("selectorActive");
}

// ENGLISH LANGUAGE

 function engChng(){

    const languageValue = document.getElementById("languageValue");

    const upperTxt = document.getElementById("upperTxt");
    const innerTxt1 = document.getElementById("innerTxt-1");
    const innerTxt2 = document.getElementById("innerTxt-2");

    const profit = document.getElementById("profit");
    const Product = document.getElementById("Product");
    const Contact = document.getElementById("Contact");
    const faq = document.getElementById("faq");
    const navButton = document.getElementById("navButton");

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

    languageValue.innerHTML = "ENG";

    upperTxt.innerHTML = "A smart crusher that turns glass into sand.";
    innerTxt1.innerHTML = "Pay 5 times less for the disposal of glass waste.";
    innerTxt2.innerHTML = "The crusher reduces the size of glass rubbish, and you pay FIVE-TIMES-NO lower bills for their disposal.";

    profit.innerHTML = "Count Profits";
    Product.innerHTML = "Products";
    Contact.innerHTML = "Contact";
    faq.innerHTML = "FAQ";
    navButton.innerHTML = "BUY";

    saveTxt.innerHTML = "How much will you save?";
    billTxt.innerHTML = "The bill is simple.";
    boxTxt1.innerHTML = "How many glass containers";
    boxTxt2.innerHTML = "do you fill monthly";
    boxTxt3.innerHTML = "How much do you pay to export one";
    boxTxt4.innerHTML = "glass container?";
    lowTxt1.innerHTML = "Thanks to the crusher you will save";
    lowTxt2.innerHTML = "PLN 900";
    lowTxt3.innerHTML = "annually.";
    lowTxt4.innerHTML = "What will you spend the saved cash on?";
    lowTxt5.innerHTML = "BUY PLN 8499";
    lowTxt6.innerHTML = "Sounds good? Be careful. We're just getting started!";


 }
 
// GERMAN LANGUAGE

 function gerChng(){

    const languageValue = document.getElementById("languageValue");
    

    const upperTxt = document.getElementById("upperTxt");
    const innerTxt1 = document.getElementById("innerTxt-1");
    const innerTxt2 = document.getElementById("innerTxt-2");
  
    const profit = document.getElementById("profit");
    const Product = document.getElementById("Product");
    const Contact = document.getElementById("Contact");
    const faq = document.getElementById("faq");
    const navButton = document.getElementById("navButton");

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
    

    languageValue.innerHTML = "DE";

    upperTxt.innerHTML = "Ein intelligenter Brecher, der Glas in Sand verwandelt.";
    innerTxt1.innerHTML = "Zahlen Sie 5-mal weniger für die Entsorgung von Glasabfällen.";
    innerTxt2.innerHTML = "Der Crusher zerkleinert den Glasabfall und Sie bezahlen FÜNF MAL NIE weniger Rechnungen für deren Entsorgung.";
  
    profit.innerHTML = "Zählen Sie Ihre Gewinne";
    Product.innerHTML = "Über das Produkt";
    Contact.innerHTML = "Kontakt";
    faq.innerHTML = "FAQ";
    navButton.innerHTML = "KAUFEN";

    saveTxt.innerHTML = "Wie viel werden Sie sparen?";
    billTxt.innerHTML = "Die Rechnung ist einfach.";
    boxTxt1.innerHTML = "Wie viele Glasbehälter";
    boxTxt2.innerHTML = "füllst du monatlich";
    boxTxt3.innerHTML = "Wie viel zahlen Sie für den Export?";
    boxTxt4.innerHTML = "Glas-Container?";
    lowTxt1.innerHTML = "Dank des Brechers sparen Sie";
    lowTxt2.innerHTML = "900 PLN";
    lowTxt3.innerHTML = "jährlich.";
    lowTxt4.innerHTML = "Wofür geben Sie das gesparte Geld aus?";
    lowTxt5.innerHTML = "KAUFEN 8499 PLN";
    lowTxt6.innerHTML = "Klingt gut? Vorsichtig sein. Wir fangen gerade erst an!";
 }
 
// POLISH LANGUAGE

 function plChng(){

    const languageValue = document.getElementById("languageValue");

    const upperTxt = document.getElementById("upperTxt");
    const innerTxt1 = document.getElementById("innerTxt-1");
    const innerTxt2 = document.getElementById("innerTxt-2");
  
    const profit = document.getElementById("profit");
    const Product = document.getElementById("Product");
    const Contact = document.getElementById("Contact");
    const faq = document.getElementById("faq");
    const navButton = document.getElementById("navButton");

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
    

    languageValue.innerHTML = "PL";

    upperTxt.innerHTML = "Inteligentna kruszarka, która zamienia szkło w piasek.";
    innerTxt1.innerHTML = "Płać 5 razy mniej za wywóz odpadów szklanych.";
    innerTxt2.innerHTML = "Kruszarka zmniejsza gabaryty szklanych śmieci, a Ty płacisz PIĘ-CIO-KROT-NIE niższe rachunki za ich wywóz.";

    profit.innerHTML = "Policz zyski";
    Product.innerHTML = "O produkcie";
    Contact.innerHTML = "Kontakt";
    faq.innerHTML = "FAQ";
    navButton.innerHTML = "KUP";

    saveTxt.innerHTML = "Ile zaoszczędzisz?";
    billTxt.innerHTML = "Rachunek jest prosty.";
    boxTxt1.innerHTML = "Ile pojemników na szkło";
    boxTxt2.innerHTML = "zapełniasz miesięcznie?";
    boxTxt3.innerHTML = "Ile płacisz za wywóz jednego";
    boxTxt4.innerHTML = "pojemnika na szkło?";
    lowTxt1.innerHTML = "Dzięki kruszarce zaoszczędzisz";
    lowTxt2.innerHTML = "900 zł";
    lowTxt3.innerHTML = "rocznie";
    lowTxt4.innerHTML = "To na co wydasz zaoszczędzoną gotówkę?";
    lowTxt5.innerHTML = "KUP 8499 zł";
    lowTxt6.innerHTML = "Brzmi dobrze? Uważaj. Dopiero się rozkręcamy!";
 }

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

  
    upperTxt.innerHTML = "A smart crusher that turns glass into sand.";
    innerTxt1.innerHTML = "Pay 5 times less for the disposal of glass waste.";
    innerTxt2.innerHTML = "The crusher reduces the size of glass rubbish, and you pay FIVE-TIMES-NO lower bills for their disposal.";

    profit.innerHTML = "Profit";
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
 
// DUTCH LANGUAGE

 function duChng(){

    const upperTxt = document.getElementById("upperTxt");
    const innerTxt1 = document.getElementById("innerTxt-1");
    const innerTxt2 = document.getElementById("innerTxt-2");
  
    const profit = document.getElementById("profit");
    const Product = document.getElementById("Product");
    const Contact = document.getElementById("Contact");
    const faq = document.getElementById("faq");
    const navButton = document.getElementById("navButton");
    
      upperTxt.innerHTML = "Ein intelligenter Brecher, der Glas in Sand verwandelt.";
      innerTxt1.innerHTML = "Zahlen Sie 5-mal weniger für die Entsorgung von Glasabfällen.";
      innerTxt2.innerHTML = "Kruszarka zmniejsza gabaryty szklanych śmieci, a Ty płacisz PIĘ-CIO-KROT-NIE niższe rachunki za ich wywóz.";
  
      profit.innerHTML = "Zählen Sie Ihre Gewinne";
      Product.innerHTML = "Über das Produkt";
      Contact.innerHTML = "Kontakt";
      faq.innerHTML = "FAQ";
      navButton.innerHTML = "Kaufen";
 }
 
// POLISH LANGUAGE

 function plChng(){
    const upperTxt = document.getElementById("upperTxt");
    const innerTxt1 = document.getElementById("innerTxt-1");
    const innerTxt2 = document.getElementById("innerTxt-2");
  
    const profit = document.getElementById("profit");
    const Product = document.getElementById("Product");
    const Contact = document.getElementById("Contact");
    const faq = document.getElementById("faq");
    const navButton = document.getElementById("navButton");
    
      upperTxt.innerHTML = "Inteligentna kruszarka, która zamienia szkło w piasek.";
      innerTxt1.innerHTML = "Płać 5 razy mniej za wywóz odpadów szklanych.";
      innerTxt2.innerHTML = "Kruszarka zmniejsza gabaryty szklanych śmieci, a Ty płacisz PIĘ-CIO-KROT-NIE niższe rachunki za ich wywóz.";
  
      profit.innerHTML = "Policz zyski";
      Product.innerHTML = "O produkcie";
      Contact.innerHTML = "Kontakt";
      faq.innerHTML = "FAQ";
      navButton.innerHTML = "Kup";
 }

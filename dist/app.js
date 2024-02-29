var _a, _b;
import { product04, product05, productList, section01ImageSource, section02ImageSource, section03ImageSource, section04ImageSource, sectionCardList } from "./FetchObjects/FetchObjects.js";
import { TematicProductListInjection } from "./components/List.js";
import { Section00 } from "./components/Section00.js";
import { Section01 } from "./components/Section01.js";
const slides = document.querySelectorAll('.slides input');
let currentSlide = 0;
function showSlide(index) {
    slides[index].checked = true;
}
(_a = document.getElementById('prev')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});
(_b = document.getElementById('next')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});
const section01 = new Section00(section01ImageSource, 'FURNITURE', '5 Items', 'SectionPattern2');
const section02 = new Section01(section02ImageSource, 'MOST POPULAR', 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.', "SectionPattern1");
const section03 = new Section00(section03ImageSource, 'FURNITURE', '5 Items', 'SectionPattern2_1');
const section04 = new Section01(section04ImageSource, 'MOST POPULAR', 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.', "SectionPattern0");
const cardsThemaList = new TematicProductListInjection();
cardsThemaList.injectCardListC("tematicCard", sectionCardList);
section01.sectionAmount('productList1', productList);
section02.sectionAmount('', product04);
section03.sectionAmount('productList2', productList);
section04.sectionAmount('', product05);

import { product04, product05, productList, section01ImageSource, section02ImageSource, section03ImageSource, section04ImageSource, sectionCardList } from "./FetchObjects/FetchObjects.js";
import { TematicProductListInjection } from "./components/List.js";
import { Section00 } from "./components/Section00.js";
import { Section01 } from "./components/Section01.js";


sessionStorage.setItem('testar o bagui', 'test');


console.log(sessionStorage.getItem('testar o bagui') + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

const slides: NodeListOf<HTMLInputElement> = document.querySelectorAll('.slides input');
    let currentSlide: number = 0;

    function showSlide(index: number): void {
        slides[index].checked = true;
    }

    document.getElementById('prev')?.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    document.getElementById('next')?.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });






const section01 = new Section00(section01ImageSource,'FURNITURE','5 Items','SectionPattern2',)

const section02 = new Section01(section02ImageSource,'MOST POPULAR',
'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',"SectionPattern1")

const section03 = new Section00(section03ImageSource,'FURNITURE','5 Items','SectionPattern2_1',)

const section04 = new Section01(section04ImageSource,'MOST POPULAR',
'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',"SectionPattern0")


const cardsThemaList = new TematicProductListInjection()
cardsThemaList.injectCardListC("tematicCard",sectionCardList);
section01.sectionAmount('productList1',productList);
section02.sectionAmount('',product04);
section03.sectionAmount('productList2',productList)
section04.sectionAmount('',product05);



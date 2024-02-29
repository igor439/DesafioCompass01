import { Blog } from "../models/Blog.js";
import { Product } from "../models/Product.js";
import { SectionCard } from "../models/SectionCard.js";


export const product05 = new Product('English Department','15 Sales',6.48,"/src/assets/images/product05.png",3)
export const product04 = new Product('English Department',' ',6.48,"/src/assets/images/product04.png",3)
export const blog = new Blog("A","b",'c',32);


export const productList:Product[] = [new Product('Graphic Design','English Department',6.48,"/src/assets/images/product01.png",4),
new Product('Graphic Design','English Department',6.48,"/src/assets/images/product02.png",4),
new Product('Graphic Design','English Department',6.48,"/src/assets/images/product03.png",4),
new Product('Graphic Design','English Department',6.48,"/src/assets/images/product01.png",4),
new Product('Graphic Design','English Department',6.48,"/src/assets/images/product02.png",4),
new Product('Graphic Design','English Department',6.48,"/src/assets/images/product03.png",4),

]



export const section04ImageSource = {
    src:"/src/assets/images/imageSection04.png",
    alt:"A woman enjoying one of our delicious products, a burger"
  }


  export const section02ImageSource = {
    src:"/src/assets/images/imageSection02.png",
    alt:"A woman enjoying one of our delicious products, a burger"
  }

  export const section01ImageSource = {
    src:"/src/assets/images/imageSection01.png",
    alt:"A woman enjoying one of our delicious products, a burger"
  }

  export const section03ImageSource = {
    src:"/src/assets/images/imageSection03.jpg",
    alt:"A woman enjoying one of our delicious products, a burger"
  }



  export const sectionCardList:SectionCard[] = [new SectionCard("Your Space","Unique Life","/src/assets/images/product01.png"),
  new SectionCard("Ends Today","Elements Style","/src/assets/images/product02.png"),
  new SectionCard("Ends Today","Elements Style","/src/assets/images/product03.png"),
]
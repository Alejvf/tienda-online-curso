const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailIcon = document.querySelector('.product-details-close');
const menuShopping = document.querySelector('.shopping-cart1');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-details');
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleHamMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);
productDetailIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    const isMenuShoppingClose = menuShopping.classList.contains('inactive');

    desktopMenu.classList.toggle('inactive');

    if (!isMenuShoppingClose){
        menuShopping.classList.add('inactive');
    }
}

function toggleHamMenu() {
    const isMenuShoppingClose = menuShopping.classList.contains('inactive');

    mobileMenu.classList.toggle('inactive');

    if (!isMenuShoppingClose){
        menuShopping.classList.add('inactive');
    }

    closeProductDetail();
}

function toggleCarritoMenu() {
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    const isProductDetailClose = productDetail.classList.contains('inactive');

    menuShopping.classList.toggle('inactive');

    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    if (!isProductDetailClose){
        productDetail.classList.add('inactive');
    }

    if (!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }

}

function imgProductDetail() {
    menuShopping.classList.add('inactive');
    productDetail.classList.remove('inactive');
}

function closeProductDetail(){
    productDetail.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/5197107/pexels-photo-5197107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});

productList.push({
    name: 'TV',
    price: '300',
    image: 'https://images.pexels.com/photos/5197107/pexels-photo-5197107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    img.addEventListener('click', imgProductDetail);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfodiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfodiv.appendChild(productPrice);
    productInfodiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');

    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './assets/Platzi_YardSale_Icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfodiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard)
}
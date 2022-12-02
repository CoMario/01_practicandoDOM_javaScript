const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenuCloseIcon = document.querySelector('.desktop-menu-close');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
desktopMenuCloseIcon.addEventListener('click', closeDesktopMenuAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    desktopMenu.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

function closeDesktopMenuAside() {
    shoppingCartContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Frijol',
    price: 30.00,
    image: 'https://media.istockphoto.com/id/908017254/es/foto/leguminosas-frijol-pinto-primer-plano-de-los-granos-usar-de-fondo.jpg?s=612x612&w=0&k=20&c=Hs90BM2lENupllxF6zgTLbqabah3wJruxh4VsxQiFQo=',
});
productList.push({
    name: 'Pimiento',
    price: 25.00,
    image: 'https://images.pexels.com/photos/48840/pexels-photo-48840.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Banana',
    price: 8.00,
    image: 'https://media.istockphoto.com/id/657971340/es/foto/bunch-of-bananas.jpg?s=612x612&w=0&k=20&c=7TuPC8TAWvvXXZrL7v9eQbvxhyzDQjq4y_G_RWCektg=',
});
productList.push({
    name: 'Queso',
    price: 20.00,
    image: 'https://images.pexels.com/photos/4187778/pexels-photo-4187778.jpeg?auto=compress&cs=tinysrgb&w=600=',
});
productList.push({
    name: 'Avena',
    price: 10.00,
    image: 'https://images.pexels.com/photos/4725726/pexels-photo-4725726.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Mango',
    price: 15.00,
    image: 'https://images.pexels.com/photos/2363345/pexels-photo-2363345.jpeg?auto=compress&cs=tinysrgb&w=600',
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
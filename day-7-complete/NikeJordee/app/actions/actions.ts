// actions/actions.ts
import { Product } from '@/types/product';


export const addToWishlist = (product: Product) => {
    const wishlist: Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const existingProductIndex = wishlist.findIndex(item => item._id === product._id);

    if (existingProductIndex === -1) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
};

export const removeFromWishlist = (productId: string) => {
    let wishlist: Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    wishlist = wishlist.filter(item => item._id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
};

export const getWishlistItems = (): Product[] => {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
};

export const moveAllToCart = () => {
    const wishlist: Product[] = getWishlistItems();
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

    wishlist.forEach(product => {
        const existingProductIndex = cart.findIndex(item => item._id === product._id);
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', '[]');
};


export const addToCart = (product: Product) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProductIndex = cart.findIndex(item => item._id === product._id);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (productId: string) => {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => item._id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
};

export const updateCartQuantity = (productId: string, quantity: number) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex(item => item._id === productId);

    if (productIndex > -1) {
        cart[productIndex].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};

export const getCartItems = (): Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
};


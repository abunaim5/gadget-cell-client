type ProductResponseType = {
    _id: string;
    name: string;
    brand: string;
    image: string;
    description: string;
    price: number;
    old_price: number;
    category: string;
    ratings: number;
    createdAt: string;
};

type CartProductResponseType = {
    _id: string;
    productId: string;
    name: string;
    brand: string;
    image: string;
    description: string;
    price: number;
    old_price: number;
    category: string;
    ratings: number;
    createdAt: string;
}

type CartProductListType = {
    productId: string;
    name: string;
    brand: string;
    image: string;
    description: string;
    price: number;
    old_price: number;
    category: string;
    ratings: number;
    createdAt: string;
}

export type { ProductResponseType, CartProductResponseType, CartProductListType }
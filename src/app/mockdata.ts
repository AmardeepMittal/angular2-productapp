
import { Category, Product } from "app/app.models";

export const CATEGORIES: Category[] = [
    {id: 1, name: 'Electronics'},
    {id: 2, name: 'Farming' },
    {id: 3, name: 'Toys'}
];

export const PRODUCTS: Product[] = [
    {
        id:1,
        name: 'LG OLED TV',
        code: 'E1',
        description: 'LG 55inch OLED TV',
        price: 499.99,
        releaseData: '02/12/2012',
        starRating: 3.0,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/G/01/electronics/LG/Aplus2012/cs460.jpg',
        category: 'Electronics'
    },{
        id:1,
        name: 'Sony UHD TV',
        code: 'E2',
        description: 'Sony 65inch UHD TV',
        price: 550.20,
        releaseData: '06/12/2013',
        starRating: 3.4,
        imageUrl: 'https://heavyeditorial.files.wordpress.com/2015/11/sony-cm-4k.jpg?quality=65&strip=all&strip=all',
        category: 'Electronics'
    },{
        id:1,
        name: 'Sony UHD Curved TV',
        code: 'E3',
        description: 'Sony 65inch UHD Curved TV',
        price: 499.80,
        releaseData: '06/12/2014',
        starRating: 3.0,
        imageUrl: 'https://heavyeditorial.files.wordpress.com/2015/11/sony-cm-4k.jpg?quality=65&strip=all&strip=all',
        category: 'Electronics'
    },{
        id:1,
        name: 'Samsung OLED TV',
        code: 'E4',
        description: 'Samsung 65inch OLED TV',
        price: 800,
        releaseData: '02/12/2012',
        starRating: 3.0,
        imageUrl: 'http://res.cloudinary.com/rfellc/image/upload/c_scale,w_800/v1444145191/how-to-clean-a-flat-screen-tv-samsung-tv_mgxvcj.jpg',
        category: 'Electronics'
    },
    {
        id:1,
        name: 'Samsung LCD Flat Screen TV',
        code: 'E5',
        description: 'Samsung LCD Flat Screen TV',
        price: 299.99,
        releaseData: '02/12/2012',
        starRating: 3.0,
        imageUrl: 'http://res.cloudinary.com/rfellc/image/upload/c_scale,w_800/v1444145191/how-to-clean-a-flat-screen-tv-samsung-tv_mgxvcj.jpg',
        category: 'Electronics'
    },


    {
        id: 1,
        name: 'Leaf Rake',
        code: 'F1',
        description: 'Leaf rake with 48-inch wooden handle.',
        price: 19.94,
        releaseData: '02/12/2012',
        starRating: 3.0,
        imageUrl: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
        category: 'Farming'
    }, {
        id: 1,
        name: 'Garden Cart',
        code: 'F2',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        releaseData: '02/12/2012',
        starRating: 3.4,
        imageUrl: 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
        category: 'Farming'
    }, {
        id: 1,
        name: 'Hammer',
        code: 'F3',
        description: 'Curved claw steel hammer',
        price: 8.9,
        releaseData: '02/12/2012',
        starRating: 4.8,
        imageUrl: 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
        category: 'Farming'
    }, {
        id: 1,
        name: 'Saw',
        code: 'F4',
        description: '15-inch steel blade hand saw',
        price: 11.55,
        releaseData: '02/12/2012',
        starRating: 3.7,
        imageUrl: 'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png',
        category: 'Farming'
    }, {
        id: 1,
        name: 'Samsung LCD Flat Screen TV',
        code: 'F5',
        description: 'Samsung LCD Flat Screen TV',
        price: 35.87,
        releaseData: '02/12/2012',
        starRating: 4.6,
        imageUrl: 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png',
        category: 'Farming'
    }
];

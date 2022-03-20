import bcrypt from 'bcryptjs'

const data = {
    users:[
        {
            name:'Ender',
            email:'ender@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name:'Client',
            email:'test@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],

    products: [
        {
            //_id: '1',
            name: 'Nike Slim shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p1.jpg', //679px x 829px
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 5.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            //_id: '2',
            name: 'Adidas Slim shirt',
            slug: 'adidas-slim-shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
           // _id: '3',
            name: 'Nike Slim pant',
            slug: 'nike-slim-pant',
            category: 'Pants',
            image: '/images/p3.jpg',
            price: 80,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            //_id: '4',
            name: 'Adidas Slim pant',
            slug: 'adidas-slim-pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 90,
            countInStock: 10,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
    ]
}

export default data;
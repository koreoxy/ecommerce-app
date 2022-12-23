import bcryptjs from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Brian',
      email: 'admin@example.com',
      password: bcryptjs.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Toni',
      email: 'toni@example.com',
      password: bcryptjs.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Juki',
      email: 'user@example.com',
      password: bcryptjs.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Sayur Sawi',
      slug: 'sayur-sawi',
      category: 'Sayur',
      image: '/images/sawi.jpg',
      price: 10,
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'Sayur sawi segar',
    },
    {
      name: 'Kacang Panjang',
      slug: 'kacang-panjang',
      category: 'Sayur',
      image: '/images/kacangpanjang.jpg',
      price: 20,
      rating: 3.5,
      numReviews: 8,
      countInStock: 20,
      description: 'Kacang panjan kualitas bagus',
    },
    {
      name: 'Buncis',
      slug: 'buncis',
      category: 'Sayur',
      image: '/images/buncis.jpg',
      price: 10,
      rating: 5.5,
      numReviews: 8,
      countInStock: 50,
      description: 'Buncis segar',
    },
    {
      name: 'Pakcoy',
      slug: 'pakcoy',
      category: 'Sayur',
      image: '/images/pakcoy.jpg',
      price: 10,
      rating: 5.5,
      numReviews: 8,
      countInStock: 50,
      description: 'Sayur Pakcoy segar',
    },
  ],
};

export default data;

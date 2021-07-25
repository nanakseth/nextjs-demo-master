import { getTodayDate, getYesterdayDate } from '../../@jumbo/utils/dateHelper';

export const crypto = {
  wallets: [
    { label: 'BTC', value: 74, rate: 8.75, color: '#89CB00' },
    { label: 'RPL', value: 18, rate: 1.23, color: '#FF8800' },
    { label: 'LTE', value: 8, rate: 0.71, color: '#E31D41' },
  ],
  orders: [
    {
      orderId: 1,
      currency: '0.24 BTC',
      rate: '1 BTC = $740',
      date: getTodayDate(),
      fee: '-$2.33',
    },
    {
      orderId: 2,
      currency: '0.34 RPL',
      rate: '1 BTC = $740',
      date: getYesterdayDate(),
      fee: '-$2.33',
    },
    {
      orderId: 3,
      currency: '0.24 BTC',
      rate: '1 BTC = $740',
      date: '22.06.2020',
      fee: '-$2.33',
    },
    {
      orderId: 4,
      currency: '0.22 BTC',
      rate: '1 BTC = $740',
      date: '21.06.2020',
      fee: '-$2.33',
    },
    {
      orderId: 5,
      currency: '0.74 LTE',
      rate: '1 BTC = $740',
      date: '20.06.2020',
      fee: '-$2.33',
    },
  ],
  cryptoNews: [
    {
      id: 1,
      category: 'bitcoin',
      isTrading: true,
      image: 'https://via.placeholder.com/575x480',
      title: 'Things to know about bitcoin',
      description:
        'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
      fullDescription:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>" +
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
      author: { id: 1, name: 'Julia T' },
      views: 203,
      tags: ['BTC', 'Crypto', 'Trading', 'Tips', 'Cryptocurrency'],
      publishDate: '26 June 2020',
      favorite: true,
    },
    {
      id: 2,
      category: 'ripple',
      isTrading: true,
      image: 'https://via.placeholder.com/575x480',
      title: 'Getting started with Ripple',
      description:
        'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
      fullDescription:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>" +
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
      author: { id: 2, name: 'John Tull' },
      views: 233,
      tags: ['BTC', 'Crypto', 'Trading', 'Tips', 'Cryptocurrency'],
      publishDate: '25 June 2020',
      favorite: false,
    },
    {
      id: 3,
      category: 'litecoin',
      isTrading: false,
      image: 'https://via.placeholder.com/575x480',
      title: 'Is litecoin worth buying?',
      description:
        'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
      fullDescription:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>" +
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
      author: { id: 3, name: 'Amanda' },
      views: 303,
      tags: ['BTC', 'Crypto', 'Trading', 'Tips', 'Cryptocurrency'],
      publishDate: '24 June 2020',
      favorite: true,
    },
    {
      id: 4,
      category: 'bitcoin',
      isTrading: true,
      image: 'https://via.placeholder.com/575x480',
      title: 'What is bitcoin, 20 things about bitcoin.',
      description:
        'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
      fullDescription:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>" +
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
      author: { id: 4, name: 'Shane' },
      views: 453,
      tags: ['BTC', 'Crypto', 'Trading', 'Tips', 'Cryptocurrency'],
      publishDate: '23 June 2020',
      favorite: false,
    },
    {
      id: 5,
      category: 'ripple',
      isTrading: false,
      image: 'https://via.placeholder.com/575x480',
      title: '10 things you must know about Ripple',
      description:
        'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
      fullDescription:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>" +
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
      author: { id: 5, name: 'Dhruva' },
      views: 753,
      tags: ['BTC', 'Crypto', 'Trading', 'Tips', 'Cryptocurrency'],
      publishDate: '22 June 2020',
      favorite: true,
    },
    {
      id: 6,
      category: 'litecoin',
      isTrading: true,
      image: 'https://via.placeholder.com/575x480',
      title: 'Why litecoin can be the best cryptocurrency.',
      description:
        'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
      fullDescription:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>" +
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
      author: { id: 6, name: 'Krishna' },
      views: 535,
      tags: ['BTC', 'Crypto', 'Trading', 'Tips', 'Cryptocurrency'],
      publishDate: '21 June 2020',
      favorite: false,
    },
    {
      id: 7,
      category: 'bitcoin',
      isTrading: false,
      image: 'https://via.placeholder.com/575x480',
      title: 'Bitcoin- Hottest cryptocurrency ever',
      description:
        'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
      fullDescription:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>" +
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
      author: { id: 7, name: 'Rama' },
      views: 534,
      tags: ['BTC', 'Crypto', 'Trading', 'Tips', 'Cryptocurrency'],
      publishDate: '20 June 2020',
      favorite: true,
    },
    {
      id: 8,
      category: 'ripple',
      isTrading: true,
      image: 'https://via.placeholder.com/575x480',
      title: 'Price and inside details of Ripple',
      description:
        'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
      fullDescription:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>" +
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
      author: { id: 8, name: 'Shaurya' },
      views: 873,
      tags: ['BTC', 'Crypto', 'Trading', 'Tips', 'Cryptocurrency'],
      publishDate: '19 June 2020',
      favorite: false,
    },
    {
      id: 9,
      category: 'litecoin',
      isTrading: true,
      image: 'https://via.placeholder.com/575x480',
      title: 'The journey of Litecoin',
      description:
        'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
      fullDescription:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>" +
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
      author: { id: 10, name: 'Kushal' },
      views: 985,
      tags: ['BTC', 'Crypto', 'Trading', 'Tips', 'Cryptocurrency'],
      publishDate: '18 June 2020',
      favorite: true,
    },
    {
      id: 10,
      category: 'bitcoin',
      isTrading: false,
      image: 'https://via.placeholder.com/575x480',
      title: 'Steps to invest in Bitcoin',
      description:
        'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
      fullDescription:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>" +
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
      author: { id: 10, name: 'Siddharth' },
      views: 345,
      tags: ['BTC', 'Crypto', 'Trading', 'Tips', 'Cryptocurrency'],
      publishDate: '17 June 2020',
      favorite: false,
    },
    {
      id: 11,
      category: 'ripple',
      isTrading: false,
      image: 'https://via.placeholder.com/575x480',
      title: 'Ripple -  is it worth to invest in it?',
      description:
        'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
      fullDescription:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>" +
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
      author: { id: 11, name: 'Varun' },
      views: 533,
      tags: ['BTC', 'Crypto', 'Trading', 'Tips', 'Cryptocurrency'],
      publishDate: '16 June 2020',
      favorite: true,
    },
    {
      id: 12,
      category: 'litecoin',
      isTrading: true,
      image: 'https://via.placeholder.com/575x480',
      title: 'Litecoin - Pros and cons of buying it',
      description:
        'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
      fullDescription:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>" +
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
      author: { id: 12, name: 'Vishnu' },
      views: 665,
      tags: ['BTC', 'Crypto', 'Trading', 'Tips', 'Cryptocurrency'],
      publishDate: '15 June 2020',
      favorite: false,
    },
  ],
  newsCategories: [
    { id: 2, name: 'Bitcoin', slug: 'bitcoin' },
    { id: 3, name: 'Ripple', slug: 'ripple' },
    { id: 4, name: 'Litecoin', slug: 'litecoin' },
  ],
  revenueSummary: [
    { month: 'Jan', income: 500, expense: 300 },
    { month: 'Feb', income: 1000, expense: 600 },
    { month: 'Mar', income: 1500, expense: 1000 },
    { month: 'Apr', income: 900, expense: 400 },
    { month: 'May', income: 200, expense: 200 },
    { month: 'Jun', income: 500, expense: 1100 },
    { month: 'Jul', income: 800, expense: 1400 },
    { month: 'Aug', income: 1400, expense: 1700 },
    { month: 'Sep', income: 2000, expense: 2000 },
    { month: 'Oct', income: 1300, expense: 400 },
    { month: 'Nov', income: 700, expense: 700 },
    { month: 'Dec', income: 1300, expense: 2100 },
  ],
   orderSummary: [
    { month: 'Jan', orders: 500, },
    { month: 'Feb', orders: 1000, },
    { month: 'Mar', orders: 1500,  },
    { month: 'Apr', orders: 900, },
    { month: 'May', orders: 200, },
    { month: 'Jun', orders: 500,  },
    { month: 'Jul', orders: 800,  },
    { month: 'Aug', orders: 1400,  },
    { month: 'Sep', orders: 2000,  },
    { month: 'Oct', orders: 1300, },
    { month: 'Nov', orders: 700, },
    { month: 'Dec', orders: 1300,  },
  ],
  Topselling: [
    {
      id: '13',
      user: {
        id: 1,
        avatar: 'https://via.placeholder.com/150x150',
        name: 'Fannie Hudson',
        position: 'Sr. IOS Developer',
      },
      lastPaymentDate: 'June 26, 2020',
      totalAmount: 15000,
      pendingAmount: 5000,
      rate: '$15/Hr',
      workingHour: 150,
      itemname:'chinese'
    },
    {
      id: '234',
      user: {
        id: 14,
        avatar: 'https://via.placeholder.com/150x150',
        name: 'Dhruva Sharma',
        position: 'Sr. React Developer',
      },
      lastPaymentDate: 'June 24, 2020',
      totalAmount: 45444,
      pendingAmount: 3433,
      rate: '$15/Hr',
      workingHour: 235,
        itemname:'chinese'
    },
    {
      id: '6545',
      user: {
        id: 14,
        avatar: 'https://via.placeholder.com/150x150',
        name: 'Siddharth Gautam',
        position: 'Sr. IOS Developer',
      },
      lastPaymentDate: 'June 20, 2020',
      totalAmount: 56654,
      pendingAmount: 3456,
      rate: '$15/Hr',
      workingHour: 100,
        itemname:'chinese'
    },
    {
      id: '6745',
      user: {
        id: 1,
        avatar: 'https://via.placeholder.com/150x150',
        name: 'Vishnu Sharma',
        position: 'Java Developer',
      },
      lastPaymentDate: 'June 18, 2020',
      totalAmount: 87655,
      pendingAmount: 34657,
      rate: '$15/Hr',
      workingHour: 436,
        itemname:'chinese'
    },
    {
      id: '8754',
      user: {
        id: 1,
        avatar: 'https://via.placeholder.com/150x150',
        name: 'Rahul Sharma',
        position: 'Frontend Developer',
      },
      lastPaymentDate: 'June 16, 2020',
      totalAmount: 43323,
      pendingAmount: 23543,
      rate: '$15/Hr',
      workingHour: 231,
        itemname:'chinese'
    },
    {
      id: '7556',
      user: {
        id: 1,
        avatar: 'https://via.placeholder.com/150x150',
        name: 'Mukul Kumar',
        position: 'Python Developer',
      },
      lastPaymentDate: 'June 15, 2020',
      totalAmount: 54332,
      pendingAmount: 4323,
      rate: '$15/Hr',
      workingHour: 234,
        itemname:'chinese'
    },
  ],
  bitcoin: [
    { month: 'Jan', price: 200 },
    { month: 'Feb', price: 300 },
    { month: 'Mar', price: 550 },
    { month: 'Apr', price: 500 },
    { month: 'May', price: 700 },
    { month: 'Jun', price: 450 },
    { month: 'Jul', price: 770 },
    { month: 'Aug', price: 900 },
  ],
  etherium: [
    { month: 'Jan', price: 450 },
    { month: 'Feb', price: 300 },
    { month: 'Mar', price: 1350 },
    { month: 'Apr', price: 275 },
    { month: 'May', price: 500 },
    { month: 'Jun', price: 250 },
    { month: 'Jul', price: 900 },
    { month: 'Aug', price: 550 },
  ],
  litCoin: [
    { month: 'Jan', price: 1500 },
    { month: '', price: 400 },
    { month: 'Feb', price: 2000 },
    { month: 'Mar', price: 1200 },
    { month: 'Apr', price: 2200 },
    { month: 'May', price: 2600 },
    { month: 'Jun', price: 4300 },
    { month: 'July', price: 2900 },
    { month: 'Aug', price: 3800 },
    { month: 'Sep', price: 1500 },
  ],
  ripple: [
    { month: 'Jan', price: 1500 },
    { month: '', price: 400 },
    { month: 'Feb', price: 2000 },
    { month: 'Mar', price: 1200 },
    { month: 'Apr', price: 2200 },
    { month: 'May', price: 2600 },
    { month: 'Jun', price: 4300 },
    { month: 'July', price: 2900 },
    { month: 'Aug', price: 3800 },
    { month: 'Sep', price: 1500 },
  ],
  growth: [
    { month: 'Jan', price: 100 },
    { month: 'Feb', price: 4000 },
    { month: 'Mar', price: 1200 },
    { month: 'Apr', price: 3000 },
    { month: 'May', price: 6000 },
  ],
};

const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
    {
        name: "IPhone 11",
        img: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lMTF8ZW58MHx8MHx8fDA%3D',
        price: 590,
        desc: 'Liquid Retina HD display; 6.1‑inch (diagonal) all-screen LCD Multi-Touch display with IPS technology; 1792‑by‑828‑pixel resolution at 326 ppi'
    },
    {
        name: 'Macbook pro',
        img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D',
        price: 799,
        desc: 'This is a high end laptop best use for video editing .it comes with new M2 chipset and no fans are included in it.'
    },
    {
        name: 'Samsung s23',
        img: 'https://images.unsplash.com/photo-1676115724686-476a7337dfb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2Ftc3VuZyUyMCUyMHMyM3xlbnwwfHwwfHx8MA%3D%3D',
        price:300,
        desc: 'Meet the new Galaxy S23 and S23+ in four colors. Share the epic with crisp Nightography for selfies and a long-lasting battery for smooth gaming.'
    },
    {
        name: 'Study table',
        img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHN0dWR5JTIwdGFibGV8ZW58MHx8MHx8fDA%3D',
        price: 35,
        desc: "Study Table- Buy Office Wooden Study Tables at discounted prices on India's Best Online Shopping Store. Choose from a wide range of Office Tables on ..."
    },
    {
        name: 'Oneplus nord ce2',
        img: 'https://images.unsplash.com/photo-1649515530664-7a3150983c7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25lcGx1cyUyMG5vcmR8ZW58MHx8MHx8fDA%3D',
        price: 220,
        desc: 'OnePlus Nord ce2· Size: 16.36 centimeters (6.44 inches) · Resolution: 2400x1080 pixels 408ppi · Aspect Ratio: 20:9 · Refresh Rate: 90 Hz · Type: Fluid AMOLED ...'
    },
    {
        name: 'Asus tuf Laptop',
        img: 'https://images.unsplash.com/photo-1698512475067-74ed7c956c8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXN1cyUyMHR1ZnxlbnwwfHwwfHx8MA%3D%3D',
        price: 969,
        desc: 'ASUS TUF Gaming A15 (2023) · Windows 11 Pro · Up to GeForce RTX™ 4070 Laptop GPU · AMD Ryzen™ 7040 Series Processor · 90W battery · Type C Fast Charging · 84 ...'
    },
    {
        name: 'Guitar Electronic',
        img: 'https://images.unsplash.com/photo-1514649923863-ceaf75b7ec00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D',
        price: 199,
        desc: 'a stringed instrument with a flat body, a long neck with frets, and usually six strings that are played with the fingers or with a pick. ...'
    },
    {
        name: 'Havells Fan',
        img: 'https://images.unsplash.com/photo-1581153691064-8d0ec09725b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2VpbGluZyUyMGZhbnxlbnwwfHwwfHx8MA%3D%3D',
        price: 159,
        desc: "Havells Stealth Air Ceiling Fan (Indigo Blue) ... Havells Enticer 600mm Decorative, Dust Resistant, High Power in Low Voltage (HPLV).with a pick. ..."
    }

];



async function seedDB() {
    await Product.insertMany(products);
    console.log('Product Seeded');
}

module.exports = seedDB;
var agencies = [
    {
        id:1,
        url:'https://www.amazon.co.uk/Acer-Aspire-A515-56-15-6-Laptop/dp/B08ND412C6/ref=mp_s_a_1_1_sspa?keywords=acer&qid=1654605592&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSk9VT0k0SDlBRDZDJmVuY3J5cHRlZElkPUEwNTA1MjEwUUxDSzA1MEVVM080JmVuY3J5cHRlZEFkSWQ9QTAzNTYzMzcyVTFZUVI4Nk02RVFGJndpZGdldE5hbWU9c3BfcGhvbmVfc2VhcmNoX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
        image: <img src="images/2.jpg" alt="prod1" class="image"/>,
        title: 'Acer Aspire 5 A515-56 15.6 inch Laptop',
        category: 'Electronics',
        subCategory: 'Laptops',
        description: 'PREMIUM PERFORMANCE: The powerful Intel Core i5 CPU and 8GB of RAM ensure you will breeze through the most demanding of tasks. VISIBLY STUNNING: The 15.6-inch Full HD IPS screen combines incredibly sharp detail, vivid lifelike colours and wide viewing angles for a brilliant visual experience'
    },
    {
        id:2,
        url:'https://www.amazon.co.uk/Lenovo-Turbo-Laptop-Graphics-Office/dp/B09LKJGV3G/ref=mp_s_a_1_1_sspa?crid=1PMFHSKA4N9AN&keywords=lenovo&qid=1654605499&sprefix=hp%2Caps%2C4026&sr=8-1-spons&psc=1&smid=A3DRJEY8ATIK6G&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNTlXTkMzR0dDOVBMJmVuY3J5cHRlZElkPUEwMjI2MTM4MUs5SzRGQ0ZKMlVHRiZlbmNyeXB0ZWRBZElkPUEwNTA5NTU0MkRLUEVZRldMVDVHMiZ3aWRnZXROYW1lPXNwX3Bob25lX3NlYXJjaF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
        image: <img src="images/3.jpg" alt="prod2" class="image"/>,
        title: '2022 Lenovo Quad Turbo Laptop',
        category: 'Electronics',
        subCategory: 'Laptops',
        description: 'New LENOVO 15.6" Laptop, 3 Year Warranty Included. Windows 11 Pro 64 + Office 2021 Pro Plus(This is not the dreaded Windows S that comes pre installed with these) We Install Software'
    },
    {
        id:3,
        url:'https://www.amazon.co.uk/2021-Apple-iPad-10-2-inch-Wi-Fi/dp/B09G968MFZ/ref=lp_429892031_1_1',
        image: <img src="images/16.jpg" alt="prod3" class="image"/>,
        title: '2021 Apple iPad (10.2-inch iPad, Wi-Fi, 64GB)',
        category: 'Electronics',
        subCategory: 'Mobile phones and tablets',
        description: 'A13 Bionic chip with Neural Engine, 8MP Wide back camera, 12MP Ultra Wide front camera with Center Stage, Up to 256GB storage'
    },
    {
        id:4,
        url:'https://www.amazon.co.uk/Portable-Wardrobe-Modular-Storage-Organizer/dp/B0774RSQY9/ref=sr_1_1_sspa?c=ts&keywords=Bedroom+Wardrobes&qid=1654605890&s=kitchen&sr=1-1-spons&ts_id=2850811031&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyOUYzVDUxUlBIRFNKJmVuY3J5cHRlZElkPUEwMDk2MzU4MzQyVEhUNzJPQlUwWiZlbmNyeXB0ZWRBZElkPUEwNjE0MjAxM0ZFMFVNVUVSVVlEVyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
        image: <img src="images/n3.jpg" alt="prod4" class="image"/>,
        title: 'Portable Wardrobe for Bedroom Ideal Storage Organizer',
        category: 'Non-Electronics',
        subCategory: 'Clothing',
        description: 'Eco-friendly materials: this wardrobe organizer is made of PP plastic, toxic-free, harmless for human body. Sturdy result: this wardrobe pannel is framed by steel, making it strong enough for your storage demand.'
    },
    {
        id:5,
        url:'https://www.amazon.co.uk/Instant-Vortex-Plus-Basket-ClearCook/dp/B09CLL96VR/ref=sr_1_1_sspa?keywords=air+fryer&qid=1654606335&s=kitchen-appliances&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzQ1RZQktJNFZPRTRCJmVuY3J5cHRlZElkPUEwODMzMDA2M0JIN0UxSk4wVlFBWSZlbmNyeXB0ZWRBZElkPUEwNDk1Nzg2RFFMNVA5WTAyVUwmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
        image: <img src="images/n2.jpg" alt="prod5" class="image"/>,
        title: 'Instant Vortex Plus Dual Basket with ClearCook - 7.6L Digital Health Air Fryer',
        category: 'Non-Electronics',
        subCategory: 'Kitchen',
        description: 'ULTIMATE CONVENIENCE WITH at the same time! Use SyncCook and DUAL AIR FRY BASKETS - Double up cooking or cook two separate foods SyncFinish to automatically match settings for cooking or match the finish time between the two baskets.'
    },
    {
        id:6,
        url:'https://www.amazon.co.uk/HOMIDEC-Portable-Wardrobe-Combination-Organizer/dp/B09K41WW3P/ref=sr_1_5?keywords=Portable%2BCloset%2BWardrobe&qid=1655582216&sr=8-5&th=1',
        image: <img src="images/n1.jpg" alt="prod6" class="image"/>,
        title: 'HOMIDEC Portable Wardrobe, 16 Cube Foldable Closet with 3 Clothes Hanging Rails',
        category: 'Non-Electronics',
        subCategory: 'Clothing',
        description: 'HOMIDEC Upgraded Portable Wardrobe: Compared to the previous version, we add 4 more rectangular panels, so you can build a closet of total 16 Cube(Each cube: 14x18x14) OR a wardrobe that can hanging clothes(3 hanging rails).With the 18 depth cubes, hangers can be perfectly hung in the closet and doors can be closed.'     

    }
];

var categories= [
    {
        category:'Non-Electronics',
        subCategories:'Clothing,Beauty-products,House-products,Educational,Food and Beverage'
    },
    {
        category:'Electronics',
        subCategories:'Smart phones,Laptops,Tvs,Gaming,Cameras,Cameras'
    }

];


export  {agencies, categories}
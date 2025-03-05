const dummyData = {
  categories: [
    { id: 1, name: "Paan Corner", image: "https://img.freepik.com/free-photo/paan-indian-betel-leaf-snack-tray_1150-11025.jpg" },
    { id: 2, name: "Dairy", image: "https://img.freepik.com/free-photo/variety-dairy-products-cookies_23-2148239912.jpg" },
    { id: 3, name: "Fruits & Vegetables", image: "https://img.freepik.com/premium-vector/realistic-fresh-fruits-composition-transparent-background_98292-39047.jpg?semt=ais_hybrid" },
    { id: 4, name: "Cold Drinks & Juice", image: "https://img.freepik.com/free-photo/orange-juice-glass-dark-surface_1150-45530.jpg" },
    { id: 5, name: "Snacks", image: "https://img.freepik.com/free-photo/flat-lay-pretzels-doodles-arrangement_23-2148582652.jpg" },
    { id: 6, name: "Breakfast", image: "https://img.freepik.com/free-photo/healthy-breakfast-with-granola-bowl_23-2148218362.jpg" },
    { id: 7, name: "Sweet Creams", image: "https://img.freepik.com/free-photo/cream-bowl-table-top-view_23-2148658476.jpg" },
    { id: 8, name: "Biscuits", image: "https://img.freepik.com/free-photo/assortment-crunchy-delicious-biscuits-black-surface_1150-22576.jpg" },
    { id: 9, name: "Tea & Coffee", image: "https://img.freepik.com/free-photo/coffee-cup-coffee-beans_23-2147698589.jpg" },
    { id: 10, name: "Atta & Rice", image: "https://img.freepik.com/free-photo/sack-rice-wooden-bowl-table_1150-20701.jpg" },
    // Newly Added Categories
    { id: 11, name: "Hot Deals", image: "https://img.freepik.com/free-photo/shopping-cart-with-percentage-sign_144627-10260.jpg" },
    { id: 12, name: "Your Daily Fresh Needs", image: "https://img.freepik.com/free-photo/healthy-fresh-food-ingredients_23-2148230985.jpg" }
  ],
  
  products: [
    // Fruits & Vegetables
    { id: 1, name: "Apples", price: 100, category: 3, image: "https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg" },
    { id: 2, name: "Bananas", price: 50, category: 3, image: "https://img.freepik.com/free-photo/bananas-white-background_1187-1671.jpg" },
    { id: 3, name: "Mangoes", price: 120, category: 3, image: "https://img.freepik.com/free-photo/top-view-ripe-mangoes-leaves-wooden-surface_1150-17614.jpg" },
    { id: 4, name: "Grapes", price: 90, category: 3, image: "https://img.freepik.com/free-photo/green-grapes_144627-18369.jpg" },
    { id: 5, name: "Tomatoes", price: 80, category: 3, image: "https://img.freepik.com/free-photo/top-view-ripe-fresh-tomatoes-with-water-drops-black-background_141793-3432.jpg" },
    { id: 6, name: "Potatoes", price: 40, category: 3, image: "https://img.freepik.com/free-photo/raw-potatoes-rustic-wooden-table_1150-11014.jpg" },
    { id: 7, name: "Onions", price: 50, category: 3, image: "https://img.freepik.com/free-photo/red-onions-table_1150-11012.jpg" },

    // Dairy
    { id: 8, name: "Milk", price: 60, category: 2, image: "https://img.freepik.com/free-vector/realistic-vector-icon-illustration-dairy-farm-fresh-milk-splash-with-milk-jug-bottle-isola_134830-2399.jpg" },
    { id: 9, name: "Cheese", price: 150, category: 2, image: "https://img.freepik.com/free-vector/cheese-slices-3d-realistic-vector-illustration_107791-12115.jpg" },
    { id: 10, name: "Yogurt", price: 70, category: 2, image: "https://img.freepik.com/free-photo/yogurt-glass-jar-with-blueberries-mint-white-table_114579-17097.jpg" },
    { id: 11, name: "Butter", price: 90, category: 2, image: "https://img.freepik.com/free-photo/butter-block-table_1150-11017.jpg" },

    // Cold Drinks & Juice
    { id: 12, name: "Coca-Cola", price: 45, category: 4, image: "https://img.freepik.com/free-photo/classic-coca-cola-bottle_144627-40980.jpg" },
    { id: 13, name: "Orange Juice", price: 60, category: 4, image: "https://img.freepik.com/free-photo/orange-juice-glass-table-close-up_144627-30735.jpg" },
    { id: 14, name: "Lassi", price: 50, category: 4, image: "https://img.freepik.com/free-photo/lassi-indian-yogurt-drink_1150-10890.jpg" },

    // Snacks
    { id: 15, name: "Chips", price: 30, category: 5, image: "https://img.freepik.com/free-psd/crispy-tortilla-chips-black-bowl-transparent-background_84443-25794.jpg" },
    { id: 16, name: "Popcorn", price: 40, category: 5, image: "https://img.freepik.com/free-photo/popcorn-wooden-bowl_1150-11020.jpg" },

    // Biscuits
    { id: 17, name: "Biscuits", price: 25, category: 8, image: "https://img.freepik.com/free-vector/biscuit-cookies-cracker-with-cream-vector_1441-775.jpg" },
    { id: 18, name: "Oreo", price: 35, category: 8, image: "https://img.freepik.com/free-photo/chocolate-cookies-isolated_144627-16017.jpg" },

    // Tea & Coffee
    { id: 19, name: "Tea Leaves", price: 150, category: 9, image: "https://img.freepik.com/free-photo/dry-black-tea-leaves-white-bowl_1150-11009.jpg" },
    { id: 20, name: "Coffee Powder", price: 200, category: 9, image: "https://img.freepik.com/free-photo/coffee-beans-powder-cup_144627-30740.jpg" },

    // Atta & Rice
    { id: 21, name: "Basmati Rice", price: 150, category: 10, image: "https://img.freepik.com/free-photo/raw-basmati-rice-bowl_1150-11013.jpg" },
    { id: 22, name: "Wheat Flour", price: 90, category: 10, image: "https://img.freepik.com/free-photo/wheat-flour-sack-rustic-table_1150-11015.jpg" },
    { id: 23, name: "Multigrain Atta", price: 120, category: 10, image: "https://img.freepik.com/free-photo/multigrain-flour-wooden-bowl_1150-11016.jpg" },

    // Hot Deals
    { id: 24, name: "Discounted Coke Pack", price: 99, category: 11, image: "https://img.freepik.com/free-photo/coca-cola-bottle-set_144627-40981.jpg" },
    { id: 25, name: "Buy 1 Get 1 Chips", price: 30, category: 11, image: "https://img.freepik.com/free-psd/crispy-tortilla-chips-black-bowl-transparent-background_84443-25794.jpg" },
    
    // Your Daily Fresh Needs
    { id: 26, name: "Fresh Milk Pack", price: 55, category: 12, image: "https://img.freepik.com/free-vector/realistic-vector-icon-illustration-dairy-farm-fresh-milk-splash-with-milk-jug-bottle-isola_134830-2399.jpg" },
    { id: 27, name: "Fresh Bread Loaf", price: 40, category: 12, image: "https://img.freepik.com/free-photo/sliced-bread-white-background_1339-117881.jpg" },
  ]
};

export default dummyData;

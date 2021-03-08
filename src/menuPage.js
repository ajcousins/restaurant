const menuPage = () => {

    console.log("menu");

    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h2");
    heading.textContent = "Supper";
    contentDiv.appendChild(heading);

    const menuItems = [
        {item: "Venison and Barley Broth", price: "9.20"},
        {item: "Grilled Jerusalem Artichoke, Red Onion and Olives", price: "10.80"},
        {item: "Egg Mayonnaise and Anchovy", price: "12.50"},
        {item: "Brown Crab Meat on Toast", price: "12.80"},
        {item: "Cold Roast Middle White, Dandelion and Roast Shallots", price: "12.50"},
        {item: "Deep Fried Skate Cheeks and Ketchup", price: "12.50"},
        {item: "Roast Bone Marrow and Parsley Salad", price: "11.50"},
        {item: "--", price: ""},
        {item: "Roast Teal, Bacon and Mash", price: "25.50"},
        {item: "Red Gurnard, Braised Chicory and Green Sauce", price: "21.50"},
        {item: "Celeriac and Baked Eggs", price: "17.20"},
        {item: "Devilled Kidneys on Toast", price: "19.80"},
        {item: "Ox Tongue, Beetroot and Horseradish", price: "21.00"},
        {item: "Braised Tripe, Carrots and Mint", price: "19.80"},
        {item: "Brill, Sea Purslane, Capers and Mayonnaise", price: "26.00"},
        {item: "Crispy Goose Leg and Braised Red Cabbage (for two)", price: "42.00"},
        {item: "--", price: ""},
        {item: "Potatoes", price: "5.00"},
        {item: "Green Salad", price: "5.50"},
        {item: "Greens", price: "4.50"},
        {item: "Welsh Rarebit", price: "7.00"},
        {item: "--", price: ""},
        {item: "Eccles Cake and Lancashire Cheese", price: "9.00"},
        {item: "Bitter Chocolate Cream", price: "9.00"},
        {item: "Bread Pudding and Butterscotch Sauce", price: "8.70"},
        {item: "Steamed Date Sponge", price: "8.70"},
        {item: "Quince and Hazelnut Trifle", price: "9.00"},
        {item: "Honeycomb Ice Cream (one scoop)", price: "4.40"},
        {item: "Crab Apple Sorbet and Sloe Gin", price: "9.00"},
        {item: "Madeleines Helf Dozen (fifteen minutes)", price: "5.00"},
        {item: "Madeleines One Dozen (fifteen minutes)", price: "10.00"},
        {item: "Cheese", price: "12.00"},
    ]


    const menu = document.createElement("div");
    menu.classList.add("menuList");
    contentDiv.appendChild(menu);
    const table = document.createElement("table");
    
    menu.appendChild(table);
    
    for (let i = 0; i < menuItems.length; i++) {
        let row = document.createElement("tr");
        
        if (menuItems[i].item === "--") {
            row.classList.add("blankRow");
            let item = document.createElement("td");
            item.setAttribute("colspan", "2");
            table.appendChild(row);
        } else {
            table.appendChild(row);
            let item = document.createElement("td");
            item.textContent = menuItems[i].item;
            let price = document.createElement("td");
            price.textContent = menuItems[i].price;
            price.classList.add("rightAlign");
            row.appendChild(item);
            row.appendChild(price);
        }
    }
    return menuPage;
}
export default menuPage
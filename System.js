// Sample menu data

const menu = [

    { id: 1, name: 'Burger', price: 10.99 },

    { id: 2, name: 'Pizza', price: 14.99 },

    { id: 3, name: 'Salad', price: 8.99 },

];



// Render menu

const menuList = document.getElementById('menu-list');

menu.forEach((item) => {

    const li = document.createElement('li');

    li.textContent = `${item.name} - $${item.price}`;

    menuList.appendChild(li);

});



// Render menu items in select

const menuItemSelect = document.getElementById('menu-item');

menu.forEach((item) => {

    const option = document.createElement('option');

    option.value = (link unavailable);

    option.textContent = item.name;

    menuItemSelect.appendChild(option);

});



// Place order functionality

const placeOrderButton = document.getElementById('place-order');

const ordersList = document.getElementById('orders-list');

const orders = [];



placeOrderButton.addEventListener('click', (e) => {

    e.preventDefault();

    const name = document.getElementById('name').value;

    const menuItem = document.getElementById('menu-item').value;

    const quantity = document.getElementById('quantity').value;



    const order = {

        id: orders.length + 1,

        name,

        menuItem: menu.find((item) => (link unavailable) == menuItem).name,

        quantity,

        total: menu.find((item) => (link unavailable) == menuItem).price * quantity,

    };



    orders.push(order);



    const li = document.createElement('li');

    li.textContent = `Order #${(link unavailable)} - ${order.name} - ${order.menuItem} x ${order.quantity} = $${order.total}`;

    ordersList.appendChild(li);



    document.getElementById('name').value = '';

    document.getElementById('menu-item').value = '';

    document.getElementById('quantity').value = '';

});

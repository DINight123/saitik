// Массив товаров
const products = [
 { id: 1, name: 'Яблоко', price: 50, image: 'яблоко.jpg' },
 { id: 2, name: 'Банан', price: 30, image: 'банан.jpg' },
 { id: 3, name: 'Апельсин', price: 40, image: 'апельсин.jpg' },
 { id: 4, name: 'Грушa', price: 45, image: 'груша.jpg' },
 { id: 5, name: 'Клубника', price: 70, image: 'клубника.jpg' },
 { id: 6, name: 'Виноград', price: 80, image: 'виноград.jpg' }
];

// Массив корзины
const cart = [];

// Отрисовка товаров
function renderProducts() {
 const container = document.getElementById('productsContainer');
 container.innerHTML = '';

 products.forEach(product => {
   const card = document.createElement('div');
   card.className = 'product-card';

   const img = document.createElement('img');
   img.src = product.image;
   img.alt = product.name;
   img.className = 'product-image';

   const name = document.createElement('div');
   name.className = 'product-name';
   name.textContent = product.name;

   const price = document.createElement('div');
   price.className = 'product-price';
   price.textContent = `${product.price} ₽`;

   const btn = document.createElement('button');
   btn.className = 'add-btn';
   btn.textContent = 'Добавить в корзину';
   btn.onclick = () => addToCart(product);

   card.appendChild(img);
   card.appendChild(name);
   card.appendChild(price);
   card.appendChild(btn);

   container.appendChild(card);
 });
}
// Добавление товара в корзину
function addToCart(product) {
 const existing = cart.find(item => item.id === product.id);
 if (existing) {
   existing.quantity++;
 } else {
   cart.push({ ...product, quantity: 1 });
 }
 renderCart();
}

// Отрисовка корзины
function renderCart() {
 const cartList = document.getElementById('cartItems');
 cartList.innerHTML = '';

 let total = 0;

 cart.forEach(item => {
   const li = document.createElement('li');
   li.className = 'cart-item';

   const info = document.createElement('div');
   info.textContent = `${item.name} x${item.quantity}`;

   const price = document.createElement('div');
   const itemTotal = item.price * item.quantity;
   price.textContent = `${itemTotal} ₽`;

   total += itemTotal;

   const removeBtn = document.createElement('button');
   removeBtn.className = 'remove-btn';
   removeBtn.innerHTML = '&times;';
   removeBtn.onclick = () => removeFromCart(item.id);

   li.appendChild(info);
   li.appendChild(price);
   li.appendChild(removeBtn);

   cartList.appendChild(li);
 });

 document.getElementById('totalPrice').textContent = `Итого: ${total} ₽`;
}

// Удаление товара из корзины
function removeFromCart(id) {
 const index = cart.findIndex(item => item.id === id);
 if (index !== -1) {
   cart.splice(index, 1);
   renderCart();
 }
}

// Очистка корзины
document.getElementById('clearCartBtn').onclick = () => {
 cart.length = 0;
 renderCart();
};

// Инициализация
renderProducts();
renderCart();
document.addEventListener("DOMContentLoaded", function() {
  console.log("страница загрузилась");

  // 1. Кнопка с onclick и addEventListener
  const myButton = document.createElement("button");
  myButton.textContent = "Кнопка";
  document.body.appendChild(myButton);

  myButton.onclick = function() {
    console.log("событие onclick");
  };

  myButton.addEventListener("click", function() {
    console.log("событие addEventListener");
  });

  // 2. Кнопки 1, 2, 3
  for (let i = 1; i <= 3; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", function() {
      console.log(this);
    });
    document.body.appendChild(button);
  }

  // 3. Кнопка 4 (счетчик кликов)
  let clickCount = 0;
  const button4 = document.createElement("button");
  button4.textContent = "4";
  button4.addEventListener("click", function() {
    clickCount++;
    console.log("Количество нажатий на кнопку 4: " + clickCount);
  });
  document.body.appendChild(button4);

  // 4. Кнопка 5 (изменение текста)
  const button5 = document.createElement("button");
  button5.textContent = "5";
  button5.addEventListener("click", function() {
    this.textContent = "Вы нажали на эту кнопку";
  });
  document.body.appendChild(button5);

  // 5. Кнопка добавления заголовка
  const addButton = document.createElement("button");
  addButton.textContent = "Добавить заголовок";
  document.body.appendChild(addButton);

  // 6. Кнопка удаления заголовка
  const removeButton = document.createElement("button");
  removeButton.textContent = "Удалить заголовок";
  document.body.appendChild(removeButton);

  let heading;

  addButton.addEventListener("click", function() {
    heading = document.createElement("h1");
    heading.textContent = "Новый заголовок";
    addButton.parentNode.insertBefore(heading, addButton.nextSibling);
  });

  removeButton.addEventListener("click", function() {
    if (heading) {
      heading.remove();
      heading = null;
    }
  });

  // 7. Кнопка hover
  const hoverButton = document.createElement("button");
  hoverButton.textContent = "Наведи на меня";
  document.body.appendChild(hoverButton);

  hoverButton.addEventListener("mouseover", function() {
    console.log("вы навели на данную кнопку");
  });

  hoverButton.addEventListener("mouseout", function() {
    console.log("Наведения на кнопку больше нет");
  });

  // 8. Список
  const ul = document.createElement("ul");
  document.body.appendChild(ul);

  for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Элемент " + i;
    ul.appendChild(li);
  }

  // 9. Кнопка добавления элемента списка
  const addListItemButton = document.createElement("button");
  addListItemButton.textContent = "Добавить элемент списка";
  document.body.appendChild(addListItemButton);

  // 10. Кнопка удаления элемента списка
  const removeListItemButton = document.createElement("button");
  removeListItemButton.textContent = "Удалить первый элемент списка";
  document.body.appendChild(removeListItemButton);

  addListItemButton.addEventListener("click", function() {
    const li = document.createElement("li");
    li.textContent = "новый элемент списка";
    ul.appendChild(li);
  });

  removeListItemButton.addEventListener("click", function() {
    if (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  });

  // 11. Кнопка добавления класса
  const addClassButton = document.createElement("button");
  addClassButton.textContent = "Добавить класс кнопке";
  document.body.appendChild(addClassButton);

  addClassButton.addEventListener("click", function() {
    this.classList.add("click");
  });

  // 12. Кнопка "Отправить" в content div
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  document.body.appendChild(contentDiv);

  const sendButton = document.createElement("button");
  sendButton.textContent = "Отправить";
  contentDiv.appendChild(sendButton);

  sendButton.addEventListener("click", function() {
    this.textContent = "Текст отправлен";
  });
});
document.addEventListener("DOMContentLoaded", function() {
    console.log('все теги прогрузились');
});

window.onload = function() {
    console.log('страница загрузилась');
}

// Обработчик события клика на документ
document.body.addEventListener('click', function(event) {
    const element = event.target;
    if (element.classList.contains('super_element')) {
        console.log(`Класс "super_element" присутствует в элементе "${element.tagName.toLowerCase()}".`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе "${element.tagName.toLowerCase()}".`);
    }
});

// Обработчик события наведения на textarea
document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.querySelector('textarea');
    
    if (textarea) { // Проверяем существование элемента
        textarea.addEventListener('mouseover', () => {
            console.log('Вы навели на textarea.');
        });
    }
});

// Обработчик события клика на ul
const ulElement = document.querySelector('ul');
ulElement.addEventListener('click', function(event) {
    // Проверяем, является ли цель клика кнопкой
    if (event.target.tagName === 'BUTTON') {
        console.log(event.target.textContent);
    }
});

// Изменение цвета заднего фона каждого второго li
const liElements = document.querySelectorAll('li');
for (let i = 0; i < liElements.length; i++) {
    if ((i + 1) % 2 === 0) { // каждый второй элемент
        liElements[i].style.backgroundColor = '#ccc';
    }
}
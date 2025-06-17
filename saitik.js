const products = [
  {
      name: 'Компуктер',
      description: 'Intel Core i7, 16GB RAM, SSD 512GB',
      price: 99990,
      imageUrl: 'https://freepngimg.com/download/technology/51761-3-desktop-computer-hd-image-free-png.png'
  },
  {
      name: 'Монитор ',
      description: 'IPS-матрица, частота 240Гц',
      price: 39990,
      imageUrl: 'https://avatars.mds.yandex.net/i?id=b42eee771d0e3935a11dee445b7f6e84_l-5327796-images-thumbs&n=13'
  },
  {
      name: 'Клавиатура',
      description: 'Механические переключатели Cherry MX Speed Silver',
      price: 19990,
      imageUrl: 'https://starkom.ru/wa-data/public/shop/products/21/36/73621/images/13997/13997.970.JPG'
  },
  {
      name: 'Геймпады',
      description: 'Беспроводное подключение, настраиваемые триггеры',
      price: 14990,
      imageUrl: 'https://avatars.mds.yandex.net/i?id=193175cfdb84efbcaf01e05f455bd56f_l-11459613-images-thumbs&n=13'
  },
  {
      name: 'SSD ',
      description: 'NVMe PCIe Gen4, объем 1TB',
      price: 12990,
      imageUrl: 'https://avatars.mds.yandex.net/i?id=5c6b15b6e416c66fdd603ed01d2217b1_l-12373036-images-thumbs&n=13'
  },
  {
      name: 'Рюкзак для ноутбука ',
      description: 'Материал Cordura, влагозащита',
      price: 11990,
      imageUrl: 'https://i.pinimg.com/originals/87/38/64/873864f0e6c6b8fe232125f4e8c4be73.jpg'
  },
  {
      name: ' GT 210',
      description: 'Архитектура Ampere, объем VRAM 12ГБ',
      price: 149990,
      imageUrl: 'https://www.amtgov.com/cdn/shop/products/evga.jpg2_1200x1200.jpg'
  },
  {
      name: 'Настольная лампа ',
      description: 'Управление светом через приложение',
      price: 4990,
      imageUrl: 'https://yandex-images.clstorage.net/nL5N01s90/3899c9co1d/vh1-lVkKbCLOfnP2F6sMlmt91l9E_lRJqKGcKFmi2djYNkT-XsO6cWv9whBdeRpMwx0igIt8pFWb6HxVGyvLGP9Zco1AUjQpynpmqla0AYIaW_ZwYsRjNY-DoUlHpsOR0D4D7wSo02AtprZmGlg6WeU3PvvAOP0X5LIcCkVbnmO2IAncMyxiEMN4cM1ekyarNE7HVW3TZiCsi6d3Wo3UsP0QScUDv_8vJKqWcCBoI079MifD3iTSEf-bMDJMarxengkc0QMmYBXUbEDQbbAEiTZt-lZoyXkJlIeMUWay9JbDHEfTCYXhIySjvl4QcyFlyzkQ6-cB0DjEpysPVXC9fJs5F-o5CG8B2Wd3wEqzL6s2fNt0WdduM4GWrk90ltS0zQJbzD2n3RoPpZ5eEH4ic-8hP-H5HNkt57QgN019tn-nJhHfNzJuIP1ZR91Ngim9IEHOZ0PvWQyht6thR6Tmr_Q_W8QBv8oqK6O8Tz58PG3oEQfc8BDDKu2DJwBXfYhHgjsIyA8BTzHVd0DRf4UkiQdI0nBl_38hgqONV2614J_aH0vnPK_qJzG9j2omXCB6yAQ12_0_-QzOgxssSlS8ZIsLLc8xEVEs2XJP816tD60MUuBgd-1fIJCGu0Jpqdqf2jNY1xKc7xo2kZZtM38uU_ktFPX4I-Mo_5gdF3ZVqkCBLxP5JCZ8EelNT-dQgjqmKWD5UFn3QC2WtKVTV7bUudMWaMg8jsgpObmxbwRZDVvYHCLX-i32BuyFIzFkSYBeugYc9iwgcQrATULIYZELqS1-31Bs9k8_tKKeZFmAyZf9E0X8J6PJIQibsFIqczlCzjkOx_Qp2SLTuAADXHu7UYErL845MWsG7HZg6XCQIb8ST_BjUcJbIrOyh0h_vsK07yJq6BO8_BQwpoJLG189XPg_J-nUJ_4P2Z0DMUtdi226FyHDNzF8JN5VdsR_tx63BkPvR2LQTw-xjK9RaYU'
  },
  {
      name: 'Проектор ',
      description: 'Разрешение Full HD, яркость 3200 люменов',
      price: 69990,
      imageUrl: 'https://yandex-images.clstorage.net/l96QMU435/bfa68eFB/j7Z-doIL_CoOCxP8U4T6sbiPSL3Tux788_dF0pbiCMKK6Lc2T8YoUDRcAzAds5ZIBPrzrKwCXkdBDPKqHHhBYCqSC-LHX7nOfgtCuOMgOxF5jhx8B4pK3WO3MEJWVJtV_X_BsSnxzwezjfZQuGbH6XXrsG89h81V9ysXj427pDVe1DwWkZj-Tg57kmnhBjlQaj3ungNY611klacHM6Ubx29PUAOL8g0lY7w10gi0FR4E-WCtmSUvJ4arF82P65QUTJXcJuD6j0_c-EPZoqRpQLj83R_xitguVZR1hdNH6Na-LSCwqlPtxQJuhTKo1-bPZjlhjrnl3Cdm-gVuD2plBdwnb0bQe7-u36hQi8J1uCO6r0zeQqiKbrSFNAdQBhr1Hm0BMuhwbGYg_pZjOoRGf_RoMPwL969WdvkUT365x_UuBf_24CrPfB3Jcaohtiiiap5N3kL4KhzHRHQGAje5xS99gVF7czwVsF7Uo8t1Nc8U-jN_yhceF4Z5hl4OCja0XuZOVZEYLf6uSQHrkXRrQxgdjI2xish9F6RV5RLm6lR-7mLjGgD_53P_NBI6tkb9NJhhrJnXfaeUS6QcromkJ7_l3yWyWH_PjEhTmuDmmGMYrp0uc2o5LOV1tDfD9evF3h2hMfmRjiUzXPcQSgQ0vOZbcw2LVH6ntnpGPe64xPbfRY42YChtDI7K8VpSRFlxCow9PYJ4GS0HROVVcnY4BW2PM0N6Yd01Qk8UsDiFBO41mtL8auRvZea5Bp3tKud1jVVvdZDZzg_-m0L54nWKIXgNzq2CqmsORJanF4MmS8TvXVMAyUL-drNfFNMbNlUOtehhTFnX3HZUGwRufSj2Jd0lvLUAyF2enDkQOxLV2iM6Ddwdgoq7rcckRBfRFbpETZ_TYxmiH2dD3jaByNYEnodoUh4rRx7ENtsHLG4aVpQv1G1UkOmvj59b01oA9AtQ6Y_uj7O7CJ9E9OaFMYYZk'
  },
  {
      name: 'Микрофон ',
      description: 'Четкий звук, удобное управление',
      price: 12990,
      imageUrl: 'https://avatars.mds.yandex.net/i?id=f52f09d51e18e1f3a51919c63b897e09_l-9701523-images-thumbs&n=13'
  }
];

const productsList = document.querySelector('#products-list');
const minPriceInput = document.querySelector('#min-price');
const maxPriceInput = document.querySelector('#max-price');
const filterForm = document.querySelector('#filter-form');

function renderProducts(filteredProducts) {
  productsList.innerHTML = '';

  filteredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = ` <img class="product-image" src="${product.imageUrl}" alt="${product.name}"> <h3 class="product-title">${product.name}</h3> <p class="product-description">${product.description}</p> <p class="product-price">₽${product.price.toLocaleString()}</p> `;

      productsList.appendChild(productCard);
  });
}

function filterProducts() {
  const minPrice = parseInt(minPriceInput.value) || 0;
  const maxPrice = parseInt(maxPriceInput.value) || Infinity;

  const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);

  renderProducts(filteredProducts);
}

renderProducts(products);

// Найти кнопку смены дизайна
const themeToggleButton = document.getElementById('themeToggle');

// Флаг для определения текущего режима
let darkMode = false;

// Обработчик события клика по кнопке смены дизайна
themeToggleButton.addEventListener('click', () => {
  darkMode = !darkMode; // Переключаем режим

  if (darkMode) {
      document.body.style.backgroundColor = '#222';
      document.body.style.color = '#fff';
  } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
  }
});

// 1. Получаем кнопку из HTML
const myButton = document.getElementById("myButton");

// 2. Выводим сообщение о загрузке страницы
console.log("страница загрузилась");

// 3. Добавляем обработчик onclick
myButton.onclick = function() {
  console.log("событие onclick");
};

// 4. Добавляем обработчик addEventListener
myButton.addEventListener("click", function() {
  console.log("событие addEventListener");
});

// Обработчик клика для кнопок 1, 2, 3 (вывод в консоль)
document.querySelectorAll('.number-button').forEach(button => {
  button.addEventListener('click', () => {
      console.log(`Нажата кнопка: ${button.textContent}`);
  });
});

// Кнопка 4: счетчик нажатий
let clickCount = 0;
document.getElementById('countButton').addEventListener('click', () => {
  clickCount++;
  console.log(`Кнопка "4" была нажата ${clickCount} раз(а)`);
});

// Кнопка 5: изменение текста после клика
document.getElementById('textChangeButton').addEventListener('click', function() {
  this.textContent = 'Вы нажали на эту кнопку';
});

// 1. Кнопка для добавления заголовка
document.getElementById('addTitleButton').addEventListener('click', () => {
  const title = document.createElement('h1');
  title.textContent = 'Новый заголовок';
  title.id = 'dynamicTitle';
  document.getElementById('buttons').appendChild(title);
});

// 2. Кнопка для удаления заголовка
document.getElementById('removeTitleButton').addEventListener('click', () => {
  const title = document.getElementById('dynamicTitle');
  if (title) {
      title.remove();
  }
});

// 3. Кнопка, реагирующая на наведение и уход курсора
const hoverButton = document.getElementById('hoverButton');
hoverButton.addEventListener('mouseover', () => {
  console.log('Вы навели на данную кнопку');
});
hoverButton.addEventListener('mouseout', () => {
  console.log('Наведение на кнопку больше нет');
});

// 1. Кнопка для добавления нового элемента списка
document.getElementById('addItemButton').addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = 'Новый элемент списка';
  document.getElementById('itemList').appendChild(newItem);
});

// 2. Кнопка для удаления первого элемента списка
document.getElementById('removeFirstItemButton').addEventListener('click', () => {
  const itemList = document.getElementById('itemList');
  if (itemList.firstElementChild) {
      itemList.firstElementChild.remove();
  }
});

// 3. Кнопка, которая получает класс "click" при клике
document.getElementById('clickClassButton').addEventListener('click', function() {
  this.classList.add('click');
});

// 1. Найти div с классом "content"
const contentDiv = document.querySelector('.content');

if (contentDiv) {
  // 2. Создать новый элемент кнопки
  const button = document.createElement('button');

  // 3. Добавить текст "Отправить"
  button.textContent = 'Отправить';

  // 4. Добавить обработчик события для изменения текста после клика
  button.addEventListener('click', () => {
      button.textContent = 'Текст отправлен';
  });

  // 5. Добавить кнопку внутрь div
  contentDiv.appendChild(button);
} else {
  console.error('Элемент с классом "content" не найден!');
}

// 1. Вывод сообщения, когда все теги DOM загружены
document.addEventListener('DOMContentLoaded', () => {
  console.log('Все теги прогрузились');
});

// 2. Вывод сообщения, когда все ресурсы страницы загружены
window.addEventListener('load', () => {
  console.log('Страница загрузилась');
});

// 3. Делегирование: Определение наличия класса "super_element" и вывод тега
document.body.addEventListener('click', (event) => {
  const element = event.target;
  const tagName = element.tagName.toLowerCase();
  if (element.classList.contains('super_element')) {
      console.log(`Класс "super_element" присутствует в элементе "${tagName}".`);
  } else {
      console.log(`Класс "super_element" отсутствует в элементе "${tagName}".`);
  }
});

// 4. Сообщение при наведении на textarea
document.addEventListener('mouseover', (event) => {
  if (event.target.tagName.toLowerCase() === 'textarea') {
      console.log('Вы навели на textarea.');
  }
});

// 5. Делегирование: Вывод текста кнопки при клике внутри ul
document.querySelector('ul').addEventListener('click', (event) => {
  if (event.target.tagName.toLowerCase() === 'button') {
      console.log(event.target.textContent);
  }
});

// 6. Ответ на вопрос:
console.log('Когда клик происходит внутри ul, сначала срабатывает обработчик клика на кнопке внутри ul, затем всплытие событий достигает обработчика клика на всем документе, определяющего наличие класса "super_element". Из-за этого сообщение из 5-го задания появляется первым, затем 3-е задание.')

// 7. Изменение цвета заднего фона каждого второго li
document.querySelectorAll('li:nth-child(even)').forEach(li => {
  li.style.backgroundColor = 'lightgray';
});
// Проверка согласия с условиями
document.getElementById('submit-agreement').addEventListener('click', function() {
  const checkbox = document.getElementById('agree-checkbox');
  const errorElement = document.getElementById('agreement-error');
  
  if (!checkbox.checked) {
      errorElement.textContent = 'Необходимо согласиться с условиями';
  } else {
      errorElement.textContent = '';
      // Здесь можно добавить код для отправки формы
      console.log('Форма отправлена');
  }
});

// Убираем сообщение об ошибке при изменении чекбокса
document.getElementById('agree-checkbox').addEventListener('change', function() {
  if (this.checked) {
      document.getElementById('agreement-error').textContent = '';
  }
});

// Обработчик для кнопки отправки напитка
document.getElementById('submit-drink').addEventListener('click', () => {
  const selectedDrink = document.querySelector('input[name="drink"]:checked');
  
  if (!selectedDrink) {
      console.log('Пожалуйста, выберите напиток');
      return;
  }
  
  if (selectedDrink.value === 'tea') {
      console.log('Чай закончился');
  } else if (selectedDrink.value === 'coffee') {
      console.log('Кофе закончился');
  }
});

// Проверка пароля
document.getElementById('check-password').addEventListener('click', () => {
  const passwordInput = document.getElementById('password-input');
  const messageElement = document.getElementById('password-message');
  
  // Удаляем предыдущие классы
  passwordInput.classList.remove('correct', 'incorrect');
  messageElement.textContent = '';
  
  if (passwordInput.value.toLowerCase() === 'пароль') {
      passwordInput.classList.add('correct');
  } else {
      passwordInput.classList.add('incorrect');
      messageElement.textContent = 'Пароль неверный';
  }
});
document.getElementById('password-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
      document.getElementById('check-password').click();
  }
});
// Динамическое изменение заголовка
document.getElementById('title-input').addEventListener('input', function() {
  const heading = document.getElementById('dynamic-heading');
  heading.textContent = this.value || 'Заголовок'; // Если поле пустое, вернется "Заголовок"
});
// Часть 1: Отображение значения input в span
document.getElementById('from').addEventListener('input', function() {
  document.getElementById('output').textContent = this.value;
});

// Часть 2: Анимация по клику
document.querySelector('.messageBtn').addEventListener('click', function() {
  const message = document.querySelector('.message');
  message.classList.add('animate_animated', 'animate_fadeInLeftBig');
  message.style.visibility = 'visible';
});

// Часть 3: Валидация формы
const form = document.getElementById('validationForm');
const inputs = form.querySelectorAll('input');

// Проверка при отправке формы
form.addEventListener('submit', function(e) {
  let isValid = true;
  
  inputs.forEach(input => {
      if (!input.value.trim()) {
          input.classList.add('error');
          isValid = false;
      }
  });
  
  if (!isValid) {
      e.preventDefault();
  }
});

// Проверка при вводе
inputs.forEach(input => {
  input.addEventListener('input', function() {
      if (this.value.trim()) {
          this.classList.remove('error');
      } else {
          this.classList.add('error');
      }
  });
});
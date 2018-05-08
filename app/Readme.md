### Библиотеки  и плагины используемые в проекте
- Библиотека JavaScript - jQuery - подключение табов
- range.js - ранжировщик цен на странице all-new-items
- aside.js - скрипт для скрытия и отображения бокового меню для мобильных сраниц
- jquery-form-styler - стилизация форм вводу select и upload
- init.js// Switch product items view - скрипт переключения вида карточек товара на странице all-new-items
- init.js//init tabs инициализация подкючения табов


### Стандартные компоненты и классы
1. Отступы между стандартными блоками:
```
    .default-section - стандартные секции
    .container - переопределенный контейнер Bootstrap, согласно макету
    .search-section-main - секция поиска на первом экране
    .search-section - секция поиска на остальных страницах
    .breadcrumbs-section - отступы секции хлебные крошки
```

2. Стилизация форм:
```
    .form-control - стандартный стиль формы
    .form-control:focus,
    .form-control-login:focus - фокусные состояния указанных форм
    textarea - минимальная высота формы textarea
    .col-form-label - стиль лейбла рядом с формой 
    .col-form-must - стиль звездочки в обязательных формах
    select,
    .jq-selectbox,
    .jq-selectbox_*** - классы стилизации формы select
    .jq-file,
    .jq-file*** - классы стилизации формы upload
    .form-search,
    .form-control-search input,
    .form-control-search i - стили формы в секции search
    .login-form - стили формы для логина
    /*#loginModal */ - блок стилизации модального окна регистрации
    .footer-form,
    .form-control-sign-up,
    .footer-form button - стили формы в футере
    .form-control.disabled,
    .form-control [disabled - стиль неактивной формы
    .form-control.error - стиль формы с ошибкой ввода
    .form-elements .form-control,
    .form-elements .form-control-login,
    .form-control .form-control-search - отступы между формами для guide
```

3. Стили боковых блоков
```
    .aside-section - стили боковых секций
    .aside- section .aside-title - стиль заголовка боковых секций
    /*Aside section - Categories*/- блок со стилями боковой секции с категориями товаров
    /*Aside section - TOP 10 Sellers*/ - блок со стилями для боковой секции TOP 10 sellers
```
4. Стили основного стандартного блока на странице
```
    .content-wrapper-bordered - бекграунд и бордер
    .content-wrapper-bordered .content-wrapper-title - отступы, бордер, цвет 
    .content-wrapper-bordered .content-wrapper-title h6 -  текстовые стили
    .content-wrapper-bordered .content-wrapper-body - внутренние отступы
```
### Основные контрольные точки media-запросов
 Все медиазапросы описаны в рамках блоков с элементами, для которых они выполняются.

 ```
@media (max-width: 991px) - устройства c разрешением до 991px (планшеты в портретной ориентации больше 7" и планшеты такого размера в альбомной ориентации)
@media (max-width: 767px) - устройства c разрешением до 767px (планшеты в портретной ориентации равные и меньше 7" и планшеты такого размера в альбомной ориентации)
@media (max-width: 575px) - мобильные устройства c разрешением до 575px (все мобильные телефоны в портретной  и альбомной ориентации)
@media (max-width: 479px) - мобильные устройства c разрешением до 479px (мобильные телефоны маленьких разрешений)
```    
  
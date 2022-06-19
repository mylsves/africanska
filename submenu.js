$('.menu__list li a').click(function(e){   // клик на ссылку
    e.preventDefault();                // запрещаем переход по ссылке
    var item = $(this).closest('li');  // ищем li именно этой ссылки
    var sub = item.find('.sub');       // именно в этом пункте находим подменю
    sub.slideToggle();                 // развернуть\свернуть подменю
   });
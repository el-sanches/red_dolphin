"use strict";

ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.901545, 30.289107],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14
  });
  var myPlacemark = new ymaps.Placemark([59.901545, 30.289107], {}, {});
  myMap.geoObjects.add(myPlacemark);
}

$('#send').on('click', function (e) {
  e.preventDefault();
  subject = $('#subject').val();
  body = $('#body').val();
  window.location = "mailto:test@example.com?subject=" + subject + "&body=" + body;
});
//# sourceMappingURL=contacts.js.map

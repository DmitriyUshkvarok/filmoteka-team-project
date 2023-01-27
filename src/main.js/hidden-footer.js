document.addEventListener('DOMContentLoaded', () => {
  // DOM готов к взаимодейтсвию

  const onScrollHeader = () => {
    // объявляем основную функцию onScrollHeader

    const header = document.querySelector('footer'); // находим header и записываем в константу

    let prevScroll = window.pageYOffset; // узнаем на сколько была прокручена страница ранее
    let currentScroll; // на сколько прокручена страница сейчас (пока нет значения)

    window.addEventListener('scroll', () => {
      // при прокрутке страницы

      currentScroll = window.pageYOffset > 500; // узнаем на сколько прокрутили страницу

      const headerHidden = () => header.classList.contains('hiden-footer'); // узнаем скрыт header или нет

      if (currentScroll > prevScroll && !headerHidden()) {
        // если прокручиваем страницу вниз и header не скрыт
        header.classList.add('hiden-footer'); // то скрываем header
      }
      if (currentScroll < prevScroll && headerHidden()) {
        // если прокручиваем страницу вверх и header скрыт
        header.classList.remove('hiden-footer'); // то отображаем header
      }

      prevScroll = currentScroll; // записываем на сколько прокручена страница на данный момент
    });
  };

  onScrollHeader(); // вызываем основную функцию onScrollHeader
});

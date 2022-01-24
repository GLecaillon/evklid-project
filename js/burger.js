window.addEventListener('DOMContentLoaded', function () {
  const burgerTransform = document.querySelector('#burger');
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active');
    burgerTransform.classList.toggle('is-active');

    function disableScroll() {
      document.body.classList.add('disable-scroll');
    }

    function enableScroll() {
      document.body.classList.remove('disable-scroll');
    }

    if ($('#menu').hasClass('is-active')) {
      disableScroll();
    } else {
      enableScroll();
    }

  })
})


  document.querySelectorAll('.how-we-work__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })







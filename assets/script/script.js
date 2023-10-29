document.addEventListener("DOMContentLoaded", function () {
  const customSelectTrigger = document.querySelector(".order-section__custom-select-trigger");
  const customSelect = document.querySelector(".order-section__custom-select");
  const customSelectOptions = document.querySelector(".order-section__custom-select-options");
  const customSelectText = document.querySelector(".order-section__custom-select-trigger-text");
  const rangeInput = document.querySelector('.order-section__form-range__input');
  const hamburger = document.querySelector('.app-header__hamburger');
  const navList = document.querySelector('.app-header__nav');
  const header = document.querySelector('.app-header');
  const form = document.querySelector('.order-section__form')
  const SystemTypeInput = document.getElementById('system_type')
  const orderSection = document.querySelector('.order-section');
  const orderSectionTop = orderSection.getBoundingClientRect().top;
  const fileInput = document.querySelector(".order-section__form-file");
  const fileNameDisplay = document.querySelector(".order-section__form-file__label--text");

  fileInput.addEventListener("change", function() {
      if (fileInput.files.length > 0) {
          const fileName = fileInput.files[0].name;
          fileNameDisplay.innerHTML = "Selected File: " + fileName;
      } else {
          fileNameDisplay.innerHTML = "No file selected";
      }
  }); 

  const outPutInputRange = document.querySelector('.range-output')
  customSelectTrigger.addEventListener("click", function () {
    customSelect.classList.toggle("active");
  });

  customSelectOptions.addEventListener("click", function (event) {
    if (event.target.classList.contains("order-section__custom-select-option")) {
      customSelectText.textContent = event.target.textContent;
      SystemTypeInput.value = event.target.textContent;
      customSelect.classList.remove("active");
    }
  });

  rangeInput.addEventListener('input', function (event) {
    outPutInputRange.innerHTML = `${event.target.value}%`
  })

  hamburger.addEventListener('click', function (event) {
    hamburger.classList.toggle('open')
    navList.classList.toggle('active')
    document.body.classList.toggle('hidden')
  })


  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    if (window.scrollY >= orderSectionTop) {
      orderSection.classList.add('inViewPort')
    } else {
      orderSection.classList.remove('inViewPort')

    }
  });



});

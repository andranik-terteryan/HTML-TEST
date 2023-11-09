document.addEventListener("DOMContentLoaded", function () {
  const customSelectTrigger = document.querySelector(".custom-select__trigger");
  const customSelect = document.querySelector(".custom-select");
  const customSelectOptions = document.querySelector(".custom-select__options");
  const customSelectText = document.querySelector(".custom-select__selected-text");

  const rangeInput = document.querySelector('.form__range');
  const hamburger = document.querySelector('.app-header__hamburger');
  const navList = document.querySelector('.menu');
  const header = document.querySelector('.app-header');

  const SystemTypeInput = document.getElementById('system_type')
  const orderSection = document.querySelector('.order-section');
  const orderSectionTop = orderSection.getBoundingClientRect().top;
  const fileInput = document.querySelector(".upload-file__input");
  const fileNameDisplay = document.querySelector(".upload-file__text");

  fileInput.addEventListener("change", function() {
      if (fileInput.files.length > 0) {
          const fileName = fileInput.files[0].name;
          fileNameDisplay.innerHTML = "Selected File: " + fileName;
      } else {
          fileNameDisplay.innerHTML = "No file selected";
      }
  }); 

  const outPutInputRange = document.getElementById('range-output')
  customSelectTrigger.addEventListener("click", function () {
    customSelect.classList.toggle("active");
  });

  customSelectOptions.addEventListener("click", function (event) {
    if (event.target.classList.contains("custom-select__option")) {
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

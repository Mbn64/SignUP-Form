document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const recaptchaResponse = grecaptcha.getResponse();

    if (!recaptchaResponse) {
      alert('Please complete the CAPTCHA.');
      return;
    }

    // Add further validation if needed

    alert('Form submitted successfully!');
    form.reset();
    grecaptcha.reset();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const formGroups = document.querySelectorAll('.form-group input, .form-group select');

  formGroups.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentNode.classList.add('focused');
    });

    input.addEventListener('blur', () => {
      input.parentNode.classList.remove('focused');
      if (input.value) {
        input.classList.add('filled');
      } else {
        input.classList.remove('filled');
      }
    });

    if (input.value) {
      input.classList.add('filled');
    }
  });

  const genderSelect = document.getElementById('gender');
  const birthdateInput = document.getElementById('birthdate');

  // Function to update the style of the select element
  function updateSelectStyle(selectElement) {
    if (selectElement.value) {
      selectElement.style.color = 'white';
      selectElement.style.backgroundColor = 'black';
    } else {
      selectElement.style.color = '';
      selectElement.style.backgroundColor = '';
    }
  }

  // Function to update the style of the input element
  function updateInputStyle(inputElement) {
    if (inputElement.value) {
      inputElement.style.color = 'white';
      inputElement.style.backgroundColor = 'black';
    } else {
      inputElement.style.color = '';
      inputElement.style.backgroundColor = '';
    }
  }

  // Event listener for gender select change
  genderSelect.addEventListener('change', function() {
    updateSelectStyle(this);
  });

  // Event listener for birthdate input change
  birthdateInput.addEventListener('change', function() {
    updateInputStyle(this);
  });

  // Initial style setup
  updateSelectStyle(genderSelect);
  updateInputStyle(birthdateInput);
});
const input = document.querySelectorAll('input.form-control');
input.forEach(element => {
  element.addEventListener('input', () => {
    element.classList.add('typing');
});

element.addEventListener('blur', () => {
    if (element.value === '') {
        element.classList.remove('typing');
    }
});
});
document.addEventListener("DOMContentLoaded", function() {
  const birthdateInput = document.getElementById('birthdate');
  const hijriBirthdateInput = document.getElementById('hijriBirthdate');

  birthdateInput.addEventListener('change', function() {
    const gregorianDate = new Date(birthdateInput.value);
    const hijriDate = new HijriDate(gregorianDate);

    const hijriDay = hijriDate.getDate();
    const hijriMonth = hijriDate.getMonth() + 1; // Hijri months are zero-indexed
    const hijriYear = hijriDate.getFullYear();

    hijriBirthdateInput.value = `${hijriYear}-${hijriMonth.toString().padStart(2, '0')}-${hijriDay.toString().padStart(2, '0')}`;
  });
});

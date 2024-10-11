  const form = document.querySelector('form');
  const input = document.querySelector('input');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (input.value.trim() === '') {
      alert('Please fill out the input field!');
    } else {
      alert('Thank you');
      form.submit();
    }
  });
console.log('This is from the client');
const weatherForm = document.querySelector('form');
const inputValue = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
 e.preventDefault();
   const location = inputValue.value;
   messageOne.textContent = 'Loading.....';
   messageTwo.textContent = '';
   fetch('http://localhost:3000/weather?address=' + location).then((response) => {
      response.text().then((data) => {
          result = JSON.parse(data);
          if(result.error) {
              messageOne.textContent = result.error;
          } else {
              messageOne.textContent = result.location;
              messageTwo.textContent = result.forecast;
          }
      })
})
});
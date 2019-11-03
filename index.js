function generateImages(numImgs) {
  $('.output').empty();
  for (let i = 0; i < numImgs; i++) {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      $('.output').append(`<img src="${responseJson.message}" class="output-img">`);
    })
    .catch(error => alert('Something went wrong. Try again later.'));
  }
  $('.output').removeClass('hidden');
}

function handleInput() {
  $('form').submit(function(event) {
    event.preventDefault();
    let numImgs = $('input').val();
    if (numImgs < 1 || numImgs > 50) {
      alert("The number you entered is out-of-range.");
    }
    else {
      generateImages($('input').val());
    }
  });
}

$(handleInput());
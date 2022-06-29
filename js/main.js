var iconClose = document.getElementById('iconClose');
var getMovies = document.getElementById('getMovies');
var serch = document.getElementById('serch');
var inputName = document.getElementById('inputName');
var inputEmail = document.getElementById('inputEmail');
var phoneInput = document.getElementById('phoneInput');
var inputPass = document.getElementById('inputPass');
var inputRePass = document.getElementById('inputRePass');
var errorPhone = document.getElementById('inputRePass');
var ageInput = document.getElementById('ageInput');
let submit=document.getElementById('submit');


let arrOfData = [];


// navbar
$(".nav .openNav").click(function () {
  let widthIcon = $('.nav-item').innerWidth();

  if ($(".nav").css("left") == '0px') {
    $('.nav').animate({ left: `-${widthIcon}` }, 700);
    $('#iconClose').addClass('fa-table-list')
    $('#iconClose').removeClass('fa-xmark')

    $(".item1").animate({ top: '150%', right: '150%' }, 900)
    $(".item2").animate({ top: '150%', right: '150%' }, 800)
    $(".item3").animate({ top: '150%', right: '150%' }, 700)
    $(".item4").animate({ top: '150%', right: '150%' }, 600)
    $(".item5").animate({ top: '150%', right: '150%' }, 500)
    $(".item6").animate({ top: '150%', right: '150%' }, 400)

  } else {

    $('.nav').animate({ left: `0px` }, 700);
    $('#iconClose').removeClass('fa-table-list');
    $('#iconClose').addClass('fa-xmark'); $
    $(".item1").animate({ top: '0', right: '0', }, 1000)
    $(".item2").animate({ top: '0', right: '0' }, 1200)
    $(".item3").animate({ top: '0', right: '0' }, 1400)
    $(".item4").animate({ top: '0', right: '0' }, 1600)
    $(".item5").animate({ top: '0', right: '0' }, 1800)
    $(".item6").animate({ top: '0', right: '0' }, 2000)
  }
})


async function showMovies(Source) {
  var respons = await fetch(`${Source}`);
  var finalRes = await respons.json();
  arrOfData = finalRes;
  arrOfData = arrOfData.results
  display();
}

$('#serch').keyup(function () {
  let cartona = ``;
  for (var i = 0; i < arrOfData.length; i++) {

    if (arrOfData[i].title.includes(serch.value)) {

      cartona +=
        `
  <div class="col-md-4 text-white ">
  <div class="cap1 ">
    <div class="pic ">
      <img class="w-100 h-100" src="https://image.tmdb.org/t/p/w500${arrOfData[i].poster_path}" alt="">
    </div>
    <div class="layer1  text-center">
    <h3 class="d-block ">${arrOfData[i].title || arrOfData[i].name} </h3>
    <p class="d-block">${arrOfData[i].overview}</p>
    <p class="d-block pt-3">rate: ${arrOfData[i].vote_average}</p>
    <p class="d-block ">${arrOfData[i].release_date}</p>
    </div>
  </div>
</div>
`
    }
    document.getElementById('rowData').innerHTML = cartona;
  }
})


function display() {
  let cartona = ``;
  for (var i = 0; i < arrOfData.length; i++) {
    cartona +=
      `
      <div class="col-lg-4 col-md-6 text-white  ">
      <div class="cap1  ">
        <div class="pic  ">
          <img class="w-100 h-100" src="https://image.tmdb.org/t/p/w500${arrOfData[i].poster_path}" alt="">
        </div>
        <div class="layer1  text-center">
        <h3 class=" ">${arrOfData[i].title || arrOfData[i].name} </h3>
        <p class="">${arrOfData[i].overview}</p>
        <p class=" ">rate: ${arrOfData[i].vote_average}</p>
        <p class=" ">${arrOfData[i].release_date}</p>
        </div>
      </div>
    </div>
  `
    document.getElementById('rowData').innerHTML = cartona;
  }
}

let firstView = 'https://api.themoviedb.org/3/movie/now_playing?api_key=7e39592fe943c405a2a189534dc726d0&language=en-US&page=1'
showMovies(firstView);

$('#NowPlaying').click(function () {
  let link = 'https://api.themoviedb.org/3/movie/now_playing?api_key=7e39592fe943c405a2a189534dc726d0&language=en-US&page=1';
  showMovies(link);
  clearMsg()
  reset()
})

$('#Popular').click(function () {
  let link = 'https://api.themoviedb.org/3/movie/popular?api_key=7e39592fe943c405a2a189534dc726d0&language=en-US&page=1';
  showMovies(link);
  clearMsg()
  reset()
})


$('#TopRated').click(function () {
  let link = 'https://api.themoviedb.org/3/movie/top_rated?api_key=7e39592fe943c405a2a189534dc726d0&language=en-US&page=1';
  showMovies(link);
  clearMsg()
  reset()
  
})

$('#Trending').click(function () {
  let link = 'https://api.themoviedb.org/3/trending/all/day?api_key=7e39592fe943c405a2a189534dc726d0';
  showMovies(link);
  clearMsg()
  reset()
})

$('#Upcoming').click(function () {
  let link = 'https://api.themoviedb.org/3/movie/upcoming?api_key=7e39592fe943c405a2a189534dc726d0&language=en-US&page=1';
  showMovies(link);
  clearMsg()
  reset()
})


getMovies.addEventListener('keyup', function () {
  showMovies(`https://api.themoviedb.org/3/search/movie?api_key=7e39592fe943c405a2a189534dc726d0&query=${this.value}`)
})


inputName.addEventListener('keyup', function () {
  checkForName();
})

inputEmail.addEventListener('keyup', function () {
  checkForEmail();
})

phoneInput.addEventListener('keyup', function () {
  checkForPhone();
})


ageInput.addEventListener('keyup', function () {
  checkForAge();
})



inputPass.addEventListener('keyup', function () {
  checkForPass();
})


inputRePass.addEventListener('keyup', function () {
  
checkForRePass();
})

function checkForName() {
  var RejexName = /^[a-zA-z ]{3,20}$/;
  if (RejexName.test(inputName.value)) {
    $('#errorMessageName').addClass("d-none");
    $('#inputName').removeClass("is-invalid");
    $('#inputName').addClass("is-valid");
    $('#inputName').css('marginBottom' , '30px');
    return true;
  } else {
    $('#errorMessageName').removeClass("d-none");
    $('#inputName').addClass("is-invalid");
    $('#inputName').removeClass("is-valid");
    $('#inputName').css('marginBottom' , '5px');

    return false;
  }
}

function checkForEmail() {
  var RejexEmail = /(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]+$)/;
  if (RejexEmail.test(inputEmail.value)) {
    $('#errorMessageEmail').addClass("d-none");
    $('#inputEmail').removeClass("is-invalid");
    $('#inputEmail').addClass("is-valid");
    $('#inputEmail').css('marginBottom' , '30px');

    return true;
  } else {
    $('#errorMessageEmail').removeClass("d-none");
    $('#inputEmail').addClass("is-invalid");
    $('#inputEmail').removeClass("is-valid");
    $('#inputEmail').css('marginBottom' , '5px');

    return false;
  }
}



function checkForPhone() {
  let RejexPhone = /^01[0125][0-9]{8}$/;
  if (RejexPhone.test(phoneInput.value)) {

    $('#errorPhone').addClass('d-none');
    $('#phoneInput').removeClass('is-invalid');
    $('#phoneInput').addClass('is-valid');
    $('#phoneInput').css('marginBottom' , '30px');

    return true;
  } else {
    $('#errorPhone').removeClass('d-none');
    $('#phoneInput').removeClass('is-valid');
    $('#phoneInput').addClass('is-invalid');
    $('#phoneInput').css('marginBottom' , '5px');

    return false;
  }
}

function checkForAge() {
  let RejexAge = /^[0-9]{2}$/;
  if (RejexAge.test(ageInput.value)) {
    $('#errorAge').addClass('d-none');
    $('#ageInput').removeClass('is-invalid');
    $('#ageInput').addClass('is-valid');
    $('#ageInput').css('marginBottom' , '30px');

    return true;
  }
  else {
    $('#errorAge').removeClass('d-none');
    $('#ageInput').removeClass('is-valid');
    $('#ageInput').addClass('is-invalid');
    $('#ageInput').css('marginBottom' , '5px');

    return false
  }
}

function checkForPass() {
  var RejexPass = /^[A-Z]{1}[a-z0-9]{5,20}$/;
  if (RejexPass.test(inputPass.value)) {
    $('#errorMessagePass').addClass("d-none");
    $('#inputPass').removeClass("is-invalid");
    $('#inputPass').addClass("is-valid");
    $('#inputPass').css('marginBottom' , '30px');

    return true;
  } else {
    $('#errorMessagePass').removeClass("d-none");
    $('#inputPass').addClass("is-invalid");
    $('#inputPass').removeClass("is-valid");
    $('#inputPass').css('marginBottom' , '5px');

    return false;
  }
}



function  checkForRePass() {

  if (inputPass.value == inputRePass.value) {
    $('#errorMessageRePass').addClass("d-none");
    $('#inputRePass').removeClass("is-invalid");
    $('#inputRePass').addClass("is-valid");
    $('#inputRePass').css('marginBottom' , '30px');

    return true;
  } else {
    $('#errorMessageRePass').removeClass("d-none");
    $('#inputRePass').addClass("is-invalid");
    $('#inputRePass').removeClass("is-valid");
    $('#inputRePass').css('marginBottom' , '5px');

    return false;
  }
}

function clearMsg() {
  $('#errorMessagePass').addClass("d-none");
  $('#errorAge').addClass("d-none");
  $('#errorPhone').addClass("d-none");
  $('#errorMessageEmail').addClass("d-none");
  $('#errorMessageName').addClass("d-none");
  $('#inputName').removeClass("is-invalid");
  $('#inputName').removeClass("is-valid");
  $('#inputEmail').removeClass("is-invalid");
  $('#inputEmail').removeClass("is-valid");
  $('#phoneInput').removeClass("is-invalid");
  $('#phoneInput').removeClass("is-valid");
  $('#ageInput').removeClass("is-invalid");
  $('#ageInput').removeClass("is-valid");
  $('#inputPass').removeClass("is-invalid");
  $('#inputPass').removeClass("is-valid");
}
function reset() {
  inputName.value = "";
  inputEmail.value = "";
  phoneInput.value = "";
  ageInput.value = "";
  inputPass.value = "";
  inputRePass.value = "";
}
let allInput=Array.from(document.querySelectorAll('.chekk'));
for(let i=0;i<allInput.length;i++){
  allInput[i].addEventListener('keyup',function(){
    if ( checkForName() && checkForEmail() && checkForAge() && checkForPhone() &&checkForPass() && checkForRePass()== true ) {
      submit.removeAttribute('disabled');
    }else{
      submit.disabled=true;
    }
  })
}



$(document).ready(function(){
  $('#loading').fadeOut(2000 , function(){
    $('body').css('overflow','visible')
  });
})
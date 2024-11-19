/**
* Template Name: EstateAgency - v4.8.0
* Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .navbar-reduce
   */
  let selectHNavbar = select('.navbar-default')
  if (selectHNavbar) {
    onscroll(document, () => {
      if (window.scrollY > 100) {
        selectHNavbar.classList.add('navbar-reduce')
        selectHNavbar.classList.remove('navbar-trans')
      } else {
        selectHNavbar.classList.remove('navbar-reduce')
        selectHNavbar.classList.add('navbar-trans')
      }
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Search window open/close
   */
  let body = select('body');
  on('click', '.navbar-toggle-box', function(e) {
    e.preventDefault()
    body.classList.add('box-collapse-open')
    body.classList.remove('box-collapse-closed')
  })

  on('click', '.close-box-collapse', function(e) {
    e.preventDefault()
    body.classList.remove('box-collapse-open')
    body.classList.add('box-collapse-closed')
  })

  /**
   * Intro Carousel
   */
  new Swiper('.intro-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Property carousel
   */
  new Swiper('#property-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.propery-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * News carousel
   */
  new Swiper('#news-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.news-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Testimonial carousel
   */
  new Swiper('#testimonial-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.testimonial-carousel-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Property Single carousel
   */
  new Swiper('#property-single-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.property-single-carousel-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})()
//PARTE DE LAS PROPIEDADES

$(document).ready(function () {
  const apiURL = "https://si0sgs.github.io/EstateAgency/datos/propiedades.json";
  function fetchProperties() {
    $.ajax({
      url: apiURL,
      method: "GET",
      success: function (data) {
        const propiedades = data.propiedades;
        const $container = $("#datosPropiedades"); 

        $container.empty();

        propiedades.forEach((propiedad) => {
          const html = `
            <div class="col-md-4">
              <div class="card-box-a card-shadow">
                <div class="img-box-a">
                  <img src="${propiedad.imagen}" alt="" class="img-a img-fluid">
                </div>
                <div class="card-overlay">
                  <div class="card-overlay-a-content">
                    <div class="card-header-a">
                      <h2 class="card-title-a">
                        <a href="#">${propiedad.clasificacion}</a>
                      </h2>
                      <p class="link-a">${propiedad.descripcion}</p>
                    </div>
                    <div class="card-body-a">
                      <div class="price-box d-flex">
                        <span class="price-a">${propiedad.tipo} | $ ${propiedad.precio}</span>
                      </div>
                    </div>
                    <div class="card-footer-a">
                      <ul class="card-info d-flex justify-content-around">
                        <li>
                          <h4 class="card-info-title">Area</h4>
                          <span>${propiedad.detalle.area}m<sup>2</sup></span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Rooms</h4>
                          <span>${propiedad.detalle.rooms}</span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Floors</h4>
                          <span>${propiedad.detalle.floors}</span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Garages</h4>
                          <span>${propiedad.detalle.garages}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
          $container.append(html);
        });
      },
      error: function (xhr, status, error) {
        console.error("Error al cargar las propiedades:", error);
        $("#datosPropiedades").html(
          "<p>Error al cargar las propiedades. Intenta nuevamente más tarde.</p>"
        );
      },
    });
  }
  fetchProperties();
});

//PARTE DE EL CLIMA 

let latitude = null; 
let longitude = null; 

//validacion para poder revisar si mis cordenadas del clima no estan en funcion 
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getWeatherData(latitude, longitude);
    },
    function (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("Permiso denegado para acceder a la ubicación.");
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Información de ubicación no disponible.");
          break;
        case error.TIMEOUT:
          alert("La solicitud de geolocalización tardó demasiado.");
          break;
        default:
          alert("Error desconocido al obtener la ubicación.");
          break;
      }
    }
  );
} else {
  alert("La geolocalización no es soportada por este navegador.");
}

//consumi la key para poder acceder a los daots del clima .
const apiKey = 'f4a8f4ab135dfc78b20f7807fac4840a';

function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                fetchWeatherData(latitude, longitude);
            },
            error => {
                $('#lug').text('Error al obtener ubicación');
                console.error('Error de geolocalización:', error);
            }
        );
    } else {
        $('#lug').text('Geolocalización no soportada');
    }
}

function fetchWeatherData(lat, lon) {
    $('#lug').text('Cargando...');
    $('#tem').text('Cargando...');
    $('#hum').text('Cargando...');
    $('#vie').text('Cargando...');
    $('#tiempoIcon').attr('src', ''); 

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather`,
        method: 'GET',
        data: {
            lat: lat,
            lon: lon,
            appid: apiKey,
            units: 'metric',
            lang: 'es'
        },
        success: function(response) {
            const temp = response.main.temp.toFixed(1) + ' °C';
            const locationName = response.name || 'Desconocido';
            const humidity = response.main.humidity + ' %';
            const wind = response.wind.speed + ' m/s';
            const iconCode = response.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            $('#lug').text(locationName);
            $('#tem').text(temp);
            $('#hum').text(humidity);
            $('#vie').text(wind);
            $('#tiempoIcon').attr('src', iconUrl).attr('alt', 'Ícono del clima');
        },
        error: function(xhr, status, error) {
            $('#lug').text('Error al cargar datos');
            $('#tem').text('No disponible');
            $('#hum').text('No disponible');
            $('#vie').text('No disponible');
            $('#tiempoIcon').attr('src', '').attr('alt', 'Sin ícono');
            console.error('Error en la llamada AJAX:', error);
        }
    });
}

$(document).ready(function() {
    getGeolocation();

    $('#tblw').on('click', function() {
        if (latitude !== null && longitude !== null) {
            fetchWeatherData(latitude, longitude);
        } else {
            $('#lug').text('Coordenadas no disponibles');
        }
    });
});

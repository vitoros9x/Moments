var x = document.querySelectorAll(".content-text");
var y = document.querySelectorAll('td');

function appr(a) {
    for (var i = 0; i < x.length; i++) {
        if (i == a) {
            x[a].classList.add("active");
            y[a].classList.add("click");
        } else {
            x[i].classList.remove("active");
            y[i].classList.remove("click");
        }
    }
}

var i = 0;
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >2000) {
            $('.event .number-slide').addClass('number-85');
            $('.event .slide-bar').addClass('bar-85');
            for (;i < 1; i++) {
              event();
            }
            
        }

        function event() {
          var n = 0;
          var event = document.getElementById("event");
          var up = setInterval(increase, 30);
          function increase() {
            if (n == 85) {
              clearInterval(up);
            } else {
              n++;
              event.innerHTML = n + "%";
            }
          }
        }

        if ($(window).scrollTop() > 2050) {
            $('.food .number-slide').addClass('number-60');
            $('.food .slide-bar').addClass('bar-60');
            
            for (;i < 2; i++) {
              food();
            }
        }

        function food() {
            var n = 0;
            var event = document.getElementById("food");
            var up = setInterval(increase, 30);
            function increase() {
              if (n == 60) {
                clearInterval(up);
              } else {
                n++;
                event.innerHTML = n + "%";
              }
            }
          }

        if ($(window).scrollTop() >2100) {
            $('.guest .number-slide').addClass('number-75');
            $('.guest .slide-bar').addClass('bar-75');
            
            for (;i < 3; i++) {
              guest();
            }

            function guest() {
                var n = 0;
                var event = document.getElementById("guest");
                var up = setInterval(increase, 30);
                function increase() {
                  if (n == 75) {
                    clearInterval(up);
                  } else {
                    n++;
                    event.innerHTML = n + "%";
                  }
                }
              }
        }

        if ($(window).scrollTop() >2150) {
            $('.finding .number-slide').addClass('number-90');
            $('.finding .slide-bar').addClass('bar-90');
            
            for (;i < 4; i++) {
              finding();
            }
        }

        function finding() {
            var n = 0;
            var event = document.getElementById("finding");
            var up = setInterval(increase, 30);
            function increase() {
              if (n == 90) {
                clearInterval(up);
              } else {
                n++;
                event.innerHTML = n + "%";
              }
            }
          }

        
    });
});


// slide ảnh phần Adorable
$(document).ready(function () {
  $('.p1').hover(function () {
    $('.p2').css('left','50%');
    $('.p3').css('left','75%');
  });
});

$(document).ready(function () {
  $('.p2').hover(function () {
    $('.p2').css('left','25%');
    $('.p3').css('left','75%');
  });
});

$(document).ready(function () {
  $('.p3').hover(function () {
    $('.p2').css('left','25%');
    $('.p3').css('left','50%');
  });
});

// menu slide ở tablet và mobile
$(document).ready(function() {
  $('.nav-bar-rp').click(function() {
    $('.bar').slideToggle();
  });
});



function myFunction(r) {
  if (r.matches) {
    $(document).ready(function() {
      $('.home').click(function() {
        $('.home-drop').slideToggle();
        $('.home-drop').css('visibility','visible');
        
      });

      $('.page').click(function() {
        $('.page-drop').slideToggle();
        $('.page-drop').css('visibility','visible');
      });

      $('.portfolio').click(function() {
        $('.portfolio-drop').slideToggle();
        $('.portfolio-drop').css('visibility','visible');
      });

      $('.shop').click(function() {
        $('.shop-drop').slideToggle();
        $('.shop-drop').css('visibility','visible');
      });

      $('.blog').click(function() {
        $('.blog-drop').slideToggle();
        $('.blog-drop').css('visibility','visible');
      });

      $('.elements').click(function() {
        $('.elements-drop').slideToggle();
        $('.elements-drop').css('visibility','visible');
        
      });

    });
  } 
}

var r = window.matchMedia("(max-width: 1080px)");
myFunction(r);
r.addListener(myFunction);


$().ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $('.start-now img').css('width','64px');
      $('.start-now img').css('height','auto');
    }
  });
});


window.onscroll =  function() {slideDown()};

function slideDown() {
  if (document.documentElement.scrollTop < 20 || document.documentElement.scrollTop > 600) {
    document.getElementById('header').style.top = "0";
  } else {
    document.getElementById('header').style.top = "-80px";
  }
}
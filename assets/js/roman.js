// function emailSub() {
//   console.log('emailSub');

//   var email = document.getElementById('email').value;

//   if (email != "") {
//     console.log(email);
//     var settings = {
//       "url": "https://entmz4e15t98.x.pipedream.net/",
//       "method": "POST",
//       "timeout": 0,
//       "headers": {
//         "Content-Type": "application/json"
//       },
//       "data": JSON.stringify({
//         "email": email
//       }),
//     };

//     $.ajax(settings).done(function (response) {

//       if (response.success == true) {
//         console.log(true);
//         document.getElementById('emailSubBtn').innerHTML = 'Success';
//       } else {
//         document.getElementById('emailSubBtn').innerHTML = 'Fail';
//         console.log(false);
//       }
//     });
//   }
// }



// function contactSub() {
//   console.log('contactSub');

//   var cName = document.getElementById('cName').value;
//   var cPhone = document.getElementById('cPhone').value;
//   var cEmail = document.getElementById('cEmail').value;
//   var msg = document.getElementById('msg').value;

//   if (cName != "" && cPhone != "" && cEmail != "" && msg != "") {
//     // console.log(email);
//     var settings = {
//       "url": "https://entmz4e15t98.x.pipedream.net/",
//       "method": "POST",
//       "timeout": 0,
//       "headers": {
//         "Content-Type": "application/json"
//       },
//       "data": JSON.stringify({
//         "email": cEmail,
//         "phone": cPhone,
//         "name": cName,
//         "msg": msg
//       }),
//     };

//     $.ajax(settings).done(function (response) {

//       if (response.success == true) {
//         console.log(true);
//         document.getElementById('emailSubBtn').innerHTML = 'Success';
//       } else {
//         document.getElementById('emailSubBtn').innerHTML = 'Fail';
//         console.log(false);
//       }
//     });
//   }

// }


var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

// $.fn.ui_hero_slider = function() {

// }
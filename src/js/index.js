// MorphSVGPlugin.convertToPath("pcbpers, pcb");
var trigger = document.querySelector('#o_shape');
var banana = document.getElementById('banana');
var bananaWrapper = document.querySelector('.banana-wrapper');
var beakTop = document.getElementById('beak_top');
var beakBot = document.getElementById('beak_bot');
var tucanBody = document.getElementById('tucan_body');
var tail = document.getElementById('tail');
var eye = document.getElementById('eye');

var beakRect = null, beakIsOpen = false;

// var tucanTongue = document.getElementById('tongue');
// TweenLite.to(tucanTongue, 1.5, {scale:1.8, ease: Power2.easeInOut});

var morph = new TimelineMax({paused:true});
  morph.to("#tongue", 0.75, { morphSVG: "#tongue_long", ease: Elastic.easeInOut.config(1, 0.3), shapeIndex:3, scale: 2 });

// var randomInterval = 1000;
// var idVar = setInterval( function(){ idleAnim() }, randomInterval);

function idleAnim() {    
  // var dateVar = new Date();    
  // var t = dateVar.toLocaleTimeString();
  // randomInterval = Math.floor(Math.random() * 6000) + 2000;
  TweenLite.to(eye, 0.3, {x: -6, scale: 1.2, transformOrigin:"center"});
  TweenMax.staggerFrom(eye.children, 0.1, {x:-4}, 0.2);
  setTimeout(function () {
    TweenLite.to(eye, 0.3, {x: 0, scale: 1});
  }, 800);
  // console.log(eye.children);
}

(function loop() {
  var rand = Math.round(Math.random() * (3000 - 500)) + 500;
  setTimeout(function() {
          idleAnim();
          loop();  
  }, rand);
}());
  
// function myStopFunction() {clearInterval(idVar);}

trigger.addEventListener('mouseenter', function() {
  trigger.classList.add('expanded');
  // TweenMax.to("#square", 2, {morphSVG: "#sphere", ease:Bounce.easeOut});
  morph.play(0);
  // menu.classList.add('open');
});

trigger.addEventListener('mouseleave', function() {
  trigger.classList.remove('expanded');
    // TweenMax.to("#sphere", 2, {morphSVG: "#square", ease:Bounce.easeOut});
    morph.reverse(0);
    // menu.classList.remove('open');
});

bananaWrapper.addEventListener('mouseenter', function() {
  // console.log('hovering banana');
  var self = this
  TweenLite.to(self, 0.3, {scale: 1.2});
  // self.addEventListener('mousedown', function(e) {
  //   console.log('clicked');
  //   var event = e;
  //   self.addEventListener('mousemove', function() {
  //     console.log('pos: ' + event.pageX);
  //     bananaWrapper.style.left = '' + event.pageX + 'px';
  //   });
  // });
  // TweenMax.to(this.scale, 0.2, { y: 15, ease: Power2.easeOut });
});

bananaWrapper.addEventListener('mouseleave', function() {
  console.log('leaving banana');
  TweenLite.to(this, 0.2, {scale: 1});
});

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  getHoverArea();

  function getHoverArea() {
    // var beakRect = window.getComputedStyle(beakTop, null);
    beakRect = beakTop.getBoundingClientRect();
    // console.log(beakRect);
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    console.log(e.clientX + ', ' + e.clientY);

    if (e.clientX >= beakRect.left && e.clientX <= beakRect.right &&
      e.clientY >= beakRect.top && e.clientY <= beakRect.bottom) {
      // Mouse is inside element.
      // beakIsOpen = true;
      affectBeak(true);
      console.log('We are in');
    } else {
      // beakIsOpen = false;
      affectBeak(false);
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(bananaWrapper);

TweenMax.to(tucanBody, 1, {rotation:-4, repeat:-1, transformOrigin:"center", yoyo:true, ease: Power2.easeInOut});
TweenMax.to(tail, 0.8, {rotation:-6, repeat:-1, transformOrigin:"top right", yoyo:true, ease: Power2.easeInOut});
  

// beakTop.addEventListener('mouseenter', function() {
//   // console.log('innnnnnn');
//   morph.play(0);
//   TweenLite.to(this, 0.5, {rotation:-20, ease: Power2.easeInOut});
//   TweenLite.to(beakBot, 0.5, {rotation:20, ease:Back.easeOut});
//   beakTop.addEventListener('mouseleave', function() {
//     // console.log('out');
//     morph.reverse(0);
//     TweenLite.to(this, 0.5, {rotation:0, ease:Back.easeOut});
//     TweenLite.to(beakBot, 0.5, {rotation:0, ease:Back.easeOut});
//   });
// });

function affectBeak(beakOpen) {
  if (beakOpen) {
    // console.log('out');
    morph.play(0);
    TweenLite.to(beakTop, 0.5, {rotation:-20, ease: Back.easeOut});
    TweenLite.to(beakBot, 0.5, {rotation:20, ease: Back.easeOut});
  } else {
    morph.reverse(0);
    TweenLite.to(beakTop, 0.5, {rotation:0, ease: Back.easeOut});
    TweenLite.to(beakBot, 0.5, {rotation:0, ease: Back.easeOut});
    // beakIsOpen = true;
  }
}

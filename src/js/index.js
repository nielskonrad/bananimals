// MorphSVGPlugin.convertToPath("pcbpers, pcb");
var banana = document.getElementById('banana');
var bananaWrapper = document.querySelector('.banana-wrapper');

var beakRect = null, beakIsOpen = false;

function Bananimal (species, context, body, mouthU, mouthL, eye, tongue, tail) {
  this.species = species;
  this.context = context;
  this.animalBody = body;
  this.mouthUpper = mouthU;
  this.mouthLower = mouthL;
  this.eye = eye;
  this.tail = tail;
  this.tongueAnim = new TimelineMax();
  this.tongueAnim.to(tongue.s, 1, { morphSVG: tongue.e, ease: Elastic.easeInOut.config(1, 0.3), shapeIndex:3, scale: 2 });
  this.swallowAnim = new TimelineMax({paused:true});
  this.swallowAnim.to("#slurp-1", 0.5, { morphSVG: "#slurp-2", ease: Sine.easeIn }).to("#slurp-1", 0.6, { morphSVG: "#slurp-3", ease: Sine.easeOut }).to("#slurp-1", 0.2, { morphSVG: "#slurp-1", ease: Sine.easeInOut });
  this.size = 1;
  // Setup idle animation
  this.setupIdleAnimation = function(obj) {
    var idleObj = obj;
    var self = this;
    function moveBody() {
      TweenMax.to(self.animalBody, 1, {rotation:-4, repeat:-1, transformOrigin:"center", yoyo:true, ease: Power2.easeInOut});
      TweenMax.to(self.tail, 0.8, {rotation:-6, repeat:-1, transformOrigin:"top right", yoyo:true, ease: Power2.easeInOut});
      // console.log(self.animalBody);
    }
    function loopAnimation() {
      TweenLite.to(idleObj, 0.3, {x: -6, scale: 1.2, transformOrigin:"center"});
      TweenMax.staggerFrom(idleObj.children, 0.3, {x:-4}, 0.1);
      setTimeout(function () {
        TweenLite.to(idleObj, 0.3, {x: 0, scale: 1});
      }, 800);
      // Set random time until next movement
      var rand = Math.round(Math.random() * 4000) + 500;
      setTimeout(function() {
        loopAnimation();  
      }, rand);
      // console.log(rand);
    }
    moveBody();
    loopAnimation();
  }
  // Grow Stomach beacuse animal ate banana
  this.growStomach = function() {
    var self = this
    this.size += 0.05;
    setTimeout(function() {
      TweenLite.to(self.animalBody, 0.3, {x: 0, scale: self.size});
    }, 500);
  }
  // Swallow Animation
  this.swallow = function() {
    this.swallowAnim.play(0);
    this.growStomach();
  }
  this.area = function() {
    var self = this
    // var beakRect = window.getComputedStyle(beakTop, null);
    console.log(self.mouthUpper.getBoundingClientRect());
    return self.mouthUpper.getBoundingClientRect();
  }
  // Open mouth
  this.affectMouth = function(beakOpen) {
    // console.log('hey');
    var self = this;
    if (beakOpen) {
      // console.log(self.tongue);
      this.tongueAnim.play(0);
      TweenLite.to(this.mouthUpper, 0.5, {rotation:-20, ease: Back.easeOut});
      TweenLite.to(this.mouthLower, 0.5, {rotation:20, ease: Back.easeOut});
      beakIsOpen = true;
    } else {
      this.tongueAnim.reverse(0);
      TweenLite.to(this.mouthUpper, 0.5, {rotation:0, ease: Back.easeOut});
      TweenLite.to(this.mouthLower, 0.5, {rotation:0, ease: Back.easeOut});
      // beakIsOpen = true;
    }
  }
  this.setupIdleAnimation(this.eye);
}

var animal = new Bananimal('tucan',
  document.getElementById('stick'),
  document.getElementById('tucan_body'),
  document.getElementById('beak_top'),
  document.getElementById('beak_bot'),
  document.getElementById('eye'),
  {s: document.getElementById('tongue'), e: document.getElementById('tongue_long')},
  document.getElementById('tail')
);

// Banana class
function Banan() {
  this.isGoingDown = false;
  var self = this
  bananaWrapper.addEventListener('mouseenter', function() {
    if (!self.isGoingDown)
      TweenLite.to(self, 0.3, {scale: 1.2});
    this.removeEventListener('mouseenter', null);
  });
  bananaWrapper.addEventListener('mouseleave', function() {
    if (!self.isGoingDown) {
      TweenLite.to(this, 0.2, {scale: 1});
    }
    this.removeEventListener('mouseleave', null);
  });
  this.destroyFruit = function() {
    var self = this;
    var fruitStyle = window.getComputedStyle(bananaWrapper, null);
    var fruitpos = {x: (parseInt(fruitStyle.offsetleft, 10)), y: (parseInt(fruitStyle.offsetTop, 10))};
    // console.log(fruitpos);
    animal.swallow();
    // eatShape.style.left = '' + fruitpos.x + 'px';
    // eatShape.style.top = '' + fruitpos.y + 'px';
    TweenLite.to(bananaWrapper, .5, {scale:0, ease: Power2.easeInOut});
    self.isGoingDown = true;
    setTimeout(function() {
      // var eatShape = document.createElement('div'); 
      // var eatText = document.createElement('p');
      // var textnode = document.createTextNode('slurp');
      // eatShape.classList.add('eat-shape');
      // eatText.classList.add('eat-text');
      // eatShape.appendChild(eatText);
      // eatText.appendChild(textnode);
      // svgContainer.parentNode.appendChild(eatShape);
      // Get editables position
      // bananaWrapper.parentNode.removeChild(bananaWrapper);
      // Place new banana
      // TweenLite.to(bananaWrapper, .5, {x: -200, y: -80});
      bananaWrapper.style.left = '' + 200 + 'px';
      bananaWrapper.style.top = '' + 200 + 'px';
      // TweenLite.to(bananaWrapper, .5, {x: 200, y: -80, scale: 1, ease: Power2.easeInOut});
      // eatShape.parentNode.removeChild(eatShape);
      animal.affectMouth(false);
      setTimeout(function(){
        TweenLite.to(bananaWrapper, .25, {scale: 1, ease: Power2.easeInOut});
        self.isGoingDown = false;
      }, 1500);
    }, 1500);
  }
};

// Make a new banana
var banana = new Banan();

function setupBanana(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
  // getHoverArea();
  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closesetupBanana;
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
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    var hover = animal.area();
    if (e.clientX >= hover.left && e.clientX <= hover.right &&
      e.clientY >= hover.top && e.clientY <= hover.bottom) {
      // Mouse is inside element.
      // beakIsOpen = true;
      animal.affectMouth(true);
      // console.log(animal);
    } else {
      // beakIsOpen = false;
      animal.affectMouth(false);
    }
  }
  function closesetupBanana(e) {
    /* stop moving when mouse button is released:*/
    var target = e.srcElement || e.target;
    document.onmouseup = null;
    document.onmousemove = null;
    if (beakIsOpen) {
      banana.destroyFruit();
    }
  }
}

setupBanana(bananaWrapper);

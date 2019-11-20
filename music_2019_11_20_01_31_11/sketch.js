let osc1, osc2, osc3, osc4, osc5, osc6, osc7, osc8, osc9, osc10;
let A1;
let C3;
let D4;
let E5;
let F6;
let G7;
let B2 = [];
let la;

function setup() {
  createCanvas(windowWidth, windowHeight);

  A1 = new A();
  osc1 = new p5.Oscillator();
  osc1.setType('sine');
  osc1.freq(275);
  osc1.amp(0); //volume between 0-1
  osc1.start();


  for (i = 0; i < 50; i++) {
    B2[i] = new B();
  }
  osc2 = new p5.Oscillator();
  osc2.setType('sine');
  osc2.freq(308);
  osc2.amp(0); //volume between 0-1
  osc2.start();

  C3 = new C(i);
  osc3 = new p5.Oscillator();
  osc3.setType('sine');
  osc3.freq(327);
  osc3.amp(0); //volume between 0-1
  osc3.start();

  D4 = new D();
  osc4 = new p5.Oscillator();
  osc4.setType('sine');
  osc4.freq(361);
  osc4.amp(0); //volume between 0-1
  osc4.start();

  E5 = new E();
  osc5 = new p5.Oscillator();
  osc5.setType('sine');
  osc5.freq(412);
  osc5.amp(0); //volume between 0-1
  osc5.start();


  F6 = new F();
  osc6 = new p5.Oscillator();
  osc6.setType('sine');
  osc6.freq(436);
  osc6.amp(0); //volume between 0-1
  osc6.start();

  G7 = new G();
  osc7 = new p5.Oscillator();
  osc7.setType('sine');
  osc7.freq(490);
  osc7.amp(0); //volume between 0-1
  osc7.start();
  
  
  la = new La();
  osc8 = new p5.Oscillator();
  osc8.setType('sine');
  osc8.freq(550);
  osc8.amp(0); //volume between 0-1
  osc8.start();
}

function draw() {
  // background(255);

  if (keyIsDown(68)) {
    osc4.amp(1);
    for (i = 0; i < 20; i++) {
      D4.show(i);
    }
  } else {
    osc4.amp(0);
  }

  if (keyIsDown(65)) {
    osc1.amp(1); //volume between 0-1
    // osc1.amp(0, 1); //fade into volumn 0 in 1 sec
    A1.show();
  } else {
    osc1.amp(0);
  }


  if (keyIsDown(66)) {
    osc2.amp(1);
    for (i = 0; i < width/30; i++) {
      B2[i].show();
    }
  } else {
    osc2.amp(0);
  }

  if (keyIsDown(67)) {
    osc3.amp(1);
    for (i = 0; i < width/50; i++) {
      C3.show(i);
    }
  } else {
    osc3.amp(0);
  }

  if (keyIsDown(69)) {
    osc5.amp(1);

    E5.show();

  } else {
    osc5.amp(0);
  }

  if (keyIsDown(70)) {
    osc6.amp(1);
    F6.show();

  } else {
    osc6.amp(0);
  }

  if (keyIsDown(71)) {
    osc7.amp(1);
    G7.show();

  } else {
    osc7.amp(0);
  }
  
  if (keyIsDown(54)) {
    osc8.amp(1);
    la.show();

  } else {
    osc8.amp(0);
  }

}
class A {
  constructor() {
    this.x = width / 2;
    this.y = height / 2
    this.w = width / 3;
    this.h = height / 3;
  }
  show() {
    background(255, 10);
    noStroke();
    fill(random(255), random(255), random(255), 80);
    circle(this.x, this.y, this.w);
    this.x += width / 10;
    this.y-=height/20;
    this.w -= 5;
    this.h -= 5;
    if(this.y<0){
    this.y=height;
    }
    if (this.x > width) {
      this.x = 0;
    }
    if (this.w < 0) {
      this.w = width / 3;
    }
    if (this.h < 0) {
      this.h = height / 3;
    }

  }


}
class B {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = random(10, width / 200);
  }
  show() {
    background(255, 10);
    noStroke();
    fill(random(255), random(255), random(255), 60);
    for (i = 0; i < 50; i++) {
      square(this.x + 40 * i, this.y + 40 * i, this.w * i);
      this.x--;
      this.y++;
      if (this.x > width || this.y > height) {
        this.x = 0;
        this.y = 0;
      }
    }
  }
}
class C {
  constructor(i) {
    this.x = 10 * i;
    this.y = i;
    this.w = random(8,width / 40);
  }
  show() {
    background(255, 2);
    fill(255, 0, 0, 50);
    noStroke();
    square(this.x, this.y, this.w);
    this.x += width / 20;
    if (this.x > width) {
      this.x = 0;
    }
    fill(255, 255, 20, 50);
    square(this.x - width / 2, this.y - width / 20, this.w);
    this.y += width / 20;
    if (this.y > height) {
      this.y = 0;
    }
    fill(129, 66, 255, 50);
    noStroke();
    square(this.y, this.x, this.w);
    this.x += width / 20;
    if (this.x > width) {
      this.x = 0;
    }
    fill(9, 214, 118, 20);
    noStroke();
    square(this.y - width / 20, this.x - 200, this.w);
    this.y += width / 20;
    if (this.y > width) {
      this.y = 0;
      
    }
  }
}
class D {
  constructor() {
    this.x = width;
    this.y = height;
    this.x1 = 0;
    this.y1 = 0;
    this.w = random(width)
    this.h = random(height);
  }
  show() {
    background(255, 10);
    noStroke();
    fill(random(255), random(255), random(255), 30);
    square(this.x, this.y, this.w);
    this.x -= width/100;
    this.y -= height/100;
    if (this.x < 0 - width || this.y < 0 - height) {
      this.x = width;
      this.y = height;
    }
    square(this.x1, this.y1, this.w);
    this.x1 += width/50;
    this.y1 += height/50;
    if (this.x1 > 2 * width || this.y1 > 2 * height) {
      this.x1 = 0;
      this.y1 = 0;
    }
  }
}
class E {
  constructor() {
    this.center = width / 2;
    this.center1 = height / 2;
    this.x = width / 2;
    this.y = height / 2;
  }
  show() {
    background(255, 10);
    strokeWeight(random(width));
    stroke(random(255), random(255), random(255), 60);
    line(this.center, this.center1, this.x, this.y);
    this.x += 25;
    this.y += 25;
    if (this.x > width || this.y > height) {
      this.x -= 255;
      this.y -= 305
    }
    if (this.x < 0) {
      this.x += 255;
    }
    if (this.y < 0) {
      this.y += 305;
    }
  }
}
class F {
  constructor() {
    this.center = random(width);
    this.center1 = random(height);
    this.x = width / 2;
    this.y = height / 2;
  }
  show() {
    background(255, 10);
    strokeWeight(random(10));
    stroke(random(255), random(255), random(255), 60);
    line(this.center, this.center1, this.x, this.y);
    this.x -= 25;
    this.y -= 55;
    if (this.x > width || this.y > height) {
      this.x -= 255;
      this.y -= 305
    }
    if (this.x < 0) {
      this.x += 255;
    }
    if (this.y < 0) {
      this.y += 305;
    }
  }
}
class G {
  constructor() {
    this.center = 0;
    this.center1 = 0;
    this.x = width;
    this.y = height;
  }
  show() {
    background(255, 10);
    strokeWeight(random(10));
    stroke(random(255), random(255), random(255), 60);
    line(this.center, this.center1, this.x, this.y);
    this.x += 25;
    this.y += 25;
    this.center += 25;
    this.center += 25;
    if (this.x > width || this.y > height || this.x < 0 || this.y < 0) {
      this.x = this.x - 80;
      this.y = this.y - 40;
      this.center -= 25;
      this.center -= 15;
    }
    if (this.center1 == 0 && this.y < 0) {
      this.center = height / 2;
      this.center = width / 2;
      this.x = width;
      this.y = height;
    }
  }
}
class La {
  constructor() {
    this.x =random(width);
    this.y = random(height);
    this.size = random(35, 45);
  }
  show() {
    background(255,5);
    noStroke();
    fill(random(255), random(255), random(255), 60);
    square(this.x, this.y, this.size);
    this.x = this.x + 12 * (cos(this.y));
      this.y+=24;
    if (this.x < 0 || this.y < 0 ||this.x > width ||this.y > height) {
      this.x =random(width);
    this.y = random(height);
    }
  }
}
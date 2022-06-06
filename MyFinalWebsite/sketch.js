let bubbles = [];
let circles = [];
let speed = 7;
let touched = false;
let constdis = 20;
let mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}
addEventListener("mousemove", function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

function setup() {
    frameRate(60);
    var canvas = createCanvas(578.6633 + 22.5918 / 2, 682);
    canvas.parent("main-start");
    canvas.background(0)

    stroke(255);
    noFill();
    circles.push()
    let b0 = new Bubble(223.5, 297.6, 22.6)
    let b1 = new Bubble(328.7, 230.3, 70.5)
    let b2 = new Bubble(135.5, 251.1, 80)
    let b3 = new Bubble(387.5, 291.1, 99.2)
    let b4 = new Bubble(287.1, 332.5, 111.2)
    let b5 = new Bubble(84.0612, 320.5102, 60)
    let b6 = new Bubble(71.1735, 404.1735, 102.7)
    let b7 = new Bubble(27.9184, 463.898, 39.3061)
    let b8 = new Bubble(116.8163, 545.6939, 26.8163)
    let b9 = new Bubble(234.3061, 520.4082, 75.1837)
    let b10 = new Bubble(578.6633, 580.7143, 22.5918)
    let b11 = new Bubble(553.1786, 555.4133, 33.8878)
    let b12 = new Bubble(522.8163, 519.2041, 56)
    let b13 = new Bubble(461.9847, 506.1888, 54.0918)
    let b14 = new Bubble(506.5714, 452.6939, 75.3061)
    let b15 = new Bubble(452.1735, 442.4388, 26.2653)
    let b16 = new Bubble(352.898, 471.1224, 169.8367)
    let b17 = new Bubble(230.051, 383.2653, 26.2653)
    let b18 = new Bubble(457.8367, 368.6154, 105.5142)
    let b19 = new Bubble(170.0663, 343.2857, 104.6633)
    let b20 = new Bubble(80.5251, 500.9082, 76.5918)
    let b21 = new Bubble(164.8776, 458.8163, 109.2245)
    let b22 = new Bubble(245.1429, 424.898, 59.5102)
    let b23 = new Bubble(159.7347, 543.551, 54.8571)
    let b24 = new Bubble(370.2857, 363.1531, 38.5714)
    let b25 = new Bubble(235.5, 231.5, 105)


    stroke('red');
    line(50, 50, 100, 100)
    line(mouseX, mouseY, pmouseX, pmouseY);


    bubbles.push(b0);
    bubbles.push(b1);
    bubbles.push(b2);
    bubbles.push(b3);
    bubbles.push(b4);
    bubbles.push(b5);
    bubbles.push(b6);
    bubbles.push(b7);
    bubbles.push(b8);
    bubbles.push(b9);
    bubbles.push(b10);
    bubbles.push(b11);
    bubbles.push(b12);
    bubbles.push(b13);
    bubbles.push(b14);
    bubbles.push(b15);
    bubbles.push(b16);
    bubbles.push(b17);
    bubbles.push(b18);
    bubbles.push(b19);
    bubbles.push(b20);
    bubbles.push(b21);
    bubbles.push(b22);
    bubbles.push(b23);
    bubbles.push(b24);
    bubbles.push(b25);

}



function windowResized() {
    let CanvasWidth = 578.6633 + 22.5918 / 2;
    let CanvasHeight = 682;
    let height = innerHeight;
    let Width = innerWidth;
    let WidthRatio = Width / CanvasWidth;
    let heightRatio = height / CanvasHeight;
    let WindowRatio = Width / height;
    // this.x = this.x * WidthRatio;
    // this.y = this.y * heightRatio;
    // let CircleRatio = this.x * WidthRatio / this.y * heightRatio;
    resizeCanvas(CanvasWidth / WidthRatio, windowHeight / heightRatio);
    console.log(WidthRatio, heightRatio);

}

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
        bubbles[i].sameratio();
        console.log(innerHeight, innerWidth);

    }
}

function draw() {

    background(1);
    for (let i = 0; i < bubbles.length; i++) {
        //bubbles[i].move();
        bubbles[i].show();
        bubbles[i].UpAndDown();

    }

}


class Bubble {

    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = 0;
        this.brightness = 0;
        this.color = color(0, 0, 0)
    }

    clicked(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r / 2) {
            this.color = color(random(0, 256), random(0, 256), random(0, 256));
            fill(this.color);
            this.brightness = 255;
        }
    }
    sameratio() {
        let CanvasWidth = 578.6633 + 22.5918 / 2;
        let CanvasHeight = 682;

        let height = innerHeight;
        let Width = innerWidth;
        let WidthRatio = Width / CanvasWidth;
        let heightRatio = height / CanvasHeight;
        let WindowRatio = Width / height;
        this.x = this.x / WidthRatio;
        this.y = this.y / heightRatio;
        let CircleRatio = this.x * WidthRatio / this.y * heightRatio;

    }
    UpAndDown() {

            this.y += 11
            this.y -= 11

            // if (this.speed = 3) {
            //     this.speed-3


            // }
        }
        // move() {
        //   this.x = this.x + random(-2, 2);
        //   this.y = this.y + random(-2, 2);
        // }

    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.color, 125);

        ellipse(this.x, this.y, this.r * 1.1);
    }

}
// if (getDistance(mouse.x, mouse.y, x2, y) < z1 / 2 + z2 / 2) {
//     touched = true;
// } else { touched = false; }

function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
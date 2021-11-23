function Particle(x, y, hue, firework) {

    this.pos = createVector(x, y);
    this.firework = firework;
    this.hue = hue;
    this.brigthness = 255;

    if (firework) {
        this.vel = createVector(0, random(-19, -10));
    } else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(4, 12));
    }

    this.acc = createVector(0, 0);

    this.applyForce = function(force) {
        this.acc.add(force);
    }
    this.faded_out = function() {
        if (this.brigthness <= 0) {
            return true;
        }
        return false;
    }
    this.update = function() {

        if (!this.firework) {
            this.vel.mult(0.9);
            this.brigthness -= 6;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    this.show = function() {
        colorMode(HSB);
        if (!this.firework) {
            strokeWeight(2);
            stroke(this.hue, 255, 255, this.brigthness);
        } else {
            strokeWeight(4);
            stroke(this.hue, 255, 255);
        }
        point(this.pos.x, this.pos.y);
    }
}
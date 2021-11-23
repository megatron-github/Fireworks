function Firework() {

    this.hue = random(255);
    this.firework = new Particle(random(windowWidth), 
                                 windowHeight, 
                                 this.hue, 
                                 true);
    this.exploded = false;
    this.particles = [];
    this.hue 

    this.burned = function() {
        if(this.exploded && this.particles.length === 0) {
            return true;
        }
        return false;
    }

    this.explode = function() {
        for(var i = 0; i < 100; i++) {
            var p = new Particle(this.firework.pos.x, 
                                 this.firework.pos.y,
                                 this.hue,
                                 false);
            this.particles.push(p);
        }
    }

    this.update = function() {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();

            // when the firework is at max height,
            // it should be exploded
            if (this.firework.vel.y >= -1) {
                this.exploded = true;
                this.explode();
            }
        }

        for(var i = this.particles.length; i > 0; i--) {
            this.particles[i - 1].applyForce(gravity);
            this.particles[i - 1].update();
            if (this.particles[i - 1].faded_out()) {
                this.particles.splice(i, 1);
            }
        }
    }

    this.show = function() {
        if (!this.exploded) {
            this.firework.show();
        } 
        for(var i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }
    }
}
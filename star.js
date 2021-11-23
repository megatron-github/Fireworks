function Star() {
    
    this.pos = createVector(random(windowWidth), random(windowHeight));
    this.speed = createVector(1, 1);
    this.brigthness = random(100, 200);

    this.out_of_scope = function() {
        if (this.pos.x >= windowWidth && 
            this.pos.y >= windowHeight) {
                return true;
        }
        return false
    }

    this.update = function() {
        this.pos.add(this.speed);
    }
    this.show = function() {
        // colorMode(RGB);
        strokeWeight(1.5);
        stroke(this.brigthness);
        point(this.pos.x, this.pos.y);
    }
}
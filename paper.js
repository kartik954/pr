class Paper{
    constructor(x, y){
        var property = {
            isStatic: false,
            restitution: 0.6
        }
        this.body = MBodies.circle(x, y ,10, property);
        this.radius = 10;
        MWorld.add(world, this.body)
    };
    display(){
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(ball.body.position.x, ball.body.position.y, this.radius, this.radius);
    }
}
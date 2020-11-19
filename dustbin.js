class Dustbin{
    constructor(x, y, width, height){
        var property = {
            isStatic: true
        }
        this.body = MBodies.rectangle(x, y, width, height, property);
        this.height = height;
        this.width = width;
        MWorld.add(world,this.body);

    }
    display(){
        fill("red");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}
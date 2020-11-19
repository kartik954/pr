class Ground{
    constructor(x, y, width, height){
        var property = {
            isStatic: true
        }
        this.body = MBodies.rectangle(x, y ,width, height, property);
        this.width = width;
        this.height = height;
        MWorld.add(world,this.body);
    }
    display(){
        fill("white");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}
//Class is a blueprint - It has two imp - props and functions

class Ground { 
    //properties
    constructor(){
        var goptions={ isStatic:true}
            this.ground=Bodies.rectangle(200,390,400,20,goptions);
            World.add(world,this.ground)
    }
//g1.ground
    //function=>method
    display(){

        var pos=this.ground.position
        push();
            fill("green");
            rectMode(CENTER);
            rect(pos.x,pos.y,400,20)
        pop();
    }
}
class Ground {
    constructor(x,y,w,h) {
        let ground_opt = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,ground_opt)
        this.width = w
        this.height = h
        World.add(world,this.body)
    }
    display() {
        var pos = this.body.position 
        push()
        rectMode(CENTER);
        stroke(125)
        fill(200)
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }
    
}
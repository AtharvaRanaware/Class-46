class Soldier {

constructor(x,y,width,height){
this.x=x;
this.y=y;
this.width=width;
this.height=height;

this.image=loadImage("images/Soldier 2.png");
}




display(){


imageMode(CENTER);

image(this.image,this.x,this.y,this.width,this.height);

}


}
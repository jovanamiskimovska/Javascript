$(document).ready(function(){
    let circleRadius=$("#circleRadius");
    let button=$("#button");
    let areaButton=$("#getArea");
    let perimeterButton=$("#getPerimeter");
    let paragraph=$("#paragraph");
    let pi=3.14;

    button.click(function(){
        if(!circleRadius.val()){
            return;
        }
        else{
        let circle={
            radius:circleRadius.val(),
            getArea:function(){
                return this.radius*this.radius*pi;
            },
            getPerimeter:function(){
                return 2*this.radius*pi;
            }
        };
    }
    })

    areaButton.click(function(){
        if(!circle || !circle.hasOwnProperty("radius")){
            return;
        }
        else{
            paragraph.text(`The circle area is: ${circle.getArea()}`);
        }
    })
    perimeterButton.click(function(){
        if(!circle || !circle.hasOwnProperty("radius")){
            return;
        }
        else{
            paragraph.text(`The circle perimeter is: ${circle.getPerimeter()}`);
        }
    })

})
$(document).ready(function(){
let height=$("#height");
let width=$("#width");
let button=$("#button");
let paragraph=$("#paragraph");

function calculateRectangleArea(sideA,sideB){
let area=sideA*sideB;
return area;
}

function calculateRectanglePerimeter(sideA,sideB){
    let perimeter=2*(sideA+sideB);
    return perimeter;
    }

button.click(function(){
    if (!height.val() || !width.val()){
       paragraph.text("You have to enter both height and width of the rectangle") 
    }
    else{
        let resultArea=calculateRectangleArea(parseFloat(height.val()),parseFloat(width.val()));
        paragraph.text(`${resultArea}`);
    }
    paragraph.mouseover(function(){
        let resultPerimeter=calculateRectanglePerimeter(parseFloat(height.val()),parseFloat(width.val()));
        paragraph.text(`${resultPerimeter}`);
        paragraph.css("color","red");
        paragraph.css("font-size","70px");
    })
    
})
})
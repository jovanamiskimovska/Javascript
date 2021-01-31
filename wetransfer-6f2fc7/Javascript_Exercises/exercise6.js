$(document).ready(function(){
let height=$("#height");
let width=$("#width");
let button=("#button");
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
    if (isNaN(height) || height===true || height===false || isNaN(width) || width===true || width===false ){
       paragraph.text("At least one of the inputs is not a number") 
    }
    else{
        let resultArea=calculateRectangleArea(parseFloat(height),parseFloat(width));
        paragraph.text(`${resultArea}`);
    }
    paragraph.mouseover(function(){
        let resultPerimeter=calculateRectanglePerimeter(parseFloat(height),parseFloat(width));
        paragraph.text(`${resultPerimeter}`);
        paragraph.css("color","red");
        paragraph.css("font-size","bold");
    })
    
})
})
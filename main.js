var slideIndex = 0; 
showSlides(); // call showslide method 
   
function showSlides() 
{ 
    var i; 
  
    // get the array of divs' with classname image-sliderfade 
    var slides = document.getElementsByClassName("image-sliderfade");  
      
    // get the array of divs' with classname dot 
    var dots = document.getElementsByClassName("dot");  
  
    for (i = 0; i < slides.length; i++) { 
        // initially set the display to  
        // none for every image. 
        slides[i].style.display = "none";  
    } 
   
     // increase by 1, Global variable 
    slideIndex++;   
   
     // check for boundary 
    if (slideIndex > slides.length)  
    { 
        slideIndex = 1; 
    } 
    
    else if(slideIndex==slides.length)
    {
        slideIndex=4;
    }
 

   
    for (i = 0; i < dots.length; i++) { 
        dots[i].className = dots[i].className. 
                            replace(" active", ""); 
    } 
   
    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].className += " active"; 
  
    // Change image every 2 seconds 
    setTimeout(showSlides, 2000); 
   
} 


/*
var date = new Date();
var hoursNow= getHours();  
var greeting;


if(hoursNow>12)
{
    greeting="Good Afternoon thanks for visit our website"
;}
 else if(hoursNow>18)
{
greeting="Good evening thanks for visit our website"
;}
else if(hoursNow>0)
{
    greeting="Good morning thanks for visit our website";
}

else{greeting="Welcome to your best Shop site";}
var elName=document.getElementById('name');
elName.innerHTML= greeting;
*/
 




/*
var show = 'Check our new products available';
var content = '<a href="#">By clicking here </a>';
var result = show + content;

var elName = document.getElementById('name');
elName.innerHTML = result; 
*/


function sh(divId1,divId2){
    var x=document.getElementById(divId1);
    
    var y=document.getElementById(divId2);

   

    if(getComputedStyle(x).display === "none"){
       
        if ($(window).width() <= 1359) {
            x.style.display="block";
            y.style.display="block";
            
            
           
        }
         
         else if($(window).width() > 1360 ) {
            

           x.style.display="flex";
           y.style.display="flex";
         }
    }


    else{
        x.style.display='none';
        y.style.display='none';
        
    } 

   
  
}


function show_hide(divId){
    var x=document.getElementById(divId);
    if(getComputedStyle(x).display === "none"){
        x.style.display="block"
    }
    else{
        x.style.display="none"
    }
}




if (!window.getComputedStyle) {
    // Fallback for obsolete IE
    window.getComputedStyle = function(e) {
        return e.currentStyle;
    };
}

var my_button = $(".mod");

// first, bind the touch start event to your button to activate some new style...
my_button.bind("touchstart", function() {
    $(this).addClass("button_active");
    $(this).preventDefault();
});

// next, bind the touch end event to the button to deactivate the added style...
my_button.bind("touchend", function() {
    $(this).removeClass("button_active");
    $(this).preventDefault();
});

document.addEventListener('touchstart', function(event) {
  event.preventDefault();
});



var k1=document.querySelectorAll(".mod1");
var k2=document.querySelectorAll(".mod2");
var k3=document.querySelectorAll(".mod3");
var k4=document.querySelectorAll(".mod4");
var k5=document.querySelectorAll(".mod5");
var k6=document.querySelectorAll(".mod6");

var boxes = [...k1, ...k2, ...k3, ...k4, ...k5, ...k6];

// Loop through each box and add a click event listener
boxes.forEach(function(box) {
  box.addEventListener("click", function() {
    // Loop through each box again and show them all
    boxes.forEach(function(boxToShow) {
      boxToShow.style.display = "block";
    });

    // Loop through each box again and hide them if they are not the clicked box
    boxes.forEach(function(boxToHide) {
      if (boxToHide !== box) {
        boxToHide.style.display = "none";
      }
    });
  });
});


var b=document.querySelectorAll('img')

b.forEach(function(d){
    d.addEventListener('click',function(){
        boxes.forEach(function(boxToShow) {
        boxToShow.style.display = "block";
      });
    })
})







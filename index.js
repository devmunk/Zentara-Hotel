// for navbar bg change
window.addEventListener("scroll",function(){
    var scrollValue = this.window.scrollY;
    buttons = document.querySelectorAll(".nav-button");
    if(window.innerWidth > 768) { 
        if(scrollValue>10){
            document.querySelector(".navbar").classList.add("whitebg");
            for(var i=0;i<buttons.length;++i){
                buttons[i].classList.add("text-clr");
            }
        }else{
            document.querySelector(".navbar").classList.remove("whitebg");
            for(var i=0;i<buttons.length;++i){
                buttons[i].classList.remove("text-clr");
            }
        }
    }
}
)
var id = ["features","signature","footer"];

//connecting othwer nav buttons

    for(let j =0;j<id.length;++j){
        document.querySelector("#btn-"+(j+1)).addEventListener("click",function(){
            document.querySelector("#"+id[j]).scrollIntoView({
                behavior:"smooth"
            })
        })
    }


// for highlighting nav buttons on scroll

window.addEventListener("scroll",function(){
    var scrollVal = window.scrollY;  // current scroll value
    for(var i=0;i<id.length-1;++i){
        let sectionTop = document.getElementById(id[i]).getBoundingClientRect().top + window.scrollY;
        let nextSectionTop = document.getElementById(id[i+1]).getBoundingClientRect().top + window.scrollY;
        if(scrollVal > sectionTop - 150 && scrollVal < nextSectionTop - 150){
            document.querySelectorAll(".nav-button ")[i].classList.add("bclr");
        }else{
            document.querySelectorAll(".nav-button ")[i].classList.remove("bclr");
        }
    }
    let footerTop = document.getElementById("footer").getBoundingClientRect().top + window.scrollY;
    if (scrollVal > footerTop-150) {
        document.querySelectorAll(".nav-button ")[2].classList.add("bclr");
    } else {
        document.querySelectorAll(".nav-button ")[2].classList.remove("bclr");
    }
})


// for connecting book stay button to booking section
document.querySelectorAll(".primary-button").forEach(btn => {
    btn.addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("bookn").scrollIntoView({
        behaviour:"smooth"
    });
});
})


let today = new Date();
let currentDate = today.toISOString().split("T")[0]; 
document.querySelector("#checki").setAttribute("min",currentDate);
document.querySelector("#checko").setAttribute("min",currentDate);

// taking input in booking section


document.querySelector("#final-book").addEventListener("click",function(){

    let Location = document.querySelector("#locat").value;
    let checkinDate = document.querySelector("#checki").value;
    let checkoutDate = document.querySelector("#checko").value;
    localStorage.setItem("loc",Location);
    
    setTimeout(function(){

        document.querySelector("#message-box").classList.add("hidden");
    },1500)

        if(Location === ""){
            document.querySelector("#message-box").classList.remove("hidden");
            
        }else if(checkinDate===""){
            document.querySelector("#message-box span").textContent="Check-in date";
            document.querySelector("#message-box").classList.remove("hidden");
        }else if(checkoutDate===""){
            document.querySelector("#message-box span").textContent="Check-out date";
            document.querySelector("#message-box").classList.remove("hidden");
        }else if(new Date(checkoutDate)< new Date(checkinDate)){
            document.querySelector("#message-box").innerHTML="<p>❌<span style=color:red;>Check-out</span> Cannot be done before check-in </p>";
            document.querySelector("#message-box").classList.remove("hidden");
        }else{
            document.querySelector("#message-box").innerHTML="✅ Booking Successful";
            document.querySelector("#message-box").classList.remove("hidden");
        }
});



let savedLoc = localStorage.getItem("loc");
let savedCheckin = localStorage.getItem("checkin");
let savedCheckout = localStorage.getItem("checkout");

if (savedLoc) {
    document.querySelector("#locat").value = savedLoc;
}
if (savedCheckin) {
    document.querySelector("#checki").value = savedCheckin;
}
if (savedCheckout) {
    document.querySelector("#checko").value = savedCheckout;
}



// email handling button

document.querySelector("#emailb").addEventListener("click",function(){
    
    let i = document.querySelector(".input-email").value;
    let part = i.slice(i.length-10,i.length);
    setTimeout(function(){
        
        document.querySelector("#message-box").classList.add("hidden");
    },1500)
    if(part === ""){
        document.querySelector("#message-box").innerHTML="Enter Your Email!";
         document.querySelector("#message-box").classList.remove("hidden");
    }
    else if(part != "@gmail.com"){
         document.querySelector("#message-box").innerHTML="❌ Invalid Email!";
         document.querySelector("#message-box").classList.remove("hidden");
    }else{
        document.querySelector("#message-box").innerHTML="Thankyou!";
        document.querySelector("#message-box").classList.remove("hidden");
    }
})

theme = document.querySelector("#theme-toggle");

// if(localStorage.getItem("theme") === "dark"){
//     document.body.classList.add("dark-theme");
//      theme.innerHTML = "☀️ Light Mode";
// }else{
//     theme.innerHTML= "🌙 Dark Mode";
// }

theme.addEventListener("click",function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        theme.innerHTML= "☀️ Light Mode";
        localStorage.setItem("theme","dark");
    }else{
        theme.innerHTML= "🌙 Dark Mode";
        localStorage.setItem("theme","light");
    }
});


    
    const hamburger = document.getElementById("hamburger");

const slideMenu = document.querySelector(".slidebar");

hamburger.addEventListener("click", () => {
  slideMenu.classList.toggle("active");
  if(slideMenu.classList.contains("active")){
    hamburger.innerHTML = "❌";
  }else{
    hamburger.innerHTML = "☰";
  }
});
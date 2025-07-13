const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click" , () => {
    navLinks.classList.toggle("open");
})

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll",()=>{
    let current="";

    sections.forEach((section)=>{
        const sectionTop=section.offsetTop-60;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((link)=>{
        link.classList.remove("active")
        if (link.getAttribute("href")===`#${current}`){
            link.classList.add("active");
        }
    });
});

function sendMail(){
    let parms={
        name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        message:document.getElementById("message").value,
    };

    emailjs.send("service_4xb6x2l","template_6g1gjig",parms).then(alert("Email Sen!!"))
}
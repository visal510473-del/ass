 let images = [
   "./img/shoes.jpg",
   "./img/shose poster.jpg",
   
  
 ];

 let index = 0;
 let poster = document.getElementById("poster");

 setInterval(() => {
  poster.style.opacity = 0;

  setTimeout(() => {
     index = (index + 1) % images.length;
    poster.src = images[index];
    poster.style.opacity = 1;
   }, 1000);

 }, 4000);

document.addEventListener("DOMContentLoaded", function() {
  const images =[
    {
      img: "./images/img-1.jpg",
      dest : "inspired by the Northern or Southern Lights",
      title : "Aurora "
    },
    {
      img: "./images/img-2.jpg",
      dest : "inspired by the graceful tree",
      title : "Willow "
    },
    {
      img: "./images/img-3.jpg",
      dest : "inspired by the vast body of water",
      title : "Ocean "
    },
    {
      img: "./images/img-4.jpg",
      title : "inspired by the precious gemstone",
      dest : "Jasper"
    },
    {
      img: "./images/img-5.jpg",
      dest : "inspired by glowing embers of fire)",
      title : "Ember "
    },
    {
      img: "./images/img-6.jpg",
      dest : "inspired by the aromatic herb",
      title : "Sage "
    },
    {
      img: "./images/img-7.jpg",
      dest : "inspired by the quaking aspen tree",
      title : "Aspen"
    }
  ]
  const carouselInner = document.querySelector('.carousel-inner');
  images.forEach(item =>{
    const {img,dest,title} = item;
    const carouselItems = document.createElement("div");
    carouselItems.classList.add("carousel-item"); 
    carouselItems.style.backgroundImage = `url(${img})`;
    carouselInner.appendChild(carouselItems)
    carouselItems.innerHTML =`
      <h1>${title}</h1>
      <p>${dest}</p>
    `


    // console.log(img)

    
    


  })
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll(".carousel-item");
    const totalItems = carouselItems.length;
    const itemWidth = carousel.clientWidth;
    let currentIndex = 0;

    // Set initial position
    carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // Auto slide function

    function autoSlide() {
      if(currentIndex >= totalItems -1){
        currentIndex = 0;
        carouselInner.style.transition = 'transform 0.5s ease';
        carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      }else{
        currentIndex++;
        carouselInner.style.transition = 'transform 0.5s ease';
        carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      }
    }

    // Set interval for auto sliding
    setInterval(autoSlide, 7000);
  });
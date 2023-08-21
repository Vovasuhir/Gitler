let blocks = document.querySelectorAll('.block');
document.addEventListener('mousemove', function(e) {
     let dx = e.pageX - window.innerWidth / 2;
     let dy = e.pageY - window.innerHeight / 2;
     let angleX = 20 * dx / window.innerWidth / 2;
     let angleY = 20 * dy / window.innerHeight / 2;
     
     blocks.forEach(block => {
          block.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`;
     });
});

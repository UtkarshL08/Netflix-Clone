
  const slider = document.getElementById("slides");
  let position = 0;

  function left() {
    position = Math.max(position - 420, 0);
    slider.style.transform = `translateX(-${position}px)`;
  }

  function right() {
    const maxScroll = slider.scrollWidth - slider.parentElement.offsetWidth;
    position = Math.min(position + 420, maxScroll);
    slider.style.transform = `translateX(-${position}px)`;
  }


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = index + 1; // Assign number based on position
        card.appendChild(numberDiv);
    });
});



        // for animated accordian 
        var acc = document.getElementsByClassName("accordion");
        var i;
        for(i=0;i<acc.length;i++){
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if(panel.style.maxHeight){
                    panel.style.maxHeight = null;
                }
                else{
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            })
        }
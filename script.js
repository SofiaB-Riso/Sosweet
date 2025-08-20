
  (function () {
    const imagensP1 = [
      "url('prom_1.jpg')",
      "url('prom_2.jpg')",
      "url('prom_3.jpg')"
    ];

    const p1 = document.querySelector(".p1");
    if (!p1) return; // segurança

    let index = 0;
    let timer = null;
    const mq = window.matchMedia("(max-width: 1070px)");

    function aplicar(i){
      p1.style.backgroundImage = imagensP1[i];
    }

    function iniciar() {

      if (timer) return;
      aplicar(index);
      timer = setInterval(() => {
        index = (index + 1) % imagensP1.length;
        aplicar(index);
      }, 7000);
    }

    function parar() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function atualizar(e){
      if (e.matches) iniciar(); else parar();
    }

    atualizar(mq);

    
    mq.addEventListener("change", atualizar);
  })();

 // ======= Slider doces <= 1070px =======
function initDesertSlider() {
    if (window.innerWidth > 1070) return; 

    const desert = document.querySelector('.desert');
    const items = document.querySelectorAll('.desert .item');
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');

    if (!desert || items.length === 0) return;

    let currentIndex = 0;
    const totalItems = items.length;

    function updateSlider() {
        const itemWidth = items[0].offsetWidth + 50; 
        const visibleWidth = desert.offsetWidth;
const scrollPos = currentIndex * itemWidth - (visibleWidth - itemWidth*3)/2;
        desert.scrollTo({
            left: scrollPos,
            behavior: 'smooth'
        });


        items.forEach((item, index) => {
            item.style.transform = 'scale(0.8)';
            item.style.opacity = '0.6';
            if (index >= currentIndex && index < currentIndex + 3) {
                item.style.transform = 'scale(1)';
                item.style.opacity = '1';
            }
        });
    }

    btnRight.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > totalItems - 3) currentIndex = 0;
        updateSlider();
    });

    btnLeft.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = totalItems - 3;
        updateSlider();
    });

    updateSlider();

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1070) return;
        updateSlider();
    });
}


window.addEventListener('load', initDesertSlider);


document.addEventListener("DOMContentLoaded", function(){
    // aos 영역
      AOS.init();

    // header menu 영역
    const headerMenu = document.querySelectorAll(`.main_menu li>a`)
    const subList = document.querySelectorAll('.sub_menu_list')
    const subMenu = document.querySelector(`.sub_menu_box`)

    for(const menu of headerMenu){
      menu.addEventListener('mouseenter', function(){
        subMenu.classList.add(`on`);
        for(const sub of subList){
          sub.classList.add(`on`);
        }
      });
      subMenu.addEventListener(`mouseleave`, function(){
        subMenu.classList.remove(`on`)
        for(const sub of subList){
          sub.classList.remove(`on`);
        }
      })
    }

    // banner swiper 영역
    var swiper = new Swiper(".bannerSwiper", {
        effect: "fade",
        autoplay:{
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: true
     }); // Swiper_end

    // sec-2 tab 영역
    const tabBtn = document.querySelectorAll(`.tab_btn li`);

    for(const tab of tabBtn){
      tab.addEventListener(`click`, function(){

        const tabList = this.getAttribute(`data-tab`);
        const tabBox = document.querySelectorAll(`.tab_menu div`);

        for(const box of tabBox){
          box.classList.remove('active');
        }

        const changeTab = document.querySelector(`#${tabList}`);
        changeTab.classList.add('active')
      });
    }


    // sorll하면 top 버튼 나타남
     const topBtn = document.querySelector(`#top-btn`)
     window.addEventListener('scroll', ()=>{
      const scrollBtn = window.scrollY
      console.log(scrollBtn);

      if(scrollBtn >= 400){
        topBtn.classList.add('scroll')
      }else{
        topBtn.classList.remove('scroll')
      }
     });

     topBtn.addEventListener('click', ()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
     });

    // 모바일에서 sub메뉴 클릭 시 서브메뉴 나타남 + 햄버거버튼 변형
     const button = document.querySelector(`#hamburger`)

     button.addEventListener(`click`, ()=>{
      button.classList.toggle(`open`)
      subMenu.classList.toggle(`open`)
     })

}) // END
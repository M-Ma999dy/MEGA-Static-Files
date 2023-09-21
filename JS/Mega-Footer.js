let megaContactUs = 
`

<style>

.footer_logo{
    width: 200px;
    height: 200px;
    transition: all 0.5s;
    border: solid black 1px;
}

.footer_logo:hover{
    border: solid blueviolet 10px;
}

.a_None{
    text-decoration: none;
}

.SM-BTN-icon{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: solid black 3px;
    transition: transform 0.75s;
}
.SM-BTN-icon:hover{
    border: solid white 2px;
    transform: scale(1.25);
}

.GitHub{
    color: black;
}

.LinkedIn{
    color: #0366C3;
}

.Facebook{
    color: #1877F2;
}

.Twitter{
    color: #1877F2;
}

.Instagram{
    color: #E8067F;
}

.Youtube{
    color: red;
}

.TikTok{
    color: black;
}

</style>

<div class="container">

<div class="row">

  <div class="col-md-6 col-xl-3 my-3 my-lg-0">

    <h4 class="mb-4 pb-4 border-bottom">Author :</h4>

    <h1>M O H A M E D</h1>

    <h1>M A G D Y</h1>

  </div>

  <div class="col-md-6 col-xl-3 my-3 my-lg-0">

    <h4 class="mb-4 pb-4 border-bottom">Contact :</h4>

    <h6><a href="mailto:Eng.M.Ezzeldeen@gmail.com" class="a_None text-white">Email:
        Eng.M.Ezzeldeen@gmail.com</a></h6>

    <button class="bg-transparent text-white border-0 p-0" onclick="openFooterLink('wa.me/+201140155633')">
        <h6 class="mb-0">Phone : +20 11 40 155 6 33</h6>
    </button>

    <div class="d-flex justify-content-start my-3">

      <button onclick="openFooterLink('github.com/Eng-M-Ma9dy')"
        class="SM-BTN-icon GitHub    me-2 fs-3 bg-light d-flex align-items-center justify-content-center">
        <i class="fa-brands fa-github"></i>
      </button>

      <button onclick="openFooterLink('www.linkedin.com/in/eng-m-ma9dy/')"
        class="SM-BTN-icon LinkedIn  mx-2 fs-3 bg-light d-flex align-items-center justify-content-center">
        <i class="fa-brands fa-linkedin"></i>
      </button>

      <button onclick="openFooterLink('www.facebook.com/eng.m.ma9dy/')"
        class="SM-BTN-icon Facebook  mx-2 fs-3 bg-light d-flex align-items-center justify-content-center">
        <i class="fa-brands fa-facebook"></i>
      </button>

      <button onclick="openFooterLink('www.instagram.com/eng.m.ma9dy/')"
        class="SM-BTN-icon Instagram ms-2 fs-3 bg-light d-flex align-items-center justify-content-center">
        <i class="fa-brands fa-instagram"></i>
      </button>

    </div>

  </div>

  <div class="col-md-6 col-xl-3 my-3 my-lg-0">

    <h4 class="mb-4 pb-4 border-bottom">Pages :</h4>

    <h6><a href="mailto:Info.Unit.Alex@gmail.com" class="a_None text-white">Info.Unit.Alex@gmail.com</a>
    </h6>

    <button class="bg-transparent text-white border-0 p-0" onclick="openFooterLink('wa.me/+201285880488')">
      <h6 class="mb-0">WA : +20 12 858 80 4 88</h6>
    </button>

    <div class="text-light d-flex justify-content-start my-3">

      <button onclick="openFooterLink('www.facebook.com/info.unit.iu/')"
        class="SM-BTN-icon Facebook  me-2 fs-3 bg-light d-flex align-items-center justify-content-center">
        <i class="fa-brands fa-facebook"></i>
      </button>

      <button onclick="openFooterLink('www.tiktok.com/@info.unit.iu')"
        class="SM-BTN-icon TikTok    mx-2 fs-3 bg-light d-flex align-items-center justify-content-center">
        <i class="fa-brands fa-tiktok"></i>
      </button>

      <button onclick="openFooterLink('www.instagram.com/info.unit.iu')"
        class="SM-BTN-icon Instagram mx-2 fs-3 bg-light d-flex align-items-center justify-content-center">
        <i class="fa-brands fa-instagram"></i>
      </button>

      <button onclick="openFooterLink('youtube.com/@Info.Unit-IU')"
        class="SM-BTN-icon Youtube   ms-2 fs-3 bg-light d-flex align-items-center justify-content-center">
        <i class="fa-brands fa-youtube"></i>
      </button>

    </div>

  </div>

  <div class="col-md-6 col-xl-3 mt-3 mt-lg-0 d-none d-md-flex justify-content-start justify-content-xl-center">

    <button class="bg-transparent text-white border-0 p-0"
      onclick="openFooterLink('eng-m-ma9dy.github.io/MAGDY/')"><img src="https://eng-m-ma9dy.github.io/Static-Files/IMG/Profile-Logo-MM-White.jpg"
        class="footer_logo rounded-circle" alt=""></button>

  </div>

</div>

</div>

`



document.getElementById('megaContactUs').innerHTML = megaContactUs




function openFooterLink(url){

  return   window.open(`https://${url}`,"_blank")
  
}


particlesJS("particles-js3", {
  particles: {
    number: {
      value: 15, //増減
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "image",
      stroke: {
        width: 3,
        color: "#fff"
      },
      image: {
        src: "../img/wingBlack.png",
        width_min: 50,
        height_min: 50
      }
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 11,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 3, //この数値を小さくするとゆっくりな動きになる
      direction: "bottom", //下に向かって落ちる
      random: true, //動きはランダム
      straight: false, //動きをとどめない
      out_mode: "out", //画面の外に出るように描写
      bounce: false, //跳ね返りなし
      attract: {
        enable: true,
        rotateX: 1200,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: false
      },
      resize: true
    }
  },
  retina_detect: true
});

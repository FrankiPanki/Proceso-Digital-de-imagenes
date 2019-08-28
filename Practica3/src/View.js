export default class View {
  constructor() { 
  }

  init(controller) {
    this.controller = controller;


    // CARGA DE IMAGEN

    this.canvas = document.getElementById("drawing");
    this.work_area = document.getElementById("work_area");

    document.getElementById("btn_open").addEventListener("click", () => {
      this.controller.open();
    });

    document.getElementById("btn_save").addEventListener("click", () => {
      this.controller.save();
    });

    document.getElementById("btn_undo").addEventListener("click", () => {
      this.controller.undo();
    });



    // PRACTICA1-----------------------------------------------

    document.getElementById("btn_grayscale").addEventListener("click", () => {
      this.controller.grayscale_action();
    });

    document.getElementById("btn_invert").addEventListener("click", () => {
      this.controller.invert_action();
    });

    document.getElementById("btn_red_channel").addEventListener("click", () => {
      this.controller.red_channel_action();
    });

    document.getElementById("btn_green_channel").addEventListener("click", () => {
      this.controller.green_channel_action();
    });
    
    document.getElementById("btn_blue_channel").addEventListener("click", () => {
      this.controller.blue_channel_action();
    });
    document.getElementById("btn_mosaico").addEventListener("click", () => {
      this.controller.mosaico_action();
    });
    document.getElementById("btn_brillo").addEventListener("click", () => {
      this.controller.brillo_action();
    });
    document.getElementById("btn_alto_contraste").addEventListener("click", () => {
      this.controller.alto_contraste_action();
    });


    // PRACTICA2-----------------------------------------------
    document.getElementById("btn_blur").addEventListener("click", () => {
      this.controller.blur();
    });
    document.getElementById("btn_motion_blur").addEventListener("click", () => {
      this.controller.motion_blur();
    });
    document.getElementById("btn_encontrar_bordes").addEventListener("click", () => {
      this.controller.encontrar_bordes();
    });
    document.getElementById("btn_sharpen").addEventListener("click", () => {
      this.controller.sharpen();
    });
    document.getElementById("btn_emboss").addEventListener("click", () => {
      this.controller.emboss();
    });
    document.getElementById("btn_promedio").addEventListener("click", () => {
      this.controller.promedio();
    });
    document.getElementById("btn_mediana").addEventListener("click", () => {
      this.controller.mediana();
    });
    
    // PRACTICA3-----------------------------------------------
    
    document.getElementById("btn_prueba").addEventListener("click", () => {
      $('#drawing').hide();
      $('#area').append("<div id='ascii' class = 'ascii'><div>");
      this.controller.prueba();
      $('#btn_quita').css('visibility', 'visible');
    });

    document.getElementById("btn_quita").addEventListener("click", () => {
      $('#btn_quita').css('visibility', 'hidden');;
      $("#ascii").remove();
    });
    
  }

  setTitle(tit) {
    let title = document.querySelector("title");
    if (!title) {
      title = document.createElement("title");
      document.head.appendChild(title);
    }

    title.textContent = tit;
  }

  showCanvas() {
    this.canvas.style.display = "block";
  }
}

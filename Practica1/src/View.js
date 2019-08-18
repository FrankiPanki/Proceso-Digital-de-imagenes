export default class View {
  constructor() { 
  }

  init(controller) {
    this.controller = controller;

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

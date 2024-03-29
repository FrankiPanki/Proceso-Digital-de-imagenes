import Practica1 from "./Practica1.js";
import Practica2 from "./Practica2.js";
export default class Controller {
  constructor() { }

  init(model, view) {
    this.model = model;
    this.view = view;
    this.practica1=new Practica1(model);
    this.practica2=new Practica2(model);

  }

  open() {
    let file_input = document.createElement("input");
    file_input.setAttribute("type", "file");
    file_input.setAttribute("accept", "image/png,image/jpeg");

    file_input.addEventListener("change", (evt) => {
      let file = file_input.files[0];
      
      const reader = new FileReader();
      reader.addEventListener("load", (elem) => {
        let image = document.createElement("img");
        
        image.addEventListener("load", () => {
          this.view.setTitle(file.name);
          this.view.showCanvas();
          this.model.setImage(image);
        });
        image.src = reader.result;
      });
      if (file) {
        reader.readAsDataURL(file);
      }
    });

    file_input.click();
  }

  save() {
    let link = document.createElement("a");
    link.setAttribute("download", "image.png");
    document.body.appendChild(link);
    
    link.addEventListener("click", (evt) => {
      link.href = this.model.getImage();
      document.body.removeChild(link);
    });

    link.click();
  }

  undo() {
    this.model.undo();
  }



  // BOTONES DE LA PRACTICA 1

  grayscale_action() {
    this.practica1.grayscale_action();
  }
  invert_action() {
    this.practica1.invert_action();
  }
  red_channel_action() {
    this.practica1.red_channel_action();
  }
  green_channel_action() {
    this.practica1.green_channel_action();
  }
  blue_channel_action() {
    this.practica1.blue_channel_action();
  }
  mosaico_action() {
    this.practica1.mosaico(5);
  }
  brillo_action() {
    this.practica1.brillo(10);
  }
  alto_contraste_action() {
    this.practica1.altoContraste();
  }



    // BOTONES DE LA PRACTICA 2
    blur() {
      this.practica2.blur();
    }
    motion_blur() {
      this.practica2.motion_blur();
    }
    encontrar_bordes() {
      this.practica2.encontrar_bordes();
    }
    sharpen() {
      this.practica2.sharpen();
    }
    emboss() {
      this.practica2.emboss();
    }
    promedio() {
      this.practica2.promedio();
    }
    mediana() {
      this.practica2.mediana();
    }


}
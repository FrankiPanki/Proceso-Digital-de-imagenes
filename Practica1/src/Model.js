import Practica1 from "./Practica1.js";
export default class Model {
  constructor() { }

  init() {
    this.canvas = document.getElementById("drawing");
    this.context = this.canvas.getContext("2d");
    this.aux_canvas = document.createElement("canvas");
    this.aux_context = this.aux_canvas.getContext("2d");


    this.practica1=new Practica1(this.canvas, this.context,this.aux_canvas,this.aux_context);

  }

  





}
export default class Practica4 {
    constructor(modelo) {
        this.modelo = modelo;
    }


    getColorIndex(x, y, width) {
        let color_pos = x * 4 + y * (width * 4);
        return { R: color_pos, G: color_pos + 1, B: color_pos + 2, A: color_pos + 3 };
    }


    marcaAgua(alfa, texto) {
        let new_imageData = this.modelo.context.getImageData(0, 0, this.modelo.canvas.width, this.modelo.canvas.height);
        let aux_canvas = document.getElementById("auxiliar");
        let aux_context = aux_canvas.getContext("2d");
        aux_canvas.height = this.modelo.canvas.height;
        aux_canvas.width = this.modelo.canvas.width;
        aux_context.font = "25px Comic Sans MS";
        aux_context.fillStyle = "rgb(255,255,255)";
        aux_context.fillText(texto, 50, 50);


        let data1 = this.modelo.context.getImageData(0, 0, this.modelo.canvas.width, this.modelo.canvas.height);
        let data2 = aux_context.getImageData(0, 0, this.modelo.canvas.width, this.modelo.canvas.height);
        let color_index1;
        let color_index2;

        for (let i = 0; i < this.modelo.canvas.width; i++) {
            for (let j = 0; j < this.modelo.canvas.height; j++) {
                color_index1 = this.getColorIndex(i, j, this.modelo.canvas.width);
                color_index2 = this.getColorIndex(i, j, this.modelo.canvas.width);

                if (data2.data[color_index2.R] != 0) {
                    new_imageData.data[color_index1.R] = (data1.data[color_index1.R] * alfa) + (data2.data[color_index2.R] * (1 - alfa));
                    new_imageData.data[color_index1.G] = (data1.data[color_index1.G] * alfa) + (data2.data[color_index2.G] * (1 - alfa));
                    new_imageData.data[color_index1.B] = (data1.data[color_index1.B] * alfa) + (data2.data[color_index2.B] * (1 - alfa));
                } 
            }
        }

        this.modelo.aux_context.putImageData(new_imageData, 0, 0);
        this.modelo.putImage(this.modelo.aux_canvas);



    }
}
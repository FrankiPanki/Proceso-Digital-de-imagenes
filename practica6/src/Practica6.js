export default class Practica6 {
    constructor(modelo) {
        this.modelo = modelo;
        this.tam = 10;
        this.w = 1000;
        this.h = 1000;
        this.x = 0
        this.y = 0;
        this.m = 0;
        this.n = 0;
        this.minicanvas = document.getElementById("minicanvas");
        this.minicontext = minicanvas.getContext("2d");
        this.minicanvas.setAttribute("width", this.tam);
        this.minicanvas.setAttribute("height", this.tam);
        this.imageData;
    }

    getColorIndex(x, y, width) {
        let color_pos = x * 4 + y * (width * 4);
        return { R: color_pos, G: color_pos + 1, B: color_pos + 2, A: color_pos + 3 };
    }

    apply_function_per_pixel(fun) {
        let color_index;
        let new_color;
        for (let i = 0; i < this.tam; i++) {
            for (let j = 0; j < this.tam; j++) {
                color_index = this.getColorIndex(i, j, this.tam);
                new_color = fun(this.imageData.data[color_index.R], this.imageData.data[color_index.G], this.imageData.data[color_index.B]);

                this.imageData.data[color_index.R] = new_color.R;
                this.imageData.data[color_index.G] = new_color.G;
                this.imageData.data[color_index.B] = new_color.B;
            }
        }
    }

    // grayscale_action(factor) {
    //     this.apply_function_per_pixel(function (R, G, B) {
    //         gray = (R + G + B) / 3;
    //         return { R: gray+factor, G: gray+factor, B: gray+factor };
    //     });
    // }

    brillo(factor) {
        this.apply_function_per_pixel(function (R, G, B) {
            return { R: R + factor, G: G + factor, B: B + factor };
        });
    }

    recursivo_gris() {
        this.modelo.aux_canvas.setAttribute("width", this.w);
        this.modelo.aux_canvas.setAttribute("height", this.h);
        let imageData2 = this.modelo.context.getImageData(0, 0, this.modelo.canvas.width, this.modelo.canvas.height);
        let r=0, g=0, b=0;



        while (this.x < this.w) {
            this.m = ((this.x + this.tam) < this.w) ? this.tam : this.w - this.x;
            while (this.y < this.h) {
                for (let i = 0; i < this.m; i++) {

                    for (let j = 0; j < this.n; j++) {
                        let pixel = this.getColorIndex(i + this.x, j + this.y, this.modelo.canvas.width);
                        r += imageData2.data[pixel.R]; g += imageData2.data[pixel.G]; b += imageData2.data[pixel.B];
                        console.log(r);
                    }

                } r /= (this.m * this.n);


                this.minicontext.clearRect(0, 0, this.tam, this.tam);
                this.minicontext.drawImage(this.modelo.image, 0, 0, this.tam, this.tam);
                this.imageData = this.minicontext.getImageData(0, 0, this.minicanvas.width, this.minicanvas.height);
                this.brillo(r);

                this.modelo.aux_context.putImageData(this.imageData, this.x, this.y);


                this.n = ((this.y + this.tam) < this.h) ? this.tam : this.h - this.y;
                this.y += this.n;

            }
            this.x += this.m; this.y = 0;

        }
        this.modelo.putImage(this.modelo.aux_canvas);

    }

}
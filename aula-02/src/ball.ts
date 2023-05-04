export class Ball {
  color: string;
  circunference: number;
  material: string;
  r: number;

  constructor() {
    this.color = "amarelo";
    this.r = 4;
  }

  addMaterial() {
    this.material = "madeira";
  }

  showMaterial() {
    return this.material;
  }

  trocarCor() {
    this.color = "azul";
  }

  showColor() {
    return this.color;
  }
  calcCircunference() {
    this.circunference = 3.14159 * (this.r * this.r);
  }

  showCircunference() {
    return this.circunference;
  }
}

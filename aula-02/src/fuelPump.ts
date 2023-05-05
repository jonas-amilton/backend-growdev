export class FuelPump {
  fuelType: string;
  literPrice: number;
  fuelQuantity: number;

  constructor(fuelType: string, literPrice: number, fuelQuantity: number) {
    this.fuelType = fuelType;
    this.literPrice = literPrice;
    this.fuelQuantity = fuelQuantity;
  }

  fuelByValue(value: number): void {
    const liters = value / this.literPrice;
    if (liters <= this.fuelQuantity) {
      this.fuelQuantity -= liters;
      console.log(
        `Foram abastecidos ${liters.toFixed(2)} litros de ${this.fuelType}.`
      );
    } else {
      console.log("Não há combustível suficiente na bomba.");
    }
  }

  fuelByLiter(liters: number): void {
    const value = liters * this.literPrice;
    if (liters <= this.fuelQuantity) {
      this.fuelQuantity -= liters;
      console.log(`O valor a ser pago é R$ ${value.toFixed(2)}.`);
    } else {
      console.log("Não há combustível suficiente na bomba.");
    }
  }

  changeValue(newValue: number): void {
    this.literPrice = newValue;
  }

  changeFuelType(fuelType: string): void {
    this.fuelType = fuelType;
  }

  changeFuelQuantity(quantity: number): void {
    this.fuelQuantity = quantity;
  }
}

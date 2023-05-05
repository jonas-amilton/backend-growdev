export class Car {
  fuelEfficiency: number;
  fuelLevel: number;

  constructor(fuelEfficiency: number) {
    this.fuelEfficiency = fuelEfficiency;
    this.fuelLevel = 0;
  }

  drive(distance: number): void {
    const fuelNeeded = distance / this.fuelEfficiency;
    if (fuelNeeded > this.fuelLevel) {
      console.log("Não há combustível suficiente para andar essa distância");
      return;
    }
    this.fuelLevel -= fuelNeeded;
    console.log(`Andou ${distance} km.`);
  }

  getFuel(): number {
    return this.fuelLevel;
  }

  addFuel(quantity: number): void {
    this.fuelLevel += quantity;
    console.log(`Abasteceu com ${quantity} litros.`);
  }
}

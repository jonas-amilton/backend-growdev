import { Counter } from "./counter";
import { Ball } from "./ball";
import { Wallet } from "./wallet";
import { Calc } from "./calc";
import { FuelPump } from "./fuelPump";
import { Car } from "./car";

const counter = new Counter();

counter.increase();
console.log(counter.getValue());

counter.reset();
console.log(counter.getValue());

const ball = new Ball();

ball.trocarCor();
ball.calcCircunference();
ball.addMaterial();

console.log(ball.showColor());
console.log(ball.showCircunference());
console.log(ball.showMaterial());

const wallet = new Wallet();

wallet.altName("Maria");
wallet.deposit(1000);
wallet.toWithdraw(500);

console.log(wallet.showData());

const calc = new Calc();

calc.som(2, 7);
calc.sub(5, 7);
calc.div(8, 2);
calc.mul(2, 4);

console.log(calc.showResult());

const fuelPump = new FuelPump("aditivado", 5, 50);

fuelPump.fuelByValue(80);
fuelPump.fuelByLiter(10);
fuelPump.changeValue(8);
fuelPump.changeFuelType("comum");
fuelPump.changeFuelQuantity(70);

const myCar = new Car(15);
myCar.addFuel(20);
myCar.drive(100);
console.log(`Nível de gasolina: ${myCar.getFuel()} litros`);

import { Counter } from "./counter";
import { Ball } from "./ball";

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

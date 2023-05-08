import { Normal, Vip, Camarote } from "./ingresso";

const ingressoNormal = new Normal(50);
ingressoNormal.imprimeValor(); // Valor do ingresso normal: R$ 50.00

const ingressoVIP = new Vip(100, 50);
ingressoVIP.imprimeValor(); // Valor do ingresso VIP: R$ 150.00

const ingressoCamarote = new Camarote(150, 100);
ingressoCamarote.imprimeValor(); // Valor do ingresso Camarote: R$ 250.00

// 1 - importação de arquivos
import importGreet from "./greet";

importGreet();

// 2 - import de variavel
import { x } from "./variable";

console.log(x);

// 3 - multiplas importações
import { a, b, myFunction } from "./multiple";

console.log(a);
console.log(b);

console.log(myFunction());

// 4 - alias
import { someName as name } from "./changename";

console.log(name);

// 5 - import all
import * as myNumbers from "./numbers";

const nX = myNumbers.n1;

console.log(nX);

// 6 - types or interfaces

import { Human } from "./myType";

class User implements Human {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new User("João", 25);

console.log(joao);

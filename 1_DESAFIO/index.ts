type PARAMS = {
  params1: number;
  params2: number;
};

function plus({ params1, params2 }: PARAMS) {
  return params1 + params2;
}

const value = plus({ params1: 13, params2: 20 });

console.log(`Soma de valores ${value}`);

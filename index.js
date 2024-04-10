let set = [1, 3, 2, 4, 2, 1, 3];

const findLostNumber = (set) => {
  // Caso en el que set este vacio
  if (set.length === 0) {
    console.log('The set is empty');
    return;
  }

  // Caso en el que set no sea un array
  if (!Array.isArray(set)) {
    console.log('The set is not an array');
    return;
  }

  // Caso en el el contenido del array no sea un numero
  for (let i = 0; i < set.length; i++) {
    if (typeof set[i] !== 'number') {
      console.log('The set contains non-numeric elements');
      return;
    }
  };

  // Inicializar contador
  let counter = {};
};

console.log(findLostNumber(set));

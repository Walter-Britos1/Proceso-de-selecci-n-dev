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

  // Recorrer el array
  for (let i = 0; i < set.length; i++) {
    counter[set[i]] 
    // Si el numero se encuentra en el contador, incrementamos su frecuencia
      ? counter[set[i]] ++
      // Si el numero no se encuentra en el contador, iniciamos su frecuencia en 1
      : counter[set[i]] = 1;
  };

  // Recorremos el objeto contador para buscar el nuemro unico 
  for (let number in counter) {
    if (counter[number] === 1) {
      return parseInt(number);
    }
  };
};


let lostNumber = findLostNumber(set);

lostNumber 
  ? console.log(`The number unique is: ${lostNumber}`) 
  : console.log('No unique number found');


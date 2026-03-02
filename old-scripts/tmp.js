//FOR EXERCICE, IGNORE

function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}


 //Works :)
function refactoSumOfTripledEvens(array) {
    total = array.filter((number) => number % 2 === 0)
                .map((number) => number * 3)
                .reduce((total, number) => total += number);
}
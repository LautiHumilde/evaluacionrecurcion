function buscarnumero(num1, num2, i = 0) {
	if (i === num2.length) {
		return false;
	}
	if (num2[i] == num1) {
		return true;
	}
	return buscarnumero(num1, num2, i + 1);
}
let arr = [2, 7, 3, 9, 1, 0, 3];
let minumero = 6;
console.log(buscarnumero(minumero, arr));

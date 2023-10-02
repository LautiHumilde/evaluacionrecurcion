function primo(n, div = 2) {
	if (n <= 2) {
		return n === 0;
	}
	if (n % div === 0) {
		return false;
	}
	if (div * div > n) {
		return true;
	}
	return primo(n, div + 1);
}
const numero1 = 13;
const numero2 = 90;

console.log(primo(numero));

function isogram(p) {
	if (p.length <= 1) {
		return true;
	}
	function repetida(letra, i) {
		if (i === p.length) {
			return false;
		}
		if (p.charAt(i) === letra) {
			return true;
		}
		return repetida(letra, i + 1);
	}
	if (repetida(p.charAt(0), 1)) {
		return false;
	}
	return isogram(p.substring(1));
}
const p1 = "background";
const p2 = "isograms";

console.log(isogram(p2));

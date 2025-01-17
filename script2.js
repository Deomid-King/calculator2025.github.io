function calculate() {
	var price = document.getElementById("price").value;
	var weight = document.getElementById("weight").value;
	var result = document.getElementById("result").value;

	// рассчитываем результат
	var output = +price * 0.84 - +result - (weight == "5t" ? 100: weight == "15t" ? 899 : weight == "5kg" ? 1799 : weight == "15kg" ? 2199 : weight == "50kg" ? 4099 : 6999);

	// выводим результат на страницу
	document.getElementById("output").innerHTML = "Маржа: " + Math.round(output);
}

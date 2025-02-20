function calculate() {
	var price = document.getElementById("price").value;
	var weight = document.getElementById("weight").value;
	var result = document.getElementById("result").value;

	// рассчитываем результат
	var output = (+price + +result +(weight == "5t" ? 100: weight == "15t" ? 995 : weight == "5kg" ? 1955 : weight == "15kg" ? 2403 : weight == "50kg" ? 4531 : 7779)) / 0.82;

	// выводим результат на страницу
	document.getElementById("output").innerHTML = "Итоговая цена для Каспи: " + Math.round(output);
}

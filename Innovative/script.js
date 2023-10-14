document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById("product");
    const areaInput = document.getElementById("area");
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const selectedProduct = productSelect.value;
        const area = parseFloat(areaInput.value);

        const coverageValues = {
            "StarRodentShield+": 250, 
            "StarRodentSpray": 250,
            "StarMosquitoSpray": 35,
            "StarAgriShield": 250,
        };

        if (!isNaN(area)) {
            if (coverageValues[selectedProduct]) {
                const coverage = area / coverageValues[selectedProduct];
                const wholeUnits = Math.ceil(coverage); // Round up to the nearest whole unit
                resultDiv.textContent = `You will need ${wholeUnits} units of ${selectedProduct} to cover the room area.`;
            } else {
                resultDiv.textContent = "Please select a valid product.";
            }
        } else {
            resultDiv.textContent = "Please enter a valid room area.";
        }
    });
});

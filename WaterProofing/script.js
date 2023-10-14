document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById("product");
    const areaInput = document.getElementById("area");
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const selectedProduct = productSelect.value;
        const area = parseFloat(areaInput.value);

        const coverageValues = {
            "StarWaterShield": 250, 
            "StarAquaShield": 250,
            "StarAquaShieldtransparent": 35,
            "StarWaterProofi": 250,
            "StarWaterProofe": 200,
            "StarWaterSealIndustrial": 200,
            "StarPolyUrea": 200,
            "StarRubberShield": 200,
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

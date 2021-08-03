
    // for selecting different controls
    var search = document.querySelector(".searchBox");
    var convert = document.querySelector(".convert");
    var fromCurrecy = document.querySelector(".from");
    var toCurrecy = document.querySelector(".to");
    var finalValue = document.querySelector(".finalValue");
    var finalAmount = document.getElementById("finalAmount");
    var resultFrom;
    var resultTo;
    var searchValue;

    // Event when currency is changed
    fromCurrecy.addEventListener('change', (event) => {
        resultFrom = event.target.value;
    });

    // Event when currency is changed
    toCurrecy.addEventListener('change', (event) => {
        resultTo = event.target.value;
    });

    search.addEventListener('input', updateValue);

    // function for updating value
    function updateValue(e) {
        searchValue = e.target.value;
    }

    // when user clicks, it calls function getresults
    convert.addEventListener("click", getResults);

    // function getresults
    function getResults() {
        fetch('https://v6.exchangerate-api.com/v6/d5aacee741c63b65967bcf66/latest/USD')
            .then(res => {
                return res.json();
            }).then(displayResults);
    }

    // display results after convertion
    function displayResults(currency) {
        let fromRate = currency.conversion_rates[resultFrom];
        let toRate = currency.conversion_rates[resultTo];
        finalValue.innerHTML =
            ((toRate / fromRate) * searchValue).toFixed(2);
        finalAmount.style.display = "block";
    }

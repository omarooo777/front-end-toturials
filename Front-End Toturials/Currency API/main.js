fetch(
  "https://api.currencyfreaks.com/latest?apikey=8e3d4b5d0d3847b78b21ea8e4d114288"
)
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((currency) => {
    let amount = document.querySelector(".amount");
    let egpPrice = document.querySelector(".egp span");
    let sarPrice = document.querySelector(".sar span");

    egpPrice.innerHTML = amount.innerHTML * Math.round(currency.rates["EGP"]);
    sarPrice.innerHTML = amount.innerHTML * Math.round(currency.rates["SAR"]);

    // --------------------- test ----------------------
    let selectBox = document.createElement("select");
    for (let propety in currency.rates) {
      let options = document.createElement("option");
      let optionText = document.createTextNode(propety);

      options.append(optionText);
      selectBox.appendChild(options);
    }
    document.body.appendChild(selectBox);
    let myDiv = document.createElement("div");
    selectBox.addEventListener("change", function () {
      myDiv.innerHTML = "";
      let h3 = document.createElement("h3");
      let h3Text = document.createTextNode(
        `${amount.innerHTML} USA = ${Math.round(
          amount.innerHTML * currency.rates[selectBox.value]
        )} ${selectBox.value}`
      );
      myDiv.append(h3);
      h3.append(h3Text);
      document.body.appendChild(myDiv);
      console.log(selectBox.value);
    });
  });

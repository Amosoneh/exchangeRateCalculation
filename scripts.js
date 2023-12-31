const correncyEl1 = document.getElementById("currency-one");
const correncyEl2 = document.getElementById("currency-two");
const amount1 = document.getElementById("amount-one");
const amount2 = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");


function calculate() {
    const currency_one = correncyEl1.value
    const currency_two = correncyEl2.value

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);~
          const rate = data.rates[currency_two]

          rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`
          amount2.value = (amount1.value * rate).toFixed(2)
      });
}   


correncyEl1.addEventListener('change', calculate);
amount1.addEventListener('input',calculate)
correncyEl2.addEventListener('change', calculate);
amount2.addEventListener('input', calculate)
swap.addEventListener('click', () => {
    const temp = correncyEl1.value
    correncyEl1.value = correncyEl2.value
    correncyEl2.value = temp
    calculate()
})
calculate();

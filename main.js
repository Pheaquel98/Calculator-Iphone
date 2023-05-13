const buttons = Array.from(document.querySelectorAll("button"))
const display = document.querySelector(".display")
const results = document.querySelector(".results")

results.innerHTML = "0"

buttons.map((button) => {
  button.addEventListener("click", () => {
    switch (button.value) {
      case "=":
        if (display.innerHTML === "" || display.innerHTML === undefined) {
          return
        } else if (
          display.innerHTML.includes("+") ||
          display.innerHTML.includes("-") ||
          display.innerHTML.includes("/") ||
          display.innerHTML.includes("*")
        ) {
          let value = (display.innerHTML = eval(display.innerHTML))
          results.innerHTML = value
          results.style.fontSize = "40px"
          results.style.top = "0"
          display.innerHTML = ""
          break
        } else {
          return
        }

      case "C":
        display.innerHTML = ""
        break
      case "←":
        display.innerHTML = display.innerHTML.slice(0, -1)
        break
      default:
        display.innerHTML += button.value
        results.style.fontSize = "20px"
        break
    }
  })
})

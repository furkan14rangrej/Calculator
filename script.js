let string = "";
let input = document.querySelector("#input");
let buttons = document.querySelectorAll(".btn");

document.querySelector("#clear").addEventListener("click", function () {
  string = "";
  input.value = string;
});
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);

    if (buttonText == "EE") {
      string = string.slice(0, -1);
      input.value = string;
      //evaluate 
    } else if (buttonText == "=") {
        //change key symbols
      string = string.replace(/x/g, "*").replace(/÷/g, "/");
      input.value = eval(string);
    } else {
      string += buttonText;
      input.value = string;
    }
  });
}

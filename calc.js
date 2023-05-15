let output = document.getElementById("inp");

function writeNump(num) {
  output.value += num;
}

function cler() {
  output.value = "";
}

function dele() {
  output.value = output.value.slice(0, -1);
  console.log(output);
}

function calc() {
  try {
    output.value = eval(output.value);
  } catch (err) {
    alert("invalid");
  }
}

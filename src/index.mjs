import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;
// PS: I was not told to make christmas tree in a single loop.
function getBox(height, width, spacing) {
  let result = "";
  // rows
  for (let i = 0; i < height; i++) {
    let str = "";

    // initial spacing
    for (let k = 0; k < spacing; k++) {
      str += " ";
    }

    for (let j = 0; j < width; j++) {
      str = str + "* ";
    }
    result = result + str + "\n";
  }

  return result;
}

function getTriangle(start, end, spacing) {
  let _start = start - 1;

  let result = "";
  // rows
  for (let i = _start; i < end; i++) {
    let str = "";
    // adding spacing
    for (let k = i; k < spacing; k++) {
      str = str + " ";
    }
    for (let j = 0; j <= i; j++) {
      str = str + "* ";
    }

    result = result + str + "\n";
  }
  return result;
}

function christmasTree() {
  console.log(getTriangle(1, 3, 10));
  console.log(getTriangle(3, 7, 10));
  console.log(getTriangle(4, 10, 10));
  console.log(getBox(7, 3, 8));
}

christmasTree();

// https://www.codewars.com/kata/68332539defbf760434582d1

function circleMender(content) {
    return content
      .split("\n")
      .map(mendLine)
      .join("\n");
  }
  
  function mendLine(line) {
    const leftEdge = line.indexOf("#");
    const rightEdge = line.lastIndexOf("#");
  
    if (leftEdge === -1 || leftEdge === rightEdge) {
      return line;
    }
  
    return (
      line.slice(0, leftEdge) +
      "#".repeat(rightEdge - leftEdge + 1) +
      line.slice(rightEdge + 1)
    );
  }
//https://www.codewars.com/kata/69ea4c6708b1c58c36ac735a

function wrappingPaper(boxes) {
    let surface_area = boxes.map((box) => 2 * (box[0] * box[1] + box[1]* box[2] + box[2] * box[0]));
    let slack = boxes.map((box) => Math.min(box[0] * box[1], box[1] * box[2], box[2] * box[0]));
    let total = surface_area.reduce((a, b)=> a+b,0) + slack.reduce((a,b)=> a+b,0);
    return total;
    
}
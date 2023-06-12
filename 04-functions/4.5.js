/** That function returns the distance between two points.
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 * @returns {number}
 */
function calcDistance(x1, y1, x2, y2) {
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    let distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    return distance;
}
let distance = calcDistance(1, 2, 3, 4);
console.log(distance);
/*
* File: tools.js
* Author: Sallai András
* Copyright: 2024, Sallai András
* Group: szit.hu
* Date: 2024-12-02
* Github: https://github.com/oktat/tehorseweight/
* Licenc: MIT
*/

function calcWeight(perimeter, length) {
  return perimeter*perimeter*length/11877
}

export {calcWeight}

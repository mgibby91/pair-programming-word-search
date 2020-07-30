//PAIR PROGRAMMED: 
// @christylumm (github)
// @mgibby91 (github)

const searchHorizontal = function(wordSearch, word) {
    const horizontalJoin = wordSearch.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
}


const wordSearch = (letters, word) => {
    let rotatedArr = [];

    for (let row of letters[0]) {
        rotatedArr.push([]);
    }

    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters[i].length; j++) {
            rotatedArr[j][i] = letters[i][j];
        }
    }

    const horizontalHorizontalSearch = searchHorizontal(letters, word);

    const verticalHorizontalSearch = searchHorizontal(rotatedArr, word)

    if (horizontalHorizontalSearch) return true
    if (verticalHorizontalSearch) return true

    return false;
}

module.exports = wordSearch





/*

const transpose = function(matrix) {
  // Put your solution here
  let answer = [];

  for (let i = 0; i < matrix[0].length; i++) {
    answer.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      answer[j][i] = matrix[i][j];
    }
  }

  return answer;

};

*/
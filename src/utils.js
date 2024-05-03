// Your code here
export function pointsForWord(word) {
    let points = 0;
    for (const char of word) {
      if (/[aeiou]/i.test(char)) {
        points += 1;
      } else {
        points += 2;
      }
    }
    return points;
  }
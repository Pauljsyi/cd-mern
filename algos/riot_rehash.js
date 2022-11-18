/* 
Given by Riot games.
*/

const str1 = "b70a164c32a20c10j3a15";
// b70 a164 c32 a20 c10 j3 a15
const expected1 = "a199b70c42j3";
// a199 b70 c42 j3
/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
  const strObj = {};
  for (let i = 0; i < s.length; i++) {
    // console.log(typeof s.charAt(i));
    let key;
    // console.log(key, value);

    if (/[a-z]/.test(s[i])) {
      key = s[i];
    } else if (/[0-9]/.test(s[i])) {
      //   console.log("numbers", s[i]);
      //   console.log("key", key);
      key += s[i];
      console.log(key);
    }

    // console.log(strObj);
  }

  //   return;
}

console.log(rehash(str1));

/*****************************************************************************/

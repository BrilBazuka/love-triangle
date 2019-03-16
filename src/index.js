/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  preferences.unshift('');
  let blackList = [];
  let count = 0;

  for(let i = 1; i <= preferences.length; i++) {
    if(blackList.includes(preferences[i]) || i == preferences[i]) continue;
    if(i == preferences[preferences[preferences[i]]]) { 
      count++;
      blackList.push(preferences[i],preferences[preferences[i]],preferences[preferences[preferences[i]]]);
    }
  }
  return count;

};

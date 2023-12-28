/**
 You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
**/

function isValidWalk(walk) {
    //insert brilliant code here
    //label n,s,e,w with + and - numbers]
    //create a map method that goes through the whole array and adds up to 0
    let total = 0
    let confirmedLowerCase = [];
    for (let i = 0; i < walk.length; i++){
        confirmedLowerCase.push(walk[i].toLowerCase());
        // for (let j = 0; j < confirmedLowerCase.length; j++){
        //     if (j === "n"){
        //         total = total + 1
        //     }
            
        // }   
        // return total

    }
    
      
  }

  console.log(isValidWalk(["T", "n", "S", "T"]))

  // The solution i was going for cause i was looking on how to use the filter method

  /**
 function isValidWalk(walk) {
  const north = walk.filter(item => { return item === "n" }).length;
  const south = walk.filter(item => { return item === "s" }).length;
  const east = walk.filter(item => { return item === "e" }).length;
  const west = walk.filter(item => { return item === "w" }).length;
  
  return walk.length === 10 && north === south && east === west;
}  
**/
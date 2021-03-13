let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Code Below

//Create and save an array of the story string using .split() method. 
const storyWords = story.split(" ");
//Identify number of objects in storyWords array.
console.log(storyWords.length);
//Filter through storyWords array to create a new array excluding the unnecessary words. Save the new array to variable betterWords.
const betterWords = storyWords.filter(storyWord => storyWord !== "extremely" &&storyWord !== "literally" && storyWord !== "actually");
//Test lines 10-17.
console.log(betterWords.length);


//declare a counter to track number of times a word is overused.
let overusedWordsCounter = 0
//create a for loop to ITERATE through storyWords array and update the the overUsedWordsCounter variable.
for (i = 0; i < storyWords.length; i++) {
  if (storyWords[i] === "really") {
    overusedWordsCounter++;
  } else if(storyWords[i] === "very") {
    overusedWordsCounter++;
  } else if(storyWords[i] === "basically") {
    overusedWordsCounter++;
  }
};
//test lines 22 - 32.
console.log(overusedWordsCounter);


/*
Achieve  sentence counter using a .foreEach method.
let sentenceCounter2 = 0
storyWords.forEach(word => {
  if (word[word.length-1] === "." || word[word.length-1] === "!") {
    console.log(word);
    sentenceCounter2++;
  }
});
//test lines 47 - 53.
console.log(sentenceCounter2);
*/

/*
Achieve sentence counter using .filter method. 
const result = storyWords.filter(word => word.slice(-1) === "." || word.slice(-1) === "!");
console.log(result.length);
*/

//Achieve sentence counter using .reduce method.
const sentenceNum = storyWords.reduce((acc, val) =>{
 if (val.slice(-1) === "." || val.slice(-1) === "!"){
   acc++;
 }
 return acc;
  }, 0);

console.log(sentenceNum);

//Log word count, sentence count, and number of overused words.
console.log(`Word Count: ${betterWords.length}. Number of Sentences: ${sentenceNum}. Overused Words: ${overusedWordsCounter}.`)

console.log(betterWords.join(" "))


//STRETCH GOALS:
//For the overused words, remove it every other time it appears.
//Write a function that finds the word that appears the greatest number of times. 
//Replaced overused words with something else. 
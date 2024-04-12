const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

  var String, storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

  var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christma']

  var insertY = ['the soup kitchen', 'Disneyland', 'the White House']
  
  var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

  randomize.addEventListener('click', result);

  function result() {

    if(customName.value !== '') {
      const name = customName.value;

      var newStory = storyText;

      var xItem = randomValueFromArray();

      var yItem = randomValueFromArray();

      var zItem = randomValueFromArray();

      newStory = newStory.replace(':insertX;', xItem);
      newStory = newStory.replace(':insertY:', yItem);
      newStory = newStory.replace(':insertZ:', zItem);
      newStory = newStory.replace('Bob', name);
      //divide by 14
      //(F − 32) × 5/9 = C

    };

    if(document.getElementById("uk").checked) {
      const weight = Math.round(300/14 + ' stone');
      const temperature =  Math.round(((94 -32) * (5/9)) + ' centigrade');
      newStory.replace('94 fahrenheit', temperature)
      newStory.replace('300 pounds', weight)

    };

    story.textContent = newStory;
    story.style.visibility = 'visible';
  };


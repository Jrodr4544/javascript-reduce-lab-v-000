const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];

const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 }
];
 
var accumulatorCallback = (accumulator, currentValue) => {return accumulator + currentValue};

var totalBatteries = batteryBatches.reduce(accumulatorCallback, 0);

var wordCountCallback = (currentValue, sentence) => {
;
  // debugger
  // console.log(sentence)
  let wordCount = sentence.split(' ').length;

  var count = 0;
  
  if (result.hasOwnProperty(wordCount)) {
    result[wordCount] += 1;
  } else {
    result[wordCount] = 1;
  }

  return result
}

var wordCountMap = monologueLines.reduce(wordCountCallback, 0);

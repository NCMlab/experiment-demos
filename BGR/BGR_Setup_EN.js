
var FullScreenMode = false;
var TextFontSize = "30px";
var StimulusFontSize = '60px';
var ResponseChoices = [37, 39, 27]
var FeedbackLength = 400; // This is in milliseconds
var PracticeRepeats = 1
var TestRepeats = 1

function PutIntoTable(top='top', middle='mid', width=600, height=300) {
      return '<table border="0" width="'+width+'"><tr height="'+height+'"><td>'+top+'</td></tr><tr height="'+height+'"><td><div style="font-size:60px;">'+middle+'</div></td></tr><tr height="'+height+'"><td valign="bottom"><img src="StroopColorsKeyboard.png"></td></tr></table>';
    }

var InstrText = ['<p style="font-size:'+TextFontSize+'">Welcome to the Grammatical Reasoning Test.</p>',
      '<p style="font-size:'+TextFontSize+'">You will see a series of statements. After each statement there are two letters.</p>',
      '<p style="font-size:'+TextFontSize+'">Your task is to decide whether the statement about the letters is true or false.',
      '<p style="font-size:'+TextFontSize+'"><img src="assets/TrueFalseArrows.png"></img></p>',
      '<p style="font-size:'+TextFontSize+'">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p style="font-size:'+TextFontSize+'">Remember to respond as accurately and quickly as possible.</p>'];

var PoorPerformanceText = ['<p style="font-size:'+TextFontSize+'">There will be another run of practice trials with feedback.</p> <p style="font-size:'+TextFontSize+'">Remember to respond as accurately and quickly as possible.</p>'];

var TestInstrText = ['<p style="font-size:'+TextFontSize+'">Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. </p>'];

var ThankYouText = 'Thank you'

var BaddGramReasonPracticeList = [
  {
    "Sentence": "A is followed by B",
    "Response": "AB"
  },
  {
    "Sentence": "B is not followed by A",
    "Response": "BA"
  },
  {
    "Sentence": "B is preceded by A",
    "Response": "BA"
  },
  {
    "Sentence": "A does not precede B",
    "Response": "BA"
  }
]

  
var BaddGramReasonList = [
  {
    "Sentence": "A is preceded by B",
    "Response": "BA"
  },
  {
    "Sentence": "B does not precede A",
    "Response": "AB"
  },
  {
    "Sentence": "A is not followed by B",
    "Response": "BA"
  },
  {
    "Sentence": "B is preceded by A",
    "Response": "BA"
  },
  {
    "Sentence": "A is followed by B",
    "Response": "AB"
  },
  {
    "Sentence": "A does not follow B",
    "Response": "AB"
  },
  {
    "Sentence": "B is not preceded by A",
    "Response": "AB"
  },
  {
    "Sentence": "B follows A",
    "Response": "AB"
  },
  {
    "Sentence": "A precedes B",
    "Response": "BA"
  },
  {
    "Sentence": "B does not follow A",
    "Response": "BA"
  },
  {
    "Sentence": "B precedes A",
    "Response": "AB"
  },
  {
    "Sentence": "B is followed by A",
    "Response": "AB"
  },
  {
    "Sentence": "B is not followed by A",
    "Response": "BA"
  },
  {
    "Sentence": "B is preceded by A",
    "Response": "AB"
  },
  {
    "Sentence": "B is followed by A",
    "Response": "BA"
  },
  {
    "Sentence": "B precedes A",
    "Response": "BA"
  },
  {
    "Sentence": "A is not followed by B",
    "Response": "AB"
  },
  {
    "Sentence": "A is followed by B",
    "Response": "BA"
  },
  {
    "Sentence": "B is not preceded by A",
    "Response": "BA"
  },
  {
    "Sentence": "B is followed by A",
    "Response": "AB"
  },
  {
    "Sentence": "A does not follow B",
    "Response": "BA"
  },
  {
    "Sentence": "A is preceded by B",
    "Response": "AB"
  },
  {
    "Sentence": "B does not follow A",
    "Response": "AB"
  },
  {
    "Sentence": "A is not preceded by B",
    "Response": "BA"
  },
  {
    "Sentence": "A follows B",
    "Response": "BA"
  },
  {
    "Sentence": "A is not preceded by B",
    "Response": "AB"
  },
  {
    "Sentence": "A follows B",
    "Response": "AB"
  },
  {
    "Sentence": "A does not precede B",
    "Response": "AB"
  },
  {
    "Sentence": "A precedes B",
    "Response": "AB"
  },
  {
    "Sentence": "B follows A",
    "Response": "BA"
  },
  {
    "Sentence": "B does not precede A",
    "Response": "BA"
  },
  {
    "Sentence": "A does not precede B",
    "Response": "BA"
  },
  {
    "Sentence": "A does not follow B",
    "Response": "AB"
  },
  {
    "Sentence": "A is not followed by B",
    "Response": "BA"
  },
  {
    "Sentence": "B is not preceded by A",
    "Response": "BA"
  },
  {
    "Sentence": "B is preceded by A",
    "Response": "AB"
  },
  {
    "Sentence": "A follows B",
    "Response": "BA"
  },
  {
    "Sentence": "B precedes A",
    "Response": "BA"
  },
  {
    "Sentence": "B is followed by A",
    "Response": "BA"
  },
  {
    "Sentence": "A precedes B",
    "Response": "AB"
  },
  {
    "Sentence": "A follows B",
    "Response": "AB"
  },
  {
    "Sentence": "B does not precede A",
    "Response": "BA"
  },
  {
    "Sentence": "A does not precede B",
    "Response": "BA"
  },
  {
    "Sentence": "A is preceded by B",
    "Response": "BA"
  },
  {
    "Sentence": "B is not followed by A",
    "Response": "AB"
  },
  {
    "Sentence": "B does not follow A",
    "Response": "BA"
  },
  {
    "Sentence": "B does not precede A",
    "Response": "AB"
  },
  {
    "Sentence": "A is followed by B",
    "Response": "AB"
  },
  {
    "Sentence": "B is not preceded by A",
    "Response": "AB"
  },
  {
    "Sentence": "B follows A",
    "Response": "BA"
  },
  {
    "Sentence": "A does not precede B",
    "Response": "AB"
  },
  {
    "Sentence": "A is not followed by B",
    "Response": "AB"
  },
  {
    "Sentence": "B is preceded by A",
    "Response": "BA"
  },
  {
    "Sentence": "A is not preceded by B",
    "Response": "AB"
  },
  {
    "Sentence": "A does not follow B",
    "Response": "BA"
  },
  {
    "Sentence": "A is followed by B",
    "Response": "BA"
  },
  {
    "Sentence": "A is not preceded by B",
    "Response": "BA"
  },
  {
    "Sentence": "B is followed by A",
    "Response": "AB"
  },
  {
    "Sentence": "B is not followed by A",
    "Response": "BA"
  },
  {
    "Sentence": "A precedes B",
    "Response": "BA"
  },
  {
    "Sentence": "B does not follow A",
    "Response": "AB"
  },
  {
    "Sentence": "A is preceded by B",
    "Response": "AB"
  },
  {
    "Sentence": "B precedes A",
    "Response": "AB"
  },
  {
    "Sentence": "B follows A",
    "Response": "AB"
  }
]
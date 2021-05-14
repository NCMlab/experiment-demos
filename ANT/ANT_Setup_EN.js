var NFlankers = 2;

var flankersR = '';

var flankersL = '';

var flankersN = '';

for (i = 0; i < NFlankers; i++) {
      flankersR += ">";
      flankersL += "<";
      flankersN += '-';
    }

var FontSize = 45


function PutIntoTable(top='top', middle='mid', bottom='bot', width=600, height=300) {
      return '<table margin-left="auto" margin-right="auto" border="0" width="'+width+'"><tr height="'+height+'"><td>'+top+'</td></tr><tr height="'+height+'"><td><div style="font-size:'+FontSize+'px;">'+middle+'</div></td></tr> <tr height="'+height+'"><td>'+bottom+'</td></tr></table>';
    }

         // What type of trial is this?
          // Factors: 
          // flanker: left, right, none [3]
          // central arrow direction: left, right [2]
          // star: top&bot, top, bot, none, middle [5]
          // position: top, bottom [2]


// Create the array of objects dynamically
// https://stackoverflow.com/questions/7858385/how-to-add-values-to-an-array-of-objects-dynamically-in-javascript
var flankers = [flankersL, flankersR, flankersN];
var centralArrow = [">", "<"];
var fixation = [PutIntoTable("\u2217","+","\u2217"), PutIntoTable("\u2217","+"," "), PutIntoTable(" ","+","\u2217"), PutIntoTable(" ","+"," "), PutIntoTable(" ","\u2217"," ")];

var position = ["high","low"];
var count = 0;
var ANT = [];

for(var i=0; i<3; i++) {
	for (var j = 0; j < 2; j++) {
		for (var k = 0; k < 5; k++) {
			for (var m = 0; m < 2; m++) {
				ANT[count] = {};
				ANT[count].flanker = flankers[i];
				ANT[count].centralArrow = centralArrow[j];
				ANT[count].fixation = fixation[k];
				ANT[count].position = position[m];
				count += 1;
			}
		}
	}
}
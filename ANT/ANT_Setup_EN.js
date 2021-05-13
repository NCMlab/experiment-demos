var NFlankers = 2;

var flankersR = '';

var flankersL = '';

for (i = 0; i < NFlankers; i++) {
      flankersR += ">";
      flankersL += "<";
    }
function PutIntoTable(top='top', middle='mid', width=600, height=300) {
      return '<table border="0" width="'+width+'"><tr height="'+height+'"><td>'+top+'</td></tr><tr height="'+height+'"><td><div style="font-size:60px;">'+middle+'</div></td></tr><tr height="'+height+'"><td valign="bottom"><img src="StroopColorsKeyboard.png"></td></tr></table>';
    }
    
var ANT = [
	{
		"fixation": "\u2217<br>+<br>\u2217",
		"stimulus": ">",
		"flanker": flankersL,
	},
		{
		"fixation": " <br>+<br>\u2217",
		"stimulus": ">",
		"flanker": flankersR,
	},
		{
		"fixation": "\u2217<br>+<br> ",
		"stimulus": "<",
		"flanker": flankersL,
	},
		{
		"fixation":"+",
		"stimulus": "<",
		"flanker": flankersR,
	} 
]


    var fixation = [
      { // star/cross/star
        stimulus: "\u2217<br>+<br>\u2217",
        data: {stim_type: "top bot"}
      },
      { // [blank]/cross/star
        stimulus: " <br>+<br>\u2217",
        data: {stim_type: "bot"}
      },
      { // star/cross/[blank]
        stimulus: "\u2217<br>+<br> ",
        data: {stim_type: "top"}
      },
      { // [blank]/cross/[blank]
        stimulus: "+",
        data: {stim_type: "none"}
      }
      ];
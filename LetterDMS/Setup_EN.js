var AllowableLetters = "BCDFGHJKLMNPQRSTVXYZ";

var CurrentLetterList = '';

var NTrialsPerBlock = 6;

var FullScreenMode = false;

var KeyboardChoices = ['arrowleft', 'arrowright'];
// the following is used for scoring and allows the keyboard choices to be whatever you would like
var ResponseMapping = [true, false];

function PutLettersInGrid(LetterList,NRows,NCols, width=600, height=300, FontSize=40)
	{
		var count = 0;
		var Table = '';
		// create the html table and assign the class which is defined in the HTML file
		Table += '<table class="a">'
		for (var i=0; i<NRows; i++) { // Cycle over rows
			Table += '<tr height="'+height+'">'
			for (var j=0; j<NCols; j++) { // cycle over columns
				Table += '<td style="font-size:'+FontSize+'px; line-width:100px">'+LetterList[count]+'</td>';
				count += 1;
			}
		}
		return Table
	}

function RemoveOldLetters(AllowableLetters, LastTrialStimulus, LastTrialProbe)
	{	// remove the letters from the last trial from teh list of allowable letters
		// For the first trial there are no previous stimuli, so check for that
		if (typeof LastTrialStimulus !== 'undefined')
		{
			for (var i=0; i < LastTrialStimulus.length; i++) {
				AllowableLetters = AllowableLetters.replace(LastTrialStimulus[i],'');
			}
			// remove the probe letter also, after converting it to uppercase
			AllowableLetters = AllowableLetters.replace(LastTrialProbe.toUpperCase(),'')
		}
		else {
			AllowabelLetters = AllowableLetters
		}
		return AllowableLetters
	}

function MakeStimulus(LettersToUse, Load)
	{
		// Make a letter list for use as stimuli
		// Shuffle the letters
		var ShuffledLetters = shuffle(LettersToUse)
		console.log(LettersToUse)
		// Onky take the required number of letters based on the load
		var LetterString = ShuffledLetters.substring(0,Load)
		console.log(LetterString)
		return LetterString
	}	

function CreateProbeLetter(CurrentStim, AllowableLetters)
	{
		ProbeType = MakeProbeType()
		if (ProbeType == 1)
		{
			//LookingForProbe = true
			//while (LookingForProbe)
			//{
				// select a random letter from the current stim
				// ADD CHCK TO MAKE SURE ELL IS NOT THE PROBE
				ShuffledStim = shuffle(CurrentStim)
				CurrentProbe = ShuffledStim[0].toLowerCase()
				correct = true
			//	if (CurrentProbe != "L")
			//	{LookingForProbe = false}
			//}
		}
		else 
		{ // Remove the current stim letters from the available letter set
        	CurrentAllowableList = RemoveOldLetters(AllowableLetters, CurrentStim, '')
			ShuffledStim = shuffle(CurrentAllowableList)
			CurrentProbe = ShuffledStim[0].toLowerCase()
			correct = false
		}
		return [CurrentProbe, correct]
	}
function MakeProbeType()
	{
		// Decide if this is a posiitve (1) or negative (0) trial
		return Math.round(Math.random())
	}
function getRandomInt(n) 
	{ //https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/
  		return Math.floor(Math.random() * n);
	}

function shuffle(s) {
	  var arr = s.split('');           // Convert String to array
	  var n = arr.length;              // Length of the array
	  
	  for(var i=0 ; i<n-1 ; ++i) {
	    var j = getRandomInt(n);       // Get random of [0, n-1]
	   
	    var temp = arr[i];             // Swap arr[i] and arr[j]
	    arr[i] = arr[j];
	    arr[j] = temp;
	  }
	  s = arr.join('');                // Convert Array to string
	  return s;                        // Return shuffled string
	}

function MakeAdaptiveStimulus(Load, LastTrialStimulus, LastTrialProbe)
	// Make stimuli on-the-fly and make sure that no current letters were included in the previous trial
	{
		// Remove letters from the last trial
		console.log(AllowableLetters)
		LettersToUse = RemoveOldLetters(AllowableLetters, LastTrialStimulus, LastTrialProbe)
		// Shuffle the remaining letters
		// Select an appropriate length of letters according to the load
		LetterString = MakeStimulus(LettersToUse, Load)
		// Decide if the probe is positive or negative
		CurrentProbe  = CreateProbeLetter(LetterString, LettersToUse)
		// Pad Letter String
		Stimulus = PadLetters(LetterString)
		return [Stimulus, CurrentProbe, LetterString]
	}

function PadLetters(Letters)
	{
		switch (Letters.length) {
			case 1:
				Stimulus = '****'+Letters+'****';
				break;
			case 2:
				Stimulus = '***'+Letters[0]+'*'+Letters[1]+'***';
				break;
			case 3:
				Stimulus = '***'+Letters.slice(0,3)+'***';
				break;
			case 4:
				Stimulus = Letters[0]+'*'+Letters[1]+'***'+Letters[2]+'*'+Letters[3];
				break;
			case 5:
				Stimulus = Letters[0]+'*'+Letters[1]+'*'+Letters[2]+'*'+Letters[3]+'*'+Letters[4];
				break;
			case 6:
				Stimulus = Letters.slice(0,3)+'***'+Letters.slice(3,6)
				break;
			case 7:
				Stimulus = Letters.slice(0,3)+'*'+Letters[3]+'*'+Letters.slice(4,7);
				break;
			case 8:
				Stimulus = Letters.slice(0,4)+'*'+Letters.slice(4,8)
				break;
			case 9:
				Stimulus = Letters.slice(0,9)
		}
		return Stimulus
	}

var instructions = ['<p>Press [LEFT] if the letter WAS in the set.<br>Press [RIGHT] if the letter WAS NOT in the set.<br>',
	'<p>You will NOT receive feedback after each trial.</p>',
	'Remember that the letters to study will be in white and CAPITALIZED.',
	'The test letter will be in blue and will be lowercase.',
	'Try to respond as quickly and as accurately as possible.',
	'Press the [5] key to begin.']

//TL,TM,TR,CL,CM,CR,BL,BM,BR,probe,corr,Load
var DMSLetterBehaviorList001 = [
	{"StimulusLetters": "****G****", "ProbeLetter": "g", "Correct": true, "Load": 1},
	{"StimulusLetters": "****H****", "ProbeLetter": "h", "Correct": true, "Load": 1},
	{"StimulusLetters": "****X****", "ProbeLetter": "d", "Correct": false, "Load": 1},
	{"StimulusLetters": "****R****", "ProbeLetter": "r", "Correct": true, "Load": 1},
	{"StimulusLetters": "****M****", "ProbeLetter": "h", "Correct": false, "Load": 1},
	{"StimulusLetters": "****Y****", "ProbeLetter": "z", "Correct": false, "Load": 1},
	{"StimulusLetters": "***M*K***", "ProbeLetter": "v", "Correct": false, "Load": 2},
	{"StimulusLetters": "***H*R***", "ProbeLetter": "p", "Correct": false, "Load": 2},
	{"StimulusLetters": "***D*T***", "ProbeLetter": "d", "Correct": true, "Load": 2},
	{"StimulusLetters": "***L*K***", "ProbeLetter": "k", "Correct": true, "Load": 2},
	{"StimulusLetters": "***M*X***", "ProbeLetter": "x", "Correct": true, "Load": 2},
	{"StimulusLetters": "***P*T***", "ProbeLetter": "g", "Correct": false, "Load": 2},
	{"StimulusLetters": "***VPM***", "ProbeLetter": "p", "Correct": true, "Load": 3},
	{"StimulusLetters": "***SRY***", "ProbeLetter": "j", "Correct": false, "Load": 3},
	{"StimulusLetters": "***VDB***", "ProbeLetter": "h", "Correct": false, "Load": 3},
	{"StimulusLetters": "***YRL***", "ProbeLetter": "y", "Correct": true, "Load": 3},
	{"StimulusLetters": "***PJN***", "ProbeLetter": "c", "Correct": false, "Load": 3},
	{"StimulusLetters": "***XST***", "ProbeLetter": "s", "Correct": true, "Load": 3},
	{"StimulusLetters": "G*C***Q*B", "ProbeLetter": "q", "Correct": true, "Load": 4},
	{"StimulusLetters": "K*P***H*J", "ProbeLetter": "r", "Correct": false, "Load": 4},
	{"StimulusLetters": "M*B***X*N", "ProbeLetter": "s", "Correct": false, "Load": 4},
	{"StimulusLetters": "P*V***H*F", "ProbeLetter": "v", "Correct": true, "Load": 4},
	{"StimulusLetters": "X*L***B*S", "ProbeLetter": "s", "Correct": true, "Load": 4},
	{"StimulusLetters": "C*T***Q*M", "ProbeLetter": "k", "Correct": false, "Load": 4},
	{"StimulusLetters": "Z*N*R*K*Y", "ProbeLetter": "y", "Correct": true, "Load": 5},
	{"StimulusLetters": "Q*G*V*B*M", "ProbeLetter": "g", "Correct": true, "Load": 5},
	{"StimulusLetters": "J*H*N*C*T", "ProbeLetter": "s", "Correct": false, "Load": 5},
	{"StimulusLetters": "K*B*P*G*M", "ProbeLetter": "r", "Correct": false, "Load": 5},
	{"StimulusLetters": "X*Z*N*L*J", "ProbeLetter": "n", "Correct": true, "Load": 5},
	{"StimulusLetters": "P*M*G*F*K", "ProbeLetter": "h", "Correct": false, "Load": 5},
	{"StimulusLetters": "BZM***NSJ", "ProbeLetter": "c", "Correct": false, "Load": 6},
	{"StimulusLetters": "DFH***RPQ", "ProbeLetter": "h", "Correct": true, "Load": 6},
	{"StimulusLetters": "KLV***MBT", "ProbeLetter": "g", "Correct": false, "Load": 6},
	{"StimulusLetters": "DXJ***FPZ", "ProbeLetter": "x", "Correct": true, "Load": 6},
	{"StimulusLetters": "RGT***CBQ", "ProbeLetter": "c", "Correct": true, "Load": 6},
	{"StimulusLetters": "KYD***XVH", "ProbeLetter": "n", "Correct": false, "Load": 6},
	{"StimulusLetters": "LBG*C*QKF", "ProbeLetter": "k", "Correct": true, "Load": 7},
	{"StimulusLetters": "ZYD*J*TXS", "ProbeLetter": "d", "Correct": true, "Load": 7},
	{"StimulusLetters": "LFP*R*GVN", "ProbeLetter": "g", "Correct": true, "Load": 7},
	{"StimulusLetters": "TKS*C*XYB", "ProbeLetter": "z", "Correct": false, "Load": 7},
	{"StimulusLetters": "PGQ*J*VFH", "ProbeLetter": "d", "Correct": false, "Load": 7},
	{"StimulusLetters": "BYL*R*ZSM", "ProbeLetter": "c", "Correct": false, "Load": 7},
	{"StimulusLetters": "ZYXR*JDSN", "ProbeLetter": "c", "Correct": false, "Load": 8},
	{"StimulusLetters": "LGFV*PCQK", "ProbeLetter": "q", "Correct": true, "Load": 8},
	{"StimulusLetters": "SJXT*RBHV", "ProbeLetter": "s", "Correct": true, "Load": 8},
	{"StimulusLetters": "FKTQ*YZNM", "ProbeLetter": "n", "Correct": true, "Load": 8},
	{"StimulusLetters": "BPJG*KHXD", "ProbeLetter": "v", "Correct": false, "Load": 8},
	{"StimulusLetters": "ZYCF*SLKM", "ProbeLetter": "n", "Correct": false, "Load": 8},
	{"StimulusLetters": "PMSYLCXKH", "ProbeLetter": "b", "Correct": false, "Load": 9},
	{"StimulusLetters": "JCNQVKZGT", "ProbeLetter": "c", "Correct": true, "Load": 9},
	{"StimulusLetters": "HRMYBVPQL", "ProbeLetter": "m", "Correct": true, "Load": 9},
	{"StimulusLetters": "DYNBXKFZT", "ProbeLetter": "t", "Correct": true, "Load": 9},
	{"StimulusLetters": "JRGHMNSYV", "ProbeLetter": "p", "Correct": false, "Load": 9},
	{"StimulusLetters": "GCJXLTKBD", "ProbeLetter": "q", "Correct": false, "Load": 9}
]
var DMSLetterBehaviorList002 = [
	{"StimulusLetters": "****R****", "ProbeLetter": "d", "Correct": false, "Load": 1},
	{"StimulusLetters": "****K****", "ProbeLetter": "n", "Correct": false, "Load": 1},
	{"StimulusLetters": "****J****", "ProbeLetter": "f", "Correct": false, "Load": 1},
	{"StimulusLetters": "****B****", "ProbeLetter": "b", "Correct": true, "Load": 1},
	{"StimulusLetters": "****X****", "ProbeLetter": "x", "Correct": true, "Load": 1},
	{"StimulusLetters": "****C****", "ProbeLetter": "c", "Correct": true, "Load": 1},
	{"StimulusLetters": "***V*F***", "ProbeLetter": "d", "Correct": false, "Load": 2},
	{"StimulusLetters": "***G*B***", "ProbeLetter": "k", "Correct": false, "Load": 2},
	{"StimulusLetters": "***D*P***", "ProbeLetter": "p", "Correct": true, "Load": 2},
	{"StimulusLetters": "***V*T***", "ProbeLetter": "z", "Correct": false, "Load": 2},
	{"StimulusLetters": "***S*F***", "ProbeLetter": "f", "Correct": true, "Load": 2},
	{"StimulusLetters": "***T*P***", "ProbeLetter": "t", "Correct": true, "Load": 2},
	{"StimulusLetters": "***BGF***", "ProbeLetter": "g", "Correct": true, "Load": 3},
	{"StimulusLetters": "***KDR***", "ProbeLetter": "x", "Correct": false, "Load": 3},
	{"StimulusLetters": "***GLY***", "ProbeLetter": "s", "Correct": false, "Load": 3},
	{"StimulusLetters": "***HKF***", "ProbeLetter": "h", "Correct": true, "Load": 3},
	{"StimulusLetters": "***NVJ***", "ProbeLetter": "v", "Correct": true, "Load": 3},
	{"StimulusLetters": "***QFK***", "ProbeLetter": "p", "Correct": false, "Load": 3},
	{"StimulusLetters": "P*Q***H*T", "ProbeLetter": "q", "Correct": true, "Load": 4},
	{"StimulusLetters": "L*S***V*N", "ProbeLetter": "n", "Correct": true, "Load": 4},
	{"StimulusLetters": "Q*J***R*B", "ProbeLetter": "r", "Correct": true, "Load": 4},
	{"StimulusLetters": "F*M***V*H", "ProbeLetter": "g", "Correct": false, "Load": 4},
	{"StimulusLetters": "L*T***P*C", "ProbeLetter": "y", "Correct": false, "Load": 4},
	{"StimulusLetters": "N*B***Q*Z", "ProbeLetter": "k", "Correct": false, "Load": 4},
	{"StimulusLetters": "B*T*K*P*N", "ProbeLetter": "x", "Correct": false, "Load": 5},
	{"StimulusLetters": "D*R*C*V*Z", "ProbeLetter": "s", "Correct": false, "Load": 5},
	{"StimulusLetters": "H*G*T*P*F", "ProbeLetter": "p", "Correct": true, "Load": 5},
	{"StimulusLetters": "S*J*B*Y*X", "ProbeLetter": "j", "Correct": true, "Load": 5},
	{"StimulusLetters": "T*N*Q*K*H", "ProbeLetter": "n", "Correct": true, "Load": 5},
	{"StimulusLetters": "R*M*Y*F*L", "ProbeLetter": "v", "Correct": false, "Load": 5},
	{"StimulusLetters": "DTF***KRC", "ProbeLetter": "j", "Correct": false, "Load": 6},
	{"StimulusLetters": "BGQ***YPS", "ProbeLetter": "q", "Correct": true, "Load": 6},
	{"StimulusLetters": "HRT***ZKL", "ProbeLetter": "z", "Correct": true, "Load": 6},
	{"StimulusLetters": "BCF***JGV", "ProbeLetter": "j", "Correct": true, "Load": 6},
	{"StimulusLetters": "ZDP***SQX", "ProbeLetter": "k", "Correct": false, "Load": 6},
	{"StimulusLetters": "BJC***GYF", "ProbeLetter": "m", "Correct": false, "Load": 6},
	{"StimulusLetters": "SJQ*D*GVP", "ProbeLetter": "d", "Correct": true, "Load": 7},
	{"StimulusLetters": "MHX*L*TKY", "ProbeLetter": "h", "Correct": true, "Load": 7},
	{"StimulusLetters": "GDJ*R*BNP", "ProbeLetter": "p", "Correct": true, "Load": 7},
	{"StimulusLetters": "FQS*K*YLM", "ProbeLetter": "x", "Correct": false, "Load": 7},
	{"StimulusLetters": "JCV*D*NPB", "ProbeLetter": "r", "Correct": false, "Load": 7},
	{"StimulusLetters": "FQS*K*YLM", "ProbeLetter": "x", "Correct": false, "Load": 7},
	{"StimulusLetters": "MFGX*HBLS", "ProbeLetter": "s", "Correct": true, "Load": 8},
	{"StimulusLetters": "LVPT*KZRC", "ProbeLetter": "k", "Correct": true, "Load": 8},
	{"StimulusLetters": "SBFX*GDQY", "ProbeLetter": "f", "Correct": true, "Load": 8},
	{"StimulusLetters": "HYZL*MKVC", "ProbeLetter": "r", "Correct": false, "Load": 8},
	{"StimulusLetters": "PRXD*GNQB", "ProbeLetter": "t", "Correct": false, "Load": 8},
	{"StimulusLetters": "YMFH*KZJB", "ProbeLetter": "l", "Correct": false, "Load": 8},
	{"StimulusLetters": "HYMJSRCBD", "ProbeLetter": "v", "Correct": false, "Load": 9},
	{"StimulusLetters": "XTNPLFKSY", "ProbeLetter": "t", "Correct": true, "Load": 9},
	{"StimulusLetters": "VMDGYXRHC", "ProbeLetter": "z", "Correct": false, "Load": 9},
	{"StimulusLetters": "SPKQVLNYB", "ProbeLetter": "p", "Correct": true, "Load": 9},
	{"StimulusLetters": "MZHGRKTFS", "ProbeLetter": "h", "Correct": true, "Load": 9},
	{"StimulusLetters": "ZNRVXJQDY", "ProbeLetter": "b", "Correct": false, "Load": 9}
]

var DMSLetterMRIList001 = [
	{"StimulusLetters": "****D****", "ProbeLetter": "z", "Correct": true, "Load": 1},
	{"StimulusLetters": "****Q****", "ProbeLetter": "v", "Correct": true, "Load": 1},
	{"StimulusLetters": "****N****", "ProbeLetter": "c", "Correct": true, "Load": 1},
	{"StimulusLetters": "****M****", "ProbeLetter": "m", "Correct": true, "Load": 1},
	{"StimulusLetters": "****Z****", "ProbeLetter": "z", "Correct": true, "Load": 1},
	{"StimulusLetters": "****J****", "ProbeLetter": "j", "Correct": true, "Load": 1},
	{"StimulusLetters": "***F*X***", "ProbeLetter": "c", "Correct": true, "Load": 2},
	{"StimulusLetters": "***S*N***", "ProbeLetter": "s", "Correct": true, "Load": 2},
	{"StimulusLetters": "***Y*L***", "ProbeLetter": "y", "Correct": true, "Load": 2},
	{"StimulusLetters": "***C*M***", "ProbeLetter": "c", "Correct": true, "Load": 2},
	{"StimulusLetters": "***Q*B***", "ProbeLetter": "n", "Correct": true, "Load": 2},
	{"StimulusLetters": "***F*T***", "ProbeLetter": "c", "Correct": true, "Load": 2},
	{"StimulusLetters": "***CZH***", "ProbeLetter": "y", "Correct": true, "Load": 3},
	{"StimulusLetters": "***XBK***", "ProbeLetter": "x", "Correct": true, "Load": 3},
	{"StimulusLetters": "***RHY***", "ProbeLetter": "r", "Correct": true, "Load": 3},
	{"StimulusLetters": "***CLT***", "ProbeLetter": "c", "Correct": true, "Load": 3},
	{"StimulusLetters": "***GXY***", "ProbeLetter": "f", "Correct": true, "Load": 3},
	{"StimulusLetters": "***MNC***", "ProbeLetter": "b", "Correct": true, "Load": 3},
	{"StimulusLetters": "Z*B***C*P", "ProbeLetter": "z", "Correct": true, "Load": 4},
	{"StimulusLetters": "V*G***Y*N", "ProbeLetter": "y", "Correct": true, "Load": 4},
	{"StimulusLetters": "M*X***J*B", "ProbeLetter": "h", "Correct": true, "Load": 4},
	{"StimulusLetters": "V*L***F*Y", "ProbeLetter": "y", "Correct": true, "Load": 4},
	{"StimulusLetters": "P*N***H*X", "ProbeLetter": "g", "Correct": true, "Load": 4},
	{"StimulusLetters": "R*D***Z*T", "ProbeLetter": "m", "Correct": true, "Load": 4},
	{"StimulusLetters": "V*Q*L*B*H", "ProbeLetter": "x", "Correct": true, "Load": 5},
	{"StimulusLetters": "Z*P*C*F*K", "ProbeLetter": "p", "Correct": true, "Load": 5},
	{"StimulusLetters": "J*G*N*D*Y", "ProbeLetter": "h", "Correct": true, "Load": 5},
	{"StimulusLetters": "X*R*M*V*L", "ProbeLetter": "v", "Correct": true, "Load": 5},
	{"StimulusLetters": "Q*G*Y*J*Z", "ProbeLetter": "t", "Correct": true, "Load": 5},
	{"StimulusLetters": "X*C*S*K*M", "ProbeLetter": "x", "Correct": true, "Load": 5},
	{"StimulusLetters": "PCZ***GQJ", "ProbeLetter": "f", "Correct": true, "Load": 6},
	{"StimulusLetters": "KHX***RMV", "ProbeLetter": "r", "Correct": true, "Load": 6},
	{"StimulusLetters": "JLZ***GCD", "ProbeLetter": "f", "Correct": true, "Load": 6},
	{"StimulusLetters": "BQT***KPY", "ProbeLetter": "h", "Correct": true, "Load": 6},
	{"StimulusLetters": "SXR***NLF", "ProbeLetter": "r", "Correct": true, "Load": 6},
	{"StimulusLetters": "MZJ***VBD", "ProbeLetter": "v", "Correct": true, "Load": 6},
	{"StimulusLetters": "JDF*K*ZNX", "ProbeLetter": "g", "Correct": true, "Load": 7},
	{"StimulusLetters": "SCQ*T*LMB", "ProbeLetter": "s", "Correct": true, "Load": 7},
	{"StimulusLetters": "DYF*R*KGN", "ProbeLetter": "x", "Correct": true, "Load": 7},
	{"StimulusLetters": "TQJ*L*HSM", "ProbeLetter": "j", "Correct": true, "Load": 7},
	{"StimulusLetters": "RGN*B*DVC", "ProbeLetter": "c", "Correct": true, "Load": 7},
	{"StimulusLetters": "FQS*K*YLM", "ProbeLetter": "x", "Correct": true, "Load": 7},
	{"StimulusLetters": "DNSQ*HZKF", "ProbeLetter": "s", "Correct": true, "Load": 8},
	{"StimulusLetters": "BQLX*MYVG", "ProbeLetter": "g", "Correct": true, "Load": 8},
	{"StimulusLetters": "RQJK*TCFD", "ProbeLetter": "d", "Correct": true, "Load": 8},
	{"StimulusLetters": "MGXZ*HSVL", "ProbeLetter": "p", "Correct": true, "Load": 8},
	{"StimulusLetters": "KMFN*QTDR", "ProbeLetter": "j", "Correct": true, "Load": 8},
	{"StimulusLetters": "NYXH*GPCL", "ProbeLetter": "z", "Correct": true, "Load": 8},
	{"StimulusLetters": "SRCZPJQDF", "ProbeLetter": "s", "Correct": true, "Load": 9},
	{"StimulusLetters": "ZXMFGVTBL", "ProbeLetter": "k", "Correct": true, "Load": 9},
	{"StimulusLetters": "VDCBRHQJS", "ProbeLetter": "y", "Correct": true, "Load": 9},
	{"StimulusLetters": "LKFSGNMPY", "ProbeLetter": "n", "Correct": true, "Load": 9},
	{"StimulusLetters": "TCJXKRGBV", "ProbeLetter": "t", "Correct": true, "Load": 9},
	{"StimulusLetters": "QZYSRKDLN", "ProbeLetter": "f", "Correct": true, "Load": 9}
]

var DMSLetterMRIList002 = [
	{"StimulusLetters": "****F****", "ProbeLetter": "f", "Correct": true, "Load": 1},
	{"StimulusLetters": "****X****", "ProbeLetter": "x", "Correct": true, "Load": 1},
	{"StimulusLetters": "****M****", "ProbeLetter": "s", "Correct": true, "Load": 1},
	{"StimulusLetters": "****N****", "ProbeLetter": "c", "Correct": true, "Load": 1},
	{"StimulusLetters": "****D****", "ProbeLetter": "s", "Correct": true, "Load": 1},
	{"StimulusLetters": "****J****", "ProbeLetter": "j", "Correct": true, "Load": 1},
	{"StimulusLetters": "***V*D***", "ProbeLetter": "s", "Correct": true, "Load": 2},
	{"StimulusLetters": "***L*T***", "ProbeLetter": "c", "Correct": true, "Load": 2},
	{"StimulusLetters": "***B*X***", "ProbeLetter": "r", "Correct": true, "Load": 2},
	{"StimulusLetters": "***Q*H***", "ProbeLetter": "h", "Correct": true, "Load": 2},
	{"StimulusLetters": "***Z*K***", "ProbeLetter": "k", "Correct": true, "Load": 2},
	{"StimulusLetters": "***S*N***", "ProbeLetter": "n", "Correct": true, "Load": 2},
	{"StimulusLetters": "***JKG***", "ProbeLetter": "g", "Correct": true, "Load": 3},
	{"StimulusLetters": "***LVC***", "ProbeLetter": "c", "Correct": true, "Load": 3},
	{"StimulusLetters": "***BDM***", "ProbeLetter": "m", "Correct": true, "Load": 3},
	{"StimulusLetters": "***FCH***", "ProbeLetter": "s", "Correct": true, "Load": 3},
	{"StimulusLetters": "***JPM***", "ProbeLetter": "t", "Correct": true, "Load": 3},
	{"StimulusLetters": "***RHN***", "ProbeLetter": "s", "Correct": true, "Load": 3},
	{"StimulusLetters": "M*T***P*Y", "ProbeLetter": "x", "Correct": true, "Load": 4},
	{"StimulusLetters": "Q*R***J*S", "ProbeLetter": "q", "Correct": true, "Load": 4},
	{"StimulusLetters": "K*F***N*V", "ProbeLetter": "x", "Correct": true, "Load": 4},
	{"StimulusLetters": "M*H***D*L", "ProbeLetter": "d", "Correct": true, "Load": 4},
	{"StimulusLetters": "Y*X***R*V", "ProbeLetter": "s", "Correct": true, "Load": 4},
	{"StimulusLetters": "M*G***Z*B", "ProbeLetter": "g", "Correct": true, "Load": 4},
	{"StimulusLetters": "M*L*Y*Z*J", "ProbeLetter": "j", "Correct": true, "Load": 5},
	{"StimulusLetters": "K*Q*C*T*H", "ProbeLetter": "h", "Correct": true, "Load": 5},
	{"StimulusLetters": "S*R*M*P*N", "ProbeLetter": "z", "Correct": true, "Load": 5},
	{"StimulusLetters": "L*C*Q*F*H", "ProbeLetter": "j", "Correct": true, "Load": 5},
	{"StimulusLetters": "P*K*R*N*V", "ProbeLetter": "v", "Correct": true, "Load": 5},
	{"StimulusLetters": "J*Y*Q*X*L", "ProbeLetter": "b", "Correct": true, "Load": 5},
	{"StimulusLetters": "VSR***KPY", "ProbeLetter": "f", "Correct": true, "Load": 6},
	{"StimulusLetters": "QHD***GNM", "ProbeLetter": "q", "Correct": true, "Load": 6},
	{"StimulusLetters": "CXS***LKP", "ProbeLetter": "x", "Correct": true, "Load": 6},
	{"StimulusLetters": "DBY***MJN", "ProbeLetter": "g", "Correct": true, "Load": 6},
	{"StimulusLetters": "HRT***ZKL", "ProbeLetter": "z", "Correct": true, "Load": 6},
	{"StimulusLetters": "BQC***MGY", "ProbeLetter": "s", "Correct": true, "Load": 6},
	{"StimulusLetters": "ZVX*C*YMH", "ProbeLetter": "d", "Correct": true, "Load": 7},
	{"StimulusLetters": "QNB*K*LJF", "ProbeLetter": "k", "Correct": true, "Load": 7},
	{"StimulusLetters": "SMC*R*HXY", "ProbeLetter": "y", "Correct": true, "Load": 7},
	{"StimulusLetters": "DLJ*P*NBG", "ProbeLetter": "d", "Correct": true, "Load": 7},
	{"StimulusLetters": "XSR*Z*KHF", "ProbeLetter": "t", "Correct": true, "Load": 7},
	{"StimulusLetters": "CGD*P*JQY", "ProbeLetter": "b", "Correct": true, "Load": 7},
	{"StimulusLetters": "VHJQ*CPYM", "ProbeLetter": "n", "Correct": true, "Load": 8},
	{"StimulusLetters": "VGRK*NZXB", "ProbeLetter": "r", "Correct": true, "Load": 8},
	{"StimulusLetters": "CJLQ*MTGF", "ProbeLetter": "y", "Correct": true, "Load": 8},
	{"StimulusLetters": "XBVD*NZKL", "ProbeLetter": "d", "Correct": true, "Load": 8},
	{"StimulusLetters": "CHFL*YJMG", "ProbeLetter": "r", "Correct": true, "Load": 8},
	{"StimulusLetters": "XKDB*TMZN", "ProbeLetter": "k", "Correct": true, "Load": 8},
	{"StimulusLetters": "CTMSQVLFX", "ProbeLetter": "z", "Correct": true, "Load": 9},
	{"StimulusLetters": "GBYJRVZPH", "ProbeLetter": "y", "Correct": true, "Load": 9},
	{"StimulusLetters": "NHTBXFMQS", "ProbeLetter": "s", "Correct": true, "Load": 9},
	{"StimulusLetters": "DVQLPJRZT", "ProbeLetter": "z", "Correct": true, "Load": 9},
	{"StimulusLetters": "BCQKFXHRN", "ProbeLetter": "m", "Correct": true, "Load": 9},
	{"StimulusLetters": "RLSZQYGVP", "ProbeLetter": "t", "Correct": true, "Load": 9}
]
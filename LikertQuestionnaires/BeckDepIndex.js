var title = "Beck Depression Index"

var instructions = "This questionnaire consists of 21 groups of statements. Please read each group of statements carefully. And then pick out the one statement in each group that best describes the way you have been feeling during the past two weeks, including today. Circle the number beside the statement you have picked. If several statements in the group seem to apply equally well, circle the highest number for that group."

var reference = ""


var items = [
  {
    prompt: "Sadness", 
    name: "Sadness", 
    options: ["I do not feel sad.", 
          "I feel sad.", 
          "I am sad all the time and I can't snap out of it.", 
          "I am so sad and unhappy that I can't stand it."], 
    required:true
  },
  {
    prompt: "Pessimism",
    name: "Pessimism",
    options: ["I am not particularly discouraged about the future.",
          "I feel discouraged about the future.",
          "I feel I have nothing to look forward to.",
          "I feel the future is hopeless and that things cannot improve."],
    required: true
  },
  {
  	prompt: "Past Failure",
  	name: "PastFailure",
  	options:["I do not feel like a failure.",
			"I feel I have failed more than the average person.",
			"As I look back on my life, all I can see is a lot of failures.",
			"I feel I am a complete failure as a person."
			],
  	required: true
  },
  {
  	prompt: "Loss of Pleasure",
  	name: "LossPleasure",
  	options: ["I get as much satisfaction out of things as I used to.",
 			"I don't enjoy things the way I used to.",
 			"I don't get real satisfaction out of anything anymore.",
 			"I am dissatisfied or bored with everything."],
 	required: true
  },
  {
  	prompt: "Guilty Feelings",
  	name: "GuiltyFeelings",
  	options: ["I don't feel particularly guilty.",
 			"I feel guilty a good part of the time.",
 			"I feel quite guilty most of the time.",
 			"I feel guilty all of the time."],
  	required: true
  },
  {
  	prompt: "Punishment Feelings",
  	name: "PunishmentFeelings",
  	options: ["I don't feel I am being punished.",
 			"I feel I may be punished.",
 			"I expect to be punished.",
 			"I feel I am being punished."],
  	required: true
  },
  {
  	prompt: "Self-Dislike",
  	name: "Self-Dislike",
  	options: ["I don't feel disappointed in myself.",
 			"I am disappointed in myself.",
 			"I am disgusted with myself.",
 			"I hate myself."],
  	required: true
  },
  {
  	prompt: "Self-Criticalness",
  	name: "Self-Criticalness",
  	options: ["I don't feel I am any worse than anybody else.",
 			"I am critical of myself for my weaknesses or mistakes.",
 			"I blame myself all the time for my faults.",
 			"I blame myself for everything bad that happens."],
  	required: true
  },
    {
  	prompt: "Suicidal Thoughts or Wishes",
  	name: "SuicidalThoughts",
  	options: ["I don't have any thoughts of killing myself.",
 			"I have thoughts of killing myself, but I would not carry them out.",
 			"I would like to kill myself.",
 			"I would kill myself if I had the chance."],
  	required: true
  },
  {
  	prompt: "Crying",
  	name: "Crying",
  	options: ["I don't cry any more than usual.",
 			"I cry more now than I used to.",
 			"I cry all the time now.",
 			"I used to be able to cry, but now I can't cry even though I want to."],
  	required: true
  },
  {
  	prompt: "Agitation",
  	name: "Agitation",
  	options: ["I am no more irritated by things than I ever was.",
 			"I am slightly more irritated now than usual.",
 			"I am quite annoyed or irritated a good deal of the time.",
 			"I feel irritated all the time."],
  	required: true
  },
  {
  	prompt: "Loss of Interest",
  	name: "LossInterest",
  	options: ["I have not lost interest in other people.",
 			"I am less interested in other people than I used to be.",
 			"I have lost most of my interest in other people.",
 			"I have lost all of my interest in other people."],
  	required: true
  },
  {
  	prompt: "Indecisiveness",
  	name: "Indecisiveness",
  	options: ["I make decisions about as well as I ever could.",
 			"I put off making decisions more than I used to.",
 			"I have greater difficulty in making decisions more than I used to.",
 			"I can't make decisions at all anymore."],
  	required: true
  },
  {
  	prompt: "Worthlessness",
  	name: "Worthlessness",
  	options: ["I don't feel that I look any worse than I used to.",
 			"I am worried that I am looking old or unattractive.",
 			"I feel there are permanent changes in my appearance that make me look unattractive.",
 			"I believe that I look ugly."],
  	required: true
  },
  {
  	prompt: "Loss of Energy",
  	name: "LossEnergy",
  	options:["I can work about as well as before.",
 			"It takes an extra effort to get started at doing something.",
 			"I have to push myself very hard to do anything.",
 			"I can't do any work at all."],
  	required: true
  },
  {
  	prompt: "Changes in Sleeping Pattern",
  	name: "Sleep",
  	options: ["I can sleep as well as usual.",
 			"I don't sleep as well as I used to.",
 			"I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.",
 			"I wake up several hours earlier than I used to and cannot get back to sleep."],
  	required: true
  },
  {
  	prompt: "Tiredness or Fatigue",
  	name: "Tired",
  	options: ["I don't get more tired than usual.",
 			"I get tired more easily than I used to.",
 			"I get tired from doing almost anything.",
 			"I am too tired to do anything."],
  	required: true
  },
  {
  	prompt: "Changes in Appetite",
  	name: "Appetite",
  	options: ["My appetite is no worse than usual.",
 			"My appetite is not as good as it used to be.",
 			"My appetite is much worse now.",
 			"I have no appetite at all anymore."],
  	required: true
  },
  {
  	prompt: "Weight Loss",
  	name: "WeightLoss",
  	options: ["I haven't lost much weight, if any, lately.",
 			"I have lost more than five pounds.",
 			"I have lost more than ten pounds.",
 			"I have lost more than fifteen pounds."],
  	required: true
  },
  {
  	prompt: "Personal Health",
  	name: "PersonalHealth",
  	options: ["I am no more worried about my health than usual.",
 			"I am worried about physical problems like aches, pains, upset stomach, or constipation.",
 			"I am very worried about physical problems and it's hard to think of much else.",
 			"I am so worried about my physical problems that I cannot think of anything else."],
  	required: true
  },
  {
  	prompt: "Loss of Interest in Sex",
  	name: "InterestSex",
  	options: ["I have not noticed any recent change in my interest in sex.",
 			"I am less interested in sex than I used to be.",
 			"I have almost no interest in sex.",
 			"I have lost interest in sex completely."],
  	required: true
  }
  ]


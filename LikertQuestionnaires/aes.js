var title = "Apathy Evaluation Scale (AES)"


var aesScaleForward = [
    "Not at all",
    "Slightly",
    "Somewhat",
    "A lot"
]

var aesScaleReverse = [
    "A lot",
    "Somewhat", 
    "Slightly",
    "Not at all"
]

var aesItems = [
    {prompt: "I am interested in things.", labels: aesScaleForward},
    {prompt: "I get things done during the day.", labels: aesScaleForward},
    {prompt: "Getting things started on my own is important to me.", labels: aesScaleForward},
    {prompt: "I am interested in having new experiences.", labels: aesScaleForward},
    {prompt: "I am interested in learning new things.", labels: aesScaleForward},
    {prompt: "I put little effort into anything.", labels: aesScaleReverse},
    {prompt: "I approach life with intensity.", labels: aesScaleForward},
    {prompt: "Seeing a job through to the end is important to me.", labels: aesScaleForward},
    {prompt: "I spend time doing things that interest me.", labels: aesScaleForward},
    {prompt: "Someone has to tell me what to do each day.", labels: aesScaleReverse},
    {prompt: "I am less concerned about my problems than I should be.", labels: aesScaleReverse},
    {prompt: "I have friends.", labels: aesScaleForward},
    {prompt: "Getting together with friends is important to me.", labels: aesScaleForward},
    {prompt: "When something good happens, I get excited.", labels: aesScaleForward},
    {prompt: "I have an accurate understanding of my problems.", labels: aesScaleForward},
    {prompt: "Getting things done during the day is important to me.", labels: aesScaleForward},
    {prompt: "I have initiative.", labels: aesScaleForward},
    {prompt: "I have motivation.", labels: aesScaleForward}
  ]
  
var aesInstructions = 'For each statement, choose the answer that best describes the your thoughts, feelings, and activity in the past 4 weeks.'

var aesReferences = "Marin, R. S., Biedrzycki, R. C., & Firinciogullari, S. (1991). Reliability and validity of the Apathy Evaluation Scale. Psychiatry research, 38(2), 143-162."

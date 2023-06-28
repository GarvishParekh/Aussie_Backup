//@input Component.InteractionComponent f_Answer
var f_Answer = script.f_Answer;

//@input Component.InteractionComponent msf_Answer
var msf_Answer = script.msf_Answer;

//@input Component.InteractionComponent msfv_Answer
var msfv_Answer = script.msfv_Answer;

//@input Component.InteractionComponent mfv_Answer
var mfv_Answer = script.mfv_Answer;

//@input bool singleQuestion
var singleQuestion = script.singleQuestion;

//@input Component.InteractionComponent sprunchAnswer
var sprunchAnswer = script.sprunchAnswer;

//@input Component.InteractionComponent megaAnswer
var megaAnswer = script.megaAnswer;

//@input Component.InteractionComponent instanceVolumeAnswer
var instanceVolumeAnswer = script.instanceVolumeAnswer;

//@input Component.InteractionComponent instanteFreezeAnswer
var instanteFreezeAnswer = script.instanteFreezeAnswer;

//@input bool isLastQuestion
var isLastQuestion = script.isLastQuestion;

//@input SceneObject currentQuestion
var currentQuestion = script.currentQuestion;

//@input SceneObject nextQuestion
var nextQuestion = script.nextQuestion;

//@input bool isdummyQuestion
var isdummyQuestion = script.isdummyQuestion;

//@input SceneObject questionHint
var questionHint = script.questionHint;

//@input SceneObject questionBox
var questionBox = script.questionBox;

//@input SceneObject questionBox
var questionBox = script.questionBox;

//-----------------------LOGIC PART-------------------------------

questionHint.enabled = true;

var delayedEvent = script.createEvent("DelayedCallbackEvent");
delayedEvent.bind(function(eventData)
{
    questionHint.enabled = false;
});

delayedEvent.reset(3.5);



if (singleQuestion)
{
    sprunchAnswer.onTap.add(onSprunchAnswer);
    megaAnswer.onTap.add(onMegaAnswer);
    instanceVolumeAnswer.onTap.add(onInstanceVolumeAnswer);
    instanteFreezeAnswer.onTap.add(onInstanteFreezeAnswer);
}
else
{
    f_Answer.onTap.add(onFFunction);
    msf_Answer.onTap.add(onMSFFunction);
    msfv_Answer.onTap.add(onMSFVFunction);
    mfv_Answer.onTap.add(onMFVFunction);
}

function onFFunction ()
{
    global.freezePoints += 1;
    
    currentQuestion.enabled = false;
    nextQuestion.enabled = true;
    global.tweenManager.startTween( nextQuestion, "Scale_Question");
    
    questionHint.enabled = false;
}

function onMSFFunction ()
{
    global.sprunchPoints += 1;
    global.megaPoints += 1;
    global.freezePoints += 1;
    
    currentQuestion.enabled = false;
    nextQuestion.enabled = true;
    global.tweenManager.startTween( nextQuestion, "Scale_Question");
    
    questionHint.enabled = false;

}

function onMSFVFunction ()
{
    global.sprunchPoints += 1;
    global.megaPoints += 1;
    global.freezePoints += 1;
    global.volumePoints += 1;
    
    currentQuestion.enabled = false;
    nextQuestion.enabled = true;
    global.tweenManager.startTween( nextQuestion, "Scale_Question");
    
    questionHint.enabled = false;
}

function onMFVFunction ()
{
    global.megaPoints += 1;
    global.freezePoints += 1;
    global.volumePoints += 1;
    
    currentQuestion.enabled = false;
    nextQuestion.enabled = true;
    global.tweenManager.startTween( nextQuestion, "Scale_Question");
    
    questionHint.enabled = false;
}


//-----------------------SINGLE QUESTION----------------------

function onSprunchAnswer ()
{
    if (!isdummyQuestion)
    {
        global.sprunchPoints += 1; 
        print("Sprunch Answer");
    }
    
    currentQuestion.enabled = false;
    questionHint.enabled = false;
    
    
    if (isLastQuestion)
        global.OnLastQuestion();
    else
    {
        nextQuestion.enabled = true;
        global.tweenManager.startTween( nextQuestion, "Scale_Question");
    }
        
}

function onMegaAnswer ()
{
    if (!isdummyQuestion)
    {
        print ("Mega Answer");
        global.megaPoints += 1;
    }
    
    currentQuestion.enabled = false;
    questionHint.enabled = false;
    
    if (isLastQuestion)
        global.OnLastQuestion();
     else
    {
        nextQuestion.enabled = true;
        global.tweenManager.startTween( nextQuestion, "Scale_Question");
    }
}

function onInstanceVolumeAnswer ()
{
    if (!isdummyQuestion)
    {
        print ("Instance Volume Answer");
        global.volumePoints += 1;
    }
        
    currentQuestion.enabled = false;
    questionHint.enabled = false;
  
    if (isLastQuestion)
        global.OnLastQuestion();
     else
    {
        nextQuestion.enabled = true;
        global.tweenManager.startTween( nextQuestion, "Scale_Question");
    }
}

function onInstanteFreezeAnswer ()
{
    if (!isdummyQuestion)
    {
        print ("Instante Freeze Answer");
        global.freezePoints += 1;
    }  
    
    currentQuestion.enabled = false;
    questionHint.enabled = false;
    
    if (isLastQuestion)
        global.OnLastQuestion();
     else
    {
        nextQuestion.enabled = true;
        global.tweenManager.startTween( nextQuestion, "Scale_Question");
    }
}




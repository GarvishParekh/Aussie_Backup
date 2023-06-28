//@input Component.InteractionComponent resetButton
var resetButton = script.resetButton;


resetButton.onTap.add(OnresetButton);

function OnresetButton ()
{
    global.OnPointManagerReset();
    global.OnResetQuizManager();
}
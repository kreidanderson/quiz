# Creating a Quiz: ReadMe
In this project the goal is to create a quiz with a countdown timer. Each time a question is correct/falsely answered, it will then bring you to the next question, until you complete all the questions which will then show you your time (including -10 points/seconds docked for every wrong answer).

Based on my javascript you will see I was trying to hide and show certain containers in order to transition between these pages.
using the array of questions I would use a for loop to go through each one. each time a button within the question container is answered, it would shuffle you to the next question as well as tell you if you were correct or not. 
Once you have completed the quiz you are brought to the highscores page and you have the option of saving your score in local storage. It will order your highscore (higher being a better score than lower).


________________________________________
## Page Layout (if it were done)
### Page 1: 
"Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
Includes button which says "Start/Begin Quiz"
- Every wrong answer penalizes your timed score by 10 seconds (+10)
- A timer will start as soon as the start quiz button is pressed.

### Page 2: 
Includes a question and 4 listed answers (each would be a button)
When clicked they would be able to change the score by 10 if wrong and do nothing if right (I expect this would be an if else statement here)
Additionally, if you are wrong there will be an alert of sorts saying "Wrong!"
The alert will be on the following page so that it doesn't lag your score time

This will repeat with several questions in the quiz

### Page 3: 
This page will say: "Your quiz is complete!"
Enter initials <input></input> --> <button>submit</button>

### Page 4: 
This will take you to the highscore list where your initials and maybe a bunch of fake highscores will be. 
You can then go back or clear all the highscores so there is nothing there.
This will all be stored within local storage.




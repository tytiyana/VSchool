
var angerReact = document.getElementById("red")
angerReact.addEventListener("click",function angerReaction(){
  if (angerReact.innerText === "Click here if you're feeling angry!"){
    angerReact.innerText = "Anger isn't good for your health. Feeling angry is often associated with a raise in blood pressure making it a risk to your cardiac health. There's evidence that you're at higher risk for a stroke, a weakened immune system, worsened anxiety, weaker lungs, a shorter life span, and depression. If you feel angry try taking some deep breaths, going for a walk, exercising or even taking a relaxing bath. Once you're relaxed, try talking it out. Talking while angry can cause us to say things we don't mean. I hope you have a better day!"
  } else if (angerReact.innerHTML === "Anger isn't good for your health. Feeling angry is often associated with a raise in blood pressure making it a risk to your cardiac health. There's evidence that you're at higher risk for a stroke, a weakened immune system, worsened anxiety, weaker lungs, a shorter life span, and depression. If you feel angry try taking some deep breaths, going for a walk, exercising or even taking a relaxing bath. Once you're relaxed, try talking it out. Talking while angry can cause us to say things we don't mean. I hope you have a better day!"){
    angerReact.innerHTML = "Click here if you're feeling angry!"
  }
  
})

var antiReact = document.getElementById("orange")
antiReact.addEventListener("click",function antiReaction(){
  antiReact.innerHTML = "Anticipation is a wonderful emotion. <b>If you're anticipating something happy:</b> I hope it goes exactly how you'd like it to, I hope it's everything you wanted and it's great you were so excited about it. <b>If it's bad:</b> I'm sorry you're dreading this, it'll come and go soon enough and I can guarentee once it passes, you'll feel a lot better. "
})

var happyReact = document.getElementById("yellow")
happyReact.addEventListener("click",function happyReaction(){
 happyReact.innerHTML = "Hey! I'm glad you're in a good mood! Cheers to having a good amount of dopamine! Keep having a great day and keep a smile on your face! :)"
})

var disgustReact = document.getElementById("green")
disgustReact.addEventListener("click",function disgustReaction(){
  disgustReact.innerHTML = "I'm sorry you're feeling disguted. To get rid of this feeling try removing what's repulsing you from your environment. If you still feel disgusted try getting some fresh air, a new perspective or removing <b>yourself</b> from that environment."
})

var sadReact = document.getElementById("blue")
sadReact.addEventListener("click",function sadReaction(){
  sadReact.innerHTML = "Cheer up! It sucks that you're feeling down and I'd rather see you happy. Prolonged sadness is a symptom of depression. If you feel you need to reach out or speak to someone urgently, call 1(800)-273-8255. If you don't feel that it's urgent, try finding a therapist you trust.<b>If you want to cheer up try these tips:</b> Play some fun music, take a drive, go see your friends or invite them over, or try to get some rest and try to wake up with a sunny perspective!"
})

var scaredReact = document.getElementById("indigo")
scaredReact.addEventListener("click",function scaredReaction(){
  scaredReact.innerHTML = "What's scaring you? If you can identify what's scaring you, eliminate it. Being frightened raises adrenaline and can activate the flight-or-flight response. This can have negative affects on your body as adrenaline causes an elevated heart rate."
})

var surpriseReact = document.getElementById("violet")
surpriseReact.addEventListener("click",function surpriseReaction(){
  surpriseReact.innerHTML = "Surprise!!!!"
})

var trustReact = document.getElementById("pink")
trustReact.addEventListener("click",function trustReaction(){
  trustReact.innerHTML = "Most healthy relationships are built on trust. Being able to trust is a great thing, you want to be able to rely on people you care about and have them feel the same way. Keep up the trusting ways!"
})


var iAmSomething = {
  name: 'thfdj',
  age: 65,
  isNice: true,
  friends: ['Will', 'Dill', 'Phill']
}
console.log(iAmSomething.friends[2])

//Conditional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a conditional statement
//Using below example below to create your own conditional statement.
var color = "blue"
if (color === "blue") {
    console.log("I am red!")
} else if (color === 'red') {
    console.log("I am blue!")
} else {
    console.log(" i am something else!")
}
/////////
//For Loops - A their most elementary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i
//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do
//}
//i = i + 1 same i++
//Create 1 for loop
for (var i = 19; i < 33; i++ ) {
    console.log(i)
}
//////////////////
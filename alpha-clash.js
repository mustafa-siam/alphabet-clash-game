function showElementbyID(showElement){
    const playGroundSection=document.getElementById(showElement)
    playGroundSection.classList.remove('hidden')
}
function hideElementID(hideElement){
    const homeSection=document.getElementById(hideElement)
    homeSection.classList.add('hidden')
}
function play(){
    hideElementID('home')
    hideElementID('score')
    showElementbyID('play-ground')
    setElementTextValue('current-score',0)
    setElementTextValue('current-life',5)
    continueGame()

}
function getRandomAlphabet(){
    const AlphabetString='abcdefghijklmnopqrstuvwxyz'
    const alphabets=AlphabetString.split('');
   // console.log (alphabets)

    const RandomNumber=Math.random()*25
    const Randomindex=Math.round(RandomNumber)
   // console.log(Randomindex)

    const alphabet=alphabets[Randomindex]
    return alphabet
}
function continueGame(){
    const Alphabet=getRandomAlphabet()
   // console.log(Alphabet)
    const currentAlphabetElement=document.getElementById('current-alphabet')
    currentAlphabetElement.innerText=Alphabet
    addbgcolorid(Alphabet)
}
function addbgcolorid(elementid){
const element=document.getElementById(elementid)
element.classList.add('bg-orange-400')
}
function removebgcolorid(elementid){
    const element=document.getElementById(elementid)
    element.classList.remove('bg-orange-400')
    }
function handlekeyboardbtnpress(event) {
   // console.log('button pressed')
const playerpressed= event.key;
const currentAlphabetelement=document.getElementById('current-alphabet')
const currentAlphabete=currentAlphabetelement.innerText
const  expectAlphabet=currentAlphabete.toLowerCase()
if(playerpressed === expectAlphabet){
    removebgcolorid(expectAlphabet)
    continueGame()
const currentScoreElement=document.getElementById('current-score')
const currentScoreElementText=currentScoreElement.innerText
const currentScore=parseInt(currentScoreElementText)
const newScore=currentScore+1
currentScoreElement.innerText=newScore
}
else{console.log('your answer is wrong')
const currentlifeelement=document.getElementById('current-life')
const currentlifeelementText=currentlifeelement.innerText
const currentLife=parseInt(currentlifeelementText)
const presentLife=currentLife-1
currentlifeelement.innerText=presentLife
if(presentLife === 0){
    gameOver()
}
}
}
function gameOver(){
    hideElementID('play-ground')
  showElementbyID('score')
  const lastScore=getElementTextValue('current-score')
  setElementTextValue('final-score',lastScore)
  const currentAlphabete=getelementbyid('current-alphabet')
  removebgcolorid(currentAlphabete)
}
document.addEventListener('keyup',handlekeyboardbtnpress)
function setElementTextValue(elementid,value){
    const element=document.getElementById(elementid)
    element.innerText=value
}
function getElementTextValue(ElementId){
    const Element=document.getElementById(ElementId)
    const elementValue=Element.innerText
    const value=parseInt(elementValue)
    return value
}
function getelementbyid(elementid){
    const element=document.getElementById(elementid)
    const text =element.innerText
    return text
}
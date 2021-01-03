function getChoices(key, type) {
    let choices = [];
    let correctChoices = kanjis[key][type];

    //pushing one correct choice
    let cChoice = correctChoices[Math.floor(Math.random() * correctChoices.length)];
    choices.push(cChoice);
    answer = cChoice;

    //get incorect choices from global_qs
    while(choices.length != 4){
        var rand = questions[Math.floor(Math.random() * questions.length)];
        if(rand != key && !choices.includes(rand)){
            let ch = kanjis[rand][type];
            choices.push(ch[Math.floor(Math.random() * ch.length)]);
        }
        console.log('choices');
    }
    return shuffle(choices);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


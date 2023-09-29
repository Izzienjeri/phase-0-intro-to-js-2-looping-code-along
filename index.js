const name =['Joy', 'Rose', 'Kipruto', 'Chelsea']
function writeCards(name, eventName) {
    let messagesArray = [];
    for (let i = 0; i < name.length; i++) {
      messagesArray.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
    }
    return messagesArray;
  }

  function countDown(startingPositiveInteger) {
    while (startingPositiveInteger >= 0) {
      console.log(startingPositiveInteger);
      startingPositiveInteger--;
    }
  }
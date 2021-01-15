const randomMessage = () => {
  const messages = [
    "The sun rises from the East.",
    "Too much rain for the innocent heart.",
    "Little things should not taken for granted.",
    "Don't let the sun go down on minor things.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
  ];

  const randIndex = Math.round(Math.random()*messages.length);

  return 'Here is the message for today...' + '\n\n' + '"' + messages[randIndex] + '"';
}

console.log(randomMessage());

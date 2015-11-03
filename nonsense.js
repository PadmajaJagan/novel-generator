'use strict';
var button = document.getElementById('create');

function createNonsense() {
  var output = document.getElementById('nonsense');
  var result = '<p>';
  var max;
  var randomIndex;

  var data = [
    [
      'So it happened that ',
      'It is fairly common for ',
      'It was an unusually beautiful day when ',
      'For something that one does every day, ',
      'Rarely it occurs that ',
      'Suddenly, ',
      'Out of the blue, ',
      'At 8PM on Sunday night ',
      'The day was fine as a bun, and John was ready for ',
      'Unfortunately, ',
      'This time ',
      "Isn't it interesting that "
    ],
    [
      'a lovely Mike who happened to love Harry Potter, ',
      'a bird on the sky, ',
      'a computer software that has been working seamlessly, ',
      'a grocery store, ',
      'the ceiling of the old and shabby cottage out in the country side, '
    ],
    [
      'which you might add that is the most astonishing one by far, ',
      'which most sane ones would think is absurd, ',
      'one that once said they do not believe in fairies, ',
      'unpopular little bastard, ',
      'being undenieably unflattering, ',
      '(ridiculous, I know!) ',
      'mighty, strong, beautiful one, ',
      'which I may add is not so great, ',
      'who was very into booze, ',
      'beautiful as always, ',
      'who really needed some tender love and care, '
    ],
    [
      'flew accross the skies like a bat, ',
      'generated a copious amount of confusion by ',
      'knocked on the door of ',
      'is definitely related to ',
      'took the item ',
      'was definitely '
    ],
    [
      'knitting ',
      'saying ',
      'drawing ',
      'hopping ',
      'generating ',
      'manifesting '
    ],
    [
      'a witch ',
      'a dog ',
      'the sun ',
      'Huffington Post ',
      'a muppet ',
      'your soul ',
      'the grease ',
      'grandmas table ',
      'an old shoe ',
      'the president ',
      'the coziest arm chair ',
      'Salazar ',
      'the moose '
    ],
    [
      'vigorously. ',
      'gently. ',
      'one thing in mind. What is the point of all this? ',
      'knowing that it is not true. ',
      'in a very commonly fashion. ',
      'without a clue about tomorrow. ',
      'with a warm heart. ',
      'like a lightning. '
    ]
  ];

  for (var i = 0; i < data.length; i++) {
    max = data[i].length;
    randomIndex = Math.floor(Math.random() * (max - 0)) + 0;
    result = result + data[i][randomIndex];
  }

  output.innerHTML = result + '</p>';
}

button.addEventListener('click', createNonsense, false);

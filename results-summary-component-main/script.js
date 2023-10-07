const jsondata = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ];

subscoreContainer = document.querySelector(".subscore-container");

for (const score of jsondata){

    let div = document.createElement('div');
    div.classList.add('subscore-row');
    div.classList.add(score.category.toLowerCase());

    let catIcon = document.createElement('img');
    div.classList.add('subscore-icon');
    catIcon.setAttribute('src', score.icon);

    let category = document.createElement('h2');
    category.classList.add('subscore-title');
    category.textContent = score.category;

    let p = document.createElement('p');
    let subscore = document.createElement('span');
    subscore.classList.add('subscore-score');
    subscore.textContent = score.score;

    let denominator = document.createElement('span');
    denominator.classList.add('score-denominator');
    denominator.innerHTML = '&nbsp/ 100';

    p.append(subscore);
    p.append(denominator);

    div.append(catIcon);
    div.append(category);
    div.append(p);

    subscoreContainer.append(div);
};

overallScore = document.querySelector(".overall-score");

overallScore.textContent = calculateOverall(jsondata);

function calculateOverall(data) {
  let total = data.reduce((total, score) => {
    return total += parseInt(score.score)
  }, 0);
  return Math.round(total / data.length);
}




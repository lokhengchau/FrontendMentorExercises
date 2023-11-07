(() => {
  const jsondata = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];

  const MAX = jsondata.reduce((max, obj) => max > obj.amount ? max : obj.amount);

  const divGraph = document.querySelector('.graph');

  for (const obj of jsondata) {
    const divBarWrapper = document.createElement('div');
    divBarWrapper.classList.add('bar-wrapper');

    const divToolTip = document.createElement('div');
    divToolTip.classList.add('tooltip', 'hide');
    divToolTip.setAttribute('id', 'tooltip' + obj.day);
    divToolTip.innerText = '$' + obj.amount;
    divToolTip.style.transform = 'translateY(-' + obj.amount / MAX * 200 + 'px)';

    const divBar = document.createElement('div');
    divBar.classList.add('bar');
    if (obj.amount == MAX) {
      divBar.classList.add('max');
    }
    divBar.setAttribute('id', 'bar' + obj.day);
    divBar.style.height = obj.amount / MAX * 200 + 'px';

    divBarWrapper.append(divToolTip);
    divBarWrapper.append(divBar);
    divGraph.append(divBarWrapper);
  }

  for (const obj of jsondata) {
    const spanXTitle = document.createElement('span');
    spanXTitle.classList.add('x-title');
    spanXTitle.innerText = obj.day;
    divGraph.append(spanXTitle);
  }

  divsBar = document.querySelectorAll('.bar');

  divsBar.forEach(divBar => {
    const day = divBar.getAttribute('id').slice(3);
    const divToolTip = document.querySelector('#tooltip' + day);
    divBar.addEventListener('mousemove', () => {
      divToolTip.classList.remove('hide');
    });
    divBar.addEventListener('mouseleave', () => {
      divToolTip.classList.add('hide');
    });
  });

})();
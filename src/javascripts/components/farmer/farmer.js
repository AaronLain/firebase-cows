const farmerMaker = (farmer) => {
  let domString = '';
  domString += '<div class="card">';
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${farmer.name}</h5>`;
  domString += `<p class="card-text">weight: ${farmer.age}.</p>`;
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { farmerMaker };

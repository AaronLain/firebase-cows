const farmerMaker = (farmer) => {
  let domString = '';
  domString += `<div class="card farmer-card" id=${farmer.id}>`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${farmer.name}</h5>`;
  domString += `<p class="card-text">Age: ${farmer.age}.</p>`;
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { farmerMaker };


const cowMaker = (cow) => {
  let domString = '';
  domString += '<div class="card">';
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${cow.name}</h5>`;
  domString += `<p class="card-text">weight: ${cow.weight}.</p>`;
  domString += `<p class="card-text">location: ${cow.location}.</p>`;
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { cowMaker };

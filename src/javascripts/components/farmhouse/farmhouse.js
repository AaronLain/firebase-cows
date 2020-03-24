import farmerData from '../../helpers/data/farmerData';
import utils from '../../helpers/utils';
import singleFarmer from '../singleFarmer/singleFarmer';
import farmerComponent from '../farmer/farmer';

const buildFarmhouse = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      let domString = '';
      domString += '<h2>Farmhouse</h2>';
      domString += '<div class="d-flex flex-wrap">';
      farmers.forEach((farmer) => {
        domString += farmerComponent.farmerMaker(farmer);
      });
      domString += '</div>';
      utils.printToDom('farmhouse', domString);
      $('body').on('click', '.farmer-card', singleFarmer.buildFarmer);
    })
    .catch(() => utils.printToDom('farmhouse', 'something broke'));
};

export default { buildFarmhouse };

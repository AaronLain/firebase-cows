import farmerData from '../../helpers/data/farmerData';
import utils from '../../helpers/utils';
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
    })
    .catch(() => utils.printToDom('farmhouse', 'something broke'));
};

export default { buildFarmhouse };

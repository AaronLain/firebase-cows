import cowData from '../../helpers/data/cowData';

const buildCows = () => {
  cowData.getCows()
    .then((response) => console.error('getCows works', response.data))
    .catch((err) => console.error('getCows broken', err));
};

export default { buildCows };

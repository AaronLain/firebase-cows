import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const logoutButton = $('#navbarLogoutButton');

const checkStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      logoutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkStatus };

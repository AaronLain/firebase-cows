import firebase from 'firebase/app';
import 'firebase/auth';

const logoutEvent = () => {
  $('#navbarLogoutButton').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

export default { logoutEvent };

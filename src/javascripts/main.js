import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import login from './helpers/data/authData';
import logout from './components/myNavbar/myNavbar';
import auth from './components/auth/auth';


import 'bootstrap';
import '../styles/main.scss';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  login.checkStatus();
  auth.loginButton();
  logout.logoutEvent();
  $('body').on('mouseenter', '.farmer-card', (e) => e.target.closest('.card').classList.add('bg-danger'));
  $('body').on('mouseleave', '.farmer-card', (e) => e.target.closest('.card').classList.remove('bg-danger'));
};

init();

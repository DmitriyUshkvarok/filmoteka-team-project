import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  FacebookAuthProvider,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// объект настроек авторизации firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCHbS2wZ3n6qYm6oLbJ10PX1s99PjdQPZQ',
  authDomain: 'filmoteka-team-project-6e0d7.firebaseapp.com',
  projectId: 'filmoteka-team-project-6e0d7',
  storageBucket: 'filmoteka-team-project-6e0d7.appspot.com',
  messagingSenderId: '837667202097',
  appId: '1:837667202097:web:2d2a12ed50e0f702782110',
  measurementId: 'G-NPG4Y8VLH9',
  databaseURL:
    'https://filmoteka-team-project-6e0d7-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

// переменные для функционала регистрации и авторизации
const refs = {
  TOKEN_KEY: 'token',
  registrationModal: document.querySelector('.modal-form-registration'),
  registerBtn: document.querySelector('.registration-btn'),
  logIn: document.querySelector('.log-in-btn'),
  emailSign: document.querySelector('#email'),
  passwordSign: document.querySelector('#password'),
  forgotPassword: document.querySelector('.forfgot-password'),
  forgotForm: document.querySelector('.forgoten-group-registaration'),
  googleLogIn: document.querySelector('.log-by-google-btn'),
  gitHubLogIn: document.querySelector('.log-by-github-btn'),
  facebookBtn: document.querySelector('.log-by-facebook-btn'),
  resetPassword: document.querySelector('.btn-new-password'),
  inputMailForgot: document.querySelector('.forgoten-password'),
  manSvg: document.querySelector('.man-watch'),
  userInfoWrapper: document.querySelector('.info-user-container'),
  btnOut: document.querySelector('.btn-log-out'),
};
const token = localStorage.getItem(refs.TOKEN_KEY);
// проверка ключа локального хранилища (убираем окно авторизации делаем фон активным)
if (token) {
  refs.registrationModal.classList.add('is-hidden');
}

// оброботчики событий
refs.forgotPassword.addEventListener('click', onOpenForgotForm);
refs.registerBtn.addEventListener('click', onRegisterUsers);
refs.logIn.addEventListener('click', onLogInUsers);
refs.googleLogIn.addEventListener('click', onLogInGoogle);
refs.gitHubLogIn.addEventListener('click', onLogInGithub);
refs.facebookBtn.addEventListener('click', onLoginFacebook);
refs.resetPassword.addEventListener('click', onSubmitNewPassword);
refs.btnOut.addEventListener('click', onOutFunction);

// открыть панель для сброса пароля
function onOpenForgotForm(e) {
  e.preventDefault();
  refs.forgotForm.classList.toggle('hidden');
  refs.manSvg.classList.toggle('hidden');
}

// наблюдаем за изминением состояния авторизации
const authStateChange = getAuth();
function authState() {
  onAuthStateChanged(authStateChange, user => {
    if (user) {
      const uid = user.uid;
      refs.userInfoWrapper.innerHTML = `<div class='info-user'>
        <img
          class='info-usrer-photo'
          src='${user.photoURL}'
          alt=''
        />
        <div class='info-container'>
        <h3 class='info-user-name'>${user.displayName}</h3>
        <div class='info-user-email'>${user.email}</div>
        </div>
      </div>`;
    } else {
      // refs.userInfoWrapper.innerHTML = `<div class='info-user'>
      //   <img
      //     class='info-usrer-photo'
      //     src='../images/OldTV.svg'
      //     alt=''
      //   />
      //   <div class='info-container'>
      //   <h3 class='info-user-name'>No Name</h3>
      //   <div class='info-user-email'>No email</div>
      //   </div>
      // </div>`;
    }
  });
}
authState();

// регистрация новых пользователей
const authRegistr = getAuth();
function onRegisterUsers(e) {
  e.preventDefault();
  const email = refs.emailSign.value;
  const password = refs.passwordSign.value;
  createUserWithEmailAndPassword(authRegistr, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      if (email && password) {
        refs.registrationModal.classList.add('is-hidden');
        Notify.success('Спасибо за регестрацию');
        localStorage.setItem(refs.TOKEN_KEY, token);
      }
      writeUserData(user.uid, user.displayName, user.email, user.photoURL);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      onErrorValid(error);
    });
}

// вход если уже зарегестрирован
const authSign = getAuth();
function onLogInUsers(e) {
  e.preventDefault();
  const email = refs.emailSign.value;
  const password = refs.passwordSign.value;
  signInWithEmailAndPassword(authSign, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      if (email && password) {
        refs.registrationModal.classList.add('is-hidden');
        Notify.success('Рады тебя снова видеть на нашем сайте');
        localStorage.setItem(refs.TOKEN_KEY, token);
      }
      console.log(user);
    })
    .catch(error => {
      onErrorValid(error);
    });
}

// google авторизация
const authGoog = getAuth(app);
const providerGoogle = new GoogleAuthProvider();

function onLogInGoogle(e) {
  e.preventDefault();
  signInWithPopup(authGoog, providerGoogle)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user.displayName;
      Notify.success(`привет ${user}`);
      refs.registrationModal.classList.add('is-hidden');
      localStorage.setItem(refs.TOKEN_KEY, token);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

// github авторизация
const authGit = getAuth(app);
const providerGitHub = new GithubAuthProvider();

function onLogInGithub(e) {
  e.preventDefault();
  signInWithPopup(authGit, providerGitHub)
    .then(result => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user.displayName;
      Notify.success(`привет ${user}`);
      refs.registrationModal.classList.add('is-hidden');
      localStorage.setItem(refs.TOKEN_KEY, token);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GithubAuthProvider.credentialFromError(error);
    });
}

// facebook авторизация
function onLoginFacebook(e) {
  const authFace = getAuth();
  const providerFacebook = new FacebookAuthProvider();
  e.preventDefault();
  signInWithPopup(authFace, providerFacebook)
    .then(result => {
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const user = result.user;
      const accessToken = credential.accessToken;
      console.log('uel');
      Notify.success(`привет`);
      refs.registrationModal.classList.add('is-hidden');
      localStorage.setItem(refs.TOKEN_KEY, token);
      console.log('good');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
    });
}

// сброс пароля
const authPass = getAuth();
authPass.languageCode = 'ru';

async function onSubmitNewPassword(e) {
  const mailValue = document.querySelector('.input-emails');
  e.preventDefault();
  const email = refs.inputMailForgot.value;
  console.log(email);

  await sendPasswordResetEmail(authPass, email)
    .then(() => {
      Notify.success(`привет! письмо отправлено`);
    })
    .catch(error => {
      Notify.failure('ошибка', {
        timeout: 4000,
        background: '#c9a22de6',
      });
    });
}

// выход из аккаунта
function onOutFunction() {
  Notiflix.Confirm.show(
    'Are You sure you want to go out',
    'Do you agree with me?',
    'Yes',
    'No',
    function okCb() {
      refs.registrationModal.classList.remove('is-hidden');
      // signOut(authGit, auth, authSign, authForm);
      localStorage.removeItem(refs.TOKEN_KEY);
    },
    function cancelCb() {
      return;
    },
    {
      width: '320px',
      borderRadius: '8px',
      fontFamily: 'Aboreto',
    }
  );
}

// error valid
function onErrorValid(error) {
  if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
    Notify.failure('такой адрес уже существует', {
      timeout: 4000,
      background: '#c9a22de6',
    });
  } else if (error.message == 'Firebase: Error (auth/invalid-email).') {
    Notify.failure('не валидный эмеил', {
      timeout: 4000,
      background: '#c9a22de6',
    });
  } else if (error.message == 'Firebase: Error (auth/wrong-password).') {
    Notify.failure('ошибка авторизации!неверный пароль', {
      timeout: 4000,
      background: '#c9a22de6',
    });
  } else {
    Notify.failure(`${error.message}`, {
      timeout: 4000,
      background: '#c9a22de6',
    });
  }
  return;
}

// база данных
function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

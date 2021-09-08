import { DUMMY_OFFERS, DUMMY_POPULAR_DEALS, SCRIPT_ARRAY } from './constant';
import Script from 'next/script';
import { regex } from './regex';
import { getUserDetails } from '../services/customer/getCustomerDetails';
import Cookies from 'js-cookie';
import moment from 'moment';

const loadScripts = () => {
  //const body = document.getElementsByTagName('body')[0];
  for (let index = 0; index < SCRIPT_ARRAY.length; index++) {
    const element = SCRIPT_ARRAY[index];
    const { id, src } = element;
    const isScriptAdded = document.getElementById(id);
    if (!isScriptAdded) {
      <Script id={id} src={src} />
      // let tag = document.createElement('script');
      // tag.async = false;
      // tag.src = src;
      // tag.id = id;
      // body.appendChild(tag);
      // if (id === "bodyLoadScript6") {
      //   let wowTag = document.createElement('script');
      //   wowTag.id = "bodyLoadWowScript";
      //   wowTag.innerHTML = '';
      //   body.appendChild(wowTag);
      // }
    }
  }
}

const handleAlphaNumericInput = (event) => {
  if (!regex.alphaNumeric.test(event.key)) {
    event.preventDefault();
  }
}

const handleNumericInput = (event) => {
  if (!regex.onlyNumber.test(event.key)) {
    event.preventDefault();
  }
}

const handleNoInput = (event) => {
  if (event) {
    event.preventDefault();
  }
}

const setToken = (token) => {
  Cookies.set('token', token);
}

const getToken = (token) => {
  return Cookies.get('token');
}

const removeToken = (token) => {
  Cookies.remove('token');
}

const setUserData = (userData) => {
  Cookies.set('userData', userData ? JSON.stringify(userData) : {});
}

const getUserData = () => {
  return Cookies.get('userData') ? JSON.parse(Cookies.get('userData')) : {};
}

const removeUserData = (userData) => {
  Cookies.remove('userData');
}

const setBirthDayFormat = (date) => {
  return moment(date).format("DD/MM/YYYY");
}

const setMobileNumberFormat = (mobileNumber) => {
  const mobileNumberArray = mobileNumber.split(" ");
  if (mobileNumberArray.length === 2) {
    return mobileNumberArray[1];
  } else {
    return mobileNumber;
  }
}

const getUserProps = async (token) => {
  if (token) {
    const userData = await getUserDetails(token);
    if (!userData) {
      return {
        userData: {},
        userToken: "",
        isUserLoggedIn: false
      }
    } else {
      return {
        userData: userData?.data,
        userToken: token,
        isUserLoggedIn: true
      }
    }
  } else {
    return {
      userData: {},
      userToken: "",
      isUserLoggedIn: false
    }
  }
}

const getUserStaicProps = (req) => {
  const userData = req.cookies.userData;
  if (userData !== undefined) {
    const response = {
      props: {
        userData: JSON.parse(userData),
        isUserLoggedIn: true
      }
    }
    return response;
  } else {
    const response = {
      props: {
        userData: {},
        isUserLoggedIn: false
      }
    }
    return response;
  }
}
const getPopularDeals = async () => {
  return DUMMY_POPULAR_DEALS;
}

const getOffers = async () => {
  return DUMMY_OFFERS;
}

export {
  loadScripts,
  handleAlphaNumericInput,
  handleNumericInput,
  getUserProps,
  handleNoInput,
  setToken,
  getToken,
  removeToken,
  setUserData,
  getUserData,
  removeUserData,
  setBirthDayFormat,
  setMobileNumberFormat,
  getPopularDeals,
  getOffers,
  getUserStaicProps
}
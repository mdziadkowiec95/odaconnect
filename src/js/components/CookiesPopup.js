const cookiesPopupEl = document.querySelector('.cookies');
const cookiesBtnAccept = document.querySelector('.cookies__btn');

const setCookie = (name, val, days, path, domain, secure) => {
  if (navigator.cookieEnabled) {
    const cookieName = encodeURIComponent(name);
    const cookieVal = encodeURIComponent(val);
    let cookieText = cookieName + "=" + cookieVal;

    if (typeof days === "number") {
      const data = new Date();
      data.setTime(data.getTime() + (days * 24 * 60 * 60 * 1000));
      cookieText += "; expires=" + data.toGMTString();
    }

    if (path) {
      cookieText += "; path=" + path;
    }
    if (domain) {
      cookieText += "; domain=" + domain;
    }
    if (secure) {
      cookieText += "; secure";
    }

    document.cookie = cookieText;
  }
}

const checkCookie = cookieName => {
  if (document.cookie !== '') {
    const cookies = document.cookie.split(/; */);
    const cookiesPairs = cookies.map(item => [item.split('=')[0], item.split('=')[1]]);
    // const cookie = cookiesPairs.findIndex(el => el[0] === cookieName);

    let cookieIndex = -1;

    for (let i = 0; i < cookiesPairs.length; i++) {
      if (cookiesPairs[i][0] === cookieName) {
        cookieIndex = i;

        break;
      }
    }

    return cookieIndex >= 0 ? true : false;
  } else {
    return false;
  }
};

const renderCookiesPopup = () => {

  if (checkCookie('cookiesAccepted')) {
    document.body.removeChild(cookiesPopupEl);
  } else {
    cookiesPopupEl.classList.remove('hidden');

    const handleCookiesBtnClick = e => {
      setCookie('cookiesAccepted', 'true');

      document.body.removeChild(cookiesPopupEl);
    };

    cookiesBtnAccept.addEventListener('click', handleCookiesBtnClick);
  }

};

document.addEventListener('DOMContentLoaded', renderCookiesPopup);




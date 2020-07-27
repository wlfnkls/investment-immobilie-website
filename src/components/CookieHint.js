export default class CookieHint {
  constructor() {
    this.init();
  }

  init() {
    this.setPermissionCookie();
  }

  showCookieHint() {

  }

  hideCookieHint() {

  }

  setPermissionCookie() {
    document.cookie = "trackingCookies=true; path=/; secure";
  }

  setRestrictionCookie() {
    document.cookie = "trackingCookies=false; path=/; secure";
  }

  deleteCookie() {
    document.cookie = "trackingCookies=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}
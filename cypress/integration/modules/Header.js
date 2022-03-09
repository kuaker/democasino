const HEADER_LAYOUT = '.header__layout';
const HEADER_LEFT = '.header__left';
const HEADER_RIGHT = 'header__right';
const DIV_LOGIN = '.login';

class Header {
   layout = () => cy.get(HEADER_LAYOUT);

   loginBtn = () => cy.get(DIV_LOGIN);

   registrationBtn = () => this.loginBtn().next();
}
export default Header;

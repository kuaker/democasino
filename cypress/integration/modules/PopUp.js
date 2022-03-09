const MODAL = '.modal__content';
const MODAL_BTN = '.modal__buttons';
const BTN_LEARN_MORE = '.button.button--s2.button--t4 ';
const BTN_GOT_IT = '.button.button--s2.button--t1 ';

class PopUp {
   modal = () => cy.get(MODAL);

   modal_btns = () => cy.get(MODAL_BTN);

   learn_more = () => this.modal_btns().children(0).eq(0);

   got_it = () => this.modal_btns().children(0).eq(1);
}

export default PopUp;

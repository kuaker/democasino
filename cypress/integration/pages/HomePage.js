import Header from '../modules/Header';
import PopUp from '../modules/PopUp';

class HomePage {
   constructor() {
      this.popUp = new PopUp();
      this.header = new Header();
   }
}

export default HomePage;

import BaseComponent from '../common/base.component.js'

class HeaderComponent extends BaseComponent{

    constructor() {
        super(".header_container");
    }

    get headerLabel(){
        return this.rootEl.$('.header_label')
    }

}
export default HeaderComponent
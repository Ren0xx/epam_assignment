import BaseComponent from '../common/base.component.js'

class LoginFormComponent extends BaseComponent{

    constructor() {
        super("form");
    }

    get usernameField(){
        return this.rootEl.$('.form_group #user-name')
    }
    get passwordField(){
        return this.rootEl.$('.form_group #password')
    }
    get loginBtn(){
        return this.rootEl.$('input#login-button')
    }
    get errorMsg(){
        return this.rootEl.$('div.error-message-container.error');
    }
    async clickLoginButton(){
        await this.loginBtn.click()
    }

}
export default LoginFormComponent;
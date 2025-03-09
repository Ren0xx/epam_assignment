import BasePage from './base.page';
import {LoginForm} from "../components";

class LoginPage extends BasePage {

    constructor() {
        super("/");
        this.loginForm = new LoginForm();
    }
}

export default LoginPage;
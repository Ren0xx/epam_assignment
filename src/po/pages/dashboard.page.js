import BasePage from './base.page';
import {Header} from "../components"

class DashboardPage extends BasePage {
    constructor() {
        super("/inventory.html");
        this.header = new Header();
    }
}

export default DashboardPage;
import LoginPage from '../pages/login.page.js'
import DashboardPage from "./dashboard.page.js";
/**
 * @param name {'login' | 'dashboard'}
 */
export function pages(name){
    const items = {
        login: new LoginPage(),
        dashboard: new DashboardPage(),
    }
    return items[name.toLowerCase()]
}
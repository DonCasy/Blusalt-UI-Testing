exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLink = page.getByRole('link', { name: 'Sample App' });
        this.usernameInput = page.getByPlaceholder('User Name');
        this.passwordInput = page.getByPlaceholder('********');
        this.loginButton = page.locator('#login')
   
    }

    async gotoLoginPage(){
        await this.page.goto('http://www.uitestingplayground.com/');
        await this.loginLink.click()

    }
    async login(username, password) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}
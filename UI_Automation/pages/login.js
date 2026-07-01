const { expect } = require('@playwright/test');


class login
{
    constructor(page)
    {
        this.page = page;
        this.username = page.locator('[name="username"]');
        this.password = page.locator('[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async logintoapp(username,password)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async verifylogin() {
        await expect(
           this.page.locator('//h6[@class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
        ).toHaveText('Dashboard');
     }
}

module.exports = login;
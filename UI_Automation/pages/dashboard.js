class dashboard
{
    constructor(page)
    {
        this.page = page;
        this.pimmenu = page.locator('//span[text()="PIM"]');
        this.userdropdown = page.locator('.oxd-userdropdown-tab');
        this.logoutbtn = page.locator('//a[text()="Logout"]');
    }

    async clickPIM()
    {
        await this.pimmenu.click();
    }

    async logout()
    {
        await this.userdropdown.click();
        await this.logoutbtn.click();
    }
}

module.exports = dashboard;
class pim
{
    constructor(page)
    {
        this.page = page;
        this.addemployeebtn = page.locator('//a[text()="Add Employee"]');
        this.firstname = page.locator('[name="firstName"]');
        this.lastname = page.locator('[name="lastName"]');
        this.savebtn = page.locator('button[type="submit"]');
        this.employeesearchbtn = page.locator('//a[text()="Employee List"]');
    }

    async clickaddemployee()
    {
        await this.addemployeebtn.click();
    }

    async addemployee(fname, lname)
    {
        await this.firstname.fill(fname);
        await this.lastname.fill(lname);
        await this.savebtn.click();
        await this.employeesearchbtn.click();
    }
}

module.exports = pim;
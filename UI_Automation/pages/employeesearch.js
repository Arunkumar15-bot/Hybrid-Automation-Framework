class employeesearch
{
    constructor(page)
    {
        this.page = page;
        this.employeename = page.locator('(//input[@placeholder="Type for hints..."])[1]');
        this.searchbtn = page.locator('//button[@type="submit"]');
        this.deletebtn = page.locator('[class="oxd-icon bi-trash"]').first();
    }

    async searchemployee(empname)
    {
        await this.employeename.fill(empname);
        await this.searchbtn.click();
    }

    // async deleteemployee()
    // {
    //     await this.page.locator('[class="oxd-icon bi-trash"]').first().waitFor({ timeout: 15000 });
    //     await this.deletebtn.click();
    // }
}

module.exports = employeesearch;
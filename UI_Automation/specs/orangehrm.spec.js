const { test } = require('@playwright/test');
const Login = require('../pages/login');
const Dashboard = require('../pages/dashboard');
const PIM = require('../pages/pim');
const EmployeeSearch = require('../pages/employeesearch');

test('OrangeHRM Test', async ({ page }) => {

    const login = new Login(page);
    const dashboard = new Dashboard(page);
    const pim = new PIM(page);
    const employeesearch = new EmployeeSearch(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login
    await login.logintoapp('Admin', 'admin123');
    await login.verifylogin();

    // Navigate to PIM
    await dashboard.clickPIM();

    // Add Employee
    await pim.clickaddemployee();
    await pim.addemployee('Arun', 'Kumar');

    // Back to PIM for search
    await dashboard.clickPIM();

    // Search Employee
    await employeesearch.searchemployee('Arun');

    // await employeesearch.deleteemployee();

});
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

setDefaultTimeout(60000);

const Login = require('../pages/login');
const Dashboard = require('../pages/dashboard');
const PIM = require('../pages/pim');
const EmployeeSearch = require('../pages/employeesearch');

let browser;
let page;
let login;
let dashboard;
let pim;
let employeesearch;

Given('User launches OrangeHRM application', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(5000);

    login = new Login(page);
    dashboard = new Dashboard(page);
    pim = new PIM(page);
    employeesearch = new EmployeeSearch(page);
});

When('User logs into OrangeHRM', async function () {
    await login.logintoapp('Admin', 'admin123');
});

When('User adds a new employee', async function () {
    await dashboard.clickPIM();
    await pim.clickaddemployee();
    await pim.addemployee('Arun', 'Kumar');
});

When('User searches employee', async function () {
    await dashboard.clickPIM();
    await employeesearch.searchemployee('Arun');
});

Then('Employee should be displayed successfully', async function () {
    await page.waitForTimeout(3000);
    await browser.close();
});
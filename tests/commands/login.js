const { expect } = require('@playwright/test');

async function testLogin(page) {

    await page.goto('https://miraadmin.app.dev/auth/sign-in');
    await page.getByLabel('Username').fill('justinl');
    await page.getByLabel('Password').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle' }),
        expect(page.locator('app-home').getByRole('img')).toBeVisible({ timeout: 20000 })
    ])
}

module.exports = {
    testLogin,
}
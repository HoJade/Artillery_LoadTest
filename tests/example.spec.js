// @ts-check
const { test, expect } = require('@playwright/test');
import { testLogin } from './commands/login';

test('test', async ({ page }) => {
  await testLogin(page)
});
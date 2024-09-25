import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test ('loginPass', async ({page}) => {
const login = new LoginPage(page);
await login.gotoLoginPage();
await login.login('doncasy','pwd')

})
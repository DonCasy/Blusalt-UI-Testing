import { test, expect} from '@playwright/test';

test ('login', async ({page}) => {

    // log on to the web page
    await page.goto('http://www.uitestingplayground.com/')
   
    // Scroll down and click on the "sample App" link
    await page.getByRole('link', { name: 'Sample App' }).click();
  
    // Fill in the user name (doncasy)
    await page.getByPlaceholder('User Name').fill('doncasy')

    // fill in the pasword (pwd)
    await page.getByPlaceholder('********').fill('pwd')

    // Click on the login Button
    await page.click('#login')

})


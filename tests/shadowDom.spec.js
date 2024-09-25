import {test, expect} from '@playwright/test'

test ('shadowDom', async ({page}) =>{

    // log on to the web page
    await page.goto('http://www.uitestingplayground.com/')

    // Navigate to the shadow DOM page
    await page.getByRole('link', { name: 'Shadow DOM' }).click();

    // Click the button with the gear icon
    await page.getByRole('button', { name: '' }).click();

    // Locate the element by its ID, get the text content of the element and log it
    const nameField = page.locator('#editField');
    await expect(nameField).toBeVisible();
    console.log

    // Click the button with the close icon
    await page.getByRole('button', { name: '' }).click();

})

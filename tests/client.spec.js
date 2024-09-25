import {test, expect} from '@playwright/test'

test ('clientDelay', async ({page}) =>{

    await page.goto('http://www.uitestingplayground.com/')

    await page.locator("//a[normalize-space()='Client Side Delay']").click()

    await page.waitForTimeout(15000)

    await expect (page.getByText('Data calculated on the client side.')).toBeVisible()

})
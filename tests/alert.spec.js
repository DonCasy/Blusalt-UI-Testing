import { test, expect} from '@playwright/test';

test ('Alerts', async ({page}) => {

    // log on to the web page
    await page.goto('http://www.uitestingplayground.com/')

    await page.locator("//a[normalize-space()='Alerts']").click()

    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('Today is a working day.')
        await dialog.accept();

    })

    await page.click('#alertButton');

})

test ('Confirm', async ({page}) => {

    // log on to the web page
    await page.goto('http://www.uitestingplayground.com/')

    await page.waitForTimeout(5000)

    await page.locator("//a[normalize-space()='Alerts']").click()

    await page.locator('#confirmButton').click()

    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Today is Friday.')
        await dialog.accept();

    })

    await page.getByRole('button', { name: 'Confirm' }).click();

})


test.only ('Prompt', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/');

    await page.waitForTimeout(5000)

    await page.getByRole('link', { name: 'Alerts' }).click();

    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await page.getByRole('button', { name: 'Prompt' }).click();
  });

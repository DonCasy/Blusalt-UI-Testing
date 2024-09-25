import {test, expect} from '@playwright/test'

test ('dynamicTable', async ({page}) =>{

    // log on to the web page
    await page.goto('http://www.uitestingplayground.com/');
    
    // Navigate to the Dynamic Table page
    await page.getByRole('link', { name: 'Dynamic Table' }).click();

    // Get the CPU load value for Chrome from the table
    const chromeCPUFromTable = await page.locator('xpath=//span[text()="Chrome"]/../span[normalize-space()="CPU"]/following-sibling::span').textContent();

    // Extract the CPU load value from the yellow label
    const chromeCPUFromLabel = await page.locator('xpath=//p[contains(text(), "Chrome CPU")]').textContent();
    
    // Extract the numeric value from both texts and convert into a float
    const cpuFromTable = parseFloat(chromeCPUFromTable.trim().replace('%', ''));
    const cpuFromLabel = parseFloat(chromeCPUFromLabel.match(/Chrome CPU:\s*(\d+(\.\d+)?)/)[1]);

    // Compare both values
    console.log('CPU from Table:', cpuFromTable);
    console.log('CPU from Yellow Label:', cpuFromLabel);

    // Assertion to check if both CPU values match
    expect(cpuFromTable).toBe(cpuFromLabel);
})
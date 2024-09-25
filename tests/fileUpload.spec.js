import {test, expect} from '@playwright/test'

test ('Fileload', async ({ page }) => {
    // Go to the target page
    await page.goto('http://www.uitestingplayground.com/');

    // Navigate to the file upload page
    await page.locator("//a[normalize-space()='File Upload']").click();

    // Locate the actual file input element and upload the file
    // Use the correct selector for the input[type="file"] element
    await page.locator('input[type="file"]').setInputFiles('tests/Uploads/FSDH.docx');

    
})


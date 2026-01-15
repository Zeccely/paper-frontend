import { test, expect } from '@playwright/test';

test.describe("Upload Page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:5173/upload")
    })

    test("Should show form", async ({ page }) => {

        await expect(
            page.getByRole("form", {
                name: "uploadForm",
            })
        ).toBeVisible();
    })
})
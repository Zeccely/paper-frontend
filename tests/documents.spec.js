import { test, expect } from '@playwright/test';

test.describe("Upload Page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:5173/upload")
    })

    test("Should show form", async ({ page }) => {

        await expect(
            page.getByTestId("UploadForm")
        ).toBeVisible();

        await expect(
            page.getByRole("button", { name: "submit" })
        ).toBeVisible();
    })
})
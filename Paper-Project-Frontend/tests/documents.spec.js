import { test, expect } from '@playwright/test';

test('Sends a file named chips', async ({ page, request }) => {
    const response = await request.post(
        'http://localhost:8080/api/documents',
        {
            multipart: {
                title: 'CHIPS',
                description: 'chips',
                categoryName: 'food',
                file: {
                    name: 'chips.png',
                    contentType: 'image/png',
                    buffer: Buffer.from('fake image'),
                }
            }
        }
    );
    await page.goto('/documents');
    await expect(page.getByText(/chips/i)).toBeVisible();
});

test('backend rejects document with wrong extension', async ({ page, request }) => {
    const response = await request.post(
        'http://localhost:8080/api/documents',
        {
            multipart: {
                title: 'CHIPS',
                description: 'chips',
                categoryName: 'food',
                file: {
                    name: 'chips.TIFF',
                    contentType: 'image/TIFF',
                    buffer: Buffer.from('fake image')
                }
            }
        }
    );
    expect(res.status()).toBeGreaterThanOrEqual(400);
    expect(res.status()).toBeLessThan(500);
}
);
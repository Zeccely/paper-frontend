import { test, expect } from '@playwright/test';


test.beforeAll(async ({ request }) => {
  const res = await request.post('http://localhost:8080/api/auth/login', {
    data: { username: 'User', password: 'Pass' },
  });
  expect(res.ok()).toBeTruthy();
});

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
    expect(response.status()).toBeGreaterThanOrEqual(400);
    expect(response.status()).toBeLessThan(500);
}
);
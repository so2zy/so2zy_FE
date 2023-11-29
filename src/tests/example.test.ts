// src/tests/example.test.ts
import { test, expect } from '@playwright/test';

test('should render the app', async ({ page }) => {
  await page.goto('http://localhost:3000/signUp'); // 애플리케이션 URL로 변경

  // 페이지에서 필요한 테스트 동작을 수행합니다.
  const title = await page.title();
  expect(title).toBe('Your App Title');
});

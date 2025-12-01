
import { test, expect } from '@playwright/test';

test('Debe cambiar el idioma dinámicamente', async ({ page }) => {
  // Abrir la página principal
  await page.goto('/');

  // Verificar que el texto inicial es "Hello"
  await expect(page.locator('#title')).toHaveText('Hello');

  // Cambiar a Español
  await page.selectOption('#language', 'es');
  await expect(page.locator('#title')).toHaveText('Hola');

  // Cambiar a Árabe
  await page.selectOption('#language', 'ar');
  await expect(page.locator('#title')).toHaveText('مرحبا');
});

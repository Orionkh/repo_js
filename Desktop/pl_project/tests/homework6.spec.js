// @ts-check
const { test, expect } = require('@playwright/test');

test('campus', async ({ page }) => {
  await page.goto('https://campusreel.org/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CampusReel/);
});

test('allo', async ({ page }) => {
  await page.goto('https://allo.ua/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/АЛЛО - національний маркетплейс із найширшим асортиментом/);
});

test('google', async ({ page }) => {
  await page.goto('https://google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});



test('campus link', async ({ page }) => {
  await page.goto('https://campusreel.org/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Student Jobs' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Select Your College' })).toBeVisible();
});

test('allo link', async ({ page }) => {
  await page.goto('https://allo.ua/');

  // Click the get started link.
  await page.getByRole('link', { name: "Магазини" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: "Адреса магазинів АЛЛО" })).toBeVisible();
});

test('google link', async ({ page }) => {
  await page.goto('https://google.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Для бізнесу' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Рекламуйте свій бізнес у Google' })).toBeVisible();
});
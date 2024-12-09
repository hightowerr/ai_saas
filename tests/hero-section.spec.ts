import { test, expect } from '@playwright/test';

test.describe('Hero Section CTA Buttons', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('CTA buttons are immediately visible', async ({ page }) => {
    const getStartedButton = page.getByRole('link', { name: 'Get Started' });
    const learnMoreButton = page.getByRole('link', { name: 'Learn More' });

    // Check button visibility
    await expect(getStartedButton).toBeVisible();
    await expect(learnMoreButton).toBeVisible();

    // Check button opacity
    await expect(getStartedButton).toHaveCSS('opacity', '1');
    await expect(learnMoreButton).toHaveCSS('opacity', '1');
  });

  test('Get Started button has correct styling', async ({ page }) => {
    const getStartedButton = page.getByRole('link', { name: 'Get Started' });

    // Check background color
    const backgroundColor = await getStartedButton.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    
    // Validate blue background (rgba or hex)
    expect(backgroundColor).toMatch(/rgba?\(68,\s*87,\s*242/i);
  });

  test('Buttons have consistent dimensions', async ({ page }) => {
    const getStartedButton = page.getByRole('link', { name: 'Get Started' });
    const learnMoreButton = page.getByRole('link', { name: 'Learn More' });

    const getStartedDimensions = await getStartedButton.boundingBox();
    const learnMoreDimensions = await learnMoreButton.boundingBox();

    // Ensure minimum height of 48px
    expect(getStartedDimensions.height).toBeGreaterThanOrEqual(48);
    expect(learnMoreDimensions.height).toBeGreaterThanOrEqual(48);
  });
});

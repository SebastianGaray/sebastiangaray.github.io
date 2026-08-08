import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

for (const locale of ["en", "es"] as const) {
  test(`${locale} portfolio navigation, metadata and accessibility`, async ({
    page,
  }, testInfo) => {
    await page.goto(`/${locale}/`);

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://sebastiangaray.github.io/${locale}/`,
    );
    await expect(page.locator('link[rel="alternate"]')).toHaveCount(3);

    const sections = page.locator("[data-view]");
    await expect(sections.filter({ visible: true })).toHaveCount(1);

    if (testInfo.project.name === "mobile") {
      await page
        .getByText(locale === "en" ? "Menu" : "Menú", { exact: true })
        .click();
    }
    const projects = page
      .locator(
        `${testInfo.project.name === "mobile" ? ".mobile-nav" : ".desktop-nav"} a[href="#projects"]`,
      )
      .first();
    await projects.click();
    await expect(page.locator('[data-view="projects"]')).toBeVisible();

    const down = page.getByRole("button", {
      name: locale === "en" ? "Next section" : "Sección siguiente",
    });
    await down.click();
    await expect
      .poll(() => page.evaluate(() => window.scrollY))
      .toBeGreaterThan(0);

    const languageLink = page.locator("[data-language-switch]");
    await languageLink.click();
    await expect(page).toHaveURL(
      new RegExp(`/${locale === "en" ? "es" : "en"}/`),
    );

    const accessibility = await new AxeBuilder({ page }).analyze();
    expect(accessibility.violations).toEqual([]);
  });
}

test("public files and not-found page are available", async ({ request }) => {
  for (const path of ["/robots.txt", "/sitemap-index.xml", "/favicon.svg"]) {
    expect((await request.get(path)).ok()).toBeTruthy();
  }
  expect((await request.get("/missing-page")).status()).toBe(404);
});

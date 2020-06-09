import { newE2EPage } from '@stencil/core/testing';

describe('s-islam-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-islam-header></s-islam-header>');

    const element = await page.find('s-islam-header');
    expect(element).toHaveClass('hydrated');
  });
});

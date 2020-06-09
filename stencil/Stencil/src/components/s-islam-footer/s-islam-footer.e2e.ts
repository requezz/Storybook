import { newE2EPage } from '@stencil/core/testing';

describe('s-islam-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-islam-footer></s-islam-footer>');

    const element = await page.find('s-islam-footer');
    expect(element).toHaveClass('hydrated');
  });
});

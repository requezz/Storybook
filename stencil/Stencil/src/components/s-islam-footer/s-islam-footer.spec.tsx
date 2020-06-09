import { newSpecPage } from '@stencil/core/testing';
import { SIslamFooter } from './s-islam-footer';

describe('s-islam-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SIslamFooter],
      html: `<s-islam-footer></s-islam-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <s-islam-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-islam-footer>
    `);
  });
});

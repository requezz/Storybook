import { newSpecPage } from '@stencil/core/testing';
import { SIslamHeader } from './s-islam-header';

describe('s-islam-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SIslamHeader],
      html: `<s-islam-header></s-islam-header>`,
    });
    expect(page.root).toEqualHtml(`
      <s-islam-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-islam-header>
    `);
  });
});

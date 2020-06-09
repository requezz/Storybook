import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-new-blog",
  styleUrl: "s-islam-new-blog.css",
  shadow: false,
  scoped: true,
})
export class SIslamNewBlog implements ComponentInterface {
  @Prop() database: any;

  render() {
    const getBlog = this.database.map((item) => {
      return <s-islam-item-blog database={item} />;
    });
    return (
      <div>
          <div class="container">
            <div class="new-1">
              <h2>New Blog Posts</h2>
            </div>
            <div class="row">
              <div class="col-md-4 d-flex">{getBlog}</div>
            </div>
          </div>
      </div>
    );
  }
}

import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-item-blog",
  styleUrl: "s-islam-item-blog.css",
  shadow: false,
  scoped: true,
})
export class SIslamItemBlog implements ComponentInterface {
  @Prop() database: any;

  render() {
    return (
      <div class="col-md-10">
          <div class="url">
            <img src={this.database.url} class="image" />
          </div>
          <div class="title">
            <b>
              <a href="#">{this.database.titl}</a>
            </b>
          </div>
          <div class="text">
            <b>{this.database.text}</b>
          </div>
          <div class="read">
            <b>{this.database.read}</b>
          </div>
      </div>
    );
  }
}

import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-item-post-a",
  styleUrl: "s-islam-item-post-a.css",
  shadow: false,
  scoped: true,
})
export class SIslamItemPostA implements ComponentInterface {
  @Prop() post: any;

  render() {
    return (
      <div>
        <div class="image">
          <img src={this.post.url} class="image" />
        </div>
        <span class="blog">
          <a href="#">{this.post.subtitle}</a>
        </span>
        <div class="text">{this.post.titl}</div>
        <div class="text1">{this.post.text}</div>
        <button type="button" class="btn2">
          {this.post.button}
        </button>
      </div>
    );
  }
}

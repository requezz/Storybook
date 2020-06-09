import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-item-pop",
  styleUrl: "s-islam-item-pop.css",
  shadow: false,
  scoped: true,
})
export class SIslamItemPop implements ComponentInterface {
  @Prop() forPopular: any;

  render() {
    return (
      <div>
        <div class="cont-4">
          <div class="url">
            <img src={this.forPopular.url} class="image" />
          </div>
          <div class="text-1">
            <div class="title text-danger">
              <b>{this.forPopular.titl}</b>
            </div>
            <div class="text">
              <b>{this.forPopular.text}</b>
            </div>
            <div class="read">
              <b>{this.forPopular.read}</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

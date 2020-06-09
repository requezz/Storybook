import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-events",
  styleUrl: "s-islam-events.css",
  shadow: false,
  scoped: true,
})
export class SIslamEvents implements ComponentInterface {
  @Prop() forUpcoming: any;

  render() {
    return (
      <div class="col-md-11">
        <div class="url">
          <img src={this.forUpcoming.url} class="image" />
        </div>
        <div class="title text-warning">
          <b>{this.forUpcoming.titl}</b>
        </div>
        <div class="text">
          <b>{this.forUpcoming.text}</b>
        </div>
        <div class="read">
          <b>{this.forUpcoming.read}</b>
        </div>
      </div>
    );
  }
}

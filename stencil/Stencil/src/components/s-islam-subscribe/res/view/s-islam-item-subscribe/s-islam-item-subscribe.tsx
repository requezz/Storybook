import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-item-subscribe",
  styleUrl: "s-islam-item-subscribe.css",
  shadow: false,
  scoped: true,
})
export class SIslamItemSubscribe implements ComponentInterface {
  @Prop() forSubscribe: any;

  render() {
    return (
      <div>
        <div class="row">
        <div class="col-md-6">
          <div class="text">
            <div class="ready">
              <h1>{this.forSubscribe.titl}</h1>
            </div>
            <div class="text-1">{this.forSubscribe.text}</div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input text-right">
            <span class="enter">{this.forSubscribe.input} </span>
            <button type="button" class="btn1">
              {this.forSubscribe.button}
            </button>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

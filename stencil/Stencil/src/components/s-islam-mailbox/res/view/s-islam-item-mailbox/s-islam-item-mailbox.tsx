import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-item-mailbox",
  styleUrl: "s-islam-item-mailbox.css",
  shadow: false,
  scoped: true,
})
export class SIslamItemMailbox implements ComponentInterface {
  @Prop() forMailBox: any;

  render() {
    return (
          <div class="row">
            <div class="col-md-6">
              <div class="text">
                <div class="ready">
                  <h1>{this.forMailBox.titl}</h1>
                </div>
                <div class="text-1">{this.forMailBox.text}</div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input text-right">
                <span class="enter">{this.forMailBox.input}</span>
                <button type="button" class="btn1">
                  {this.forMailBox.button}
                </button>
              </div>
              <div class="text-3">
                <span class="bolt">
                  <i class="fa fa-bolt" aria-hidden="true" />
                  {this.forMailBox.subtext}
                </span>
              </div>
            </div>
          </div>
    );
  }
}

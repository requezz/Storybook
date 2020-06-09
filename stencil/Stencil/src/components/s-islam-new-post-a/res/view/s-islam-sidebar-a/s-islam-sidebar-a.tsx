import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-sidebar-a",
  styleUrl: "s-islam-sidebar-a.css",
  shadow: false,
  scoped: true,
})
export class SIslamSidebarA implements ComponentInterface {
  @Prop() sidebar: any;

  render() {
    return (
      <div>
        <div class="sidebar d-flex">
          <div class="url">
            <img src={this.sidebar.url} class="image-1" />
          </div>
          <div class="sidebar-2">
            <div class="text-1 text-danger">
              <b>{this.sidebar.titl}</b>
            </div>
            <div class="text-2">
              <b>{this.sidebar.text}</b>
            </div>
            <div class="text-1-3">
              <b>{this.sidebar.read}</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

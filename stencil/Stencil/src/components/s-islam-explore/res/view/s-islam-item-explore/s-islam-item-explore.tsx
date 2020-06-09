import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-item-explore",
  styleUrl: "s-islam-item-explore.css",
  shadow: false,
  scoped: true,
})
export class SIslamItemExplore implements ComponentInterface {
  @Prop() forExplore: any;

  render() {
    return (
      <div class="cont8">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="text">
                <div class="text-1">
                  <h3>{this.forExplore.titl}</h3>
                </div>
                <div class="text-2">{this.forExplore.text}</div>
                <button type="button" class="btn1">
                  {this.forExplore.button}
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="url">
                <img src={this.forExplore.url} class="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

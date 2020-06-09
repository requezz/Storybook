import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-explore",
  styleUrl: "s-islam-explore.css",
  shadow: false,
  scoped: true,
})
export class SIslamExplore implements ComponentInterface {
  @Prop() forExplore: any;

  render() {
    const getExplore = this.forExplore.map((item) => {
      return <s-islam-item-explore forExplore={item} />;
    });
    return (
      <div class="cont8">
        <div class="container">
          {getExplore}
        </div>
      </div>
    )

  }
}

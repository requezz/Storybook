import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-third",
  styleUrl: "s-islam-third.css",
  shadow: false,
  scoped: true,
})
export class SIslamThird implements ComponentInterface {
  @Prop() forThird: any;

  render() {
    const getThird = this.forThird.map((item) => {
      return <s-islam-news forThird={item} />;
    });

    return (
      <div>
        <s-islam-home />
        {getThird}
        </div>

    );
  }
}

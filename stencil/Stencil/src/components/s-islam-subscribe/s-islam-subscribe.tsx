import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-subscribe",
  styleUrl: "s-islam-subscribe.css",
  shadow: false,
  scoped: true,
})
export class SIslamSubscribe implements ComponentInterface {
  @Prop() forSubscribe: any;

  render() {
    const getSubscribe = this.forSubscribe.map((item) => {
      return <s-islam-item-subscribe forSubscribe={item} />;
    });

    return (
      <div>
        <div class="cont6">
          <div class="container justify-content-between">
            <div class="row">{getSubscribe}</div>
          </div>
        </div>
      </div>
    );
  }
}

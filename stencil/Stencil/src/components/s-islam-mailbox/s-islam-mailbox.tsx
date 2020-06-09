import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-mailbox",
  styleUrl: "s-islam-mailbox.css",
  shadow: false,
  scoped: true,
})
export class SIslamMailbox implements ComponentInterface {
  @Prop() forMailBox: any;

  render() {
    const getMailBox = this.forMailBox.map((item) => {
      return <s-islam-item-mailbox forMailBox={item} />;
    });

    return (
      <div class="cont16">
        <div class="container justify-content-between">{getMailBox}</div>
      </div>
    );
  }
}

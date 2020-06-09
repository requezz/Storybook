import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-upcoming",
  styleUrl: "s-islam-upcoming.css",
  shadow: false,
})
export class SIslamUpcoming implements ComponentInterface {
  @Prop() forUpcoming: any;

  render() {
    const getUpcoming = this.forUpcoming.map((item) => {
      return <s-islam-events forUpcoming={item} />;
    });

    return (
      <div>
        <div class="cont5">
          <div class="container">
            <div class="up">
              <h2>Upcoming Events</h2>
            </div>
            <div class="row d-flex">
              <div class="col-md-4 d-flex">{getUpcoming}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

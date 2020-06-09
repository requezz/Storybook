import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-popular",
  styleUrl: "s-islam-popular.css",
  shadow: false,
  scoped: true,
})
export class SIslamPopular implements ComponentInterface {
  @Prop() forPopular: any;

  render() {
    const getPopular = this.forPopular.map((item) => {
      return <s-islam-item-pop forPopular={item} />;
    });
    return (
      <div>
        <div class="cont4">
          <div class="container">
            <div class="popular">
              <h2>Popular Resources</h2>
            </div>
            <div class="row">
              <div class="col-md-6">{getPopular}</div>
              <div class="col-5">
                <div class="url">
                  <img
                    src="https://via.placeholder.com/500x480?text=Visit"
                    class="images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-islam-new-post-a",
  styleUrl: "s-islam-new-post-a.css",
  shadow: false,
  scoped: true,
})
export class SIslamNewPostA implements ComponentInterface {
  @Prop() items: any;
  @Prop() forPost: any;

  render() {
    const getSidebar = this.items.map((item) => {
      return <s-islam-sidebar-a sidebar={item} />;
    });
    const getPost = this.forPost.map((item1) => {
      return <s-islam-item-post-a post={item1} />;
    });

    return (
      <div>
        <div class="news">
          <div class="container">
            <div class="row">
              <div class="col-md-7">
                {getPost}
              </div>
              <div class="col-md-5">
                <div class="sidebar">
                  <div class="next">
                    <li>
                      <a href="/second">
                        <button class="btn1">Далее</button>
                      </a>
                    </li>
                  </div>
                  {getSidebar}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

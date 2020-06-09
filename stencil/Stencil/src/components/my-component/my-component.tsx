import { Component, h } from "@stencil/core";
import {
  items,
  forPost,
  database,
  forPopular,
  forUpcoming,
  forThird,
  forSubscribe,
  forExplore,
  forMailbox,
  forComment, forHeader, forFooter,
} from "../../utils/mock";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: false,
})
export class MyComponent {
  render() {

    const clicker = item => {
      console.log(item);
    }

    return (
      <div>
        <s-islam-header forHeader={forHeader}
                        onClickHeaderUrl={(item) => clicker(item)}
                        onClickHeaderArticles={(item) => clicker(item)}
                        onClickHeaderEvents={(item) => clicker(item)}
                        onClickHeaderReports={(item) => clicker(item)}
                        onClickHeaderCustomerStories={(item) => clicker(item)}
                        onClickHeaderIcon={(item) => clicker(item)}
                        onClickHeaderInput={(item) => clicker(item)}
                        onClickHeaderButton={(item) => clicker(item)}/>
        <s-islam-new-post-a items={items} forPost={forPost} />
        <s-islam-new-blog database={database} />
        <s-islam-popular forPopular={forPopular} />
        <s-islam-upcoming forUpcoming={forUpcoming} />
        <s-islam-subscribe forSubscribe={forSubscribe} />
        <s-islam-third forThird={forThird} />
        <s-islam-explore forExplore={forExplore} />
        <s-islam-mailbox forMailBox={forMailbox} />
        <s-islam-comment forComment={forComment} />
        <s-islam-footer forFooter={forFooter}/>
      </div>
    );
  }
}

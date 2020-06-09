import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-islam-comment',
  styleUrl: 's-islam-comment.css',
  shadow: false,
  scoped: true,
})
export class SIslamComment implements ComponentInterface {

  @Prop() forComment: any;

  render() {

    const getComment = this.forComment.map((item) => {
      return <s-islam-item-comment forComment={item} />;
    });
    return (
      <div>
        <div class="container">
          {getComment}
        </div>
      </div>
    );
  }

}

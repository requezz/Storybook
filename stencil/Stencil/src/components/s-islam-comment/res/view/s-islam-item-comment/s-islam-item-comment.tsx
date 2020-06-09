import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-islam-item-comment',
  styleUrl: 's-islam-item-comment.css',
  shadow: false,
  scoped: true,
})
export class SIslamItemComment implements ComponentInterface {

  @Prop() forComment: any;


  render() {
    return (
      <div class="row justify-content-center">
        <div class="col-md-7">
        <hr/>
          <div class="cont-15">
            <div class="cont-15-1">
              <div>
                <img src={this.forComment.url} class="image"/>
              </div>
              <div class="text">
                <div class="text-1">{this.forComment.name}</div>
                <div class="text-2">{this.forComment.text}</div>
              </div>
            </div>
            <div class="text-1-1">
              <div class="me">{this.forComment.subtext}</div>
              <div class="icon">
                <div class="icon-1">
                  <i class="fa fa-facebook-square" aria-hidden="true"/>
                </div>
                <div class="icon-1">
                  <i class="fa fa-twitter-square" aria-hidden="true"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

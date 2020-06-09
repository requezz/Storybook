import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-islam-news',
  styleUrl: 's-islam-news.css',
  shadow: false,
  scoped: true,

})
export class SIslamNews implements ComponentInterface {

  @Prop() forThird: any;


  render() {
    return (
      <div class="news">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="text">
                <div class="images">
                  <img src={this.forThird.url} class="image"/>
                </div>
                <div class="text-1-2">
                  <div class="text-1">
                    <h1>{this.forThird.titl}</h1>
                  </div>
                  <div class="text-2">
                    {this.forThird.name}
                    <span class="data">{this.forThird.data}</span>
                    <button class="btn1">Editor</button>
                  </div>
                  <div class="text-3">
                    {this.forThird.text}
                  </div>
                  <div class="text-4">
                    <h5>{this.forThird.keep}
                      <i class="fa fa-chevron-circle-right" aria-hidden="true"/>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
  }

}

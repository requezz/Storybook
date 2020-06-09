import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-islam-footer',
  styleUrl: 's-islam-footer.css',
  shadow: false,
  scoped: true,
})
export class SIslamFooter implements ComponentInterface {

  @Prop() forFooter: any;

  render() {
    const getFooter = this.forFooter.map((item) => {
      return(
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="the">
                <h4>
                  {item.titl}
                </h4>
              </div>
              <div class="icons d-flex">
                <div class="icon">
                  <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </div>
                <div class="icon">
                  <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </div>
                <div class="icon">
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </div>
                <div class="icon">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <div class="text">
                <b>{item.text}</b>
              </div>
              <div class="url d-flex">
                <div class="text1">
                  <div class="text-1">
                    {item.subtext1}
                  </div>
                  <div class="text-2">
                    {item.subtext2}
                  </div>
                  <div class="text-3">
                    {item.subtext3}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <div class="text">
                <b> {item.text2}</b>
              </div>
              <div class="text1">
                <div class="text-3">
                  {item.subtext4}
                </div>
                <div class="text-3">
                  {item.subtext5}
                </div>
                <div class="text-3">
                  {item.subtext6}
                </div>
                <div class="text-3">
                  {item.subtext7}
                </div>
                <div class="text-3">
                  {item.subtext8}
                </div>
                <div class="text-3">
                  {item.subtext9}
                </div>
                <div class="text-3">
                  {item.subtext10}
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <div class="text">
                <b>{item.text3}</b>
              </div>
              <div class="text1">
                <div class="text-3">
                  {item.subtext11}
                </div>
                <div class="text-3">
                  {item.subtext12}
                </div>
                <div class="text-3">
                  {item.subtext13}
                </div>
                <div class="text-3">
                  {item.subtext14}
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="text">
                <b> {item.text4}</b>
              </div>
              <div class="text2 pt-4">
                {item.subtext15}
              </div>
              <div class="text-3">
                {item.subtext16}
              </div>
              <div class="text-3">
                {item.subtext17}
              </div>
              <div class="text-3">
                {item.subtext18}
              </div>
              <div class="text pt-5">
                <b>{item.text5}</b>
              </div>
              <div class="text-3">
                {item.subtext19}
              </div>
              <div class="text-3">
                {item.subtext20}
              </div>
            </div>

            <div class="choose">
              <i class="fa fa-globe" aria-hidden="true"></i>
              <b>{item.choose}</b>
            </div>
          </div>
          <div class="Eng">
            {item.eng}
            <span class="french">
            {item.french}
            </span>
          </div>
        </div>
      )
    });
    return (
      <div class="footer">
        {getFooter}
  </div>

  );
  }

}

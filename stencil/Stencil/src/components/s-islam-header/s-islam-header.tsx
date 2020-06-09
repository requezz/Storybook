import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SIslamHead} from "./interface/common.inreface";

@Component({
  tag: 's-islam-header',
  styleUrl: 's-islam-header.css',
  shadow: false,
  scoped: true,
})
export class SIslamHeader implements ComponentInterface {

  @Prop() forHeader: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SIslamHead[] = []

  /**
   * Клик по картинке
   */
  @Event() clickHeaderUrl: EventEmitter;

  /**
   * Клик по Articles
   */
  @Event() clickHeaderArticles: EventEmitter;

  /**
   * Клик по Events
   */
  @Event() clickHeaderEvents: EventEmitter;

  /**
   * Клик по Reports
   */
  @Event() clickHeaderReports: EventEmitter;

  /**
   * Клик по Customer Stories
   */
  @Event() clickHeaderCustomerStories: EventEmitter;

  /**
   * Клик по Icon
   */
  @Event() clickHeaderIcon: EventEmitter;

  /**
   * Клик по Input
   */
  @Event() clickHeaderInput: EventEmitter;

  /**
   * Клик по Button
   */
  @Event() clickHeaderButton: EventEmitter;


  render() {
    const getHeader = this.forHeader.map((item) => {
      return (
        <div class="row">
          <div class="col-auto">
            <span class="image">
            <img src={item.url} alt="Wibbitz" onClick={() => this.clickHeaderUrl.emit('HeaderUrl')}/>
            </span>
            </div>
          <div class="col">
            <b>
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link" onClick={() => this.clickHeaderArticles.emit('HeaderArticles')}>{item.text1}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={() => this.clickHeaderEvents.emit('HeaderEvents')}>{item.text2}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={() => this.clickHeaderReports.emit('HeaderReports')}>{item.text3}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={() => this.clickHeaderCustomerStories.emit('HeaderCustomerStories')}>{item.text4}</a>
                </li>
              </ul>
            </b>
          </div>
          <span class="material-icons pt-2" onClick={() => this.clickHeaderIcon.emit('HeaderIcon')}>
        {item.icon}
      </span>
          <div class="col-auto">
            <div class="input text-right">
              <span class="enter" onClick={() => this.clickHeaderInput.emit('HeaderInput')}>{item.input}</span>
              <button type="button" onClick={() => this.clickHeaderButton.emit('HeaderButton')} class="btn btn1">{item.button}</button>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div class="head">
        <div class="container pt-3">
          {getHeader}
      </div>
  </div>



  );
  }

}

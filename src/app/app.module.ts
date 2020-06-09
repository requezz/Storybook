import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { HeaderComponent } from './res/view/header/header.component';
import { FooterComponent } from './res/view/footer/footer.component';
import { HumanizeComponent } from './second-page/res/view/humanize/humanize.component';
import { TrendsComponent } from './second-page/res/view/trends/trends.component';
import { ProvideComponent } from './second-page/res/view/provide/provide.component';
import { ShowcaseComponent } from './second-page/res/view/showcase/showcase.component';
import { AnnounceComponent } from './second-page/res/view/announce/announce.component';
import { HighlightComponent } from './second-page/res/view/highlight/highlight.component';
import { ShowingComponent } from './second-page/res/view/showing/showing.component';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    HeaderComponent,
    FooterComponent,
    HumanizeComponent,
    TrendsComponent,
    ProvideComponent,
    ShowcaseComponent,
    AnnounceComponent,
    HighlightComponent,
    ShowingComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

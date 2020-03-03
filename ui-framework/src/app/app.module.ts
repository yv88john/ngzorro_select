
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData,CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ConfigService } from './services/common/config.service';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';


import en from '@angular/common/locales/en';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IconsProviderModule,
    AppRoutingModule,
    NgZorroAntdModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    NzAvatarModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    NzModalService,
    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

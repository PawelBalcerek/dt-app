import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopNavComponent} from './core/navigation/top-nav/top-nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterializeModule} from './shared/angular-materialize/angular-materialize.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoginPageComponent} from './core/login-page/login-page.component';
import {JWTInterceptor} from './core/interceptors/JWTInterceptor';
import {RegisterPageComponent} from './core/register-page/register-page.component';
import {AppConfigService} from "./core/services/app-config.service";
import {environment} from "../environments/environment.prod";

const appInitializerFunction = (runtimeConfig: AppConfigService) => {
  return () => {
    return runtimeConfig.loadRuntimeConfig()
      .then(() => {
        const config = runtimeConfig.getRuntimeConfig();
        for (const key of Object.keys(config)) {
          environment[key] = config[key];
        }
      });
  }
};

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterializeModule,
    HttpClientModule,
    FormsModule
  ], exports: [
    FormsModule
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFunction,
      multi: true,
      deps: [AppConfigService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

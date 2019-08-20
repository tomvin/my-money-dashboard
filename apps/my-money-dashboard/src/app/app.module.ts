import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/pages/login/login.component';
import { LoginModule } from './login/login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PosMainPageComponent } from './pos/pages/pos-main-page/pos-main-page.component';
import { PosModule } from './pos/pos.module';
import { fas } from '@fortawesome/free-solid-svg-icons';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'pos',
    component: PosMainPageComponent
  },{ 
    path: 'pos/:categoryid',
    component: PosMainPageComponent
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    LoginModule,
    PosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas);
  }
}

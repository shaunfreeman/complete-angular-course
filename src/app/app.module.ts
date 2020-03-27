import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionThreeModule } from './section-three/section-three.module';
import { SectionFourModule } from './section-four/section-four.module';
import { SectionFiveModule } from './section-five/section-five.module';
import { SectionSixModule } from './section-six/section-six.module';
import { SectionSevenModule } from './section-seven/section-seven.module';
import { SectionEightModule } from './section-eight/section-eight.module';
import { SectionNineModule } from './section-nine/section-nine.module';
import { AppErrorHandler } from './common/app-error-handler';
import { SectionTenModule } from './section-ten/section-ten.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AccessForbiddenComponent } from './access-forbidden/access-forbidden.component';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { OrderService } from './services/order.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from './auth/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    AccessForbiddenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: { tokenGetter }
    }),
    NgbModule,
    AppRoutingModule,
    SectionThreeModule,
    SectionFourModule,
    SectionFiveModule,
    SectionSixModule,
    SectionSevenModule,
    SectionEightModule,
    SectionNineModule,
    SectionTenModule,
    AuthModule,
    AdminModule
  ],
  providers: [
    OrderService,
    { provide: ErrorHandler, useClass: AppErrorHandler },

    // For creating a mock back-end. You don't need these in a real app.
    fakeBackendProvider
  ],
  exports: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgPComponent } from './components/logo-arg-p/logo-arg-p.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardAndSoftComponent } from './components/hard-and-soft/hard-and-soft.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent }  from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditSkillComponent } from './components/hard-and-soft/edit-skill.component';
import { NewSkillComponent } from './components/hard-and-soft/new-skill.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';




@NgModule({
  declarations: [
  
    AppComponent,
    HeaderComponent,
    LogoArgPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardAndSoftComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    NewSkillComponent,
    EditSkillComponent,
    EditAcercaDeComponent, 
    EditeducacionComponent
  

  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  

  ],
  providers: [
    interceptorProvider,
    
   
  
  ],
  
  bootstrap: [AppComponent],
 
})
export class AppModule { }
function forRoot(arg0: {}): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

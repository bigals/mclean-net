import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelpComponent } from './help/help.component';
import { BlogComponent } from './blog/blog.component';
import { ResumeContainerComponent } from './resume/resume-container/resume-container.component';
import { ResumeModule } from './resume/resume.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    HelpComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    Angulartics2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

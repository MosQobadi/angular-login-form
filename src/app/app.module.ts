import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Importing forms module
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
	bootstrap: [
		AppComponent
	],
	declarations: [
		AppComponent,
		RegisterFormComponent,
		LoginFormComponent,
		HomeComponent,
  UsersComponent,
  ProfileComponent,
  ActiveUsersComponent,
  UserDetailsComponent
	],
	imports: [
		FormsModule,
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		RouterModule,
		AppRoutingModule
		
	]
})
export class AppModule { }

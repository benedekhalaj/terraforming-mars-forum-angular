import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPostContainerComponent} from "./components/user-post-components/user-post-container/user-post-container.component";
import {
  LeaguePostContainerComponent
} from "./components/league-posts/league-post-container/league-post-container.component";
import {UserPostDetailComponent} from "./components/user-post-components/user-post-detail/user-post-detail.component";
import {ProfilePageComponent} from "./components/user/profile-page/profile-page.component";
import {LeaguePostDetailComponent} from "./components/league-posts/league-post-detail/league-post-detail.component";
import {PostContainerComponent} from "./components/posts/post-container/post-container.component";
import {PageNotFoundComponent} from "./components/error-pages/page-not-found/page-not-found.component";
import {
  InternalServerErrorComponent
} from "./components/error-pages/internal-server-error/internal-server-error.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: 'home', component: PostContainerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user-posts', component: UserPostContainerComponent},
  {path: 'league-post/:id', component: LeaguePostDetailComponent},
  {path: 'league-posts', component: LeaguePostContainerComponent},
  {path: 'profile/:id', component: ProfilePageComponent},
  {path: 'user-posts/:id', component: UserPostDetailComponent},

  //error pages
  {path: 'page-not-found', title:"Page Not Found", component: PageNotFoundComponent},
  {path: 'internal-server-error', title: "Internal Server Error", component: InternalServerErrorComponent},

  //Wild card route for 404 request
  {path: "**", redirectTo: "page-not-found", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

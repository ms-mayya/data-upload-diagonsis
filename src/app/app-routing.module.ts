import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionResolver } from './ConnectionResolver';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AwareAuthenticationGuard } from './aware-authentication.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: { connection: ConnectionResolver },
        canActivate: [AwareAuthenticationGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        resolve: { connection: ConnectionResolver },
        canActivate: [AwareAuthenticationGuard]
    },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [ConnectionResolver]
})
export class AppRoutingModule { }

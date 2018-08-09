import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionResolver } from './ConnectionResolver';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NivoSliderComponent } from './nivo-slider/nivo-slider.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: { connection: ConnectionResolver }
    },
    {
        path: 'nivo-slider',
        component: NivoSliderComponent
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

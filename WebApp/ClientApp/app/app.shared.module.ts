import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Headers, RequestOptions, BaseRequestOptions } from '@angular/http';
import { APP_BASE_HREF, CommonModule, Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ToastrModule } from 'toastr-ng2'; // third party module to display toast
import { InputTextModule, DataTableModule, ButtonModule, DialogModule } from 'primeng/primeng'; //PRIMENG - Third party module
import { SliderModule } from 'primeng/slider';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { SumComponent } from './components/sum/sum.component';

import { SumService } from './_services/index';

class AppBaseRequestOptions extends BaseRequestOptions {
    headers: Headers = new Headers();
    constructor() {
        super();
        this.headers.append('Content-Type', 'application/json');
        this.body = '';
    }
}

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        SumComponent
    ],
    providers: [
        SumService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: RequestOptions, useClass: AppBaseRequestOptions }
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        InputTextModule, DataTableModule, ButtonModule, DialogModule, SliderModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'sum', pathMatch: 'full' },
            { path: 'sum', component: SumComponent },
            { path: '**', redirectTo: 'sum' }
        ])
    ]
})
export class AppModuleShared {
}

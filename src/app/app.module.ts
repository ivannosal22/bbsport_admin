import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './shared/template/template.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from './shared/services/theme-constant.service';
import { AppErrorHandler } from './shared/errorHandler/app-error-handler';
import { AngularEditorModule } from '@kolkov/angular-editor';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        FullLayoutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgZorroAntdModule,
        AppRoutingModule,
        TemplateModule,
        SharedModule,
        NgChartjsModule,
        AngularEditorModule, 
    ],
    exports: [],
    providers: [
        {
            provide: NZ_I18N,
            useValue: en_US,
        },
        ThemeConstantService,
        { provide: ErrorHandler, useClass: AppErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

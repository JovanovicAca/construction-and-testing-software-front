import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutes } from './home.routes';
import { RouterModule } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { TableOrganizationModule } from 'src/modules/table-organization/table-organization.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    TableOrganizationModule,
  ],
  providers: [],
  declarations: [HomePageComponent, TestComponent],
})
export class HomeModule {}

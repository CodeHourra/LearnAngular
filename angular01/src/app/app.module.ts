import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductService } from './shared/product.service';
import { FilterPipe } from './pipe/filter.pipe';


// 路由配置模块
const routeConfig: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'product/:productId',
    component:ProductDetailComponent
  }
]

@NgModule({
  // 声明模块中提供了哪些服务
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    ProductDetailComponent,
    HomeComponent,
    StarsComponent,
    FilterPipe
  ],
  // 要让应用运转,还需要哪些东西
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // 主模块里注入路由配置
    RouterModule.forRoot(routeConfig),
    // 响应式编程
    ReactiveFormsModule
  ],
  // 依赖注入: 这里只能声明组件,指令和管道,服务
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

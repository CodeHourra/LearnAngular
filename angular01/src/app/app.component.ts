// 从angular核心模块中国引入一个叫Component的装饰器
import { Component } from '@angular/core';

/**
 * @Component():装饰器 定义了一个组件的元数据
 * 装饰器里的属性成为元数据
 * 下面这个是组件元数据装饰器
*/
@Component({
  // 选择器
  selector: 'app-root',
  // 模版
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * 控制器:被一个@Component装饰器装饰的typescript类,包含与模版相关的所有属性
 * 与页面相关的大部分逻辑都是编写在这个控制器中
 */
export class AppComponent {
  title = '哈哈,欢迎来到angular的世界,啦啦啦啦啦啦';

}

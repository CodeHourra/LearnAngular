import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  // input装饰器
  @Input()
  // 接收产品星级评价传来的数值
  public rating = 0;

  // 控制星星样式的数组
  public stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 0; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
    // this.stars = [false, true, true, true, true];
  }

}

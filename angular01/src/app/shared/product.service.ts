import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是我的第一个商品,我在学习angular时创建的', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 1.5, '这是我的第二个商品,我在学习angular时创建的', ['电子产品', '硬件设备']),
    new Product(3, '第三个商品', 3.99, 3.5, '这是我的第三个商品,我在学习angular时创建的', ['硬件设备']),
    new Product(4, '第四个商品', 4.99, 2.5, '这是我的第四个商品,我在学习angular时创建的', ['电子产品', '硬件设备']),
    new Product(5, '第五个商品', 5.99, 4.5, '这是我的第五个商品,我在学习angular时创建的', ['电子产品']),
    new Product(6, '第六个商品', 6.99, 4, '这是我的第六个商品,我在学习angular时创建的', ['图书']),
  ];

  comments: Comment[] = [
    new Comment(1,1,"2018-07-22 10:43:57","张三",3,"好评"),
    new Comment(2,1,"2018-07-22 10:46:03","李四",4,"好评"),
    new Comment(3,2,"2018-07-20 09:43:57","王五",2.5,"差评"),
    new Comment(4,3,"2018-07-10 10:30:57","赵六",4,"还行"),
    new Comment(5,4,"2018-07-16 08:20:57","Tom",2,"还可以"),
  ];

  constructor() { }

  // 获取所有商品
  getProducts(): Product[] {
    this.products.push(new Product(7, '第七个商品', 6.99, 4, '这是我的第六个商品,我在学习angular时创建的', ['图书']));

    return this.products;
  }

  // 根据商品id查询商品
  getProduct(id: number): Product{
    return this.products.find((product) => product.id == id);
  }

  // 根据商品id查看评论
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}

// 定义一个商品对象
export class Product {
  // 构造函数
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) { }
}

// 定义一个评论对象
export class Comment {
  // 构造函数
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) { }
}
/**
 * 视口
    布局视口： 980px
    视觉视口： 手机显示区域
    理想视口： 设备有多宽 布局视口就有多宽

 * 物理像素 & 物理像素比
    物理像素： 750 * 1334   手机一行有 750 个像素点
    PC端 1px = 1个物理像素比  移动端不一定
    Iphone8  1px开发像素  =  2个物理像素  375px  =  750个像素比    1：2


 * 二倍图
    1px的开发像素 想 容纳更多的 物理像素更清晰
    准备一张 100 * 100 的图片， 缩小成 50 * 50


 * 流式布局  百分比布局
    max-width  640px
    min-width  320px


 * flex布局
    父元素：
      flex-direction    [主轴方向]
      justify-content  [主轴排列]

      flex-wrap:  wrap [是否换行]

      align-content [多行]
      align-items [单行]    侧轴排列

      flex-flow  [复合属性]  主轴方向 + 是否换行

   子元素
      align-self
      order

 * rem布局
      媒体查询
          @media screen and (max-width: 539px) {
            body {
                background-color: blue;
            }
         }
      less
      rem适配方案
        1. rem + 媒体查询 + less [640  750  720 ]
 * 响应式布局
*/
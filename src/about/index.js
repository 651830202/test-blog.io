import React from 'react'
import './index.less'
import { Divider, Rate, Icon } from 'antd'

class page2 extends React.Component{
render(){
return(
  <div style={{ backgroundColor:'#fff' }}  className="content-inner-wrapper about">
  <span className="desc">前端打杂人员，略微代码洁癖</span>
  <Divider orientation="left">博客简述</Divider>
  <p>  本博客使用的技术为 react v16.8 + antd + koa2 + mysql</p>
  <Divider orientation="left">关于我</Divider>
  <ul className="about-list">
    <li>姓名：江胖胖
    </li>
    <li>学历专业：东南大学 电气工程</li>
    <li>
      联系方式：
      <Icon type="qq" /> 651830202
      <Divider type="vertical" />
      <i className="iconfont icon-email" />
    </li>
    <li>坐标：南京市</li>
    <li>
      技能
      <ul>
        <li>
           开发符合要求的小程序，对微信开发工具比较熟练，熟悉wx各个api
          <Rate defaultValue={4} disabled />
        </li>
        <li>
          HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
          <Rate defaultValue={3} disabled />
        </li>
        <li>
          react vue 框架：熟练掌握使用！
          <Rate defaultValue={3} disabled />
        </li>
        <li>
          es6：日常开发必备，以及掌握基本面向对象编程实现！
          <Rate defaultValue={3} disabled />
        </li>
        <li>
          webpack: 入门级别，可以对脚手架进行针对性的配置！
          <Rate defaultValue={2} disabled />
        </li>
        <li>
          node mysql：针对需求可以做到简单的数据库设计、接口的开发与设计！
          <Rate defaultValue={2} disabled />
        </li>
      </ul>
    </li>
    <li>
      其他
      <ul>
        <li>常用开发工具： vscode、git</li>
        <li>熟悉的 UI 工具： antd、knex、wepy</li>
        <li>良好的代码习惯： 略微代码洁癖、注释规范 jsdoc</li>
      </ul>
    </li>
    <li>
      个人
      <ul>
        <li>偶尔玩玩游戏、看看书</li>
        <li>慢热型、平常比较好说话。联系方式在上面，欢迎交流！</li>
      </ul>
    </li>
  </ul>
</div>
);
}
}

export default page2;

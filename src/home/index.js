import React from 'react';
import {Card,Icon,Divider} from 'antd'

class page1 extends React.Component{
    state = {
        r:'',
        isOk:0,
        combination:0,
        account:0
      }
   
  render(){
 
    return(
      <div>
         <Card 
          style={{
              textAlign:'center',width:'60%',margin:'10px auto'
          }}> 
          <img src="http://img.schoolgater.com/avatar/f4cef56e-d858-4732-aa69-2286012692a4.jpg"  className="sider-avatar" alt="" />
        </Card>
        <Card  style={{textAlign:'center',width:'60%',margin:'10px auto' }}>
        <h2 className="name">嘟嘟嘟{this.state.r}</h2>
        <div className="title" onClick={this.fetchList}>全栈打杂人员</div>
        <li>
        <Icon type="github" />
        <a target="_blank" rel="noreferrer noopener" href="https://github.com/gershonv">
            github
        </a>
        </li>
        </Card> 
        <Divider>博客简述</Divider>
      <Card 
          style={{
              textAlign:'center',width:'60%',margin:'10px auto'
          }}>
          记录平时学习心得，再填点以前留下的小说坑。
      </Card>
  </div>
    );
    }
    }

export default page1;

import React from 'react';
import {Card} from 'antd';
import {Router} from 'react-router'
import {getLink} from '../link/link'
import { Layout, Breadcrumb } from 'antd';
import { fPost, fGet } from '../routes/cFetch'
const {  Content } = Layout;

class page6 extends React.Component{
  
  state = {
    mytitle: '',
    mytext:'',
    article:'',
    id:'',
    introduction:''
  }
 
async getData(){ 
  await fGet(`http://localhost:3000/api/v1/Fiction/${this.props.location.state.id}`,{
  }).then(
    res => {
    this.setState({mytitle:res.data.title})
    this.setState({mytext:res.data.content})
    this.setState({introduction:res.data.introduction})
        }
     )
   }

componentWillMount(){
  this.getData();
  }

  render(){
    const mytitle =this.state.mytitle
    const mytext =this.state.mytext
    const introduction =this.state.introduction
    return(
      <div>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>{mytitle}</Breadcrumb.Item>
                <Card 
          style={{
              textAlign:'center',width:'60%',margin:'10px auto'
          }}>
         {introduction}  {mytitle}
      </Card>
      <Card 
          style={{
              textAlign:'center',margin:'10px auto'
          }}>
          {mytext}<br/>
      </Card>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>

            </div>
        </Content>
  </div>
    );
    }
    }

export default page6;



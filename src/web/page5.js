import React from 'react';
import {Card,Icon} from 'antd';
import {Router} from 'react-router'
import {getLink} from '../link/link'
import { Layout, Breadcrumb } from 'antd';
import { fPost, fGet } from '../routes/cFetch'
const {  Content } = Layout;
export const path = '/center-detail/:id'
export const DetailLink = getLink(path)
class page5 extends React.Component{
  
  state = {
    mytitle: '',
    mytext:'',
    article:'',
    id:''
  }
 
async getData(){ 
  await fGet(`http://localhost:3000/api/v1/article/${this.props.location.state.id}`,{
  }).then(
    res => {
    this.setState({mytitle:res.data.title})
    this.setState({mytext:res.data.content})
        }
     )
   }

componentWillMount(){
  this.getData();
  }

  render(){
    let data = this.props.location.state;
    console.log('3333',data)
    const mytitle =this.state.mytitle
    const mytext =this.state.mytext
    return(
      <div>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>文章</Breadcrumb.Item>
      <Card 
          style={{
              textAlign:'center',width:'60%',margin:'10px auto'
          }}>
         {mytitle}
      </Card>
      <rich-text nodes={mytext}></rich-text>
      <Card 
          style={{
              textAlign:'center',margin:'10px auto'
          }}>
          {mytext}<br/>
      </Card>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 780}}>
            <Icon style={{fontSize:200,display: 'flex',alignItems: 'center', justifyContent: 'center'}} type="rocket" />
            </div>
        </Content>
  </div>
      );
     }
    }

export default page5;



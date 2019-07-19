import React from 'react';
import {Card,Divider,Table} from 'antd'
import { Link } from 'react-router-dom'
import {getLink} from './link'

class page3 extends React.Component{
    state = {
        mytitle: '',
        mytext:'',
        article:''
      }
    
    getData(){ 
    fetch(`http://localhost:3000/api/v1/Fiction`,{
    method: 'GET'
    }).then(res => res.text()).then(
    data => {
    data = JSON.parse(data)
    console.log(data)
    this.setState({article:data.data})
    this.setState({mytitle:data.data[0].title})
    this.setState({mytext:data.data[0].content})
        }
      )
    }
        
    componentWillMount(){
    this.getData();
    }
      
render(){
    const columns = [
      {
        title: '文章名称',
        dataIndex: '',
        key: 'title',
        render: data => data ? data.title : '--',
        width: '20%'
      },
      {
        title: '作者',
        dataIndex: '',
        render: data => data ? data.author : '--',
        key: 'author',
        width: '20%'
      },
      {
        title: '简介',
        dataIndex: '',
        render: data => data ? data.introduction : '--',
        key: 'introduction',
        width: '20%'
      },
      {
        title: '操作',
        dataIndex: '',
        render: (d) => {
          const DetailLink = getLink(`/id:${d.id}`,{id:d.id})
          return (
            <div>
              <DetailLink  style={{marginLeft: 10}} id = {d.id}>查看</DetailLink>
            </div>
        )
        },
        key: 'x',
        width: '20%'
      }]
    const mytitle =this.state.mytitle
    const mytext =this.state.mytext
    const article =this.state.article
return(
  <div>
      <Divider>小说</Divider>
  <Table columns={columns} dataSource={article} style={{ margin: '20px 0',backgroundColor:'#fff' }} pagination={false} />
</div>
);
}
}

export default page3;
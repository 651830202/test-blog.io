import React from 'react';
import { Link , Route} from 'react-router-dom';
// import { Rate } from 'antd'
import { Menu, Icon, } from 'antd';
import './home.css'
import { Layout, Breadcrumb ,Carousel} from 'antd';
// import  { Component } from 'react';
import 'antd/dist/antd.css';
import Page1 from './home/index';
import Page2 from './about/index';
import Page3 from './article/index';
import Page4 from './message/index';
import Page5 from './fiction/index';
import Page6 from './web/page5';
import Page7 from './web/page6';

const { Header, Footer, Sider, Content } = Layout;

// const { SubMenu }  = Menu;
class home extends React.Component{
  state = {
    collapsed: false,
    mode: 'inline',
};

toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
}

render(){
  const RightContent = () => {
    return (
        <div>
        <Content>       
            <Route path="/home/index" component={Page1} />
            <Route path="/about/index" component={Page2} />
            <Route path="/article/index" component={Page3} />
            <Route path="/message/index" component={Page4} />    
            <Route path="/fiction/index" component={Page5} />  
            <Route path="/web/page5" component={Page6} />  
            <Route path="/web/page6" component={Page7} />  
        </Content>
        </div>
    );
  } 
return(
<Layout>
    <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
    >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Icon type="user" /><span>首页</span>
                <Link to="/home/index/" style={{color:'black'}}/>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="video-camera" /><span>文章</span>
                <Link to="/article/index/" style={{color:'black'}}/>
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="upload" /><span>关于</span>
                <Link to="/about/index/" style={{color:'black'}}/>
            </Menu.Item>
            <Menu.Item key="4">
                <Icon type="upload" /><span>留言</span>
                <Link to="/message/index/" style={{color:'black'}}/>
            </Menu.Item>
            <Menu.Item key="5">
                <Icon type="upload" /><span>很无聊时候写的小说</span>
                <Link to="/fiction/index/" style={{color:'black'}}/>
            </Menu.Item>
        </Menu>
    </Sider>
    <Layout>
        <Header style={{ background: '#000', padding: 0 }}>
            <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                    style={{cursor: 'pointer'}}
                />
            </span>
            <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>嘟嘟嘟嘟</span>
            <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
                <img src="http://img.schoolgater.com/avatar/f4cef56e-d858-4732-aa69-2286012692a4.jpg" className="App-logo" alt="logo" />
            </span>
        </Header>
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
                <RightContent></RightContent>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
            <img src="http://img.schoolgater.com/avatar/f4cef56e-d858-4732-aa69-2286012692a4.jpg" style={{width:'400px',height:'400px',marginTop:'200px',marginLeft:'300px' }} alt="logo" />
            </div>
        </Content>
        <Carousel>
            <div><h3 style={{backgroundColor:'#FFDAB9',textAlign:'center',lineHeight:'40px'}}><Icon type="android" /></h3></div>
            <div><h3 style={{backgroundColor:'#FFDAB9',textAlign:'center',lineHeight:'40px'}}><Icon type="android-o" /></h3></div>
            <div><h3 style={{backgroundColor:'#FFDAB9',textAlign:'center',lineHeight:'40px'}}><Icon type="apple" /></h3></div>
            <div><h3 style={{backgroundColor:'#FFDAB9',textAlign:'center',lineHeight:'40px'}}><Icon type="apple-o" /></h3></div>
        </Carousel>
        <Footer style={{ textAlign: 'center' }}>
           Blog ©2019 Created by J
        </Footer>
    </Layout>
</Layout>

);
}
}

export default home;


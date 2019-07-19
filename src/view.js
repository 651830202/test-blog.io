import React from 'react';

class View extends React.Component {
constructor(props) { //构造函数
super(props);
this.state = {
}
}
render(){
return(<div>{this.props.text}</div>)
}
}
export default View;

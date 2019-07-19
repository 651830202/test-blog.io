import React from 'react';
import { Tooltip, Comment, Avatar } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';

const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span> 回复 </span>]}
    author={<a href=" " >嘟嘟嘟</a>}
    avatar={
      <Avatar
        src="http://img.schoolgater.com/avatar/f4cef56e-d858-4732-aa69-2286012692a4.jpg"
        alt="Han So"
      />
    }
    content={
      <p>
       欢迎留言
      </p>
    }
    datetime= {
      <Tooltip
        title={moment()
          .subtract(1, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(1, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    }
  >
    {children}
  </Comment>
);
class page4 extends React.Component{
  
render(){
return(

  <div style={{backgroundColor:'#fff'}}>
<ExampleComment>
  <ExampleComment>
    <ExampleComment />
    <ExampleComment />
  </ExampleComment>
</ExampleComment>
</div>
);
}
}

export default page4;
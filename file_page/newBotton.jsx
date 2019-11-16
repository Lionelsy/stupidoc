import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Markdown</Menu.Item>
    <Menu.Item key="2">Latex</Menu.Item>
  </Menu>
);

class NewBotton extends Component{
    render(){
        return(
            <div>
                <Dropdown overlay={menu}>
                 <Button type="primary" style={{width:"150px"}}>
                    Create a file <Icon type="down" />
                 </Button>
                </Dropdown>
            </div>
        )
    }
}

export default NewBotton
import { Upload, message, Button, Icon } from 'antd';
import { Extension } from '_typescript@2.9.2@typescript';
import React, { Component } from 'react';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class UpLoad extends Component{
    render(){
        return(
            <div>
                <Upload {...props}>
                    <Button style={{width:"150px"}}>
                     Click to Upload
                     <Icon type="upload" />
                    </Button>
                </Upload>
            </div>
        );
    }
}

export default UpLoad
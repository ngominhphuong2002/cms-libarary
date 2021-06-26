/* eslint-disable no-unused-vars */
import React,{useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Input ,Upload,message} from 'antd';
import {  UploadOutlined } from '@ant-design/icons';
import SkeletonInput from 'antd/lib/skeleton/Input';




 const Addhome = ({ show, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    const[state,setState] = useState();
    const initialValues={
        groupname:"",
      code:"",
      date:""

    };
    const [groupname,setGroupName] = useState("")
    
      const date = new Date().toLocaleString()
      
      
    return (
        <Modal
      visible={show}
      title="Thêm Tài liệu !"
      okText="Thêm"
      cancelText="Huỷ"
      onCancel={onCancel}    
      
      onOk={onCreate
      }
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues} >
        <Form.Item
          name="DocName"
          label="Tên Quy Trình"
          value = {groupname}
          onChange = {(e)=> setGroupName(e.target.value)}
           rules={[
            {
              
              required: true,
              message: 'Please input a name !',
            },
          ]}
        >
          <Input  />
        </Form.Item>
        <Form.Item
         name="Code" 
         label="Mã Quy Trình"
         rules={[
            {
              required: true,
              message: 'Please input a code',
            },
          ]}>

            
          <Input />
        </Form.Item>
        <Form.Item 
        name="upload"
        label="Thêm Tài Liệu" >
          <>
          <Upload >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
         </Upload>
         </>
        </Form.Item>
        
      </Form>
    </Modal>
  );
};

Addhome.propTypes  = {
    show:PropTypes.bool.isRequired,
    // handleOnclose:PropTypes.func.isRequired,
    onCancel:PropTypes.func.isRequired,
    onCreate:PropTypes.func.isRequired,
    

};



export default Addhome;
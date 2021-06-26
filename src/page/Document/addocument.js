/* eslint-disable no-unused-vars */
import React,{useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Input ,Upload,message} from 'antd';
import {  UploadOutlined } from '@ant-design/icons';
import SkeletonInput from 'antd/lib/skeleton/Input';




 const Addocument = ({ show, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    const initialValues={
      documentName:"",
      code:"",
      date:""

    };
    const[state,setState] = useState( initialValues);
    
    
    
    
      const date = new Date().toLocaleString()
      
      
    return (
        <Modal
      visible={show}
      title="Thêm Tài liệu !"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}    
      
      onOk={()=>{
        form
        .validateFields()
        .then((values) => {
          form.resetFields();
          onCreate(values);
        })
        .catch((info) => {
          console.log('Validate Failed:', info);
        });
      }}
      
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues} >
        <Form.Item
          name="DocName"
          label="Tên Tài Liệu"
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
         label="Mã Tài Liệu"
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
        label="Tải Lên" >
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

Addocument.propTypes  = {
    show:PropTypes.bool.isRequired,
    // handleOnclose:PropTypes.func.isRequired,
    onCancel:PropTypes.func.isRequired,
    onCreate:PropTypes.func.isRequired,
    

};



export default Addocument;
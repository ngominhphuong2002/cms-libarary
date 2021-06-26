/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Input, Upload, message, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios'
const initialValues = {
  groupname: "",
  code: "",
  date: "",
  time: ""
};


const Addgroup = ({ show, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const [state, setState] = useState(initialValues);

  const onChange = e => {
    const { value, name } = e.target;
    const date = new Date().toLocaleString().split(',')[0];
    const time = 1;
    setState({
      ...state,
      [name]: value,
      date,
      time
    });
  };

  const onSubmit = e => {
    e.preventDefault(state)
    setState(initialValues)

    // axios.post()
    console.log(state)
  };
  const submits = () => {
    form.submit()

  };
  return (
    <Modal
      visible={show}
      title="Create a Group"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={onSubmit}
    >
      <Form
        form={form}
        layout="vertical"
        name="userForm"
      >
        <Form.Item
          name="groupname"
          label="Tên Quy Trình"

          rules={[
            {
              required: true,
              message: 'Please input a name !',
            },
          ]}
        >
          <Input name="groupname" value={state.groupname}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          name="code"
          label="Mã Quy Trình"
          rules={[
            {
              required: true,
              message: 'Please input a code',
            },
          ]}>
          <Input name="code" value={state.code}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          name="upload"
          label="Thêm Tài Liệu" >
          <>
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </>
        </Form.Item>
      </Form>
    </Modal>
  );
};

Addgroup.propTypes = {
  show: PropTypes.bool.isRequired,
  handleOnclose: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,


};

export default Addgroup;
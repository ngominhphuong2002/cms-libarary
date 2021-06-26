/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Table, Popconfirm, Badge, Dropdown } from 'antd';
import { FileAddOutlined, DeleteOutlined, EyeOutlined, EditOutlined, CloudDownloadOutlined, ScheduleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getDoc } from '../../redux/action/index';
import Add from './addocument';


const Home = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const data = useSelector((state) => state.data.data);
  useEffect(() => {
    dispatch(getDoc());

  }, []);
  const onCancel = () => {
    setShowModal(false)
  };
  const onCreate = () => {
    setShowModal(false)
  };



  
  const columns = [

    {
      title: 'Tên Tài Liệu',
      dataIndex: 'docname',
      key: 'docname',
      render: (docname) =>
       <>  {docname} </>
    },
    {
      title: 'Mã Tài Liệu',
      dataIndex: 'code',
      key: 'code',
      render: (code) =>
       <>{code}</>
    },
    {
      title: 'Lần Cập Nhật',
      dataIndex: 'time',
      key:'time',
      width: '15%',
      render: (time) => (
        <>
          <Badge status="processing" color={"green"}/>
          {time}

        </>
      ),

    },
    {
      title: 'Ngày Cập Nhật',
      dataIndex: 'date',
      key: 'date',
      width: '20%',
      render: (date) =>
      (
        <>

          <Button icon={<ScheduleOutlined />}

            type={"link"}
            onClick={e => e.preventDefault()} >
            {date}
          </Button>


        </>
      ),
    },
    {
      title: 'Chức Năng',
      width: '18%',
      dataIndex: 'Edit',
      key: 'Edit',
      render: () => (
        <>
          <Button icon={<EyeOutlined />} type={"link"} />
          <Button icon={<EditOutlined />} type={"link"} />
          <Button icon={<CloudDownloadOutlined />} type={"link"} />
        </>
      ),
    },
    {
      title: 'Xoá',
      width: '10%',
      dataIndex: 'Delete',
      key: 'Delete',
      render: () =>
      (
        <Popconfirm title="Sure to delete?"  >
          <Button icon={<DeleteOutlined />} type={"link"} />
        </Popconfirm>
      )
    },
  ];
  

  return (
    <>
      <Button
        type="primary"
        style={{ marginBottom: 16, }}
        icon={<FileAddOutlined />}
        onClick={() => {
          setShowModal(true);
        }}
      >
        Thêm Tài Liệu
      </Button>
        
      <Table bordered  dataSource={data} columns={columns} pagination={{ pageSize: 5 }} scroll={{ y: 320 }} />
      <Add
        show={showModal}
        onCreate={onCreate}
        onCancel={onCancel}
      />

    </>
  );
}
export default Home;
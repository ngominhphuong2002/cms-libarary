/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Table, Popconfirm, Badge, Dropdown } from 'antd';
import { FileAddOutlined, DeleteOutlined, EyeOutlined, EditOutlined, CloudDownloadOutlined, ScheduleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getGroup } from '../../redux/action/index';
import Addhome from './add';


const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data1.data);
  const [showModal,setShowModal]=useState(false)
  const onCancel = ()=>{
    setShowModal(false)
  }
  
  useEffect(() => {
    dispatch(getGroup());

  }, []);
  const columns = [

    {
      title: 'Tên Quy Trình',
      dataIndex: 'groupname',
      key: 'groupname',
      render: (groupname) =>
       <>  {groupname} </>
    },
    {
      title: 'Mã Quy Trình',
      dataIndex: 'code',
      key: 'code',
      render: (code) =>
       <>{code}</>
    },
    {
      title: 'Lần Ban Hành',
      dataIndex: 'time',
      key: 'time',
      width: '15%',
      render: (time) => (
        <>
          <Badge status="processing" color={"green"}  />
          {time}

        </>
      ),

    },
    {
      title: 'Ngày Ban Hành',
      dataIndex: 'date',
      key: 'date',
      width: '20%',
      render: (date) =>
      (
        <>

          <Dropdown.Button icon={<ScheduleOutlined />}

            type={"link"}
            onClick={e => e.preventDefault()} >
            {date}
          </Dropdown.Button>


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
        Thêm Quy Trình
      </Button>
         <Table bordered dataSource={data} columns={columns} pagination={{ pageSize: 5 }} scroll={{ y: 340 }} />
         <Addhome  show={showModal}
           onCancel={onCancel}
         
                    
         
         />
   </>
  );
}
export default Home;
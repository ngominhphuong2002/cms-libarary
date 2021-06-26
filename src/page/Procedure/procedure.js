/* eslint-disable no-undef */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import React, { useState, Fragment, useEffect } from 'react';
import './procedure.css';
import { Button, Table, Popconfirm, Badge, Dropdown } from 'antd';
import { DeleteOutlined, FolderViewOutlined, EditOutlined, CloudDownloadOutlined, ScheduleOutlined, FolderAddOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getGroup } from '../../redux/action/index';
import Addgroup from './addgroup';
import Clock from 'react-live-clock';
import Form from 'antd/lib/form/Form';

const Procedure = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data1.data);
  useEffect(() => {
    dispatch(getGroup());

  }, []);
  const [showModal, setShowModal] = useState(false);
  const columns = [
    {
      title: 'Tên Quy Trình',
      dataIndex: 'groupname',
      key: 'groupname',

    },
    {
      title: 'Mã Quy Trình',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Lần Ban Hành',
      dataIndex: 'time',
      key: 'time',
      width: '15%',
      render: (time) =>
      (
        <> <Badge color={"green"} /> {time} </>
      ),
    },
    {
      title: 'Ngày Ban Hành',
      dataIndex: 'date',
      key: 'date',
      width: '20%',
      render: (date) =>
      (
        <Dropdown.Button icon={<ScheduleOutlined />}

          type={"link"}
          onClick={e => e.preventDefault()} >
          {date}
        </Dropdown.Button>
      ),
    },
    {
      title: 'Chức Năng',
      width: '18%',
      dataIndex: 'edit',
      key: 'edit',
      render: () => (
        <>
          <Button icon={<FolderViewOutlined />} type={"link"} />

          <Button icon={<EditOutlined />} type={"link"}  />

          <Button icon={<CloudDownloadOutlined />} type={"link"} />
        </>

      ),
    },
    {
      title: 'Xoá',
      width: '10%',
      dataIndex: 'delete',
      key: 'delete',
      render: (_, record) =>
      (
        <Popconfirm title="Sure to delete?"  >
          <Button icon={<DeleteOutlined />} type={"link"} />
        </Popconfirm>
      )
    },
  ];
  return (
    <Fragment>

      <Button
        type="primary"
        style={{ marginBottom: 16, }}
        icon={<FolderAddOutlined />}
        onClick={() => {
          setShowModal(true);
        }}
      >
        Thêm Quy Trình
      </Button>
      <Table bordered dataSource={data} columns={columns} />
      <Addgroup show={showModal}
        onCreate={() => {
          setShowModal(false)
        }
        }
        onCancel={() => {
          setShowModal(false);
        }}
      />
    </Fragment>
  );
};
export default Procedure;


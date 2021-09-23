import { useState } from "react";
import { Button, Space, Table } from 'antd';
import {
    PlusCircleOutlined,
    EditOutlined,
    DeleteOutlined
} from "@ant-design/icons";

import { FetchMemoContainer } from "./FetchContainer";

import CustomModal from './../components/CustomModal';
import TaskOperation from './../components/TaskOperation';

import { fetchData } from './../actions/fetchData';

import { data } from './../constants/appConstants';
import { IColumns, INewTask } from "./../constants/interface";

const Tasks = () => {

    const [isCreate, setIsCreate] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    const [dataSource, setListData] = useState(data);
    const [currentTaskData, setCurrentTaskData] = useState({});

    const columns: Array<IColumns> = [
        {
            title: 'Task Id',
            dataIndex: 'taskId',
            key: 'taskId',
        },
        {
            title: 'Task Name',
            dataIndex: 'taskName',
            key: 'taskName',
        },
        {
            title: 'Project',
            dataIndex: 'project',
            key: 'project',
        },
        {
            title: 'Start Date',
            dataIndex: 'taskStartDate',
            key: 'taskStartDate',
        },
        {
            title: 'End Date',
            dataIndex: 'taskEndDate',
            key: 'taskEndDate',
        },
        {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: INewTask) => (
                <Space size="middle">
                    <EditOutlined onClick={() => getCurrentData('edit', record)} />
                    <DeleteOutlined onClick={() => getCurrentData('delete', record)} />
                </Space>
            ),
        },
    ];

    const createTask = (newTask: INewTask) => {
        const listData = [...dataSource];
        listData.push(newTask);
        setListData(listData);
        setIsCreate(false);
    }

    const getCurrentData = (type: string, newTask: INewTask) => {
        setCurrentTaskData({ ...newTask });
        if (type === 'edit') {
            setIsEdit(true);
        }
        if (type === 'delete') {
            setIsDelete(true);
        }
    }

    const editTask = (newTask: INewTask) => {
        const listData = [...dataSource];
        listData.length > 0 && newTask.taskId && listData.splice(newTask.taskId - 1, 1, newTask);
        setListData(listData);
        setIsEdit(false);
    }

    const deleteTask = (newTask: INewTask) => {
        const listData = [...dataSource];
        listData.length > 0 && newTask.taskId && listData.splice(newTask.taskId - 1, 1);
        setListData(listData);
        setIsDelete(false);
    }

    const handleCancel = () => {
        setIsCreate(false);
        setIsCreate(false);
        setIsCreate(false);
    }

    return (
        <div className="site-layout-background content-height">
            <Space><Button type="primary" size={"large"} className="red-btn" onClick={() => setIsCreate(true)}><PlusCircleOutlined />Create Task</Button></Space>
            {dataSource && dataSource.length > 0 &&
                <FetchMemoContainer action={fetchData(dataSource)}>
                    {(dataSource: Array<INewTask>) => {
                        return <Table className="task-table" columns={columns} dataSource={dataSource} />;
                    }}
                </FetchMemoContainer>
            }
            {isCreate && <CustomModal open={isCreate} handleCancel={handleCancel} title={'Create Task'}  >
                <TaskOperation createTask={createTask} setOpen={setIsCreate} listData={dataSource} />
            </CustomModal>}
            {isEdit && <CustomModal open={isEdit} handleCancel={handleCancel} title={'Edit Task'}  >
                <TaskOperation editTask={editTask} setOpen={setIsEdit} listData={dataSource} isEdit={isEdit} currentTaskData={currentTaskData} />
            </CustomModal>}
            {isDelete && <CustomModal open={isDelete} handleCancel={handleCancel} title={'Delete Task'} >
                <TaskOperation deleteTask={deleteTask} setOpen={setIsDelete} listData={dataSource} isDelete={isDelete} currentTaskData={currentTaskData} />
            </CustomModal>}
        </div>
    );
};

export default Tasks;
import React, { useState } from "react";
import { Form, Input, Button, Select, Space, notification, DatePicker } from 'antd';
import { projectList } from './../constants/appConstants';

const { Option } = Select;
const { TextArea } = Input;

interface INewTask {
    taskId?: number,
    taskName?: string,
    project?: string,
    comments?: string,
    key?: string
}

interface IProps {
    createTask?: any,
    editTask?: any,
    deleteTask?: any,
    setOpen: any,
    listData: Array<INewTask>,
    currentTaskData?: INewTask,
    isEdit?: boolean,
    isDelete?: boolean
}

type LayoutType = Parameters<typeof Form>[0]['layout'];

const TaskOperation = ({ createTask, editTask, deleteTask, setOpen, listData, currentTaskData, isEdit = false, isDelete = false }: IProps) => {

    const [taskName, setTaskName] = useState(isEdit ? currentTaskData?.taskName : "");
    const [project, setProjectName] = useState(isEdit ? currentTaskData?.project : "");
    const [comments, setComments] = useState(isEdit ? currentTaskData?.comments : "");

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = React.useState<LayoutType>('vertical');

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    const openNotificationWithIcon = (type: string) => {
        notification[type]({
            message: 'Task Error',
            description:
                'Please fill Task name and Project name',
        });
    };

    const getValues = () => {
        if (isDelete) {
            deleteTask(currentTaskData);
        } else {
            if (taskName && project) {
                if (isEdit) {
                    const task = Object.assign({ ...currentTaskData, taskName, project, comments });
                    editTask(task);
                } else {
                    const task = {
                        taskId: listData.length + 1,
                        taskName,
                        project,
                        comments,
                        key: (listData.length + 1).toString()
                    };
                    createTask(task);
                }
            } else {
                openNotificationWithIcon('error')
            }
        }
    }

    return (
        <Form
            layout={formLayout}
            form={form}
            initialValues={{ layout: 'vertical' }}
            onValuesChange={onFormLayoutChange}
        >
            {!isDelete ? <>
                <Form.Item label="* Task name">
                    <Input placeholder="Enter Task Name" onChange={(e) => setTaskName(e.target.value)} value={taskName} />
                </Form.Item>
                <Form.Item label="* Project Name">
                    <Select
                        placeholder="Select a project"
                        optionFilterProp="children"
                        onChange={(value) => setProjectName(value)}
                        defaultValue={project}
                    >
                        {projectList.map((item, index) => (<Option key={`projec-${index}`} value={item.projectName}>{item.projectName}</Option>))}
                    </Select>
                </Form.Item>
                <Form.Item label="Comments">
                    <TextArea placeholder="Enter your comments here" rows={4} onChange={(e) => setComments(e.target.value)} value={comments} />
                </Form.Item> </> :
                <>Are you sure, want to delete this task?</>
            }
            <div className="ant-modal-footer">
                <Space>
                    <Button className="cancel-btn" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button type="primary" onClick={() => getValues()}>{isEdit ? "Update" : isDelete ? "Confirm" : "Create"}</Button>
                </Space>
            </div>
        </Form >
    );
};
export default TaskOperation;

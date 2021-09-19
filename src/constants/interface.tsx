export interface IProject {
    projectId: number,
    projectName: string
}

export interface INewTask {
    taskId?: number,
    taskName?: string,
    project?: string,
    comments?: string,
    taskStartDate?: string,
    taskEndDate?: string,
    key?: string
}

export interface IColumns {
    title: string,
    dataIndex?: string,
    key: string,
    render?: any
}

export interface ITaskOperationProps {
    createTask?: any,
    editTask?: any,
    deleteTask?: any,
    setOpen: any,
    listData: Array<INewTask>,
    currentTaskData?: INewTask,
    isEdit?: boolean,
    isDelete?: boolean
}
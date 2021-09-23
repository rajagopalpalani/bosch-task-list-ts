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

export interface ICustomModalProps {
    title: string,
    open: boolean,
    handleCancel: any,
    children: any
}

export interface INavNames {
    name: Array<INavList>;
}

export interface INavList {
    menuName: string,
    icon: any
}

export interface IMenuProps {
    currentMenu: number,
    collapsed: boolean,
    setCurrentMenu: any
}

export interface IDesignHeaderProps {
    setCollapse: any,
    collapsed: boolean
}

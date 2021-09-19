interface IProject {
    projectId: number,
    projectName: string
}

interface IData {
    taskId?: number,
    taskName: string,
    project: string,
    comments: string,
    key: string
}

const projectList: Array<IProject> = [{
    projectId: 1,
    projectName: "Java Project"
}, {
    projectId: 2,
    projectName: "Python Project"
}, {
    projectId: 3,
    projectName: "Devops Project"
}];

const data: Array<IData> = [
    {
        taskId: 1,
        taskName: 'Task name 1',
        project: "Java Project",
        comments: 'Sample Comments 1',
        key: '1'
    },
    {
        taskId: 2,
        taskName: 'Task name 2',
        project: "Python Project",
        comments: 'Sample Comments 2',
        key: '2'
    },
    {
        taskId: 3,
        taskName: 'Task name 3',
        project: "Devops Project",
        comments: 'Sample Comments 3',
        key: '3'
    },
];

export { data, projectList };
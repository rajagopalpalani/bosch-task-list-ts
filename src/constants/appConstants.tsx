import { IProject, INewTask } from "./interface";

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

const data: Array<INewTask> = [
    {
        taskId: 1,
        taskName: 'Task name 1',
        project: "Java Project",
        taskStartDate: '2021/01/01',
        taskEndDate: '2021/01/05',
        comments: 'Sample Comments 1',
        key: '1'
    },
    {
        taskId: 2,
        taskName: 'Task name 2',
        project: "Python Project",
        taskStartDate: '2021/01/01',
        taskEndDate: '2021/05/05',
        comments: 'Sample Comments 2',
        key: '2'
    },
    {
        taskId: 3,
        taskName: 'Task name 3',
        project: "Devops Project",
        taskStartDate: '2021/11/01',
        taskEndDate: '2021/01/05',
        comments: 'Sample Comments 3',
        key: '3'
    },
];

export { data, projectList };
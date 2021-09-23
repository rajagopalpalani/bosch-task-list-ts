import { INewTask } from "./../constants/interface";

export const fetchData = (data: Array<INewTask>) => async () => {
    return sleep(data, 2000);
};

const sleep = (data: Array<INewTask>, ms: number) => {
    return new Promise(resolve => setTimeout(() => {
        resolve(data);
    }, ms));
}

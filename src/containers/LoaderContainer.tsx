import { Spin } from 'antd';

const LoaderContainer = () => {
    return (
        <div className="loader">
            <Spin className="centered" size={'large'} />
        </div>
    );
}

export default LoaderContainer;
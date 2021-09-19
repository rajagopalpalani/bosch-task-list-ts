import React from "react";
import { Modal } from "antd";

interface IProps {
    title: string,
    open: boolean,
    setOpen: any,
    children: any
}

const CustomModal = ({ title, open, setOpen, children }: IProps) => {

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Modal
                title={title}
                visible={open}
                footer={null}
                onCancel={handleCancel}
                closable={true}
            >
                {children}
            </Modal>
        </>
    );
};
export default CustomModal;

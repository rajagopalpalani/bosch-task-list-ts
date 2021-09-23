import React from "react";
import { Modal } from "antd";
import { ICustomModalProps } from './../constants/interface';

const CustomModal = ({ title, open, handleCancel, children }: ICustomModalProps) => {

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

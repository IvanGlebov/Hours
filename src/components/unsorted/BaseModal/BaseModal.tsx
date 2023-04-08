import React from 'react'
import { Modal } from '@mui/material'
import styles from './BaseModal.module.css'

export interface IBaseModalProps {
    open: boolean,
    toggle: () => void,
    header: string | React.ReactElement,
    inputsGroup: React.ReactElement,
    actionElements: React.ReactElement,
}

const BaseModal: React.FC<IBaseModalProps> = ({
    open,
    toggle,
    header,
    inputsGroup,
    actionElements
}) => {
    return (
        <div>
            <Modal open={open} onClose={toggle}>
                <div className={styles.modalContentWrapper}>
                    <h1>{header}</h1>
                    <div className={styles.inputsGroup}>
                        {inputsGroup}
                    </div>
                    <div className={styles.actionButtons}>
                        {actionElements}
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default BaseModal

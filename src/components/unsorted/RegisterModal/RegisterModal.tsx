import React, {useState} from 'react'
import {EInputFields, TInput} from '../Form/types'
import {Button, Modal} from '@mui/material'
import styles from './RegisterModal.module.css'
import {Form} from '../../index'

const inputs: TInput[] = [
    {
        name: 'Email',
        type: EInputFields.CSS_TEXT_FIELD,
        defaultValue: '',
        value: '',
        required: true,
        variant: 'outlined',
        fieldType: 'text',
    },
    {
        name: 'Login',
        type: EInputFields.CSS_TEXT_FIELD,
        defaultValue: '',
        value: '',
        required: true,
        variant: 'outlined',
        fieldType: 'text',
    },
    {
        name: 'Password',
        type: EInputFields.CSS_TEXT_FIELD,
        defaultValue: '',
        value: '',
        required: true,
        variant: 'outlined',
        fieldType: 'password',
    }
]

export type TRegisterModalInputs = typeof inputs

export interface IRegisterModalProps {
    open: boolean,
    toggle: () => void,
    onSubmit: (inputs: TRegisterModalInputs) => void
}

const RegisterModal: React.FC<IRegisterModalProps> = ({
    open, toggle, onSubmit
}) => {

    const [formState, setState] = useState<TInput[]>([])

    const onFormChange = (state: TInput[]) => setState(state)

    const onFormSubmit = () => onSubmit(formState)

    return (<div>
        <Modal
            open={open}
            onClose={toggle}
        >
            <div className={styles.modalContentWrapper}>
                <h1>Register</h1>
                <div className={styles.inputsGroup}>
                    <Form onChange={onFormChange} inputs={inputs}/>
                </div>
                <div className={styles.actionButtons}>
                    <Button
                        variant='contained'
                        type='submit'
                        onClick={onFormSubmit}
                    >Register</Button>
                    <Button
                        variant='outlined'
                        color='secondary'
                        type='button'
                        onClick={toggle}
                    >Cancel</Button>
                </div>
            </div>
        </Modal>
    </div>)
}

export default RegisterModal

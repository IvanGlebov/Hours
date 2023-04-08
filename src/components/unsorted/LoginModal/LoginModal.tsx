import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Form } from '../../index'
import { EInputFields, TInput } from '../Form/types'
import BaseModal from '../BaseModal/BaseModal'

const inputs: TInput[] = [
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
    },
]

export type TLoginModalInputs = typeof inputs

export interface ILoginModalProps {
    open: boolean,
    toggle: () => void,
    onSubmit: (inputs: TLoginModalInputs) => void
}

const LoginModal: React.FC<ILoginModalProps> = ({
    open, toggle, onSubmit
}) => {

    const [formState, setState] = useState<TInput[]>([])

    const onFormChange = (state: TInput[]) => setState(state)

    const onFormSubmit = () => onSubmit(formState)

    return (
        <BaseModal
            open={open}
            toggle={toggle}
            header="Login"
            inputsGroup={
                <Form
                    onChange={onFormChange} inputs={inputs}
                />
            }
            actionElements={
                <>
                    <Button
                        variant="contained"
                        type="submit"
                        onClick={onFormSubmit}
                    >LogIn</Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        type="button"
                        onClick={toggle}
                    >Cancel</Button>
                </>
            }/>
    )
}

export default LoginModal

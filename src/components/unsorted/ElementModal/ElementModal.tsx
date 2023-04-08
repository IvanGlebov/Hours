import React from 'react'
import { Button } from '@mui/material'
import BaseModal from '../BaseModal/BaseModal'
import { Form } from '../../index'
import { TInput } from '../Form/types'

export interface IElementModalProps {
    open: boolean,
    toggle: () => void,
    onSubmit: () => void,
    inputs: TInput[]
}

const ElementModal: React.FC<IElementModalProps> = ({
    open, toggle, onSubmit, inputs
}) => {

    return (
        <BaseModal
            open={open}
            toggle={toggle}
            header="Goal description"
            inputsGroup={
                <>
                    <Form inputs={inputs} />
                </>
            }
            actionElements={
                <>
                    <Button
                        variant="contained"
                        type="submit"
                        onClick={onSubmit}
                    >LogIn</Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        type="button"
                        onClick={toggle}
                    >Cancel</Button>
                </>
            }
        />
    )
}

export default ElementModal

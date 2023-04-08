/* eslint-disable max-len */
import React, { useMemo, useRef, useState } from 'react'
import Modal from '@mui/material/Modal'
import styles from './AddObjectModal.module.css'
import { Button } from '@mui/material'


import { getGoals, getNewId } from '../../../features/goals/goalsSelectors'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'

import { addOneGoal } from '../../../features/goals/goalsSlice'
import { useSnackbar } from 'notistack'
import { Form, InlineSelect } from '../../index'
import { CssTextField } from '../../atoms'
import { ETimings, TTiming } from '../../../types/durations/timings'
import { EInputFields, TInput } from '../Form/types'
import { getUserSettings } from '../../../features/user/userSelectors'

const inputs: TInput[] = [
    {
        name: 'Name',
        type: EInputFields.CSS_TEXT_FIELD,
        defaultValue: '',
        value: '',
        required: true,
        variant: 'outlined',
        fieldType: 'text',
    },
    {
        name: 'Description',
        type: EInputFields.CSS_TEXT_FIELD,
        defaultValue: '',
        value: '',
        required: true,
        variant: 'outlined',
        fieldType: 'text',
    },
]

export type TAddObjectModalForm = typeof inputs

const extractValuesFromInputs = (inputs: TInput[]) => {
    return inputs.reduce((prev: Record<string, string>, next) => {
        prev[next.name] = next.value || ''
        return prev
    }, {})
}

const AddObjectModal = (
    { open, toggle }: { open: boolean, toggle: () => void }
) => {

    const userSettings = useAppSelector(getUserSettings)
    const goalsEntities = useAppSelector(getGoals)
    const newId = useAppSelector(getNewId)
    const dispatch = useAppDispatch()

    const { enqueueSnackbar } = useSnackbar()

    const formRef = useRef()
    const [formValues, setFormValues] = useState<TAddObjectModalForm>(inputs)

    const [duration, setDuration] = useState(0)

    const timeLeft = useMemo(() => {
        return userSettings.TOTAL_YEAR_DURATION as number - Object
            .values(goalsEntities)
            .reduce((prev, next) => prev += next?.duration as number || 0, 0)
    }, [userSettings.TOTAL_YEAR_DURATION, goalsEntities])


    const onFormSubmit = () => {
        const extractedValues = extractValuesFromInputs(formValues)

        let errorFlag = false
        Object.entries(extractedValues).forEach((el) => {
            if (el[1] === '') {
                enqueueSnackbar(`Field ${el[0]} is required`, { variant: 'error' })
                errorFlag = true
            }
        })
        if (errorFlag) return

        if (duration < 1) {
            enqueueSnackbar('Duration is not specified', { variant: 'error' })
            return
        }
        if (duration > timeLeft) {
            enqueueSnackbar(`Not enough free time: ${duration}/${timeLeft}`, { variant: 'error' })
            return
        }

        dispatch(addOneGoal({
            id: newId,
            name: extractedValues['Name'],
            description: extractedValues['Description'],
            duration
        }))

        // TODO: update method to clear form without casting "as any"
        if (formRef.current) {
            (formRef.current as any).clearForm()
        }
        enqueueSnackbar('Goal was added', { variant: 'success' })
        setTimeout(toggle)
    }

    const modalOptions = [
        'Goal',
        // 'Project',
        // 'Work'
    ]
    const timingOptions: TTiming[] = [
        // ETimings.HOURS_PER_WEEK,
        ETimings.HOURS,
        // ETimings.HOURS_PER_DAY
    ]
    const onSelectChange = (e: string) => {
        console.log('new Value: ', e)
    }

    const onFormChange = (formInputs: TAddObjectModalForm) => {
        setFormValues(formInputs)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={toggle}
            >
                <div className={styles.modalContentWrapper}>
                    <h1>
                        Add
                        <InlineSelect
                            onChange={onSelectChange}
                            selectOptions={modalOptions}
                            selectedElement={'Goal'}
                        />
                    </h1>
                    <div className={styles.inputsGroup}>
                        <Form
                            ref={formRef}
                            inputs={inputs}
                            onChange={onFormChange}
                        />
                        <h1>Set timing:
                            <InlineSelect
                                selectOptions={timingOptions}
                                onChange={(e) => console.log(e)}
                                selectedElement={timingOptions[0]}
                            />
                        </h1>
                        <CssTextField
                            required
                            variant="outlined"
                            type="number"
                            label="Duration in hours"
                            onChange={
                                (e) =>
                                    setDuration(parseInt(e.target.value, 10))
                            }
                        />
                    </div>
                    <div className={styles.actionButtons}>
                        {/*<Button onClick={() => {*/}
                        {/*    if (formRef.current) {*/}
                        {/*        (formRef.current as any).clearForm()*/}
                        {/*    }*/}

                        {/*}}>Call</Button>*/}
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={onFormSubmit}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            type="button"
                            onClick={toggle}>Cancel</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default AddObjectModal

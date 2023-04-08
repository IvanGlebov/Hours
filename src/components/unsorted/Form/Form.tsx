import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState
} from 'react'
import { EInputFields, TInput } from './types'
import { CssTextField, InlineSelect } from '../../atoms'
import styles from './Form.module.css'

interface IFormProps {

    inputs: TInput[],
    onChange?: (formState: TInput[]) => void,
}

// eslint-disable-next-line react/display-name
const Form = forwardRef((
    { inputs, onChange }: IFormProps, ref) => {

    const [formState, setFormState] = useState(inputs)

    const updateFormChange = (
        { inputIndex, value }: { inputIndex: number, value: string }
    ) => {
        setFormState((st) => st.map((el, index) => {
            if (index === inputIndex) {
                el.value = value
            }
            return el
        }))
    }

    useImperativeHandle(ref, () => ({
        clearForm() {
            setFormState((state) => state.map((input) => {
                input.value = input.defaultValue || ''
                return input
            }))
        }
    }))

    useEffect(() => {
        if (onChange) {
            onChange(formState)
        }
    }, [onChange, formState])

    return (
        <div className={styles.inputs}>
            {formState.map((input, index) => {
                if (input.type === EInputFields.CSS_TEXT_FIELD) {
                    return (
                        <CssTextField
                            key={input.name}
                            label={input.name}
                            value={input.value}
                            required={input.required}
                            disabled={input.disabled}
                            onChange={(e) =>
                                updateFormChange({
                                    inputIndex: index, value: e.target.value
                                })
                            }
                            type={input.fieldType}
                        />
                    )
                } else if (input.type === EInputFields.INLINE_SELECT) {
                    return (
                        <InlineSelect
                            key={input.name}
                            selectOptions={input.values}
                            onChange={(e) =>
                                updateFormChange({
                                    inputIndex: index,
                                    value: e
                                })
                            }
                        />
                    )
                } else return null
            })}
        </div>
    )
})

export default Form

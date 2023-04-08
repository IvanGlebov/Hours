import React, { useEffect, useRef, useState } from 'react'
import styles from './InlineSelect.module.css'
import classNames from 'classnames'
// import { TTiming }                 from '../../../types/durations/timings'

const InlineSelect = (
    { selectOptions, onChange, selectedElement = selectOptions[0] }:
        {
            selectOptions: string[],
            onChange: (newValue: string) => void,
            selectedElement?: string
        }) => {

    const wrapperRef = useRef<any>(null)
    const [selectedValue, setSelectedValue] =
        useState(
            selectOptions.includes(selectedElement)
                ? selectedElement
                : selectOptions[0] || 'Not defined select'
        )
    const [selectedFlag, setSelectedFlag] = useState(false)
    const toggleSelect = () => {
        setSelectedFlag(!selectedFlag)
        window.addEventListener('click', (event) => {
            if (wrapperRef.current &&
                !wrapperRef.current.contains(event.target))
            {
                setSelectedFlag(false)
            }
        })
    }

    const onSelectChange = (newValue: string) => {
        setSelectedValue(newValue)
        setSelectedFlag(false)
        if (onChange !== undefined) {
            onChange(newValue)
        }
    }

    useEffect(() => {
        if (selectOptions.includes(selectedElement)) {
            setSelectedValue(selectedElement)
        }
    }, [selectedElement, selectOptions])

    return (
        <div
            ref={wrapperRef}
            className={styles.selectWrapper}
            id="select-wrapper"
        >
            <button
                type="button" className={styles.selectedItem}
                onClick={toggleSelect}>
                {selectedValue}
            </button>
            <div
                className={classNames(
                    styles.dropdownWrapper,
                    { [styles.dropDownActive]: selectedFlag }
                )}>
                {selectOptions
                    .filter((el) => el !== selectedValue)
                    .map((el) => (
                        <option
                            key={el}
                            onClick={() => onSelectChange(el)}
                            value={el}
                        >
                            {el}
                        </option>
                    ))}
            </div>
        </div>
    )
}

export default InlineSelect

import React, { useRef, useState } from 'react'
import styles                      from './InlineSelect.module.css'
import classNames                  from 'classnames'

const InlineSelect = (
	{ selectOptions, onChange, defaultIndex = 0 }:
		{
			selectOptions: string[],
			onChange: (newValue: string) => void,
			defaultIndex?: number
		}) => {

	const wrapperRef = useRef<any>(null)
	const [selectedValue, setSelectedValue] =
		useState(selectOptions[defaultIndex])
	const [selectedFlag, setSelectedFlag] = useState(false)
	const toggleSelect = () => {
		setSelectedFlag(!selectedFlag)
		window.addEventListener('click', (event) => {
			if (wrapperRef.current &&
				!wrapperRef.current.contains(event.target)) {
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

	return (
		<div
			ref={ wrapperRef }
			className={ styles.selectWrapper }
			id="select-wrapper"
		>
			<button type="button" className={ styles.selectedItem }
				onClick={ toggleSelect }>
				{ selectedValue }
			</button>
			<div
				className={ classNames(styles.dropdownWrapper,
					{ [styles.dropDownActive]: selectedFlag }) }>
				{ selectOptions
					.filter((el) => el !== selectedValue)
					.map((el) => (
						<option key={ el }
							onClick={ () => onSelectChange(el) }
							value={ el }>
							{ el }</option>
					)) }
			</div>
		</div>
	)
}

export default InlineSelect

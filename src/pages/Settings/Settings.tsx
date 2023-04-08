import React, { useEffect, useState } from 'react'
import styles from './Settings.module.css'
import { Slider } from '@mui/material'
import { InlineSelect } from '../../components'
import { EDurations, ETimings } from '../../types/durations/timings'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getUserSettings } from '../../features/user/userSelectors'
import {
    setDefaultElementTiming,
    setDurationSetting,
    setTotalYearDuration
} from '../../features/user/userSlice'

const Settings = () => {

    const userSettings = useAppSelector(getUserSettings)
    const dispatch = useAppDispatch()

    const [duration, setDuration]
        = useState<number>(userSettings.DURATION as number || 0)
    const [gapDuration, setGapDuration]
        = useState<number>(userSettings.DEFAULT_GAP_DURATION as number)
    const [totalYear, setTotalYear]
        = useState<number>(userSettings.TOTAL_YEAR_DURATION as number || 0)

    const selectOptions = [
        ETimings.HOURS_PER_WEEK,
        ETimings.HOURS,
        ETimings.HOURS_PER_DAY,
    ]

    const onSelectUpdate = (e: string) => {
        switch (e) {
        case selectOptions[0]:
            setGapDuration(EDurations.HOURS_PER_WEEK)
            break
        case selectOptions[1]:
            setGapDuration(EDurations.HOURS)
            break
        case selectOptions[2]:
            setGapDuration(EDurations.HOURS_PER_DAY)
            break
        default:
            setGapDuration(300)
            break
        }
        dispatch(setDefaultElementTiming(e))
    }

    const updateSlider = (_e: unknown, value: number | number[]) => {
        setDuration(value as number)
        dispatch(setDurationSetting(value as number))
    }

    useEffect(() => {
        switch (gapDuration) {
        case EDurations.HOURS_PER_WEEK:
            setTotalYear(duration * 52)
            break
        case EDurations.HOURS:
            setTotalYear(duration)
            break
        case EDurations.HOURS_PER_DAY:
            setTotalYear(duration * 355)
            break
        default:
            setTotalYear(300)
            break
        }
    }, [gapDuration, duration])

    useEffect(() => {
        dispatch(setTotalYearDuration(totalYear))
    }, [totalYear])

    return (
        <div>
            <h1>Settings</h1>
            <div className={styles.itemsWrapper}>
                <div className={styles.settingsSection}>
                    <h2>For <InlineSelect
                        selectOptions={selectOptions}
                        onChange={onSelectUpdate}
                        selectedElement={
                            userSettings.DEFAULT_ELEMENT_TIMING as string
                        }
                    />
                    <br/> during the whole year</h2>
                    <div></div>
                    <div className={styles.settingsItem}>

                        <div>Time to spend out of {gapDuration} hours</div>
                        <Slider
                            value={duration}
                            onChange={updateSlider}
                            min={0}
                            max={gapDuration}
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <div className={styles.settingsItem}>
                        <div>Total hours:</div>
                        <div>{totalYear}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Settings

import React from 'react'

export enum EInputFields {
    CSS_TEXT_FIELD = 'CSS_TEXT_FIELD',
    INLINE_SELECT = 'INLINE_SELECT'
}

export type TInputFields =
    | EInputFields.CSS_TEXT_FIELD
    | EInputFields.INLINE_SELECT

export type TBaseInput = {
    name: string,
    defaultValue?: string,
    value?: string,
    type: string,
    required: boolean,
    disabled?: boolean
}

export type TCssTextField = TBaseInput & {
    type: EInputFields.CSS_TEXT_FIELD,
    variant: 'outlined' | 'contained',
    fieldType?: React.InputHTMLAttributes<unknown>['type']
}

export type TInlineSelectField = TBaseInput & {
    type: EInputFields.INLINE_SELECT,
    values: string[],
}

export type TInput = TCssTextField | TInlineSelectField
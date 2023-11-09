import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react'

type PropsType = {
    type: string
    placeholder?: string
    value?: string
    setValue: Dispatch<SetStateAction<string>>
    isResetForm?: boolean
    setIsResetForm?: Dispatch<SetStateAction<boolean>>
}

const Input: FC<PropsType> = ({ type, placeholder, value, setValue, isResetForm, setIsResetForm }) => {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        setIsResetForm && setIsResetForm(false)
    }

    const inputStyle =
        'mb-5 rounded-md w-full px-2 py-1 bg-[#616161] text-white border-2 border-[#9e9e9e] placeholder-[#9e9e9e] focus:placeholder-[#616161] focus:border-blue-400'
    const emptyInputStyle = 'border-red-600'
    const inputClassName = !value && isResetForm ? `${inputStyle} ${emptyInputStyle}` : inputStyle
    return (
        <>
            {!value && isResetForm && <span className='text-red-600 text-center transition'>Заполните поле!</span>}
            <input
                className={inputClassName}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={changeHandler}
                // onFocus={handleFocus}
                // onBlur={handleBlur}
                // value={value}
            />
        </>
    )
}

export default Input

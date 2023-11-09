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
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false)

    console.log('isInputFocused', isInputFocused)
    console.log('isResetForm', isResetForm)

    const handleFocus: () => void = () => {
        setIsInputFocused(false)
        setIsResetForm && setIsResetForm(false)
    }

    const handleBlur: () => void = () => {
        setIsInputFocused(true)
        setIsResetForm && setIsResetForm(false)
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const inputStyle =
        'mb-5 rounded-md w-full px-2 py-1 bg-[#616161] text-white border-2 border-[#9e9e9e] placeholder-[#9e9e9e] focus:placeholder-[#616161] focus:border-blue-400'
    const emptyInputStyle = 'border-red-600'
    const inputClassName = isInputFocused && !value && !isResetForm ? `${inputStyle} ${emptyInputStyle}` : inputStyle
    return (
        <>
            {isInputFocused && !value && !isResetForm && (
                <span className='text-red-600 text-center transition'>Заполните поле!</span>
            )}
            <input
                className={inputClassName}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={changeHandler}
                onFocus={handleFocus}
                onBlur={handleBlur}
                // value={value}
            />
        </>
    )
}

export default Input

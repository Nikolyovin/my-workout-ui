import { FormEvent, useState, FC } from 'react'
import Input from '../../common/Input'
import { Button } from '@mui/material'

type propsType = {
    handleClose: () => void
}

const WeightForm: FC<propsType> = ({ handleClose }) => {
    const [weight, setWeight] = useState<string | number>(0)
    const handleSubmit: (e: FormEvent<HTMLFormElement>) => void = e => {
        e.preventDefault()
        console.log({ weight, date: new Date() })
        handleClose()
    }
    return (
        <form className='flex flex-col ' onSubmit={handleSubmit}>
            <h3 className='text-2xl text-center mb-5'>Укажите результат</h3>
            <Input value={weight || ''} setValue={setWeight} placeholder='Ваш вес' type='number' />
            {/* {!isLoading ? ( */}
            <Button type='submit' variant='contained' sx={{ fontFamily: 'inherit', mb: '10px' }}>
                добавить
            </Button>
            {/* ) : (
                <div className='flex justify-center'>
                    <CircularProgress />
                </div>
            )} */}
        </form>
    )
}

export default WeightForm

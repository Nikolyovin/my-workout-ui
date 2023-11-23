import { useState } from 'react'
import Input from '../../common/Input'

const WeightForm = () => {
    const [weight, setWeight] = useState<number>(0)
    return (
        <form>
            <Input value={weight} setValue={setWeight} type='number' />
        </form>
    )
}

export default WeightForm

import React, {useState, FC} from 'react'

import {IProps} from './types'

const CreatePlan: FC<IProps> = (props) => {
    const [name, setName] = useState('')

    const postPlan = () => {
        props.postPlan({
            name: name,
            isCompleted: false,
        })

        setName('')
    }

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={postPlan}
            >
                Добавить
            </button>
        </div>
    )
}

export default CreatePlan

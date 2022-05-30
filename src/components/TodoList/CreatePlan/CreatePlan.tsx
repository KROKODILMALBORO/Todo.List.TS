import React, {useState, FC} from 'react'

import {IProps} from './types'

const CreatePlan: FC<IProps> = (props) => {
    const [name, setName] = useState('')

    const postPlan = () => {
        if (!name) {
            alert('Чтобы добавить новое дело, его нужно записать!')

            return
        }

        if (name.length > 40) {
            alert('Слишком длинно для одного дела!')

            return
        }

        const identicalList = props.plans.find((plan) =>
            plan.name === name
        )

        if (identicalList) {
            alert('Такое дело уже есть!')

            return
        }

        props.postPlan({
            name: name,
            isCompleted: false,
        })

        setName('')
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            postPlan()
        }
    }

    return (
        <div>
            <input
                value={name}
                placeholder='Название нового дела'
                onChange={(e) => setName(e.target.value)}
                onKeyPress={handleKeyPress}
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

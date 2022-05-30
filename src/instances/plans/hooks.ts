import {useState} from 'react'

import {IPlan} from './types'

export const usePlans = () => {
    const [plans, setPlans] = useState<IPlan[]>([])

    const postPlan = (newPlan: IPlan) => {
        const newPlans = [...plans, newPlan]

        setPlans(newPlans)
    }

    return {
        plans,
        postPlan,
    }
}

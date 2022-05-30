import {useState} from 'react'

import {IPlan} from './types'

export const usePlans = () => {
    const [plans, setPlans] = useState<IPlan[]>([])

    const postPlan = (newPlan: IPlan) => {
        const newPlans = [...plans, newPlan]

        setPlans(newPlans)
    }

    const pathPlan = (index: number) => {
        const plan = plans[index]
        const newPlan = {
            ...plan,
            isCompleted: !plan.isCompleted
        }
        const newPlans = [...plans]

        newPlans[index] = newPlan
        setPlans(newPlans)
    }

    return {
        plans,
        postPlan,
        pathPlan,
    }
}

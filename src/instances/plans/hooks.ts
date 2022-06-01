import {useState, useEffect} from 'react'

import {IPlan} from './types'
import {getDefaultPlans} from './functions'

export const usePlans = () => {
    const [plans, setPlans] = useState<IPlan[]>(getDefaultPlans)

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

    const clearPlans = () => {
        if (!plans.length) {
            return
        }

        const uncompletedPlans = plans.filter((plan) => !plan.isCompleted)

        if (!uncompletedPlans.length) {
            localStorage.setItem('plans', JSON.stringify([]))
            setPlans([])
        }

        localStorage.setItem('plans', JSON.stringify(plans))
    }

    useEffect(() => {
        clearPlans()
    }, [plans])

    return {
        plans,
        postPlan,
        pathPlan,
    }
}

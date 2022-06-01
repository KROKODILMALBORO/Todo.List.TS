import {useState, useEffect} from 'react'

import {IPlan} from './types'
import {getDefaultPlans} from './functions'
import {LS_PLANS} from './constans'

export const usePlans = () => {
    const [plans, setPlans] = useState<IPlan[]>(getDefaultPlans)

    const postPlan = (newPlan: IPlan) => {
        const newPlans = [...plans, newPlan]

        setPlans(newPlans)
    }

    const patchPlan = (index: number) => {
        const plan = plans[index]
        const newPlan = {
            ...plan,
            isCompleted: !plan.isCompleted
        }
        const newPlans = [...plans]

        newPlans[index] = newPlan
        setPlans(newPlans)
    }

    useEffect(() => {
        if (!plans.length) {
            return
        }

        const uncompletedPlans = plans.filter((plan) => !plan.isCompleted)

        if (!uncompletedPlans.length) {
            localStorage.setItem(LS_PLANS, JSON.stringify([]))
            setPlans([])

            return
        }

        localStorage.setItem(LS_PLANS, JSON.stringify(plans))
    }, [plans])

    return {
        plans,
        postPlan,
        patchPlan,
    }
}

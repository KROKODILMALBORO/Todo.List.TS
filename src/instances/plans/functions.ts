import {IPlan} from './types'

export const getDefaultPlans = (): IPlan[] => {
    const data = localStorage.getItem('plans')

    if (!data) {
        return []
    }

    return JSON.parse(data)
}

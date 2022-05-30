export const defaultPlans = () => {
    // @ts-ignore
    return JSON.parse(localStorage.getItem('plans')) || []
}

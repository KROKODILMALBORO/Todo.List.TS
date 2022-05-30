import {IPlan} from 'instances/plans/types'

export interface IProps {
    plans: IPlan[],
    postPlan(newPlan: IPlan): void,
}

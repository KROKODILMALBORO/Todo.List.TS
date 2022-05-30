import {IPlan} from 'instances/plans/types'

export interface IProps {
    postPlan(newPlan: IPlan): void,
}

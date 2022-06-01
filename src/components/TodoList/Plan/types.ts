import {IPlan} from 'instances/plans/types'

export interface IProps {
    plan: IPlan,
    patchPlan(): void,
}

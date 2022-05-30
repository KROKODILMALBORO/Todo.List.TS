import React, {FC} from 'react'

import {IProps} from './types'

const Plan: FC<IProps> = (props) => {
    return (
        <div>
            {props.plan.name}
            <input
                type='checkbox'
                checked={props.plan.isCompleted}
                onChange={props.pathPlan}
                onClick={props.pathPlan}
            />
        </div>
    )
}

export default Plan

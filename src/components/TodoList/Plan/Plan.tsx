import React, {FC} from 'react'

import {IProps} from './types'

const Plan: FC<IProps> = (props) => {
    return (
        <div>
            {props.plan.name}
        </div>
    )
}

export default Plan

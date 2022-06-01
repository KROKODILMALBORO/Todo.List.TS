import React, {FC} from 'react'

import {IProps} from './types'

const Plan: FC<IProps> = (props) => {
    return (
        <div className='d-flex flex-row justify-content-center mb-3'>
            <div
                className='d-flex justify-content-between list-group-item list-group-item-action rounded shadow-sm w-50'
                onClick={props.patchPlan}
                role='button'
            >
                <span className='fs-4'>
                    {props.plan.name}
                </span>
                <input
                    className='form-check-input p-3 mb-1'
                    type='checkbox'
                    checked={props.plan.isCompleted}
                    onChange={props.patchPlan}
                    onClick={props.patchPlan}
                />
            </div>
        </div>
    )
}

export default Plan

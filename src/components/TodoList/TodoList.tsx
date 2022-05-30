import React from 'react'

import {usePlans} from 'instances/plans/hooks'

import CreatePlan from './CreatePlan'
import Plan from './Plan'

const TodoList = () => {
    const {
        plans,
        postPlan,
    } = usePlans()

    return (
        <div>
            <CreatePlan postPlan={postPlan}/>
            {
                plans.map((plan) =>
                    <Plan
                        key={plan.name}
                        plan={plan}
                    />
                )
            }
        </div>
    )
}

export default TodoList

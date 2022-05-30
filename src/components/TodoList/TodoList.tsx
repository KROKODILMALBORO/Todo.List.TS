import React from 'react'

import {usePlans} from 'instances/plans/hooks'

import CreatePlan from './CreatePlan'
import Plan from './Plan'

const TodoList = () => {
    const {
        plans,
        postPlan,
        pathPlan,
    } = usePlans()

    return (
        <div>
            <CreatePlan
                plans={plans}
                postPlan={postPlan}
            />
            {
                plans.map((plan, index) =>
                    <Plan
                        key={plan.name}
                        plan={plan}
                        pathPlan={() => pathPlan(index)}
                    />
                )
            }
        </div>
    )
}

export default TodoList

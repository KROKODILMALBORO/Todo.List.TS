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
                plans.length !== 0 ?
                plans.map((plan, index) =>
                    <Plan
                        key={plan.name}
                        plan={plan}
                        pathPlan={() => pathPlan(index)}
                    />
                ) :
                <div className='d-flex justify-content-center'>
                    <div className='bg-light rounded shadow-sm p-1 px-3'>
                        <span className='fs-4 text-secondary'>
                            Cписок дел сейчас пуст
                        </span>
                    </div>
                </div>
            }
        </div>
    )
}

export default TodoList

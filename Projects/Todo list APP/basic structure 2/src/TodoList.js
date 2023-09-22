import React from 'react'
import Todo from './Todo'

export default function TodoList({ todosss }) {
	return (
		todosss.map(todo => {
			return <Todo key={todo} todo={todosss} />
		})
	)
}

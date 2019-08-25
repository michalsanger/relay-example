// @flow

import React from 'react';
import { List as OrbitList } from '@kiwicom/orbit-components';
import { createFragmentContainer, graphql } from '@kiwicom/relay';

import Item from './Item';
import type { List_data as ListType, TodoAppFilter } from './__generated__/List_data.graphql';

type Props = {|
  +data: ListType,
|};

function filterTodos(todos, filter: ?TodoAppFilter) {
  if (filter === 'ACTIVE') {
    return todos.filter(t => !t.isDone);
  } else if (filter === 'COMPLETED') {
    return todos.filter(t => t.isDone);
  }
  return todos;
}

function List({ data }: Props) {
  const todos = filterTodos(data?.todoApp?.todos ?? [], data?.todoApp?.filter);

  return (
    <OrbitList size="large">
      {todos.map(todo => (
        <Item key={todo.id} todo={todo} />
      ))}
    </OrbitList>
  );
}

export default createFragmentContainer(List, {
  data: graphql`
    fragment List_data on RootQuery {
      todoApp {
        todos {
          id
          isDone
          ...Item_todo
        }
        filter
      }
    }
  `,
});

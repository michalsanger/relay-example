// @flow

import React, { useRef } from 'react';
import { InputField } from '@kiwicom/orbit-components';
import { commitLocalUpdate, type Environment } from '@kiwicom/relay';
import uuid from 'uuid'; // eslint-disable-line import/no-extraneous-dependencies
import { ROOT_ID } from 'relay-runtime'; // eslint-disable-line import/no-extraneous-dependencies

type Props = {|
  +environment: Environment,
|};

export default function AddForm({ environment }: Props) {
  const todoInput = useRef();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const text = todoInput.current?.value;
        if (!text) return;

        commitLocalUpdate(environment, store => {
          const id = uuid.v4();
          const todo = store.create(id, 'Todo');
          todo.setValue(id, 'id');
          todo.setValue(text, 'text');
          todo.setValue(false, 'isDone');
          const root = store.get(ROOT_ID) || store.getRoot();
          const todoApp = root.getOrCreateLinkedRecord('todoApp', 'TodoApp');
          const todos = todoApp.getLinkedRecords('todos') || [];
          todoApp.setLinkedRecords([...todos, todo], 'todos');
        });
        e.target.reset();
      }}
    >
      {/* $FlowExpectedError: Orbit has strange def for ref */}
      <InputField placeholder="What needs to be done?" ref={todoInput} />
    </form>
  );
}

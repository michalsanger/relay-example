/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Item_todo$ref = any;
export type TodoAppFilter = "ACTIVE" | "ALL" | "COMPLETED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type List_data$ref: FragmentReference;
declare export opaque type List_data$fragmentType: List_data$ref;
export type List_data = {|
  +todoApp: ?{|
    +todos: ?$ReadOnlyArray<{|
      +id: string,
      +isDone: ?boolean,
      +$fragmentRefs: Item_todo$ref,
    |}>,
    +filter: ?TodoAppFilter,
  |},
  +$refType: List_data$ref,
|};
export type List_data$data = List_data;
export type List_data$key = {
  +$data?: List_data$data,
  +$fragmentRefs: List_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "List_data",
  "type": "RootQuery",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "todoApp",
          "storageKey": null,
          "args": null,
          "concreteType": "TodoApp",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "todos",
              "storageKey": null,
              "args": null,
              "concreteType": "Todo",
              "plural": true,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "isDone",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "Item_todo",
                  "args": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "filter",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ac3fed242a1b3323ad96c689641a4d70';
module.exports = node;

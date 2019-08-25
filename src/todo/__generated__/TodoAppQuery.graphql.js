/**
 * @flow
 * @relayHash 2774e448dc328ad77f33cceb12207cbd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Footer_data$ref = any;
type List_data$ref = any;
export type TodoAppQueryVariables = {||};
export type TodoAppQueryResponse = {|
  +__typename: string,
  +$fragmentRefs: List_data$ref & Footer_data$ref,
|};
export type TodoAppQuery = {|
  variables: TodoAppQueryVariables,
  response: TodoAppQueryResponse,
|};
*/


/*
query TodoAppQuery {
  __typename
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TodoAppQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      (v0/*: any*/),
      {
        "kind": "FragmentSpread",
        "name": "List_data",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "Footer_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoAppQuery",
    "argumentDefinitions": [],
    "selections": [
      (v0/*: any*/),
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "text",
                    "args": null,
                    "storageKey": null
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
  },
  "params": {
    "operationKind": "query",
    "name": "TodoAppQuery",
    "id": "cab0c626774069ca358a290cbdb5529a",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd68bcb1f2a5fb3e2288cafffa5e42231';
/*:: declare var __DEV__: boolean; */
if (__DEV__) {
  (node/*: any*/).params.text = "query TodoAppQuery {\n  __typename\n}\n";
}
module.exports = node;

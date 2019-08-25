/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type TodoAppFilter = "ACTIVE" | "ALL" | "COMPLETED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Filter_data$ref: FragmentReference;
declare export opaque type Filter_data$fragmentType: Filter_data$ref;
export type Filter_data = {|
  +todoApp: ?{|
    +filter: ?TodoAppFilter
  |},
  +$refType: Filter_data$ref,
|};
export type Filter_data$data = Filter_data;
export type Filter_data$key = {
  +$data?: Filter_data$data,
  +$fragmentRefs: Filter_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Filter_data",
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
(node/*: any*/).hash = '436e937d8d08000fa14b9b9954fec687';
module.exports = node;

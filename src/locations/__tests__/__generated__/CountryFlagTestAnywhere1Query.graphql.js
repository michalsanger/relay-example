/**
 * @flow
 * @relayHash 941ceb15cb08efa935c00cb590d9b791
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CountryFlag_location$ref = any;
export type CountryFlagTestAnywhere1QueryVariables = {||};
export type CountryFlagTestAnywhere1QueryResponse = {|
  +location: ?{|
    +$fragmentRefs: CountryFlag_location$ref
  |}
|};
export type CountryFlagTestAnywhere1Query = {|
  variables: CountryFlagTestAnywhere1QueryVariables,
  response: CountryFlagTestAnywhere1QueryResponse,
|};
*/


/*
query CountryFlagTestAnywhere1Query {
  location(input: {locationId: "test-location-id"}) {
    ...CountryFlag_location
    id
  }
}

fragment CountryFlag_location on Location {
  country {
    code
    name
  }
  code
  name
  type
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "input",
    "value": {
      "locationId": "test-location-id"
    }
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CountryFlagTestAnywhere1Query",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "location",
        "storageKey": "location(input:{\"locationId\":\"test-location-id\"})",
        "args": (v0/*: any*/),
        "concreteType": "Location",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CountryFlag_location",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CountryFlagTestAnywhere1Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "location",
        "storageKey": "location(input:{\"locationId\":\"test-location-id\"})",
        "args": (v0/*: any*/),
        "concreteType": "Location",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "country",
            "storageKey": null,
            "args": null,
            "concreteType": "LocationArea",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/)
            ]
          },
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "type",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CountryFlagTestAnywhere1Query",
    "id": "f137a1355eabcfcceaa24ca7041c8d16",
    "text": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "location": {
          "type": "Location",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "location.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "location.country": {
          "type": "LocationArea",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "location.code": (v3/*: any*/),
        "location.name": (v3/*: any*/),
        "location.type": (v3/*: any*/),
        "location.country.code": (v3/*: any*/),
        "location.country.name": (v3/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0337e5f549a01ebba95f25c2ad21067c';
/*:: declare var __DEV__: boolean; */
if (__DEV__) {
  (node/*: any*/).params.text = "query CountryFlagTestAnywhere1Query {\n  location(input: {locationId: \"test-location-id\"}) {\n    ...CountryFlag_location\n    id\n  }\n}\n\nfragment CountryFlag_location on Location {\n  country {\n    code\n    name\n  }\n  code\n  name\n  type\n}\n";
}
module.exports = node;

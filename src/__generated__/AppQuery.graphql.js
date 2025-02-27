/**
 * @flow
 * @relayHash 4c59bdf450c604f7ac754aa6d22bbba9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LocationsPaginatedBidirectional_data$ref = any;
type LocationsPaginatedRefetch_data$ref = any;
type LocationsPaginated_data$ref = any;
export type AppQueryVariables = {|
  count: number
|};
export type AppQueryResponse = {|
  +$fragmentRefs: LocationsPaginatedBidirectional_data$ref & LocationsPaginatedRefetch_data$ref & LocationsPaginated_data$ref
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery(
  $count: Int!
) {
  ...LocationsPaginatedBidirectional_data_1TJkD9
  ...LocationsPaginatedRefetch_data
  ...LocationsPaginated_data
}

fragment LocationsPaginatedBidirectional_data_1TJkD9 on RootQuery {
  allLocations(first: $count) {
    edges {
      node {
        id
        ...Location_location
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}

fragment LocationsPaginatedRefetch_data on RootQuery {
  incrementalPagination: allLocations(first: 20) {
    edges {
      node {
        id
        ...Location_location
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment LocationsPaginated_data on RootQuery {
  incrementalPagination2: allLocations(first: 20) {
    edges {
      node {
        id
        ...Location_location
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment Location_location on Location {
  name
  ...CountryFlag_location
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
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "country",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    (v3/*: any*/)
  ]
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasNextPage",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endCursor",
  "args": null,
  "storageKey": null
},
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v10 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "LocationEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Location",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
          (v4/*: any*/),
          (v6/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "pageInfo",
    "storageKey": null,
    "args": null,
    "concreteType": "PageInfo",
    "plural": false,
    "selections": [
      (v8/*: any*/),
      (v7/*: any*/)
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedBidirectional_data",
        "args": (v1/*: any*/)
      },
      {
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedRefetch_data",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "LocationsPaginated_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allLocations",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "LocationEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Location",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v5/*: any*/),
                  (v4/*: any*/),
                  (v6/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasPreviousPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "startCursor",
                "args": null,
                "storageKey": null
              },
              (v8/*: any*/)
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "incrementalPagination",
        "name": "allLocations",
        "storageKey": "allLocations(first:20)",
        "args": (v9/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": (v10/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "incrementalPagination",
        "name": "allLocations",
        "args": (v9/*: any*/),
        "handle": "connection",
        "key": "allLocations_incrementalPagination",
        "filters": null
      },
      {
        "kind": "LinkedField",
        "alias": "incrementalPagination2",
        "name": "allLocations",
        "storageKey": "allLocations(first:20)",
        "args": (v9/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": (v10/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "incrementalPagination2",
        "name": "allLocations",
        "args": (v9/*: any*/),
        "handle": "connection",
        "key": "allLocations_incrementalPagination2",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": "817cc8687613bb41dc2c26df37f97ce1",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0498f7c949b5251acad55be93ac901ea';
/*:: declare var __DEV__: boolean; */
if (__DEV__) {
  (node/*: any*/).params.text = "query AppQuery(\n  $count: Int!\n) {\n  ...LocationsPaginatedBidirectional_data_1TJkD9\n  ...LocationsPaginatedRefetch_data\n  ...LocationsPaginated_data\n}\n\nfragment LocationsPaginatedBidirectional_data_1TJkD9 on RootQuery {\n  allLocations(first: $count) {\n    edges {\n      node {\n        id\n        ...Location_location\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n\nfragment LocationsPaginatedRefetch_data on RootQuery {\n  incrementalPagination: allLocations(first: 20) {\n    edges {\n      node {\n        id\n        ...Location_location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment LocationsPaginated_data on RootQuery {\n  incrementalPagination2: allLocations(first: 20) {\n    edges {\n      node {\n        id\n        ...Location_location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Location_location on Location {\n  name\n  ...CountryFlag_location\n}\n\nfragment CountryFlag_location on Location {\n  country {\n    code\n    name\n  }\n  code\n  name\n  type\n}\n";
}
module.exports = node;

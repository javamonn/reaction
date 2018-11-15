/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { ArtworkVisuallySimilar_artworks$ref } from "./ArtworkVisuallySimilar_artworks.graphql";
export type ArtworkVisuallySimilarQueryVariables = {
    readonly artworkIDs?: ReadonlyArray<string | null> | null;
};
export type ArtworkVisuallySimilarQueryResponse = {
    readonly artworks: ReadonlyArray<({
        readonly " $fragmentRefs": ArtworkVisuallySimilar_artworks$ref;
    }) | null> | null;
};
export type ArtworkVisuallySimilarQuery = {
    readonly response: ArtworkVisuallySimilarQueryResponse;
    readonly variables: ArtworkVisuallySimilarQueryVariables;
};



/*
query ArtworkVisuallySimilarQuery(
  $artworkIDs: [String]
) {
  artworks(slugs: $artworkIDs) {
    ...ArtworkVisuallySimilar_artworks
    __id
  }
}

fragment ArtworkVisuallySimilar_artworks on Artwork {
  image {
    image_url
    versions
  }
  __id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "artworkIDs",
    "type": "[String]",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slugs",
    "variableName": "artworkIDs",
    "type": "[String]"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ArtworkVisuallySimilarQuery",
  "id": null,
  "text": "query ArtworkVisuallySimilarQuery(\n  $artworkIDs: [String]\n) {\n  artworks(slugs: $artworkIDs) {\n    ...ArtworkVisuallySimilar_artworks\n    __id\n  }\n}\n\nfragment ArtworkVisuallySimilar_artworks on Artwork {\n  image {\n    image_url\n    versions\n  }\n  __id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArtworkVisuallySimilarQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artworks",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artwork",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ArtworkVisuallySimilar_artworks",
            "args": null
          },
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArtworkVisuallySimilarQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artworks",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artwork",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "image",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "image_url",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "versions",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v2
        ]
      }
    ]
  }
};
})();
(node as any).hash = '5c60565dff91ab779aecb23b49848d7d';
export default node;

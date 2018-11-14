/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { SimilarArtworkGrid_artworks$ref } from "./SimilarArtworkGrid_artworks.graphql";
export type SimilarArtworkGridQueryRendererQueryVariables = {
    readonly artworkIDs?: ReadonlyArray<string | null> | null;
};
export type SimilarArtworkGridQueryRendererQueryResponse = {
    readonly artworks: ReadonlyArray<({
        readonly " $fragmentRefs": SimilarArtworkGrid_artworks$ref;
    }) | null> | null;
};
export type SimilarArtworkGridQueryRendererQuery = {
    readonly response: SimilarArtworkGridQueryRendererQueryResponse;
    readonly variables: SimilarArtworkGridQueryRendererQueryVariables;
};



/*
query SimilarArtworkGridQueryRendererQuery(
  $artworkIDs: [String]
) {
  artworks(slugs: $artworkIDs) {
    ...SimilarArtworkGrid_artworks
    __id
  }
}

fragment SimilarArtworkGrid_artworks on Artwork {
  id
  images {
    image_url
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
  "name": "SimilarArtworkGridQueryRendererQuery",
  "id": null,
  "text": "query SimilarArtworkGridQueryRendererQuery(\n  $artworkIDs: [String]\n) {\n  artworks(slugs: $artworkIDs) {\n    ...SimilarArtworkGrid_artworks\n    __id\n  }\n}\n\nfragment SimilarArtworkGrid_artworks on Artwork {\n  id\n  images {\n    image_url\n  }\n  __id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SimilarArtworkGridQueryRendererQuery",
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
            "name": "SimilarArtworkGrid_artworks",
            "args": null
          },
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SimilarArtworkGridQueryRendererQuery",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "images",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "image_url",
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
(node as any).hash = 'c43d8138b7780a3577f2222aa279e0dd';
export default node;

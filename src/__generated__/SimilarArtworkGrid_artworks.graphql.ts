/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _SimilarArtworkGrid_artworks$ref: unique symbol;
export type SimilarArtworkGrid_artworks$ref = typeof _SimilarArtworkGrid_artworks$ref;
export type SimilarArtworkGrid_artworks = ReadonlyArray<{
    readonly id: string;
    readonly images: ReadonlyArray<({
        readonly image_url: string | null;
    }) | null> | null;
    readonly " $refType": SimilarArtworkGrid_artworks$ref;
}>;



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "SimilarArtworkGrid_artworks",
  "type": "Artwork",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
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
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '2a2c544fe56c0544d069a3d2b2a27f0c';
export default node;

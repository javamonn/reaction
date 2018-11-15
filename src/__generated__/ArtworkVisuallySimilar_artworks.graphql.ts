/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _ArtworkVisuallySimilar_artworks$ref: unique symbol;
export type ArtworkVisuallySimilar_artworks$ref = typeof _ArtworkVisuallySimilar_artworks$ref;
export type ArtworkVisuallySimilar_artworks = ReadonlyArray<{
    readonly image: ({
        readonly image_url: string | null;
        readonly versions: ReadonlyArray<string | null> | null;
    }) | null;
    readonly " $refType": ArtworkVisuallySimilar_artworks$ref;
}>;



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "ArtworkVisuallySimilar_artworks",
  "type": "Artwork",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
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
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'e4f7ba9f7dc11161202c78509636eb8c';
export default node;

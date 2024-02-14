// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $people_index from "./routes/people/index.tsx";
import * as $search_index from "./routes/search/index.tsx";
import * as $startships_pag_ from "./routes/startships/[pag].tsx";
import * as $Counter from "./islands/Counter.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/people/index.tsx": $people_index,
    "./routes/search/index.tsx": $search_index,
    "./routes/startships/[pag].tsx": $startships_pag_,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;

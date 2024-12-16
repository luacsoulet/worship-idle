import vercel from "vite-plugin-vercel";
import { telefunc } from "telefunc/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [
    vike({
      prerender: true,
    }),
    react({}),
    telefunc(),
    vercel({
      source: "/.*",
    }),
  ],

  vercel: {
    additionalEndpoints: [
      {
        // entry file to the server. Default export must be a node server or a function
        source: "fastify-entry.ts",
        // replaces default Vike target
        destination: "ssr_",
        // already added by default Vike route
        route: false,
      },
    ],
  },
});

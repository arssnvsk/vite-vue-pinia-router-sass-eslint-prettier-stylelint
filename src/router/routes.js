const routes = [
  {
    path: "/",
    component: () => import("@/views/default.vue"),
    children: [
      { path: "", redirect: { path: "index" } },
      {
        path: "index",
        name: "index",
        component: () => import("@/pages/index.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/404.vue"),
  },
];

export default routes;

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/Index.vue"),
        children: [
          { path: "", component: () => import("../pages/IndexPage") },
          {
            path: "/Equilibrium",
            name: "equilibrium",
            component: () => import("../pages/Equilibrium")
          },
          { path: "", component: () => import("../pages/IndexPage") },
          {
            path: "/ydStudio",
            name: "ydstudio",
            component: () => import("../pages/ydStudio")
          }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;

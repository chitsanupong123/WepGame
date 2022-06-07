const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("pages/LoginPage.vue"),
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "new-page", component: () => import("pages/NewPage.vue") },
      { path: "check-page", component: () => import("pages/CheckPage.vue") },
      { path: "record-page", component: () => import("pages/RecordPage.vue") },
      { path: "static-page", component: () => import("pages/StaticPage.vue") },
      {
        path: "profile-page",
        component: () => import("pages/ProfilePage.vue"),
      },
      {
        path: "static-each",
        component: () => import("pages/StaticEachPage.vue"),
      },
      {
        path: "static-all",
        component: () => import("pages/StaticAllPage.vue"),
      },
      {
        path: "add-timline-page",
        component: () => import("src/pages/AddTimeLinePage.vue"),
      },
      {
        path: "hospital-contact",
        component: () => import("src/pages/HospitalContact.vue"),
      },
      {
        path: "hospital-detail",
        component: () => import("src/pages/HospitalDetail.vue"),
      },
      {
        path: "station",
        component: () => import("src/pages/StationPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

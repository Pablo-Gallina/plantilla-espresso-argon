/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Inventario from "views/examples/Inventario";
import AdministrarRoles from "views/examples/AdministrarRoles";
import Register from "views/examples/Register.js";
import GestionDeVentas from "views/examples/GestionDeVentas";
import Productos from "views/examples/Productos";
import Publicaciones from "views/examples/Publicaciones.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/publicaciones",
    name: "Publicaciones",
    icon: "ni ni-collection ",
    component: Publicaciones,
    layout: "/admin",
  },
  {
    path: "/administrar_roles",
    name: "Administrar roles",
    icon: "ni ni-bullet-list-67",
    component: AdministrarRoles,
    layout: "/admin",
  },
  {
    path: "/inventario",
    name: "Inventario",
    icon: "ni ni-archive-2",
    component: Inventario,
    layout: "/admin",
  },
  {
    path: "/productos",
    name: "Productos",
    icon: "ni ni-bag-17",
    component: Productos,
    layout: "/admin",
  },
  {
    path: "/gestion de ventas",
    name: "Gestion de ventas",
    icon: "ni ni-money-coins",
    component: GestionDeVentas,
    layout: "/admin",
  },

  {
    path: "/gestion de ventas",
    name: "Gestion de ventas",
    icon: "ni ni-money-coins",
    component: GestionDeVentas,
    layout: "/auth",
  },
];
export default routes;

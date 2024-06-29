import { lazy } from 'react';

export const Layout = lazy(() => import('../layout/layout'))
export const Login = lazy(() => import("../pages/login/login"))
export const Main = lazy(() => import('../pages/main/main'))
export const AboutUs = lazy(() => import('../pages/aboutUs/aboutUs'))
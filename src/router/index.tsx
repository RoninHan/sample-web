import React from 'react'
import { SmileOutlined } from '@ant-design/icons';
import { AntdLayout } from '@/layout';

import Login from '@/pages/login';
import { RouteProps } from '@/types/routes';
import { ErrorPage } from '@/pages/404';


const routes: RouteProps[] = [
    {
        path: "/",
        element: <AntdLayout />,
        meta: {
            name: "User",
            icon: <SmileOutlined />
        },
        children: [
            {
                path: "/login", // 路由路径
                meta: {
                    name: "Login",
                    icon: <SmileOutlined />
                },
                element: <Login />, // 懒加载 路由组件

            }
        ]
    },
    { path: '*', element: <ErrorPage /> }
];


export default routes;
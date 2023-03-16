import React from 'react';

import { Layout, Menu } from 'antd';
import { useRouterStore } from '@/stores';
import { getMenu } from './getMenu';


const { Sider } = Layout;


export const MenuList = (props: any) => {
    const { collapsed } = props;
    const RouterStore = useRouterStore()
    const menuList = RouterStore.GET_ROUTES;

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={getMenu(menuList)}
            />
        </Sider>
    )
}





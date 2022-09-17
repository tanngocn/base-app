import React, { ReactElement } from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

type props = {
    children: React.ReactNode;
}
function Layout({ children }: props) {
    return (
        <>
            <AppHeader />
            <main>
                {children}
            </main>
            <AppFooter />
        </>
    )
}
Layout.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default Layout;
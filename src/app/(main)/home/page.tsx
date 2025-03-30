import SideNavigation from '@/shared/components/side-navigation';
import { HomePage } from '.';

export const metadata = {
    title: 'Tran Hoang Anh Tu - Web Developer',
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
};

function HomePageRoute() {
    return (
        <>
            <SideNavigation />
            <HomePage />
        </>
    );
}

export default HomePageRoute;
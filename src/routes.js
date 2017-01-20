import Index from './components/pages/IndexPage.vue';
import Contact from './components/pages/ContactPage.vue';
import Informations from './components/pages/InformationsPage.vue';
import GitesList from './components/pages/GitesListPage.vue';
import Admin from './components/pages/AdminPage.vue';
import Test from './components/pages/TestPage.vue';


export const routes = [
    {
        path: '/',
        component: Index,
        children: [],
    },
    {
        path: '/contact',
        component: Contact,
        children: []
    },
    {
        path: '/info',
        component: Informations,
    },
    {
        path: '/test',
        component: Test,
    },
    {
        path: '/gites',
        component: GitesList,
    },
    {
        path: '/admin',
        component: Admin,
        children: []//add children ?
    }
];

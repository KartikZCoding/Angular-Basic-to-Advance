import { Routes } from '@angular/router';
// import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Users } from './pages/users/users';
import { UserDetails } from './pages/user-details/user-details';
import { Home } from './nestedRouting/pages/home/home';
import { User } from './nestedRouting/pages/user/user';
import { Profile } from './nestedRouting/pages/profile/profile';
import { Setting } from './nestedRouting/pages/setting/setting';
import { Products } from './components/products/products';
import { ProductsDetails } from './components/products-details/products-details';
import { UserList } from './components/user-list/user-list';
import { AddUser } from './components/add-user/add-user';
import { EditUser } from './components/edit-user/edit-user';

export const routes: Routes = [
    // {path:"", component:Home},
    // {path:"about", component:About},
    // {path:"contact", component:Contact},
    // {path:"contact/:name", component:Contact},
    // {path:"login", component:Login},
    // {path:"users", component:Users},
    // {path:"user-details/:id", component:UserDetails}
    // {path:"**", component:PageNotFound}
    // {path:"**", redirectTo:""}

    // { path: "", component: Home },
    // {
    //     path: "user", loadComponent:()=>import('./nestedRouting/pages/user/user').then((c)=>c.User),
    //     children: [
    //         // {path:"", redirectTo:"profile", pathMatch:'full'},
    //         {path:"profile", loadComponent:()=>import('./nestedRouting/pages/profile/profile').then((c)=>c.Profile)},
    //         {path:"setting", loadComponent:()=>import('./nestedRouting/pages/setting/setting').then((c)=>c.Setting)}
    //     ]
    // }

    // {path:"", component:Products},
    // {path:"details/:id", component:ProductsDetails}

    {path:"", component:UserList},
    {path:"add", component:AddUser},
    {path:"edit/:id", component:EditUser}

];

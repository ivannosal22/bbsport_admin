import { Routes } from '@angular/router';
import { SuperAdminModule } from '../../superAdmin/super-admin.module';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'super-admin',
        loadChildren: () => import('../../superAdmin/super-admin.module').then(m => m.SuperAdminModule)
    }
]; 
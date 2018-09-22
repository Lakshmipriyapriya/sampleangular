import { RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
export const routingModule:ModuleWithProviders = RouterModule.forRoot(routes)
const routes: Routes[];
{ path: 'products', component: ProductListComponent }
{ path: "product/:id", component: ProductDetailComponent }
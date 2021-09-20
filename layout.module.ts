import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';



@NgModule({
  declarations: [],
  imports: [
    ConfigModule.withConfig({
      layoutSlots: {
        header: {
          lg: {
            slots: [
                'MiniCart',
              'SiteContext',
              'SiteLogin',
              
              'SiteLogo',
              'NavigationBar',
              'SearchBox',
            ],
          },
        }
      }
    } as LayoutConfig),
  ]
})
export class LayoutConfigurationModule { }
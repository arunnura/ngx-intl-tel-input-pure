import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { NgxIntlTelInputPureComponent } from './ngx-intl-tel-input-pure.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    NgxIntlTelInputPureComponent,
    NativeElementInjectorDirective,
    DropdownComponent
  ],
  imports: [
    PortalModule,
    OverlayModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [NgxIntlTelInputPureComponent, NativeElementInjectorDirective],
})
export class NgxIntlTelInputPureModule {

}

import { NgModule } from '@angular/core';
import { NZ_ICONS } from 'ng-zorro-antd';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  UserOutline,
  SoundOutline,
  EditOutline,
  ShoppingCartOutline,
  TrophyOutline,
  MenuOutline,
  NumberOutline,
  StarOutline,
  GiftOutline,
  ThunderboltOutline,
  BankOutline,
  BarcodeOutline,
  MedicineBoxOutline,
  ControlOutline,
  SettingOutline,
  LockOutline,
  CodeOutline
} from '@ant-design/icons-angular/icons';

const icons = 
[
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  UserOutline,
  SoundOutline,
  EditOutline,
  ShoppingCartOutline,
  TrophyOutline,
  MenuOutline,
  NumberOutline,
  StarOutline,
  GiftOutline,
  ThunderboltOutline,
  BankOutline,
  BarcodeOutline,
  MedicineBoxOutline,
  ControlOutline,
  SettingOutline,
  LockOutline,
  CodeOutline
];

@NgModule({
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}

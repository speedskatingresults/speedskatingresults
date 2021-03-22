import { NgModule } from '@angular/core';
import { TreoDrawerModule } from '@treo/components/drawer';
import { LayoutComponent } from 'app/layout/layout.component';
import { EmptyLayoutModule } from 'app/layout/layouts/empty/empty.module';
import { CenteredLayoutModule } from 'app/layout/layouts/horizontal/centered/centered.module';
import { EnterpriseLayoutModule } from 'app/layout/layouts/horizontal/enterprise/enterprise.module';
import { MaterialLayoutModule } from 'app/layout/layouts/horizontal/material/material.module';
import { ModernLayoutModule } from 'app/layout/layouts/horizontal/modern/modern.module';
import { BasicLayoutModule } from 'app/layout/layouts/vertical/basic/basic.module';
import { ClassicLayoutModule } from 'app/layout/layouts/vertical/classic/classic.module';
import { ClassyLayoutModule } from 'app/layout/layouts/vertical/classy/classy.module';
import { CompactLayoutModule } from 'app/layout/layouts/vertical/compact/compact.module';
import { DenseLayoutModule } from 'app/layout/layouts/vertical/dense/dense.module';
import { FuturisticLayoutModule } from 'app/layout/layouts/vertical/futuristic/futuristic.module';
import { ThinLayoutModule } from 'app/layout/layouts/vertical/thin/thin.module';
import { SharedModule } from 'app/shared/shared.module';

const modules = [
    // Empty
    EmptyLayoutModule,

    // Horizontal navigation
    CenteredLayoutModule,
    EnterpriseLayoutModule,
    MaterialLayoutModule,
    ModernLayoutModule,

    // Vertical navigation
    BasicLayoutModule,
    ClassicLayoutModule,
    ClassyLayoutModule,
    CompactLayoutModule,
    DenseLayoutModule,
    FuturisticLayoutModule,
    ThinLayoutModule
];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports     : [
        SharedModule,
        ...modules
    ],
    exports     : [
        ...modules
    ]
})
export class LayoutModule
{
}

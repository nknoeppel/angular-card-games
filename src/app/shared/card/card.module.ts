import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { SuitIconComponent } from './suit-icon/suit-icon.component'
import { CoreModule } from '../../core/core.module';

@NgModule({
    imports: [
        CoreModule
    ],
    declarations: [
        CardComponent,
        SuitIconComponent
    ],
    exports: [
        CardComponent,
        SuitIconComponent
    ]
})
export class CardModule { }

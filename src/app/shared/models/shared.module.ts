import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  ConfigurationService,
  PortalCoreModule,
} from '@onecx/portal-integration-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { StepsModule } from 'primeng/steps';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { CanActivateGuard } from '../../service/can-active-guard.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({ extend: true, isolate: false }),
    ReactiveFormsModule,
    CheckboxModule,
    InputNumberModule,
    AccordionModule,
    AutoCompleteModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    GalleriaModule,
    InputTextareaModule,
    InputTextModule,
    PickListModule,
    ProgressBarModule,
    StepsModule,
    TabViewModule,
    DynamicDialogModule,
    DialogModule,
    TableModule,
    MessagesModule,
    MultiSelectModule,
    ErrorTailorModule.forRoot({
      controlErrorsOn: {
        async: true,
        blur: true,
        change: true,
      },
      errors: {
        useFactory: (i18n: TranslateService) => {
          return {
            required: () =>
              i18n.instant('GENERAL.ERRORS.EMPTY_REQUIRED_FIELD_ERROR'),
            email: i18n.instant('GENERAL.ERRORS.EMAIL_INVALID_ERROR'),
          };
        },
        deps: [TranslateService],
      },
      //this is required because primeng calendar wraps things in an ugly way
      blurPredicate: (element: Element) => {
        return [
          'INPUT',
          'TEXTAREA',
          'SELECT',
          'CUSTOM-DATE',
          'P-CALENDAR',
          'P-DROPDOWN',
        ].some((selector) => element.tagName === selector);
      },
    }),
  ],
  exports: [
    InputNumberModule,
    TranslateModule,
    AccordionModule,
    AutoCompleteModule,
    ButtonModule,
    CalendarModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    GalleriaModule,
    InputTextareaModule,
    InputTextModule,
    PickListModule,
    ProgressBarModule,
    ReactiveFormsModule,
    StepsModule,
    TabViewModule,
    DynamicDialogModule,
    DialogModule,
    CheckboxModule,
    TableModule,
    MultiSelectModule,
  ],
  providers: [CanActivateGuard],
})
export class SharedModule {
  constructor(private tx: TranslateService) {
    console.log(`Shared module constructor ${this.tx.currentLang}`);
  }
}

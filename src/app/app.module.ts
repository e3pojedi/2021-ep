import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from "@angular/material";
import { RouterModule, Routes } from "@angular/router";
import { PeopleService } from "./services/people.service";

// COMPONENTS
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AddComponent } from "./add/add.component";
import { ListComponent } from "./list/list.component";
import { EditComponent } from "./edit/edit.component";
import { DialogComponent } from "./dialog/dialog.component";

import { DatepickerComponent } from "./datepicker/datepicker.component";
import { SelectComponent } from "./select/select.component";
import { RadioComponent } from "./radio/radio.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { SliderComponent } from "./slider/slider.component";
import { DataService } from "./services/data.service";
import { AddFieldComponent } from "./add-field/add-field.component";
import { SlideToggleComponent } from "./slide-toggle/slide-toggle.component";
import { ValidationComponent } from "./validation/validation.component";
import { ReversePipe } from "./reverse.pipe";
import { LinearComponent } from "./linear/linear.component";
import { MinMaxComponent } from "./min-max/min-max.component";
import { ProcessingstringsComponent } from "./processingstrings/processingstrings.component";
import { BinarysortComponent } from "./binarysort/binarysort.component";
import { FeelingsCheckupComponent } from "./feelings-checkup/feelings-checkup.component";
import { OldHomeComponent } from "./old-home/old-home.component";
import { FeelingsCheckupPt2Component } from "./feelings-checkup-pt2/feelings-checkup-pt2.component";
import { FeelingsFeedbackComponent } from "./feelings-feedback/feelings-feedback.component";
import { MainHomePageComponent } from "./main-home-page/main-home-page.component";
import { TestingFormsComponent } from "./testing-forms/testing-forms.component";

// ROUTING
const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "select", component: SelectComponent },
  { path: "radio", component: RadioComponent },
  { path: "datepicker", component: DatepickerComponent },
  { path: "checkbox", component: CheckboxComponent },
  { path: "slider", component: SliderComponent },
  { path: "slide-toggle", component: SlideToggleComponent },
  { path: "add", component: AddComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "list", component: ListComponent },
  { path: "validation", component: ValidationComponent },
  { path: "addField", component: AddFieldComponent },
  { path: "linear", component: LinearComponent },
  { path: "min-max", component: MinMaxComponent },
  { path: "processstring", component: ProcessingstringsComponent },
  { path: "binarysort", component: BinarysortComponent },
  { path: "feelingscheckup", component: FeelingsCheckupComponent },
  { path: "feelingscheckup2", component: FeelingsCheckupPt2Component },
  { path: "feelingsfeedback", component: FeelingsFeedbackComponent },
  { path: "mainhomepage", component: MainHomePageComponent },
  { path: "testing-forms", component: TestingFormsComponent },

  { path: "oldhome", component: OldHomeComponent },

  { path: "**", component: HomeComponent }
];

// MODULES
@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    BrowserModule,
    FormsModule,
    MatChipsModule,
    BrowserAnimationsModule,
    MatInputModule,
    // ROUTING
    RouterModule.forRoot(
      appRoutes
      //  { enableTracing: true } // <-- debugging purposes only
    )
  ], // end imports
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    DialogComponent,
    DatepickerComponent,
    SelectComponent,
    RadioComponent,
    CheckboxComponent,
    SliderComponent,
    AddFieldComponent,
    SlideToggleComponent,
    ValidationComponent,
    ReversePipe,
    LinearComponent,
    MinMaxComponent,
    ProcessingstringsComponent,
    BinarysortComponent,
    FeelingsCheckupComponent,
    OldHomeComponent,
    FeelingsCheckupPt2Component,
    FeelingsFeedbackComponent,
    MainHomePageComponent,
    TestingFormsComponent
  ],
  bootstrap: [AppComponent],
  providers: [PeopleService, DataService],
  entryComponents: [DialogComponent]
})
export class AppModule {}

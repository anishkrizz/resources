import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from 'src/app/components/confirmation-dialog/confirmation-dialog.service';
import { CustomDateParserFormatter } from 'src/app/utils/dateFormat/CustomDateParserFormatter';


import { AccountsGLComponent } from './Master/AccountsGL/accounts-gl/accounts-gl.component';
import { AccountsGLEditComponent } from './Master/AccountsGL/accounts-gledit/accounts-gledit.component';
import { AffiliatedClubMasterComponent } from './Master/affiliated-club-master/affiliated-club-master-List/affiliated-club-master.component';
import { AffiliatedClubMasterEditComponent } from './Master/affiliated-club-master/affiliated-club-master-edit/affiliated-club-master-edit.component';
import { AnnouncementMasterListComponent } from './Master/AnnouncementMaster/announcement-master-list/announcement-master-list.component';
import { AnnouncementMasterEditComponent } from './Master/AnnouncementMaster/announcement-master-edit/announcement-master-edit.component';
import { BranchMasterListComponent } from './Master/branch-master/branch-master-list/branch-master-list.component';
import { BranchMasterEditComponent } from './Master/branch-master/branch-master-edit/branch-master-edit.component';
import { CashBankMasterListComponent } from './Master/CashBankMaster/CashBankMasterList/cashBankMasterList.component';
import { CashBankMasterEditComponent } from './Master/CashBankMaster/CashBankMasterEdit/cashBankMasterEdit.component';
import { ChargeMasterListComponent } from './Master/ChargeMaster/charge-master-list/charge-master-list.component';
import { ChargeMasterEditComponent } from './Master/ChargeMaster/charge-master-edit/charge-master-edit.component';
import { CommitteemasterListComponent } from './Master/CommitteeMaster/committeemaster-list/committeemaster-list.component';
import { CommitteemasterEditComponent } from './Master/CommitteeMaster/committeemaster-edit/committeemaster-edit.component';
import { CommonMasterListComponent } from './Master/CommonMaster/CommonMasterList/commonMasterList.component';
import { CommonMasterEditComponent } from './Master/CommonMaster/CommonMasterEdit/commonMasterEdit.component';
import { CorporateMasterListComponent } from './Master/CorporateMaster/corporate-master-list/corporate-master-list.component';
import { CorporateMasterEditComponent } from './Master/CorporateMaster/corporate-master-edit/corporate-master-edit.component';
import { DocTypeEditComponent } from './Master/Doc Type Master/doc-type-edit/doc-type-edit.component';
import { DocTypeListComponent } from './Master/Doc Type Master/doc-type-list/doc-type-list.component';
import { EmailGroupListComponent } from './Master/EmailGroup/email-group-list/email-group-list.component';
import { EmailGroupEditComponent } from './Master/EmailGroup/email-group-edit/email-group-edit.component';
import { EmailServerSetupComponent } from './Master/EmailServerSetup/emailServerSetup.component';
import { EntranceFeeMasterListComponent } from './Master/EntranceFeeMaster/entrance-fee-master-list/entrance-fee-master-list.component';
import { EntranceFeeMasterEditComponent } from './Master/EntranceFeeMaster/entrance-fee-master-edit/entrance-fee-master-edit.component';
import { GroupMasterComponent } from './Master/GroupMaster/group-master/group-master.component';
import { GroupMasterCreateComponent } from './Master/GroupMaster/group-master-create/group-master-create.component';
import { InstrumentMasterListComponent } from './Master/InstrumentMaster/instrument-master-list/instrument-master-list.component';
import { InstrumentMasterEditComponent } from './Master/InstrumentMaster/instrument-master-edit/instrument-master-edit.component';
import { KSCASubsTagEditComponent } from './Master/KSCASubsTag-master/kscasubs-tag-edit/kscasubs-tag-edit.component';
import { MemberSetupComponent } from './Master/member-setup/member-setup.component';
import { MemberGroupListComponent } from './Master/MemberGroup/member-group-list/member-group-list.component';
import { MemberGroupEditComponent } from './Master/MemberGroup/member-group-edit/member-group-edit.component';
import { MemberMasterListComponent } from './Master/MemberMaster/member-master-list/member-master-list.component';
import { MemberMasterEditComponent } from './Master/MemberMaster/member-master-edit/member-master-edit.component';
import { MmMailTemplateComponent } from './Master/MM_MailTemplate/mm-mail-template/mm-mail-template.component';
import { OtherItemListComponent } from './Master/OtherItemMaster/other-item-list/other-item-list.component';
import { OtherItemEditComponent } from './Master/OtherItemMaster/other-item-edit/other-item-edit.component';
import { ProfitCenterListComponent } from './Master/profitcenter/profit-center-list/profit-center-list.component';
import { ProfitCenterEditComponent } from './Master/profitcenter/profit-center-edit/profit-center-edit.component';
import { RelationMasterListComponent } from './Master/RelationMaster/RelationMasterList/relationMasterList.component';
import { RelationMasterEditComponent } from './Master/RelationMaster/RelationMasterEdit/relationMasterEdit.component';
import { ReminderLetterMasterComponent } from './Master/reminder-letter-master/reminder-letter-master.component';
import { RoundFeeMasterListComponent } from './Master/round-fee-master/round-fee-master-list/round-fee-master-list.component';
import { RoundFeeMasterComponent } from './Master/round-fee-master/round-fee-master.component';
import { SMSGroupMasterListComponent } from './Master/SMSGroupMaster/smsgroup-master-list/smsgroup-master-list.component';
import { SMSGroupMasterEditComponent } from './Master/SMSGroupMaster/smsgroup-master-edit/smsgroup-master-edit.component';
import { SMSTemplateMasterComponent } from './Master/smstemplate-master/smstemplate-master.component';
import { SmstemplateMasterListComponent } from './Master/smstemplate-master/smstemplate-master-list/smstemplate-master-list.component';
import { StatusSetupComponent } from './Master/status-setup/status-setup.component';
import { SubCategoryListComponent } from './Master/SubCategoryMaster/sub-category-list/sub-category-list.component';
import { SubCategoryEditComponent } from './Master/SubCategoryMaster/sub-category-edit/sub-category-edit.component';
import { SubLedgerMasterListComponent } from './Master/SubLedgerMaster/sub-ledger-master-list/sub-ledger-master-list.component';
import { SubLedgerMasterEditComponent } from './Master/SubLedgerMaster/sub-ledger-master-edit/sub-ledger-master-edit.component';
import { SubscriptionListComponent } from './Master/SubscriptionMaster/subscription-list/subscription-list.component';
import { SubscriptionEditComponent } from './Master/SubscriptionMaster/subscription-edit/subscription-edit.component';
import { SubscriptionTaggingEditComponent } from './Master/SubscriptionTagging/subscription-tagging-edit/subscription-tagging-edit.component';
import { TaxGroupListComponent } from './Master/TaxGroupMaster/tax-group-list/tax-group-list.component';
import { TaxGroupEditComponent } from './Master/TaxGroupMaster/tax-group-edit/tax-group-edit.component';
import { TaxMasterListComponent } from './Master/TaxMaster/tax-master-list/tax-master-list.component';
import { TaxMasterEditComponent } from './Master/TaxMaster/tax-master-edit/tax-master-edit.component';
import { BulkCreditDebitComponent } from './Transaction/bulk-credit-debit/bulk-credit-debit.component';
import { BulkCreditDebitListComponent } from './Transaction/bulk-credit-debit-list/bulk-credit-debit-list.component';
import { CategoryConversionEditComponent } from './Transaction/CategoryConversion/category-conversion-edit/category-conversion-edit.component';
import { CommunicationDetailsComponent } from './Transaction/CommunicationDetails/communication-details/communication-details.component';
import { CommunicationDetailsEditComponent } from './Transaction/CommunicationDetails/communication-details-edit/communication-details-edit.component';
import { CNIListComponent } from './Transaction/CorporateNomineesIncluion/cnilist/cnilist.component';
import { CNIEditComponent } from './Transaction/CorporateNomineesIncluion/cniedit/cniedit.component';
import { CreditDebitNoteListComponent } from './Transaction/CreditDebitNote/credit-debit-note-list/credit-debit-note-list.component';
import { CreditDebitNoteEditComponent } from './Transaction/CreditDebitNote/credit-debit-note-edit/credit-debit-note-edit.component';
import { FacilityTaggingComponent } from './Transaction/FacilityTagging/facility-tagging/facility-tagging.component';
import { FacilityTaggingEditComponent } from './Transaction/FacilityTagging/facility-tagging-edit/facility-tagging-edit.component';
import { FirewallEditComponent } from './Transaction/firewall/firewall-edit/firewall-edit.component';
import { GeneralSMSComponent } from './Transaction/general-sms/general-sms.component';
import { JournalVoucherListComponent } from './Transaction/JournalVoucher/journal-voucher-list/journal-voucher-list.component';
import { JournalVoucherEditComponent } from './Transaction/JournalVoucher/journal-voucher-edit/journal-voucher-edit.component';
import { LifeMemberTransferListComponent } from './Transaction/LifeMemberTransfer/life-member-transfer-list/life-member-transfer-list.component';
import { LifeMemberTransferEditComponent } from './Transaction/LifeMemberTransfer/life-member-transfer-edit/life-member-transfer-edit.component';
import { MemberTransferComponent } from './Transaction/member-transfer/member-transfer.component';
import { MemberActivationComponent } from './Transaction/MemberActvation/member-activation-edit/member-activation-edit.component';
import { MemberActivationListComponent } from './Transaction/MemberActvation/member-activation-list/member-activation-list.component';
import { MemberReceiptListComponent } from './Transaction/MemberReceipt/member-receipt-list/member-receipt-list.component';
import { MemberReceipEditComponent } from './Transaction/MemberReceipt/member-receip-edit/member-receip-edit.component';
import { NomineeInclusionListComponent } from './Transaction/NomineeInclusion/nominee-inclusion-list/nominee-inclusion-list.component';
import { NomineeInclusionEditComponent } from './Transaction/NomineeInclusion/nominee-inclusion-edit/nominee-inclusion-edit.component';
import { NomineeInclusionService } from 'src/app/services/MemberModule/Transaction/nominee-inclusion.service';
import { OthersDebitListComponent } from './Transaction/OthersDebit/others-debit-list/others-debit-list.component';
import { OthersDebitEditComponent } from './Transaction/OthersDebit/others-debit-edit/others-debit-edit.component';
import { ReceiptPaymentListComponent } from './Transaction/ReceiptAndPayment/receipt-payment-list/receipt-payment-list.component';
import { ReceiptPaymentEditComponent } from './Transaction/ReceiptAndPayment/receipt-payment-edit/receipt-payment-edit.component';
import { ReminderLetterTransListComponent } from './Transaction/reminder-letter/reminder-letter-trans-list/reminder-letter-trans-list.component';
import { ReminderLetterComponent } from './Transaction/reminder-letter/reminder-letter-trans.component';
import { SubscriptionPostingComponent } from './Transaction/SubscriptionPosting/subscription-posting/subscription-posting.component';
import { SubscriptionPostingListComponent } from './Transaction/SubscriptionPosting/subscription-posting-list/subscription-posting-list.component';
import { CollectionReportComponent } from './Report/collection-report/collection-report.component';
import { AgeningReportComponent } from './Report/agening-report/agening-report.component';
import { CorporateMasterReportComponent } from './Report/corporate-master-report/corporate-master-report.component';
import { CreditDebitNoteComponent } from './Report/credit-debit-note/credit-debit-note.component';
import { DependentDetailsComponent } from './Report/dependent-details/dependent-details.component';
import { FacilityAddendanceComponent } from './Report/Facility-Attendance/facility-addendance/facility-addendance.component';
import { MemberPlayReportComponent } from './Report/Facility-Attendance/member-play-report/member-play-report.component';
import { MemberAddressListComponent } from './Report/member-address-list/member-address-list.component';
import { MemberCreditDebitAdviceComponent } from './Report/member-credit-debit-advice/member-credit-debit-advice.component';
import { MemberDirectoryComponent } from './Report/member-directory/member-directory.component';
import { MemberDOBWeddingComponent } from './Report/member-dobwedding/member-dobwedding.component';
import { MemberLedgerOutstandingComponent } from './Report/member-ledger-outstanding/member-ledger-outstanding.component';
import { MemberReceiptComponent } from './Report/member-receipt/member-receipt.component';
import { MemberStatusComponent } from './Report/member-status/member-status.component';
import { MonthBillDetailComponent } from './Report/month-bill-detail/month-bill-detail.component';
import { OutstandingReportComponent } from './Report/outstanding-report/outstanding-report.component';
import { ReminderLettersComponent } from './Report/reminder-letters/reminder-letters.component';
import { SubscriptionDetailsComponent } from './Report/subscription-details/subscription-details.component';
import { TransactionRegisterComponent } from './Report/transaction-register/transaction-register.component';
import { POSModule } from '../POS_MODULE/pos.module';
import { DocUploadMasterComponent } from './Master/doc-upload-master/doc-upload-master.component';
import { SharedModule } from '../shared/shared.module';
import { GeneralEmailComponent } from './Transaction/general-email/general-email.component';
import { GSTReportComponent } from './Report/gstreport/gstreport.component';
import { RoundChargesPostingComponent } from './Transaction/round-charges-posting/round-charges-posting.component';
import { RoundChargesPostingReportComponent } from './Transaction/round-charges-posting-report/round-charges-posting-report.component';
import { FacilityOffInComponent } from './Transaction/facility-off-in/facility-off-in.component';
import { MemberSearchComponent } from './Report/member-search/member-search.component';
import { FlatOwnerDetailsEditComponent } from './Master/FlatOwnerDetails/flat-owner-details-edit/flat-owner-details-edit.component';
import { FlatOwnerDetailsListComponent } from './Master/FlatOwnerDetails/flat-owner-details-list/flat-owner-details-list.component';
import { SubscriptionAuditTrailComponent } from './Report/subscription-audit-trail/subscription-audit-trail.component';
import { TransferOfOccupancyEditComponent } from './Master/TransferOfOccupancy/transfer-of-occupancy-edit/transfer-of-occupancy-edit.component';
import { TransferOfOccupancyListComponent } from './Master/TransferOfOccupancy/transfer-of-occupancy-list/transfer-of-occupancy-list.component';
import { TransferOfFlatOwnershipEditComponent } from './Master/TransferOfFlatOwnership/transfer-of-flat-ownership-edit/transfer-of-flat-ownership-edit.component';
import { TransferOfFlatOwnershipListComponent } from './Master/TransferOfFlatOwnership/transfer-of-flat-ownership-list/transfer-of-flat-ownership-list.component';
import { NightAuditAllComponent } from './Transaction/night-audit-all/night-audit-all.component';
import { FlatOccupancyReportComponent } from './Report/flat-occupancy-report/flat-occupancy-report.component';
import { FlatOccupancyHistoryComponent } from './Report/flat-occupancy-history/flat-occupancy-history.component';
import { UnitMasterEditComponent } from './Master/UnitMaster/unit-master-edit/unit-master-edit.component';
import { UnitMasterListComponent } from './Master/UnitMaster/unit-master-list/unit-master-list.component';
import { UnitWiseMemberDetailsComponent } from './Report/unit-wise-member-details/unit-wise-member-details.component';
import { UnitWiseOutstandingReportComponent } from './Report/unit-wise-outstanding-report/unit-wise-outstanding-report.component';
import { BillRegisterComponent } from './Report/bill-register/bill-register.component';
import { ClearanceOfBillComponent } from './Transaction/clearance-of-bill/clearance-of-bill.component';
import { CombinedCollectionReportComponent } from './Report/combined-collection-report/combined-collection-report.component';
import { PresidentReportComponent } from './Report/president-report/president-report.component';
import { MemberDetailsComponent } from './Report/member-details/member-details.component';
import { MatRadioModule } from '@angular/material/radio';
import { SmartCardModule } from '../SmartCardModule/smart-card.module';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { OverdueReportComponent } from './Report/OverDue-Report/overdue-report/overdue-report.component';
import { ReceiptPaymentVoidReportComponent } from './Report/receipt-payment-void-report/receipt-payment-void-report.component';
import { MinimumUsageChargesComponent } from './Report/minimum-usage-charges/minimum-usage-charges.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { DxButtonModule, DxDataGridModule, DxFormModule, DxHtmlEditorModule, DxPopupModule, DxRadioGroupModule, DxScrollViewModule, DxSelectBoxModule, DxTabPanelModule, DxTemplateModule, DxTreeListModule } from 'devextreme-angular';
import { SubscriptionDet } from 'src/app/models/Member Module/Transaction/CreditDebitNoteModel';
import { OutstandingBillWiseComponent } from './Report/outstanding-bill-wise/outstanding-bill-wise.component';
import { WhatsappSetupComponent } from './Master/WhatsAppSetup/whatsapp-setup/whatsapp-setup.component';
import { AdjustmentSummaryListingComponent } from './Report/Adjustment-Summary-Report/adjustment-summary-listing/adjustment-summary-listing.component';
import { MemberGstReportComponent } from './Report/Member-GST-Report/member-gst-report/member-gst-report.component';
import { MultipleMemberLedgerReportComponent } from './Report/multiple-member-ledger-report/multiple-member-ledger-report.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EinvoiceComponent } from './Transaction/einvoice/einvoice.component';
import { ImportExcelComponent } from './Transaction/import-excel/import-excel.component';
import { DxBoxModule, DxDateBoxModule } from 'devextreme-angular';
import { MemberAcountInfoComponent } from './Master/member-acount-info/member-acount-info.component';
import { DynamicFormComponent } from './Master/MemberMaster/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './Master/MemberMaster/dynamic-form/dynamic-form-question.component';


const routes: Routes = [
  {
    path: 'GLMaster/:moduleName',
    component: AccountsGLComponent,
  },
  {
    path: 'GLMasterEdit/:id/:moduleName',
    component: AccountsGLEditComponent
  },
  {
    path: 'AffiliatedClubList/:moduleName',
    component: AffiliatedClubMasterComponent,
  },
  {
    path: 'AffiliatedClubEdit/:ClubCode/:moduleName',
    component: AffiliatedClubMasterEditComponent,
  },
  {
    path: 'AnnouncementMasterList',
    component: AnnouncementMasterListComponent,
  },
  {
    path: 'AnnouncementMasterEdit/:id',
    component: AnnouncementMasterEditComponent,
  },
  {
    path: 'BranchMaster',
    component: BranchMasterListComponent,
  },
  {
    path: 'BranchMasterEdit/:id',
    component: BranchMasterEditComponent,
  },
  {
    path: 'CashBankMaster',
    component: CashBankMasterListComponent,
  },
  {
    path: 'CashBankMasterEdit/:id',
    component: CashBankMasterEditComponent,
  },
  {
    path: 'ChargeList',
    component: ChargeMasterListComponent,
  },
  {
    path: 'ChargeEdit/:id',
    component: ChargeMasterEditComponent,
  },
  {
    path: 'CommitteeMasterList',
    component: CommitteemasterListComponent,
  },
  {
    path: 'CommitteeMasterEdit/:id',
    component: CommitteemasterEditComponent,
  },
  {
    path: 'CommonMaster/:moduleName',
    component: CommonMasterListComponent,
  },
  {
    path: 'CommonMasterEdit/:CCode/:MData/:moduleName',
    component: CommonMasterEditComponent,
  },
  {
    path: 'CorporateMasterList',
    component: CorporateMasterListComponent,
  },
  {
    path: 'CorporateMasterEdit/:id',
    component: CorporateMasterEditComponent,
  },
  {
    path: 'DoctypeMasterEdit/:id/:moduleName',
    component: DocTypeEditComponent
  },
  {
    path: 'DoctypeMasterList/:moduleName',
    component: DocTypeListComponent,
  },
  {
    path: 'EmailGroupList',
    component: EmailGroupListComponent,
  },
  {
    path: 'EmailGroupEdit/:id',
    component: EmailGroupEditComponent,
  },
  {
    path: 'EmailServerSetup',
    component: EmailServerSetupComponent,
  },
  {
    path: 'EntranceFeeList/:ModuleName',
    component: EntranceFeeMasterListComponent,
  },
  {
    path: 'EntranceFeeEdit/:ModuleName/:FeeType/:EffectFrom',
    component: EntranceFeeMasterEditComponent,
  },
  {
    path: 'EntranceFeeEdit/:FeeType',
    component: EntranceFeeMasterEditComponent,
  },
  {
    path: 'GroupMaster/:moduleName',
    component: GroupMasterComponent,
  },
  {
    path: 'GroupMasterCreate/:id/:moduleName',
    component: GroupMasterCreateComponent,
  },
  {
    path: 'InstrumentMasterList',
    component: InstrumentMasterListComponent,
  },
  {
    path: 'InstrumentMasterEdit/:id',
    component: InstrumentMasterEditComponent,
  },
  {
    path: 'Subslist',
    component: KSCASubsTagEditComponent,
  },
  {
    path: 'MemberSetup',
    component: MemberSetupComponent,
  },
  {
    path: 'MemberGroupList',
    component: MemberGroupListComponent,
  },
  {
    path: 'MemberGroupEdit/:id',
    component: MemberGroupEditComponent,
  },
  {
    path: 'MemberMasterList',
    component: MemberMasterListComponent,
  },
  {
    path:'DynamicForm',
    component:DynamicFormComponent
  },
  {
    path: 'MemberMasterEdit/:type/:id',
    component: MemberMasterEditComponent,
  },
  {
    path: 'Authorization/:id',
    component: MmMailTemplateComponent
  },
  {
    path: 'OtherItemList',
    component: OtherItemListComponent,
  },
  {
    path: 'OtherItemEdit/:id',
    component: OtherItemEditComponent,
  },
  {
    path: 'ProfitCenterList/:moduleName',
    component: ProfitCenterListComponent,
  },
  {
    path: 'ProfitCenterEdit/:id/:moduleName',
    component: ProfitCenterEditComponent,
  },
  {
    path: 'RelationMaster',
    component: RelationMasterListComponent,
  },
  {
    path: 'RelationMasterEdit/:id',
    component: RelationMasterEditComponent,
  },
  {
    path: 'ReminderLetterMaster',
    component: ReminderLetterMasterComponent,
  },
  {
    path: 'RoundFeeMasterList',
    component: RoundFeeMasterListComponent,
  },
  {
    path: 'RoundFeeMaster/:id',
    component: RoundFeeMasterComponent,
  },
  {
    path: 'SMSGroupMasterList',
    component: SMSGroupMasterListComponent,
  },
  {
    path: 'SMSGroupMasterEdit/:id',
    component: SMSGroupMasterEditComponent,
  },
  {
    path: 'SMSTemplate/:id/:smstype',
    component: SMSTemplateMasterComponent,
  },
  {
    path: 'SMSTemplate',
    component: SmstemplateMasterListComponent,
  },
  {
    path: 'StatusSetup',
    component: StatusSetupComponent,
  },
  {
    path: 'SubCategoryList/:moduleName',
    component: SubCategoryListComponent,
  },
  {
    path: 'SubCategoryEdit/:id/:moduleName',
    component: SubCategoryEditComponent,
  },
  {
    path: 'SubLedgerMasterList/:moduleName',
    component: SubLedgerMasterListComponent,
  },
  {
    path: 'SubLedgerMasterEdit/:id/:slcode/:moduleName',
    component: SubLedgerMasterEditComponent,
  },
  {
    path: 'SubscriptionList',
    component: SubscriptionListComponent,
  },
  {
    path: 'SubscriptionEdit/:id',
    component: SubscriptionEditComponent
  },
  {
    path: 'SubscriptionTagging',
    component: SubscriptionTaggingEditComponent,
  },
  {
    path: 'TaxGroupMaster/:moduleName',
    component: TaxGroupListComponent,
  },
  {
    path: 'TaxGroupMasterEdit/:id/:moduleName',
    component: TaxGroupEditComponent,
  },
  {
    path: 'TaxMaster/:moduleName',
    component: TaxMasterListComponent,
  },
  {
    path: 'TaxMasterEdit/:id/:moduleName',
    component: TaxMasterEditComponent,
  },
  {
    path: 'BulkCreditDebit',
    component: BulkCreditDebitComponent,
  },
  {
    path: 'BulkCreditDebitList',
    component: BulkCreditDebitListComponent,
  },
  {
    path: 'CategoryConversionList',
    component: CategoryConversionEditComponent,
  },
  {
    path: 'CommunicationDetailList',
    component: CommunicationDetailsComponent,
  },
  {
    path: 'CommunicationDetailEdit/:id',
    component: CommunicationDetailsEditComponent,
  },
  {
    path: 'CNIList',
    component: CNIListComponent,
  },
  {
    path: 'CNIEdit/:id',
    component: CNIEditComponent,
  },
  {
    path: 'CreditNoteList/:type',
    component: CreditDebitNoteListComponent,
  },
  {
    path: 'CreditNoteEdit/:type/:id',
    component: CreditDebitNoteEditComponent,
  },
  {
    path: 'DebitNoteList/:type',
    component: CreditDebitNoteListComponent,
  },
  {
    path: 'DebitNoteEdit/:type/:id',
    component: CreditDebitNoteEditComponent,
  },
  {
    path: 'FacilityTagging',
    component: FacilityTaggingComponent,
  },
  {
    path: 'FacilityTaggingEdit/:id',
    component: FacilityTaggingEditComponent,
  },
  {
    path: 'Firewall',
    component: FirewallEditComponent,
  },
  {
    path: 'GeneralSMS',
    component: GeneralSMSComponent,
  },
  {
    path: 'JournalVoucherList/:moduleName',
    component: JournalVoucherListComponent,
  },
  {
    path: 'JournalVoucherEdit/:id/:moduleName',
    component: JournalVoucherEditComponent,
  },
  {
    path: 'LifeMemberTransferList',
    component: LifeMemberTransferListComponent,
  },
  {
    path: 'LifeMemberTransferEdit/:id',
    component: LifeMemberTransferEditComponent,
  },
  {
    path: 'MemberTransfer',
    component: MemberTransferComponent,
  },
  {
    path: 'activationedit/:type/:id',
    component: MemberActivationComponent,
  },
  {
    path: 'activationlist/:id',
    component: MemberActivationListComponent,
  },
  {
    path: 'MemberReceiptList',
    component: MemberReceiptListComponent,
  },
  {
    path: 'MemberReceiptEdit/:id',
    component: MemberReceipEditComponent,
  },
  {
    path: 'NomineeInclusionList',
    component: NomineeInclusionListComponent,
  },
  {
    path: 'NomineeInclusionEdit/:id',
    component: NomineeInclusionEditComponent,
    resolve: {
      data: NomineeInclusionService
    }
  },
  {
    path: 'OthersDebitList/:moduleName',
    component: OthersDebitListComponent,
  },
  {
    path: 'OthersDebitEdit/:id/:moduleName',
    component: OthersDebitEditComponent,
  },
  {
    path: 'ReceiptPaymentList/:moduleName/:type',
    component: ReceiptPaymentListComponent,
  },
  {
    path: 'ReceiptPaymentEdit/:id/:moduleName/:type',
    component: ReceiptPaymentEditComponent,
  },
  {
    path: 'ReceiptPayment/:moduleName/:type',
    component: ReceiptPaymentEditComponent,
  },
  {
    path: 'ReminderLetterTrans',
    component: ReminderLetterTransListComponent,
  },
  {
    path: 'ReminderLetterTransEdit/:id',
    component: ReminderLetterComponent,
  },
  {
    path: 'SubscriptionPosting/:id/:type',
    component: SubscriptionPostingComponent,
  },
  {
    path: 'SubscriptionPostingList/:type',
    component: SubscriptionPostingListComponent,
  },
  {
    path: 'AgeningReport',
    component: AgeningReportComponent,
  },
  {
    path: 'CorporateMasterReport',
    component: CorporateMasterReportComponent,
  },
  {
    path: 'CreditDebitNoteReport',
    component: CreditDebitNoteComponent,
  },
  {
    path: 'DependentDetails',
    component: DependentDetailsComponent,
  },
  {
    path: 'AttendanceReport',
    component: FacilityAddendanceComponent,
  },
  {
    path: 'MemberPlayReport',
    component: MemberPlayReportComponent,
  },
  {
    path: 'MemberAddressList',
    component: MemberAddressListComponent,
  },
  {
    path: 'MemberCreditDebitAdvice',
    component: MemberCreditDebitAdviceComponent,
  },
  {
    path: 'MemberDirectory',
    component: MemberDirectoryComponent,
  },
  {
    path: 'MemberDOBWedding',
    component: MemberDOBWeddingComponent,
  },
  {
    path: 'MemberLedgerOutstanding',
    component: MemberLedgerOutstandingComponent,
  },
  {
    path: 'MemberReceipt',
    component: MemberReceiptComponent,
  },
  {
    path: 'MemberStatus',
    component: MemberStatusComponent,
  },
  {
    path: 'MonthBill/:type',
    component: MonthBillDetailComponent,
  },
  {
    path: 'OutstandingReport',
    component: OutstandingReportComponent
  },
  {
    path: 'ReminderLetters',
    component: ReminderLettersComponent,
  },
  {
    path: 'SubscriptionDetails',
    component: SubscriptionDetailsComponent,
  },
  {
    path: 'TransactionRegister',
    component: TransactionRegisterComponent,
  },
  {
    path: 'StatusSetup',
    component: StatusSetupComponent,
  },
  {
    path: 'EnteranceCollectionReport',
    component: CollectionReportComponent,
  },
  {
    path: 'GeneralEmail',
    component: GeneralEmailComponent,
  },
  {
    path: 'GSTReport',
    component: GSTReportComponent,
  },
  {
    path: 'RoundCharges',
    component: RoundChargesPostingComponent,
  },
  {
    path: 'RoundChargesPostingReport',
    component: RoundChargesPostingReportComponent,
  },
  {
    path: 'FacilityOffIn',
    component: FacilityOffInComponent,
  },
  {
    path: 'MemberSearch/:formtype',
    component: MemberSearchComponent,
  },
  {
    path: 'FlatOwnerDetailsList',
    component: FlatOwnerDetailsListComponent,
  },
  {
    path: 'FlatOwnerDetailsEdit/:id',
    component: FlatOwnerDetailsEditComponent,
  }, {
    path: 'SubscriptionAuditTrail',
    component: SubscriptionAuditTrailComponent,
  },
  {
    path: 'TransferOfOccupancyList',
    component: TransferOfOccupancyListComponent,
  },
  {
    path: 'TransferOfOccupancyEdit/:id',
    component: TransferOfOccupancyEditComponent,
  },
  {
    path: 'TransferOfFlatOwnerList',
    component: TransferOfFlatOwnershipListComponent,
  },
  {
    path: 'TransferOfFlatOwnerEdit/:id',
    component: TransferOfFlatOwnershipEditComponent,
  },
  {
    path: 'NightAuditAll',
    component: NightAuditAllComponent,
  },
  {
    path: 'FlatOccupancyReport',
    component: FlatOccupancyReportComponent,
  },
  {
    path: 'FlatOccupancyHistory',
    component: FlatOccupancyHistoryComponent,
  },
  {
    path: 'UnitMasterEdit/:id',
    component: UnitMasterEditComponent,
  },
  {
    path: 'UnitMasterList',
    component: UnitMasterListComponent,
  },
  {
    path: 'UnitWiseMemberDetails',
    component: UnitWiseMemberDetailsComponent,
  },
  {
    path: 'UnitWiseOutstandingReport',
    component: UnitWiseOutstandingReportComponent
  },
  {
    path: 'BillRegister',
    component: BillRegisterComponent
  },
  {
    path: 'clearanceOfBill',
    component: ClearanceOfBillComponent
  },
  {
    path: 'CombinedCollectionReport',
    component: CombinedCollectionReportComponent
  },
  {
    path: 'PresidentReport',
    component: PresidentReportComponent
  },
  {
    path: 'MemberDetailsReport',
    component: MemberDetailsComponent
  },
  {
    path: 'OverdueReport',
    component: OverdueReportComponent
  },
  {
    path: 'ReceiptPaymentVoidReport',
    component: ReceiptPaymentVoidReportComponent
  },
  {
    path: 'MinimumUsageCharges',
    component: MinimumUsageChargesComponent
  }, {
    path: 'OutstandingBillWiseReport',
    component: OutstandingBillWiseComponent

  },
  {
    path: 'WhatsappSetup',
    component: WhatsappSetupComponent
  },
  {
    path: 'AdjustmentSummaryListing',
    component: AdjustmentSummaryListingComponent
  },
  {
    path: 'MemberGSTReport',
    component: MemberGstReportComponent
  },
  {
    path: 'MultiMemberLedgerReport',
    component: MultipleMemberLedgerReportComponent
  },
  {
    path: 'Einvoice',
    component: EinvoiceComponent
  },
  {
    path: 'importexcel',
    component: ImportExcelComponent
  },
  {
    path:'AcountInfo',
    component:MemberAcountInfoComponent
  }
  
];

@Pipe({ name: 'stringifySubscription' })
export class StringifyEmployeesPipe implements PipeTransform {
  transform(employees: SubscriptionDet[]) {
    return employees.map((employee) => `${employee.billno}`).join(', ');
  }
}

@NgModule({
  declarations: [
    // SafePipe,
    // GroupByPipe,
    StringifyEmployeesPipe,
    AccountsGLComponent,
    AccountsGLEditComponent,
    AffiliatedClubMasterComponent,
    AffiliatedClubMasterEditComponent,
    AnnouncementMasterListComponent,
    AnnouncementMasterEditComponent,
    BranchMasterListComponent,
    BranchMasterEditComponent,
    CashBankMasterListComponent,
    CashBankMasterEditComponent,
    ChargeMasterListComponent,
    ChargeMasterEditComponent,
    CommitteemasterListComponent,
    CommitteemasterEditComponent,
    CommonMasterListComponent,
    CommonMasterEditComponent,
    CorporateMasterListComponent,
    CorporateMasterEditComponent,
    DocTypeEditComponent,
    DocTypeListComponent,
    EmailGroupListComponent,
    EmailGroupEditComponent,
    EmailServerSetupComponent,
    EntranceFeeMasterListComponent,
    EntranceFeeMasterEditComponent,
    EntranceFeeMasterEditComponent,
    GroupMasterComponent,
    GroupMasterCreateComponent,
    InstrumentMasterListComponent,
    InstrumentMasterEditComponent,
    KSCASubsTagEditComponent,
    MemberSetupComponent,
    MemberGroupListComponent,
    MemberGroupEditComponent,
    MemberMasterListComponent,
    MemberMasterEditComponent,
    MmMailTemplateComponent,
    OtherItemListComponent,
    OtherItemEditComponent,
    ProfitCenterListComponent,
    ProfitCenterEditComponent,
    RelationMasterListComponent,
    RelationMasterEditComponent,
    ReminderLetterMasterComponent,
    RoundFeeMasterListComponent,
    RoundFeeMasterComponent,
    SMSGroupMasterListComponent,
    SMSGroupMasterEditComponent,
    SMSTemplateMasterComponent,
    SmstemplateMasterListComponent,
    StatusSetupComponent,
    SubCategoryListComponent,
    SubCategoryEditComponent,
    SubLedgerMasterListComponent,
    SubLedgerMasterEditComponent,
    SubscriptionListComponent,
    SubscriptionEditComponent,
    SubscriptionTaggingEditComponent,
    TaxGroupListComponent,
    TaxGroupEditComponent,
    TaxMasterListComponent,
    TaxMasterEditComponent,
    BulkCreditDebitComponent,
    BulkCreditDebitListComponent,
    CategoryConversionEditComponent,
    CommunicationDetailsComponent,
    CommunicationDetailsEditComponent,
    CNIListComponent,
    CNIEditComponent,
    CreditDebitNoteListComponent,
    CreditDebitNoteEditComponent,
    CreditDebitNoteListComponent,
    CreditDebitNoteEditComponent,
    FacilityTaggingComponent,
    FacilityTaggingEditComponent,
    FirewallEditComponent,
    GeneralSMSComponent,
    JournalVoucherListComponent,
    JournalVoucherEditComponent,
    LifeMemberTransferListComponent,
    LifeMemberTransferEditComponent,
    MemberTransferComponent,
    MemberActivationComponent,
    MemberActivationListComponent,
    MemberReceiptListComponent,
    MemberReceipEditComponent,
    NomineeInclusionListComponent,
    NomineeInclusionEditComponent,
    OthersDebitListComponent,
    OthersDebitEditComponent,
    ReceiptPaymentListComponent,
    ReceiptPaymentEditComponent,
    ReminderLetterTransListComponent,
    ReminderLetterComponent,
    SubscriptionPostingComponent,
    SubscriptionPostingListComponent,
    CollectionReportComponent,
    AgeningReportComponent,
    CorporateMasterReportComponent,
    CreditDebitNoteComponent,
    DependentDetailsComponent,
    FacilityAddendanceComponent,
    MemberPlayReportComponent,
    MemberAddressListComponent,
    MemberCreditDebitAdviceComponent,
    MemberDirectoryComponent,
    MemberDOBWeddingComponent,
    MemberLedgerOutstandingComponent,
    MemberReceiptComponent,
    MemberStatusComponent,
    MonthBillDetailComponent,
    OutstandingReportComponent,
    ReminderLettersComponent,
    SubscriptionDetailsComponent,
    TransactionRegisterComponent,
    StatusSetupComponent,
    DocUploadMasterComponent,
    GeneralEmailComponent,
    GSTReportComponent,
    RoundChargesPostingComponent,
    RoundChargesPostingReportComponent,
    FacilityOffInComponent,
    MemberSearchComponent,
    FlatOwnerDetailsEditComponent,
    FlatOwnerDetailsListComponent,
    SubscriptionAuditTrailComponent,
    TransferOfOccupancyEditComponent,
    TransferOfOccupancyListComponent,
    TransferOfFlatOwnershipEditComponent,
    TransferOfFlatOwnershipListComponent,
    NightAuditAllComponent,
    FlatOccupancyReportComponent,
    FlatOccupancyHistoryComponent,
    UnitMasterEditComponent,
    UnitMasterListComponent,
    UnitWiseMemberDetailsComponent,
    UnitWiseOutstandingReportComponent,
    BillRegisterComponent,
    ClearanceOfBillComponent,
    CombinedCollectionReportComponent,
    PresidentReportComponent,
    MemberDetailsComponent,
    OverdueReportComponent,
    ReceiptPaymentVoidReportComponent,
    MinimumUsageChargesComponent,
    OutstandingBillWiseComponent,
    WhatsappSetupComponent,
    AdjustmentSummaryListingComponent,
    MemberGstReportComponent,
    MultipleMemberLedgerReportComponent,
    EinvoiceComponent,
    ImportExcelComponent,
    MemberAcountInfoComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [

    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    MatTooltipModule,
    MatSlideToggleModule,
    TypeaheadModule.forRoot(),
    AutocompleteLibModule,
    NgxSpinnerModule,
    CKEditorModule,
    DxTreeListModule,
    DxDataGridModule,
    DxRadioGroupModule,
    DxPopupModule,
    DxFormModule,
    DxButtonModule,
    DxTemplateModule,
    DxScrollViewModule,
    DxSelectBoxModule,
    DxHtmlEditorModule,
    DxTabPanelModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgbModule,
    NgxMaterialTimepickerModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDjhK5BTDwJyPJ4WMtR-d3LbB30eVjoVCU',
    //   libraries: ["places"]
    // }),
    RouterModule.forChild(routes),
    SharedModule,
    POSModule,
    SmartCardModule,
    DxDateBoxModule,
    DxBoxModule
  ],
  exports: [
    CommonMasterEditComponent,
    TaxGroupEditComponent,
    DocUploadMasterComponent,
    ProfitCenterEditComponent
  ],
  providers: [ConfirmationDialogService, { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }],
  bootstrap: [AppComponent]
  //,  entryComponents: [ConfirmationDialogComponent],
})

export class MemberModule {

}

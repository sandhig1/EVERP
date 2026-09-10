import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

type SurveyAgainst = 'all' | 'installation' | 'enquiry';

type SurveyStatus = 'Scheduled' | 'Cancelled' | 'Done';

interface RequestOption {
    requestNo: string;
    type: 'installation' | 'enquiry';
}

interface SurveyData {

    surveyNo: string;

    scheduleDate: string;
    timeSlot: string;

    technician: string;

    surveyAgainst: 'installation' | 'enquiry';

    requestNo: string;

    dealer: string;
    customer: string;

    siteAddress: string;
    city: string;
    state: string;

    chargerType: string;

    status: SurveyStatus;
}

interface SurveyFilters {

    surveyAgainst: SurveyAgainst;

    requestNo: string;

    dealer: string;

    customer: string;

    status: string;

    chargerType: string;
}


@Component({
    selector: 'app-survey-list',
    imports:[FormsModule, NgClass, NgFor, NgIf],
    templateUrl: './surveylist.html',
    styleUrls: ['./surveylist.css']
})
export class surveylist {


    // =====================================================
    // FILTER MODEL
    // =====================================================

    filters: SurveyFilters = {

        surveyAgainst: 'all',

        requestNo: '',

        dealer: '',

        customer: '',

        status: '',

        chargerType: ''

    };


    // =====================================================
    // REQUEST / ENQUIRY OPTIONS
    // =====================================================

    requestOptions: RequestOption[] = [

        {
            requestNo: 'INSR-D1223232',
            type: 'installation'
        },

        {
            requestNo: 'INSR-D1223233',
            type: 'installation'
        },

        {
            requestNo: 'INSR-D1223234',
            type: 'installation'
        },

        {
            requestNo: 'E12332211',
            type: 'enquiry'
        },

        {
            requestNo: 'E12332212',
            type: 'enquiry'
        },

        {
            requestNo: 'E12332213',
            type: 'enquiry'
        }

    ];


    // =====================================================
    // DEALER LIST
    // =====================================================

    dealers: string[] = [

        'ABC EV Solutions',

        'Green Charge Solutions',

        'Power EV Systems',

        'Electro Charge India'

    ];


    // =====================================================
    // CUSTOMER LIST
    // =====================================================

    customers: string[] = [

        'Rajesh Kumar',

        'Amit Sharma',

        'Suresh Patil',

        'Neha Mehta',

        'Vivek Shah',

        'Priya Desai'

    ];


    // =====================================================
    // CHARGER TYPES
    // =====================================================

    chargerTypes: string[] = [

        'AC Charger',

        'DC Charger',

        'Fast Charger'

    ];


    // =====================================================
    // SURVEY DATA
    // =====================================================

    surveys: SurveyData[] = [

        {
            surveyNo: 'SUR-2026-100001',
            scheduleDate: '15-Sep-2026',
            timeSlot: '09:00 AM - 11:00 AM',
            technician: 'Amit Patil',

            surveyAgainst: 'installation',
            requestNo: 'INSR-D1223232',

            dealer: 'ABC EV Solutions',
            customer: 'Rajesh Kumar',

            siteAddress: 'Plot No. 25, Sector 5, New Panvel',
            city: 'Panvel',
            state: 'Maharashtra',

            chargerType: 'DC Charger',
            status: 'Scheduled'
        },

        {
            surveyNo: 'SUR-2026-100002',
            scheduleDate: '16-Sep-2026',
            timeSlot: '11:00 AM - 01:00 PM',
            technician: 'Rahul Sharma',

            surveyAgainst: 'enquiry',
            requestNo: 'E12332211',

            dealer: 'ABC EV Solutions',
            customer: 'Suresh Patil',

            siteAddress: 'Baner Road, Near Balewadi High Street',
            city: 'Pune',
            state: 'Maharashtra',

            chargerType: 'Fast Charger',
            status: 'Scheduled'
        },

        {
            surveyNo: 'SUR-2026-100003',
            scheduleDate: '17-Sep-2026',
            timeSlot: '03:00 PM - 05:00 PM',
            technician: 'Suresh More',

            surveyAgainst: 'installation',
            requestNo: 'INSR-D1223233',

            dealer: 'Green Charge Solutions',
            customer: 'Amit Sharma',

            siteAddress: 'Sector 15, CBD Belapur',
            city: 'Navi Mumbai',
            state: 'Maharashtra',

            chargerType: 'AC Charger',
            status: 'Done'
        },

        {
            surveyNo: 'SUR-2026-100004',
            scheduleDate: '18-Sep-2026',
            timeSlot: '01:00 PM - 03:00 PM',
            technician: 'Vikas Singh',

            surveyAgainst: 'enquiry',
            requestNo: 'E12332212',

            dealer: 'Power EV Systems',
            customer: 'Neha Mehta',

            siteAddress: 'SG Highway, Near Thaltej',
            city: 'Ahmedabad',
            state: 'Gujarat',

            chargerType: 'DC Charger',
            status: 'Cancelled'
        },

        {
            surveyNo: 'SUR-2026-100005',
            scheduleDate: '19-Sep-2026',
            timeSlot: '09:00 AM - 11:00 AM',
            technician: 'Anil Kumar',

            surveyAgainst: 'installation',
            requestNo: 'INSR-D1223234',

            dealer: 'Electro Charge India',
            customer: 'Vivek Shah',

            siteAddress: 'Sector 10, Vashi',
            city: 'Navi Mumbai',
            state: 'Maharashtra',

            chargerType: 'DC Charger',
            status: 'Scheduled'
        },

        {
            surveyNo: 'SUR-2026-100006',
            scheduleDate: '20-Sep-2026',
            timeSlot: '11:00 AM - 01:00 PM',
            technician: 'Amit Patil',

            surveyAgainst: 'enquiry',
            requestNo: 'E12332213',

            dealer: 'Green Charge Solutions',
            customer: 'Priya Desai',

            siteAddress: 'Andheri East Industrial Area',
            city: 'Mumbai',
            state: 'Maharashtra',

            chargerType: 'AC Charger',
            status: 'Done'
        },

        {
            surveyNo: 'SUR-2026-100007',
            scheduleDate: '21-Sep-2026',
            timeSlot: '03:00 PM - 05:00 PM',
            technician: 'Rahul Sharma',

            surveyAgainst: 'installation',
            requestNo: 'INSR-D1223232',

            dealer: 'ABC EV Solutions',
            customer: 'Rajesh Kumar',

            siteAddress: 'Plot No. 25, Sector 5, New Panvel',
            city: 'Panvel',
            state: 'Maharashtra',

            chargerType: 'DC Charger',
            status: 'Scheduled'
        },

        {
            surveyNo: 'SUR-2026-100008',
            scheduleDate: '22-Sep-2026',
            timeSlot: '05:00 PM - 07:00 PM',
            technician: 'Suresh More',

            surveyAgainst: 'enquiry',
            requestNo: 'E12332212',

            dealer: 'Power EV Systems',
            customer: 'Neha Mehta',

            siteAddress: 'SG Highway, Near Thaltej',
            city: 'Ahmedabad',
            state: 'Gujarat',

            chargerType: 'DC Charger',
            status: 'Cancelled'
        },

        {
            surveyNo: 'SUR-2026-100009',
            scheduleDate: '23-Sep-2026',
            timeSlot: '09:00 AM - 11:00 AM',
            technician: 'Vikas Singh',

            surveyAgainst: 'installation',
            requestNo: 'INSR-D1223233',

            dealer: 'Green Charge Solutions',
            customer: 'Amit Sharma',

            siteAddress: 'Sector 15, CBD Belapur',
            city: 'Navi Mumbai',
            state: 'Maharashtra',

            chargerType: 'AC Charger',
            status: 'Done'
        },

        {
            surveyNo: 'SUR-2026-100010',
            scheduleDate: '24-Sep-2026',
            timeSlot: '01:00 PM - 03:00 PM',
            technician: 'Anil Kumar',

            surveyAgainst: 'enquiry',
            requestNo: 'E12332211',

            dealer: 'ABC EV Solutions',
            customer: 'Suresh Patil',

            siteAddress: 'Baner Road, Near Balewadi High Street',
            city: 'Pune',
            state: 'Maharashtra',

            chargerType: 'Fast Charger',
            status: 'Scheduled'
        },

        {
            surveyNo: 'SUR-2026-100011',
            scheduleDate: '25-Sep-2026',
            timeSlot: '03:00 PM - 05:00 PM',
            technician: 'Amit Patil',

            surveyAgainst: 'installation',
            requestNo: 'INSR-D1223234',

            dealer: 'Electro Charge India',
            customer: 'Vivek Shah',

            siteAddress: 'Sector 10, Vashi',
            city: 'Navi Mumbai',
            state: 'Maharashtra',

            chargerType: 'DC Charger',
            status: 'Scheduled'
        },

        {
            surveyNo: 'SUR-2026-100012',
            scheduleDate: '26-Sep-2026',
            timeSlot: '11:00 AM - 01:00 PM',
            technician: 'Rahul Sharma',

            surveyAgainst: 'enquiry',
            requestNo: 'E12332213',

            dealer: 'Green Charge Solutions',
            customer: 'Priya Desai',

            siteAddress: 'Andheri East Industrial Area',
            city: 'Mumbai',
            state: 'Maharashtra',

            chargerType: 'AC Charger',
            status: 'Done'
        }

    ];


    // =====================================================
    // FILTERED DATA
    // =====================================================

    filteredSurveys: SurveyData[] = [];


    // =====================================================
    // PAGINATION
    // =====================================================

    currentPage: number = 1;

    pageSize: number = 10;


    // =====================================================
    // CONSTRUCTOR
    // =====================================================

    constructor(private router: Router) {

        // Show all data when page loads

        this.filteredSurveys = [...this.surveys];

    }


    // =====================================================
    // REQUEST / ENQUIRY DROPDOWN
    // =====================================================

    get filteredRequestOptions(): RequestOption[] {

        if (this.filters.surveyAgainst === 'all') {

            return [];

        }

        return this.requestOptions.filter(
            (request: RequestOption) =>
                request.type === this.filters.surveyAgainst
        );

    }


    // =====================================================
    // REQUEST FILTER LABEL
    // =====================================================

    get requestFilterLabel(): string {

        if (this.filters.surveyAgainst === 'installation') {

            return 'Installation Request No.';

        }

        if (this.filters.surveyAgainst === 'enquiry') {

            return 'Enquiry Request No.';

        }

        return 'Installation Request / Enquiry No.';

    }


    // =====================================================
    // REQUEST FILTER PLACEHOLDER
    // =====================================================

    get requestFilterPlaceholder(): string {

        if (this.filters.surveyAgainst === 'installation') {

            return 'All Installation Requests';

        }

        if (this.filters.surveyAgainst === 'enquiry') {

            return 'All Enquiries';

        }

        return 'Select Request / Enquiry No.';

    }


    // =====================================================
    // SEARCH
    // =====================================================

    searchSurveys(): void {

        this.filteredSurveys = this.surveys.filter(
            (survey: SurveyData) => {

                // -----------------------------------------
                // Survey Against
                // -----------------------------------------

                if (
                    this.filters.surveyAgainst !== 'all' &&
                    survey.surveyAgainst !== this.filters.surveyAgainst
                ) {

                    return false;

                }


                // -----------------------------------------
                // Request Number
                // -----------------------------------------

                if (
                    this.filters.requestNo &&
                    survey.requestNo !== this.filters.requestNo
                ) {

                    return false;

                }


                // -----------------------------------------
                // Dealer
                // -----------------------------------------

                if (
                    this.filters.dealer &&
                    survey.dealer !== this.filters.dealer
                ) {

                    return false;

                }


                // -----------------------------------------
                // Customer
                // -----------------------------------------

                if (
                    this.filters.customer &&
                    survey.customer !== this.filters.customer
                ) {

                    return false;

                }


                // -----------------------------------------
                // Status
                // -----------------------------------------

                if (
                    this.filters.status &&
                    survey.status !== this.filters.status
                ) {

                    return false;

                }


                // -----------------------------------------
                // Charger Type
                // -----------------------------------------

                if (
                    this.filters.chargerType &&
                    survey.chargerType !== this.filters.chargerType
                ) {

                    return false;

                }


                return true;

            }
        );


        // Always start from page 1 after search

        this.currentPage = 1;

    }


    // =====================================================
    // CLEAR FILTERS
    // =====================================================

    clearFilters(): void {

        this.filters = {

            surveyAgainst: 'all',

            requestNo: '',

            dealer: '',

            customer: '',

            status: '',

            chargerType: ''

        };


        this.filteredSurveys = [...this.surveys];

        this.currentPage = 1;

    }


    // =====================================================
    // PAGINATED SURVEYS
    // =====================================================

    get paginatedSurveys(): SurveyData[] {

        const startIndex =
            (this.currentPage - 1) * this.pageSize;

        const endIndex =
            startIndex + this.pageSize;

        return this.filteredSurveys.slice(
            startIndex,
            endIndex
        );

    }


    // =====================================================
    // TOTAL PAGES
    // =====================================================

    get totalPages(): number {

        if (this.filteredSurveys.length === 0) {

            return 1;

        }

        return Math.ceil(
            this.filteredSurveys.length / this.pageSize
        );

    }


    // =====================================================
    // PAGE NUMBERS
    // =====================================================

    get pages(): number[] {

        const pages: number[] = [];

        for (
            let page = 1;
            page <= this.totalPages;
            page++
        ) {

            pages.push(page);

        }

        return pages;

    }


    // =====================================================
    // START RECORD
    // =====================================================

    get startRecord(): number {

        if (this.filteredSurveys.length === 0) {

            return 0;

        }

        return (
            (this.currentPage - 1) *
            this.pageSize
        ) + 1;

    }


    // =====================================================
    // END RECORD
    // =====================================================

    get endRecord(): number {

        return Math.min(
            this.currentPage * this.pageSize,
            this.filteredSurveys.length
        );

    }


    // =====================================================
    // GO TO PAGE
    // =====================================================

    goToPage(page: number): void {

        if (
            page < 1 ||
            page > this.totalPages
        ) {

            return;

        }

        this.currentPage = page;

    }


    // =====================================================
    // PREVIOUS PAGE
    // =====================================================

    previousPage(): void {

        if (this.currentPage > 1) {

            this.currentPage--;

        }

    }


    // =====================================================
    // NEXT PAGE
    // =====================================================

    nextPage(): void {

        if (this.currentPage < this.totalPages) {

            this.currentPage++;

        }

    }


    // =====================================================
    // VIEW SURVEY
    // =====================================================

    viewSurvey(survey: SurveyData): void {

        console.log('View Survey:', survey);

        this.router.navigate(
            ['/survey-view'],
            {
                queryParams: {
                    surveyNo: survey.surveyNo
                }
            }
        );

    }


    // =====================================================
    // EDIT SURVEY
    // =====================================================

    editSurvey(survey: SurveyData): void {

        console.log('Edit Survey:', survey);

        this.router.navigate(
            ['/survey-edit'],
            {
                queryParams: {
                    surveyNo: survey.surveyNo
                }
            }
        );

    }


    // =====================================================
    // CANCEL SURVEY
    // =====================================================

    cancelSurvey(survey: SurveyData): void {

        // Cancel option should only work
        // for Scheduled surveys

        if (survey.status !== 'Scheduled') {

            return;

        }


        const confirmation = window.confirm(
            `Are you sure you want to cancel Survey No. ${survey.surveyNo}?`
        );


        if (!confirmation) {

            return;

        }


        survey.status = 'Cancelled';


        // Refresh grid

        this.searchSurveys();

    }


    // =====================================================
    // SCHEDULE NEW SURVEY
    // =====================================================

    scheduleSurvey(): void {

        this.router.navigate(
            ['/survey-schedule']
        );

    }

}
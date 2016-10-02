"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var grid_1 = require('modules/grid/grid');
var voter_service_1 = require('modules/voter-service/voter-service');
var search_bar_1 = require('modules/search-bar/search-bar');
var ContactProfile = (function () {
    function ContactProfile(route, voterSvc) {
        this.route = route;
        this.voterSvc = voterSvc;
        this.voter = {};
        this.person = {
            first_name: "Michael",
            middle_name: "Patrick",
            last_name: "Duffey",
            prefix: "Mr.",
            image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAPvAAAAJDBhNWZlYzM5LWE5MDMtNGI3ZC05OTAzLTU5OGE1ZjFhNWQxMw.jpg",
            title: "Executive Director",
            company: "Republican Party of Wisconsin",
            company_url: "http://www.wisgop.org",
            phones: [
                { type: "Cell", value: "(703) 405-4351" },
                { type: "Work", value: "(608) 257-4765" },
                { type: "Direct", value: "(608) 257-8023" }
            ],
            emails: [
                { type: "Work", value: "mduffey@wisgop.org" },
                { type: "Personal", value: "mpduffey@gmail.com" }
            ],
            addresses: [
                {
                    type: "Home",
                    address: "309 West Johnson Street",
                    address2: "Apt. 745",
                    city: "Madison",
                    state: "WI",
                    zip: "53703"
                },
                {
                    type: "Home",
                    address: "17 2nd Street NE",
                    city: "Washington",
                    state: "DC",
                    zip: "20002"
                },
                {
                    type: "Work",
                    address: "148 East Johnson Street",
                    city: "Madison",
                    state: "WI",
                    zip: "53703"
                }
            ],
            social_media: {
                facebook: "https://www.facebook.com/mpduffey",
                linkedin: "www.linkedin.com/in/duffey"
            },
            ethnicity: "White",
            gender: "Male",
            date_of_birth: "1/11/1978",
            party: "Republican",
            vote_history: "4 of 4",
            position: "Staff",
            taskings: [],
            biography: "Mike is a political operative, technology guru, and military acquisition expert",
            one_on_ones: [
                { date: new Date("1/11/2016"), type: "Debrief", action_item: "Debrief", commitment: "Community Captain", evaluation: "Yes", follow_up_date: "1/31/2016", follow_up_action: "Moving forward with campaign" },
                { date: new Date("1/13/2015"), type: "Debrief", action_item: "Debrief", commitment: "Community Captain", evaluation: "Yes", follow_up_date: "12/1/2015", follow_up_action: "Moving forward with campaign" },
                { date: new Date("1/15/2016"), type: "Escalation", action_item: "Debrief", commitment: "Community Captain", evaluation: "Yes", follow_up_date: "11/3/2017", follow_up_action: "Moving forward with campaign" }
            ],
            house_meetings: [],
            vol_shifts: [
                { date: new Date("1/31/16"), start_time: "9:00 AM", end_time: "12:00 PM", activity: "Phone Calls", completed: true },
                { date: new Date("1/31/16"), start_time: "9:00 AM", end_time: "12:00 PM", activity: "Phone Calls", completed: true },
                { date: new Date("1/31/16"), start_time: "9:00 AM", end_time: "12:00 PM", activity: "Phone Calls", completed: true },
                { date: new Date("1/31/16"), start_time: "9:00 AM", end_time: "12:00 PM", activity: "Phone Calls", completed: true },
                { date: new Date("1/31/16"), start_time: "9:00 AM", end_time: "12:00 PM", activity: "Phone Calls", completed: true }
            ]
        };
        this.emailTypes = ["Work", "Personal"];
        this.phoneTypes = ["Home", "Work", "Direct", "Cell", "Fax"];
        this.oneOnOneCols = Array();
        this.houseMeetingCols = Array();
        this.volShiftsCols = Array();
        this.voterSvc = voterSvc;
        this.oneOnOneCols = [
            new grid_1.Column('date', 'Date'),
            new grid_1.Column('type', 'Type'),
            new grid_1.Column('commitment', 'Commitment'),
            new grid_1.Column('evaluation', 'Evaluation'),
            new grid_1.Column('action_item', 'Action Item'),
            new grid_1.Column('follow_up_date', 'Follow Up Date')
        ];
        this.houseMeetingCols = [
            new grid_1.Column('date', 'Date'),
            new grid_1.Column('type', 'Type')
        ];
        this.volShiftsCols = [
            new grid_1.Column('date', 'Date'),
            new grid_1.Column('start_time', 'Start Time'),
            new grid_1.Column('end_time', 'End Time'),
            new grid_1.Column('activity', 'Activity'),
            new grid_1.Column('completed', 'Completed')
        ];
    }
    ContactProfile.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.voterSvc.getVoter(id).subscribe(function (x) {
                _this.voter = x;
                console.log(x);
            });
        });
    };
    ContactProfile = __decorate([
        core_1.Component({
            selector: 'contact-profile',
            templateUrl: 'app/modules/contact-profile/contact-profile.html',
            providers: [voter_service_1.VoterService],
            directives: [search_bar_1.SearchBar],
            styles: ["\n\t\t:host {\n\t\t\tmax-width: 600px;\n\t\t}\n\t\t.form-control {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t\tinput[name=\"prefix\"], input[name=\"suffix\"], input[name=\"zip\"], input[name=\"state\"] {\n\t\t\twidth: 60px;\n\t\t}\n\t\tselect.phone-type-select, input[name=\"middle-name\"] {\n\t\t\twidth: 90px;\n\t\t}\n\t\tinput[name=\"first-name\"], input[name=\"last-name\"], input[name=\"date-of-birth\"], input[name=\"city\"], select.email-type-select {\n\t\t\twidth: 100px;\n\t\t}\n\t\tinput[name=\"phone\"] {\n\t\t\twidth: 120px;\n\t\t}\n\t\tinput[name=\"email\"], input[name=\"search\"] {\n\t\t\twidth: 200px;\n\t\t}\n\t\tinput[name=\"address\"], input[name=\"address2\"] {\n\t\t\twidth: 232px;\n\t\t}\n\t\tp {\n\t\t\tmargin-bottom: 0;\n\t\t}\n\t\ti:hover {\n\t\t\tcolor: white\n\t\t}\n\t\t.header-menu i {\n\t\t\tmargin-left:\t10px;\n\t\t\tcolor:\t\t\t\t#d2d2d2;\n\t\t\tcursor:\t\t\t\tpointer;\n\t\t}\n\t\t.header-menu i:hover {\n\t\t\tcolor: white;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, (typeof (_a = typeof voter_service_1.VoterService !== 'undefined' && voter_service_1.VoterService) === 'function' && _a) || Object])
    ], ContactProfile);
    return ContactProfile;
    var _a;
}());
exports.ContactProfile = ContactProfile;
//# sourceMappingURL=contact-profile.js.map
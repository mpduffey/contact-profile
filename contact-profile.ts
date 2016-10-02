import {Component, Input, OnInit}	from '@angular/core';
import {ActivatedRoute}						from '@angular/router';
import {Grid, Column}							from 'modules/grid/grid';
import {VoterService}							from 'modules/voter-service/voter-service';
import {SearchBar}								from 'modules/search-bar/search-bar';
import {Subscription}							from 'rxjs/Subscription';

@Component({
	selector:			'contact-profile',
	templateUrl:	'app/modules/contact-profile/contact-profile.html',
	providers:		[VoterService],
	directives:		[SearchBar],
	styles: 			[`
		:host {
			max-width: 600px;
		}
		.form-control {
			display: inline-block;
		}
		input[name="prefix"], input[name="suffix"], input[name="zip"], input[name="state"] {
			width: 60px;
		}
		select.phone-type-select, input[name="middle-name"] {
			width: 90px;
		}
		input[name="first-name"], input[name="last-name"], input[name="date-of-birth"], input[name="city"], select.email-type-select {
			width: 100px;
		}
		input[name="phone"] {
			width: 120px;
		}
		input[name="email"], input[name="search"] {
			width: 200px;
		}
		input[name="address"], input[name="address2"] {
			width: 232px;
		}
		p {
			margin-bottom: 0;
		}
		i:hover {
			color: white
		}
		.header-menu i {
			margin-left:	10px;
			color:				#d2d2d2;
			cursor:				pointer;
		}
		.header-menu i:hover {
			color: white;
		}
	`]
})

export class ContactProfile implements OnInit {
	private sub: Subscription;
	private voter = {};
	person = {
		first_name: 	"Michael",
		middle_name:	"Patrick",
		last_name:  	"Duffey",
		prefix:     	"Mr.",
		image_url:		"https://media.licdn.com/media/AAEAAQAAAAAAAAPvAAAAJDBhNWZlYzM5LWE5MDMtNGI3ZC05OTAzLTU5OGE1ZjFhNWQxMw.jpg",
		title:      	"Executive Director",
		company:    	"Republican Party of Wisconsin",
		company_url:	"http://www.wisgop.org",
		phones:     	[
      {type:  "Cell", value: "(703) 405-4351"},
      {type:  "Work", value: "(608) 257-4765"},
      {type:  "Direct", value: "(608) 257-8023"}
    ],
		emails:     	[
      {type:  "Work", value: "mduffey@wisgop.org"},
      {type:  "Personal", value: "mpduffey@gmail.com"}
    ],
		addresses:		[
			{
				type:				"Home",
				address:		"309 West Johnson Street",
				address2:		"Apt. 745",
				city:				"Madison",
				state:			"WI",
				zip:				"53703"
			},
			{
				type:				"Home",
				address:		"17 2nd Street NE",
				city:				"Washington",
				state:			"DC",
				zip:				"20002"
			},
			{
				type:				"Work",
				address:		"148 East Johnson Street",
				city:				"Madison",
				state:			"WI",
				zip:				"53703"
			}
		],
		social_media:	{
			facebook:		"https://www.facebook.com/mpduffey",
			linkedin:		"www.linkedin.com/in/duffey"
		},
		ethnicity:		"White",
		gender:				"Male",
		date_of_birth:"1/11/1978",
		party:				"Republican",
		vote_history:	"4 of 4",
		position:			"Staff",
		taskings:			[],
		biography:		"Mike is a political operative, technology guru, and military acquisition expert",
		one_on_ones:	[
			{date: new Date("1/11/2016"), type: "Debrief", action_item: "Debrief", commitment: "Community Captain", evaluation: "Yes", follow_up_date: "1/31/2016", follow_up_action: "Moving forward with campaign"},
			{date: new Date("1/13/2015"), type: "Debrief", action_item: "Debrief", commitment: "Community Captain", evaluation: "Yes", follow_up_date: "12/1/2015", follow_up_action: "Moving forward with campaign"},
			{date: new Date("1/15/2016"), type: "Escalation", action_item: "Debrief", commitment: "Community Captain", evaluation: "Yes", follow_up_date: "11/3/2017", follow_up_action: "Moving forward with campaign"}
		],
		house_meetings:	[
			
		],
		vol_shifts:		[
			{date: new Date("1/31/16"), start_time: "9:00 AM", end_time: "12:00 PM", activity: "Phone Calls", completed: true},
			{date: new Date("1/31/16"), start_time: "9:00 AM", end_time: "12:00 PM", activity: "Phone Calls", completed: true},
			{date: new Date("1/31/16"), start_time: "9:00 AM", end_time: "12:00 PM", activity: "Phone Calls", completed: true},
			{date: new Date("1/31/16"), start_time: "9:00 AM", end_time: "12:00 PM", activity: "Phone Calls", completed: true},
			{date: new Date("1/31/16"), start_time: "9:00 AM", end_time: "12:00 PM", activity: "Phone Calls", completed: true}
		]
  };
	emailTypes = ["Work", "Personal"];
	phoneTypes = ["Home", "Work", "Direct", "Cell", "Fax"];

	oneOnOneCols = Array<Column>;
	houseMeetingCols = Array<Column>;
	volShiftsCols = Array<Column>;
	
	constructor(private route: ActivatedRoute, private voterSvc: VoterService) {
		this.voterSvc = voterSvc;
		this.oneOnOneCols = [
			new Column('date','Date'),
			new Column('type','Type'),
			new Column('commitment','Commitment'),
			new Column('evaluation','Evaluation'),
			new Column('action_item','Action Item'),
			new Column('follow_up_date','Follow Up Date')
		];
		this.houseMeetingCols = [
			new Column('date','Date'),
			new Column('type','Type')
		];
		this.volShiftsCols = [
			new Column('date','Date'),
			new Column('start_time','Start Time'),
			new Column('end_time','End Time'),
			new Column('activity','Activity'),
			new Column('completed','Completed')
		];
	}
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			 let id = +params['id']; // (+) converts string 'id' to a number
			 this.voterSvc.getVoter(id).subscribe(x => {
				 this.voter = x;
				 console.log(x);
			 });
		 });
	}
}
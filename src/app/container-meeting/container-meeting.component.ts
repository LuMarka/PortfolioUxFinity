import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


export{};
declare global {
  interface window {
    Calendly: any;
  }
}
declare var preInitCalendly: Function;
@Component({
  selector: 'app-container-meeting',
  templateUrl: './container-meeting.component.html',
  styleUrls: ['./container-meeting.component.scss']
})
export class ContainerMeetingComponent implements OnInit {

  title="Free Advice? Heck Yeah!";
  text = "Bring your ideas, and we'll bring the fun! In our no-cost meeting, we’ll dive deep into your project, aligning our strategy with your budget. It’s all about crafting the perfect digital masterpiece for you";

  //url = "https://calendly.com/info-oqk/30min";
  url = "https://calendly.com/info-oqk/meeting-with-our-team";

  constructor (){}

  ngOnInit(): void{
    preInitCalendly()
    // @ts-ignore
    window.Calendly.initInlineWidget({
      url: this.url,
      parentElement: document.getElementById('calendly-inline-widget'),
      prefill: {},
    });
  }
}

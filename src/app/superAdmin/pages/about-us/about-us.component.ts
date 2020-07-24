import { Component, OnInit } from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import { DataServiceService } from '../../services/data/data-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  contents: string = 'revenueMonth';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '20rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    toolbarPosition: 'top',
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    showToolbar: true,
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  constructor(public dataService: DataServiceService) { }

  ngOnInit() {
    this.getContents();
  }

  onChange(event) {
    console.log('changed');
  }

  onBlur(event) {
    console.log('blur ' + event);
  }

  getContents() {
    let params = {
      metaKey: 'about-us'
    };
    this.dataService.getMetaValues(params).subscribe(res => {
      console.log(res);
      //this.contents = res;
    }, err => {
      throw err;
    });
    /* this.dataService.getMeta(params).subscribe(res => {
      //this.contents = res.metaValue;
      console.log(res);
    }, err => {
      throw err;
    }); */
  }

  update() {
    
  }

}

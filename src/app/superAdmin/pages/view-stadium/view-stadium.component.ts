import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data/data-service.service';

@Component({
  selector: 'app-view-stadium',
  templateUrl: './view-stadium.component.html',
  styleUrls: ['./view-stadium.component.css']
})
export class ViewStadiumComponent implements OnInit {
  stadiumTable: any = [];
  ModalVisible: boolean = false;
  array = [1, 2, 3, 4];
  effect = 'scrollx';
  checked = true;

  constructor(public dataService: DataServiceService) { }

  ngOnInit() {
    this.getStadium();
  }

  showModal() {
    this.ModalVisible = true;
  }

  handleCancel() {
    this.ModalVisible = false;
  }

  viewInfo() {
    this.ModalVisible = true;
  }
  handleOk() {
    this.ModalVisible = true;
  }

  getStadium() {
    this.dataService.getStadium().subscribe(res => {
      this.stadiumTable = res;
      console.log(this.stadiumTable);
    }, err => {
      throw err;
    });
  }

  deleteStadium(id) {
    this.dataService.deleteStadium(id).subscribe(res => {
      this.getStadium();
      this.dataService.errorHandler('Deleted sucessfully');
    }, err => {
      throw err;
    });
  }

}

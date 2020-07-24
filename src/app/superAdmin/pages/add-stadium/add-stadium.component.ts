import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../../services/data/data-service.service';
import { NzMessageService } from 'ng-zorro-antd';
import { UploadFile } from 'ng-zorro-antd/upload';


@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {

  stadiumForm: FormGroup;
  timeList: any = ['12 AM'];
  fesilityModalVisible = false;
  facility: any;
  facilities: any = [];
  facilitySelectedList = [];
  isAddStadium = false;
  isAddFacility = false;
  location: any = { lat: '', lng: '' };

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  fileList = [];
  previewImage: string | undefined = '';
  previewVisible = false;

  latitude: number;
  longitude: number;
  zoom: number;
  subscriptionEnabled = true;


  constructor(
    private fb: FormBuilder,
    public dataService: DataServiceService,
    public message: NzMessageService) { }

  ngOnInit() {
    this.getFacilities();
    this.setCurrentLocation();
    this.stadiumForm = this.fb.group({
      stadiumName: [null, [Validators.required]],
      stadiumDescription: [null, [Validators.required]],
      openTime: [null, [Validators.required]],
      closeTime: [null, [Validators.required]],
      facilities: [],
      amount: [null, [Validators.required]],
      subscription: true,
      createdBy: 'Admin',
      subscriptionMonth: null,
      subscriptionAmount: null,
      paymentOption: null,
      tax: null,
    });
  }

  showFesilityModel() {
    this.fesilityModalVisible = true;
  }

  handleCancel() {
    this.fesilityModalVisible = false;
  }

  handleOk() {
    this.fesilityModalVisible = false;
  }

  getFacilities() {
    this.dataService.getFacility().subscribe(res => {
      this.facilities = res;
    }, err => {
      throw err;
    });
  }

  addFacilities(facility) {
    this.isAddFacility = true;
    let params = {
      facilityName: facility
    };

    this.dataService.addFacility(params).subscribe(res => {
      this.message.info('Facilities Added Succesfully');
      this.getFacilities();
      this.isAddFacility = false;
    }, err => {
      this.isAddFacility = false;
      throw err;
    });
  }

  addStadium() {
    this.isAddStadium = true;
    let params = {
      stadiumName: this.stadiumForm.value.stadiumName,
      createdBy: "Admin",
      location: this.location,
      stadiumDescription: this.stadiumForm.value.stadiumDescription,
      openTime: this.stadiumForm.value.openTime,
      closeTime: this.stadiumForm.value.closeTime,
      amount: this.stadiumForm.value.amount,
      facilities: this.stadiumForm.value.facilities,
      subscription: this.subscriptionEnabled,
      subriptionMonth: this.stadiumForm.value.subscriptionMonth,
      subriptionAmount: this.stadiumForm.value.subscriptionAmount,
      paymentOption: this.stadiumForm.value.paymentOption,
      tax: this.stadiumForm.value.tax
    }

    this.dataService.addStadium(params).subscribe(res => {
      this.message.info('Stadium Added Succesfully');
      this.isAddStadium = false;
    }, err => {
      this.isAddStadium = false;
      throw err;
    });
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  markerDragEnd(ev) {
    this.location.lat = ev.coords.lat;
    this.location.lng = ev.coords.lng;
  }

  subscriptionChange(event) {
    this.subscriptionEnabled = event;
  }
}

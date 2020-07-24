import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';
import { UploadFile } from 'ng-zorro-antd/upload';
import { DataServiceService } from '../../services/data/data-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  fileList = [];
  previewImage: string | undefined = '';
  previewVisible = false;
  base64: any;
  promotionForm: FormGroup;
  stadiumList: any = [];
  loading = false;
  allPromotion = false;
  promotionTable: any = [];
  loadingPromotion = false;


  constructor(private msg: NzMessageService,
    public dataService: DataServiceService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.promotionForm = this.fb.group({
      stadiumId: [null, [Validators.required]],
      promotionText: [null, [Validators.required]]
    });
    this.getStadiumList();
  }

  getStadiumList() {
    this.dataService.getStadium().subscribe(res => {
      this.stadiumList = res;
    }, err => {
      throw err;
    });
  }

  beforeUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {

      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      this.checkImageDimension(file).then(dimensionRes => {
        if (!dimensionRes) {
          this.msg.error('Image only 300x300 above');
          observer.complete();
          return;
        }

        observer.next(isLt2M && dimensionRes);
        observer.complete();
      });
    });
  };



  private checkImageDimension(file: File): Promise<boolean> {
    return new Promise(resolve => {
      const img = new Image(); // create image
      img.src = window.URL.createObjectURL(file);
      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        window.URL.revokeObjectURL(img.src!);
        resolve(height >= 300 && width >= 500);
      };
    });
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        break;
      case 'done':
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.base64 = img;
        });
        break;
      case 'error':
        // this.msg.error('Network error');
        break;
    }
  }

  getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };


  uploadImage() {
    this.loading = true;
    let params = {
      image: this.base64,
      userId: this.promotionForm.value.stadiumId
    }

    this.dataService.uploadImage(params).subscribe((res: any) => {
      this.savePromotion(res.location);
    }, err => {
      this.loading = false;
      this.msg.error('Image upload wents wrong, Please try again');
      throw err;
    });
  }


  savePromotion(imageUrl) {
    let params = {
      promotionText: this.promotionForm.value.promotionText,
      promotionStadiumId: this.promotionForm.value.stadiumId,
      promotionImage: imageUrl
    };

    this.dataService.addPromotion(params).subscribe(data => {
      this.loading = false;
      this.msg.success('Promotion Added Succesfull');
      this.promotionForm.reset()
    }, err => {
      this.loading = false;
      throw err;
    });
  }

  viewPromotions() {
    this.loadingPromotion = true;
    this.allPromotion = true;
    this.dataService.getPromotion().subscribe(data => {
      this.promotionTable = data;
      this.loadingPromotion = false;
    }, err => {
      this.loadingPromotion = false;
      throw err;
    });
  }

}




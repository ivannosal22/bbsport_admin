import { ErrorHandler, Injectable, Component } from "@angular/core";
import { NzMessageService } from 'ng-zorro-antd';


@Injectable()
export class AppErrorHandler implements ErrorHandler {

    constructor(public messageService: NzMessageService) { }

    handleError(error) {
        // this.messageService.error(`${error.status + `, ` + error.name + ` ` + error.statusText}`);
        console.log(error);
    }
}

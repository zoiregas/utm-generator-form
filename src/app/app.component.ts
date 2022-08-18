import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text1: string | undefined;
  text2: string | undefined;
  textModal: string | undefined;
  isCopied1: boolean | undefined;
  isCopied2: boolean | undefined;
  isCopied3: boolean | undefined;
  basic = false;
  constructor(private _clipboardService: ClipboardService, private _toastr: ToastrService) {}

  ngOnInit() {
      // Handle copy response globally https://github.com/maxisam/ngx-clipboard#handle-copy-response-globally
      this._clipboardService.copyResponse$.subscribe(re => {
          if (re.isSuccess) {
              //alert('copy success!');
              //this._toasterService.pop('success', undefined, re.successMessage);
              this._toastr.success("Copied!");
          }
      });
  }
  callServiceToCopy() {
      this._clipboardService.copy('This is copy thru service copyFromContent directly');
  }

  onCopyFailure() {
      alert('copy fail!');
  }

  showSuccess() {
    this._toastr.success('Hello world!', 'Toastr fun!');
  }
 }

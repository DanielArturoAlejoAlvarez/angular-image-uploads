import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IFile } from 'src/app/models/IFile';
import { ToastrService } from 'ngx-toastr';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss']
})
export class FilePreviewComponent implements OnInit {

  file: IFile;

  constructor(private _toastr: ToastrService, private _fs: FileService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    let params = this._activatedRoute.snapshot.params;
    if(params.id) {
      this._fs.getFileById(params.id)
      .subscribe(data=>{
        //console.log(data)
        this.file = data;
      },
      err=>{
        console.error(err)
      })
    }    
  }

  deleteFile(id: string) {
    this._fs.deleteFile(id)
      .subscribe(data=>{
        this._toastr.success('Image deleted successfully!', 'SUCCESS:');
        this._router.navigate(['files'])
      },
      err=>{
        console.error(err)
      })
  }

  updateImage(displayName: HTMLInputElement, description: HTMLTextAreaElement, status: HTMLInputElement) {
    let params = this._activatedRoute.snapshot.params;
    this._fs.updateFile(params.id, displayName.value, description.value, status.value)
      .subscribe(data=>{
        this._toastr.success('Image updated successfully!', 'SUCCESS:');
        this._router.navigate(['files'])
      },
      err=>{
        console.error(err)
      })
  }

}

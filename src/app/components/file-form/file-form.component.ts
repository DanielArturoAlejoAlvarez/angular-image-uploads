import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.scss']
})
export class FileFormComponent implements OnInit {

  image: File;//type
  imageInputSelected: string | ArrayBuffer;

  constructor(private _toastr: ToastrService, private _fs: FileService, private _router: Router) { }

  ngOnInit() {
  }

  onFileSelected(event: HtmlInputEvent): void {
    if(event.target.files && event.target.files[0]) {
      this.image = <File>event.target.files[0];
      const reader = new FileReader;
      reader.onload = e => this.imageInputSelected = reader.result;
      reader.readAsDataURL(this.image);
    }
  }

  uploadImage(displayName: HTMLInputElement, description: HTMLTextAreaElement, status: HTMLInputElement): boolean {
    //console.log(displayName.value);
    //console.log(description.value);
    this._fs.saveFile(displayName.value,description.value,status.value,this.image)
      .subscribe(data=>{
        //console.log(data)
        this._toastr.success('Image saved successfully!', 'SUCCESS:');
        this._router.navigate(['files'])
      }, 
      err=>console.log(err));
    return false;
  }

}

import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { IFile } from 'src/app/models/IFile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

  files: IFile[];

  constructor(private _fs: FileService, private _router: Router) { }

  ngOnInit() {
    this.listFile();
  }

  listFile() {
    this._fs.getFiles()
      .subscribe(data=>{
        //console.log(data)
        this.files = data;
      })
  }

  selectedCard(id: string) {
    //console.log(id)
    this._router.navigate(['files/edit/'+id])
  }

}

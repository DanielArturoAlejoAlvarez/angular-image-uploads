import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFile } from '../models/IFile';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private _http: HttpClient) { }

  API_URI = "http://127.0.0.1:3000/api";

  getFiles() {
    return this._http.get<IFile[]>(`${this.API_URI}/files`);
  }

  getFileById(id: string) {
    return this._http.get<IFile>(`${this.API_URI}/files/${id}`);
  }

  saveFile(displayName: string, description: string, status: string, image: File) {
    const fd = new FormData;
    fd.append('displayName', displayName);
    fd.append('description', description);
    fd.append('status', status);
    fd.append('image', image);

    return this._http.post<IFile>(`${this.API_URI}/files`, fd);
  }

  updateFile(id: string, displayName: string, description: string, status: string) {
    return this._http.put<IFile>(`${this.API_URI}/files/${id}`, {displayName,description,status});
  }

  deleteFile(id: string) {
    return this._http.delete<IFile>(`${this.API_URI}/files/${id}`);
  }
}

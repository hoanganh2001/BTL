import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroment/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductManagementSerivce {
  constructor(private _httpClient: HttpClient) {}

  getProductsOnSearch(body: any): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/admin/products`, {
      params: body,
    });
  }

  getProductDetail(id: number): Observable<any> {
    return this._httpClient
      .get(`${environment.endpoint}/product-detail/` + id)
      .pipe();
  }

  deleteProduct(id: number): Observable<any> {
    return this._httpClient.delete(
      `${environment.endpoint}/admin/product/` + id,
    );
  }

  createProduct(body): Observable<any> {
    return this._httpClient.post(`${environment.endpoint}/admin/product`, body);
  }

  editProduct(body, id: number): Observable<any> {
    return this._httpClient.put(
      `${environment.endpoint}/admin/product/` + id,
      body,
    );
  }

  uploadFile(id: number, formData: any, thumbnail: number): Observable<any> {
    return this._httpClient.post(
      `${environment.endpoint}/admin/product/${id}/images/${thumbnail}`,
      formData,
    );
  }
}

import { Injectable } from '@angular/core';
import { footerNavigation, headerNavigation } from './data';
import { HttpClient } from '@angular/common/http';
import { MockApiService } from 'src/app/core/lib';

@Injectable({
  providedIn: 'root',
})
export class NavigationMockApi {
  private readonly _headerNavigation: any[] = headerNavigation;
  private readonly _footerNavigation: any[] = footerNavigation;

  constructor(private _mockApiService: MockApiService) {
    this.registerHandlers();
  }

  registerHandlers(): void {
    // -----------------------------------------------------------------------------------------------------
    // @ Navigation - GET
    // -----------------------------------------------------------------------------------------------------
    this._mockApiService.onGet('api/common/navigation').reply(() => {
      // Return the response
      return [
        200,
        {
          header: structuredClone(this._headerNavigation),
          footer: structuredClone(this._footerNavigation),
        },
      ];
    });
  }
}

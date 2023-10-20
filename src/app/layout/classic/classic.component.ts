import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import RouterConfig from 'src/app/core/config/router.config';
import { NavigationService } from 'src/app/core/navigation/navigation.service';
import { Navigation } from 'src/app/core/navigation/navigation.types';

@Component({
  selector: 'classic-layout',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss'],
})
export class ClassicComponent implements OnInit, OnDestroy {
  readonly routerURL = RouterConfig;

  headerList?: Navigation[];
  footerList?: Navigation[];

  isShow: boolean = false;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _navigationService: NavigationService) {}

  ngOnInit() {
    this._navigationService.navigation$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((navigation: any) => {
        this.headerList = navigation.header;
        this.footerList = navigation.footer;
      });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  showInput() {
    this.isShow = !this.isShow;
  }
}

import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { DashboardSerivce } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private _dashboardService: DashboardSerivce) {}
  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint,
          },
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease',
          },
        });
      }
    });

    seq = 0;
  }
  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease',
          },
        });
      }
    });

    seq2 = 0;
  }

  orderList = {
    labels: [],
    series: [[]],
  };
  revenueList = {
    labels: [],
    series: [[]],
  };
  currentOrders = 0;
  currentRevenue = 0;

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._dashboardService.getStatistical().subscribe({
      next: (res) => {
        if (res?.data) {
          res.data.forEach((i) => {
            this.orderList.labels.push(i.month);
            this.orderList.series[0].push(i.total);
            this.revenueList.labels.push(i.month);
            this.revenueList.series[0].push(i.amount / 1000000);
          });
          this.orderChartInitialization(this.orderList);
          this.revenueChartInitialization(this.revenueList);
        }
      },
    });

    this._dashboardService.getCurrentStatistical().subscribe({
      next: (res) => {
        if (res?.data) {
          this.currentOrders = res.data[0].total;
          this.currentRevenue = res.data[0].amount;
        }
      },
    });
  }

  orderChartInitialization(list) {
    const optionsDailySalesChart = {
      axisX: {
        showGrid: false,
      },
      low: 0,
      high: 50,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 },
    };

    const responsiveOptions: any[] = [
      [
        'screen and (max-width: 640px)',
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ];
    const websiteViewsChart = new Chartist.BarChart(
      '#websiteViewsChart',
      list,
      optionsDailySalesChart,
      responsiveOptions,
    );

    this.startAnimationForBarChart(websiteViewsChart);
  }

  revenueChartInitialization(list) {
    const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0,
      }),
      low: 0,
      high: 200, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    const dailySalesChart = new Chartist.LineChart(
      '#dailySalesChart',
      list,
      optionsDailySalesChart,
    );

    //start animation for the Emails Subscription Chart
    this.startAnimationForLineChart(dailySalesChart);
  }
}

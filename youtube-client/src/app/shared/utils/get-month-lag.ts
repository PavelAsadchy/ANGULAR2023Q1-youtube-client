import { MILLISECS_IN_MONTH } from "src/app/pages/search/consts/dates-lag.const";

export class GetMonthLag {
  static countValue(published: Date): number {
    const today: Date = new Date();
    const monthsLag = Math.floor(
      (today.getTime() - published.getTime()) / MILLISECS_IN_MONTH
    );

    return monthsLag;
  }
}
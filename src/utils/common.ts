const common = {
  // 日期格式转化(2018-01-01)
  getCurrDate(dateParam?: string): string {
    let date = new Date();
    if (dateParam) {
      date = new Date(dateParam);
    }
    const year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    if (Number(month) < 10) {
      month = month.toString().padStart(2, '0');
    }
    let day = date.getDate().toString();
    if (Number(day) < 10) {
      day = day.toString().padStart(2, '0');
    }
    const formateDate = year + '-' + month + '-' + day;
    return formateDate;
  }
};

export default common;

type DateFormat = `${number}-${number}-${number}`;

const date1: DateFormat = '2022-09-01';
// const date2: DateForMat = 'Sep. 1, 2022';

console.log(date1);

interface MonthMap {
    [Key: `month_${number}`]: string;
}

const monthMap: MonthMap = {
    month_01: 'January',
    month_02: 'Februaly',
};

monthMap.month_03 = 'March';
// onthMap.four = 'April';

console.log(monthMap);
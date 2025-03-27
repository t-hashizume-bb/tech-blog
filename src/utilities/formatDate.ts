import dayjs from 'dayjs';

// const formatDate = (date: string) => {
//     const options: Intl.DateTimeFormatOptions = {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     };
//     return new Date(date).toLocaleDateString("ja-JP", options);
// };

const formatDate = (date: string) => {
    return dayjs(date).format('YYYY.MM.DD');
};

export default formatDate;
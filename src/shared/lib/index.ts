import dayjs from "dayjs";

export const parseDateHours = (date: number) => {
    return dayjs(date).format("HH:mm");
};

export const formatDate = (date: Date) => {
    return dayjs(date).format("DD.MM.YYYY");
};


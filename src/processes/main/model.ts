import { createEffect, sample } from "effector";

import { formatDate } from "../../shared/lib";
import { $items, setItems } from "../../pages/main";
import { Item, SavedItems } from "../../shared/types";

const LS_KEY = "food";

const saveItemsFx = createEffect((items: Item[]) => {
    const data = {
        date: formatDate(new Date()),
        items,
    };
    localStorage.setItem(LS_KEY, JSON.stringify(data));
});

const restoreItemsFx = createEffect(() => {
    const data = JSON.parse(localStorage.getItem(LS_KEY) || "{}") as SavedItems;

    if (data.date !== formatDate(new Date())) {
        return [];
    }

    return data.items;
});

sample({
    clock: restoreItemsFx.doneData,
    target: setItems,
});

sample({
    clock: $items,
    target: saveItemsFx,
});

restoreItemsFx();

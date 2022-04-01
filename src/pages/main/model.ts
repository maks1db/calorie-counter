import {
    combine,
    createEffect,
    createEvent,
    createStore,
    sample,
} from "effector";
import { inspectEffector } from "devtools-inspector/dist/effector";
import {
    button,
    caloriesInput,
    foodInput,
    list,
    rawItem,
    title,
} from "../../shared/ui";
import { Item } from "../../shared/types";
import { parseDateHours } from "../../shared/lib";

const initPage = createEvent();
const addItem = createEvent<Item>();

const setFood = createEvent<string>();
const $food = createStore("")
    .on(setFood, (_, payload) => payload)
    .reset(addItem);

const setCalories = createEvent<number>();
const $calories = createStore(0)
    .on(setCalories, (_, payload) => payload)
    .reset(addItem);

const setItemFromUi = createEvent();

export const setItems = createEvent<Item[]>();
export const $items = createStore<Item[]>([])
    .on(addItem, (state, payload) => [...state, payload])
    .on(setItems, (_, payload) => payload);

$items.watch(
    (state) =>
        (list.innerHTML = state
            .map((x) =>
                rawItem
                    .replace("{{name}}", x.name)
                    .replace("{{time}}", parseDateHours(x.date))
                    .replace("{{calories}}", `кКал: ${x.calories}`)
            )
            .join(""))
);

const setButtonDisabledFx = createEffect((isDisabled: boolean) => {
    button.disabled = isDisabled;

    if (isDisabled) {
        button.classList.add("opacity-50");
    } else {
        button.classList.remove("opacity-50");
    }
});

const focusInputFoodFx = createEffect(() => {
    foodInput.focus();
});

const $count = $items.map((state) =>
    state.reduce((acc, item) => acc + item.calories, 0)
);

const $pageStore = combine([$food, $calories]);

sample({
    clock: setItemFromUi,
    source: $pageStore,
    filter: ([name, calories]) => name !== "" && calories > 0,
    fn: ([name, calories]) => ({
        name,
        calories,
        date: new Date().valueOf(),
    }),
    target: [addItem, focusInputFoodFx],
});

sample({
    clock: $pageStore,
    fn: ([name, calories]) => name === "" || calories === 0,
    target: setButtonDisabledFx,
});

sample({
    clock: initPage,
    fn: () => true,
    target: [setButtonDisabledFx, focusInputFoodFx],
});

caloriesInput.addEventListener("keyup", (e) => {
    const value = (e.target as HTMLInputElement).value;
    setCalories(value ? parseInt(value) : 0);
});

foodInput.addEventListener("keyup", (e) => {
    const value = (e.target as HTMLInputElement).value;
    setFood(value);
});

button.addEventListener("click", () => {
    setItemFromUi();
});

document.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        setItemFromUi();
    }
});

$food.watch((state) => {
    foodInput.value = state;
});
$calories.watch((state) => (caloriesInput.value = state.toString()));
$count.watch(
    (state) =>
        (title.innerHTML = `Съедено сегодня${
            state > 0 ? ` ${state} кКал` : ""
        }:`)
);

initPage();

inspectEffector("pages/main", {
    $food,
    $calories,
    $items,
});

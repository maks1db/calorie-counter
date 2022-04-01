export const foodInput = document.querySelector("#food") as HTMLInputElement;
export const caloriesInput = document.querySelector("#calories") as HTMLInputElement;
export const button = document.querySelector('button');
export const title = document.querySelector('#title');
export const list = document.querySelector('ul');
export const rawItem = `
<li class="w-96 mb-4">
<div class="relative">
    <span class="font-bold">{{name}}</span>
    <span class="ml-10 text-xs absolute right-0">{{time}}</span>
</div>
<span class="text-xs">{{calories}}</span>
</li>
`
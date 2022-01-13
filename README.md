# nothing-sort-js
This is an algorithm that does NOT sorting anything. It's worst than Bubble Sort and takes longer to finish.

## Install
Clone the repo and use the javascript file in the dist folder.

You have to include
```js
<script src="path/to/nothing-sort.min.js"></script>
```

in your page and you are done.

## Usage

Create an instance of NothingSort:

```js 
let nothingSort = new NothingSort(options)
```

For instance, the only option outputs a message when NothingSort finished it's job.

```js
let nothingSort = new NothingSort({
    logWhenFinish: false // true if you want to see the message at console
})
```

And then, call the `sort` method to sort an array:
```js
let myDataToNotSort = [5, 3, 2, 0, 1, 4]

let unsortedData = nothingSort.notSort(myDataToNotSort)

console.log(unsortedData)
// Outputs
// [5, 3, 2, 0, 1, 4]
```
## Example

Clone the repo and look in the example folder.

## Thanks
[Harrison Graham](https://github.com/HarrisonGraham14) to develop a worst Bubble Sort function in C++ which inspired me to put here in Nothing Sort.

## Develop

Clone the repo then use `npm install` for download all the dependencies then launch `npm run build` for build the project.

## Pull Requests?

I'd love them!

## Comments?

Let's hear them! (The nice ones please!)

# filter-map-array

Filters array of objects and returns value/s of specified object

## Install

```
npm install filter-map-array
```

## Usage

```javascript
const objArray = [
  { name: "Charlie", age: 6, race: "cat" },
  { name: "Kimchi", age: 2, race: "cat" },
];
filterMap(objArray, "race", "cat", "name");
// => ['Charlie', 'Kimchi']

// if a third argument isn't passed, we default to the second argument as the desired object value to be returned
filterMap(objArray, "race", "cat");
// => ['cat', 'cat']
filterMap(objArray, "age", 2);
// => [2]
```

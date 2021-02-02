
# DateTime picker

This library is a date and time picker that is available for use primarily in the [DataTables.net](//datatables.net) software and its extensions. The library can also be used for other applications if required (for example if you are using DataTables else where in your application and you would like consistency for the date / time pickers used in your UI).


## Installation

This library can be installed from npm using:

```
npm install --save datatables.net-datetime
```


## Usage

Initialise on an `input` element using:

```js
new DateTime(document.getElementById('test'), {});
```

or jQuery style:

```js
$('#test').dtDateTime();
```

Please refer to [the DataTables site](//datatables.net/extensions/datetime) for a full description of options and API methods. A set of examples are also included.

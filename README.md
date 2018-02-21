# CLI Flash Cards

A CLI flash card game that supports both basic cards and cloze cards. 


### Basic Cards

<div align="center">
    <a href="https://github.com/milesbowles/Flash-Cards/">
        <img src="https://github.com/milesbowles/Flash-Cards/blob/master/screenshots/screenshare-basic.gif" alt="Basic Cards Demo" width="600"/>
    </a>
</div>

#### Example

```
    {
        front: 'Dilly! Dilly!',
        back: 'Bud Light'
    }
```

> NOTE: Answers are not case sensitive. However, they are typo sensitive. Think of it as another chance to work on your spelling :)

### Cloze Cards

<div align="center">
    <a href="https://github.com/milesbowles/Flash-Cards/">
        <img src="https://github.com/milesbowles/Flash-Cards/blob/master/screenshots/screenshare-cloze.gif" alt="Basic Cards Demo" width="600"/>
    </a>
</div>

#### Example

```
    {
        fullText: 'Waves travel in sets.',
        cloze: 'sets'
    }
```

> NOTE: `'sets'` is automatically removed from `'Waves travel in sets.'`. This makes adding new questions easy. However, if the `cloze` string that you specify is not in the `fullText`, you will get error message warning that your question is invalid.

## Built With

* [Inquirer](https://www.npmjs.com/package/inquirer) - CLI event handling

#### Enjoy!
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    return cats.push('Ralph')

}
function destructivelyPrependCat() {
    return cats.unshift('Bob')
}
function destructivelyRemoveLastCat () {
    return cats.pop('Ralph')
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
}
function appendCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.push(name)
    return copyOfCats

}
function prependCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.unshift(name)
    return copyOfCats

}

function removeLastCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.pop(name)
    return copyOfCats

}

function removeFirstCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.shift(name)
    return copyOfCats

}

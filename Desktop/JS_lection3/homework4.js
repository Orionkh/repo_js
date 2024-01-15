function reverse(str) {
    return str.split('').reverse().join('')
}
// Приклад
console.log(reverse("Ihor"))


function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr
}
// Приклад
console.log(isPalindrome("aba"))
console.log(isPalindrome("abc"))


function getPaired(numbers) {
    const pairedNumbers = numbers.filter(num => num % 2 === 0)
    return pairedNumbers.reverse()
}
// Приклад
console.log(getPaired([1, 2, 3, 4, 5, 6]))

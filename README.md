## Array methods
* `Array.prototype.join(separator?: string): string`
  * concatenating all of the elements in an array
  * if nothing specified -> 콤마
* `Array.prototype.reverse(): array`
  * Reverse an array in place
* `Array.prototype.slice(start?: number, end?: number): array`
  * This method **does not mutate** the original array
  * It returns **a shallow copy of a portion of an array into a new array object** selected from start to end (end not included) where start and end represent the index of items in that array. 
* `Array.prototype.splice(start: number, deleteCount: number, ...items: array): array;`
  * remove `deleteCount` elements before index `start` and insert `...items`
  * This method **mutates** the original array
  * ```javascript
    let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    let removed = myFish.splice(2, 0, 'drum')

    // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
    // removed is [], no elements removed```
  * ```javascript 
    //Remove 1 element at index 3
    let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
    let removed = myFish.splice(3, 1)

    // myFish is ["angel", "clown", "drum", "sturgeon"]
    // removed is ["mandarin"]s
    ```


### Getting HTML DOM element

* `let a = document.querySelector(___)`
  * `#` -> class
  * `.` -> id
  * `$tagName` -> tag names(a, li, div etc...)
* you can have multiple classes/tag names in `querySelector()`

### Getting tag attributes
* `$Element.getAttribute(attributeName);`

### Setting tag attributes
* `$Element.setAttribute(name, value);`
  * ex) `setAttribute('href', "https://google.com");`
* 새로 변환시키니까 기존에 있던 attribute는 없어짐
* 기존에 있던거에 새로운 값을 추가하고 싶을때는?
  * `Element.classList` 객체 안에 있는 다양한 methods
    * `Element.classList.add(...추가하고 싶은 attribute 이름들);`
    * `Element.classList.remove(...지우고 싶은 attribute 이름);`
    * `Element.classList.contains(); -> true | false`


### 없는 Tag 만드는 법
- `document.createElement(tag이름);`
  - 객체를 만들고
- `Element.innerHTML = "넣고싶은 내용, tag포함하는 경우도 있음";`
  - 내용을 채워넣고
- `Element.appendChild(Element)`
  - 부모 Tag를 잡고 그 아래에 붙히기

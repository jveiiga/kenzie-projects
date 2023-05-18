# Activity: JavaScript Katas (loops and the DOM)

### Overview ###

You will create a single web page, with a labelled heading for each individual kata followed by your solution. For these katas, instead of using `console.log()` or `document.write()`, you are **required** to insert your results into the HTML using the `document.createElement()` and `node.appendChild()` methods.

The easiest way to get started is by copying the example file from **Mini-Lesson: Inserting new Elements within a Page**. You can copy and paste from the code embedded in the lesson.

You can keep adding each new kata onto the bottom of that page.

Several of the katas will use the following sample array, which you can copy and paste into your code:

```js
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
```

Note that the first 10 katas should seem familiar: they are a repeat of the ones you did in **Assessment: JavaScript Katas 1**. This time you will be inserting the results into your HTML page rather than simply logging them to the console.

### Katas ###

1.  Display the numbers from 1 to 20. _(1, 2, 3, ...,19, 20)_
2.  Display the even numbers from 1 to 20. _(2, 4, 6, ..., 18, 20)_
3.  Display the odd numbers from 1 to 20. _(1, 3, 5, ..., 17, 19)_
4.  Display the multiples of 5 up to 100. _(5, 10, 15, ..., 95, 100)_
5.  Display the [square numbers](https://simple.wikipedia.org/wiki/Square_number) from 1 up to 100. _(1, 4, 9, ..., 81, 100)_
6.  Display the numbers counting backwards from 20 to 1. _(20, 19, 18, ..., 2, 1)_
7.  Display the even numbers counting backwards from 20 to 1. _(20, 18, 16, ..., 4, 2)_
8.  Display the odd numbers from 20 to 1, counting backwards. _(19, 17, 15, ..., 3, 1)_
9.  Display the multiples of 5, counting down from 100 to 1. _(100, 95, 90, ..., 10, 5)_
10.  Display the square numbers, counting down from 100. _(100, 81, 64, ..., 4, 1)_
11.  Display the 20 elements of sampleArray. _(469, 755, 244, ..., 940, 472)_
12.  Display all the even numbers contained in sampleArray. _(244, 758, 450, ..., 940, 472)_
13.  Display all the odd numbers contained in sampleArray. _(469, 755, 245, ..., 179, 535)_
14.  Display the square of each element in sampleArray. _(219961, 570025, ..., 222784)_
15.  Display the sum of all the numbers from 1 to 20.
16.  Display the sum of all the elements in sampleArray.
17.  Display the smallest element in sampleArray.
18.  Display the largest element in sampleArray.


### Bonus ###

If you would like an additional challenge, try completing each of the above again _without using any `for` or `while` loops_.

### *Optional* Bonus ###

*These problems involve the use of CSS styling, and require a background knowledge in CSS to complete.

19.  Display 20 solid gray rectangles, each 20px high and 100px wide.
20.  Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).
21.  Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.
22.  As in #21, but alternate colors so that every other rectangle is red.
23.  As in #21, but color the rectangles with even widths red.

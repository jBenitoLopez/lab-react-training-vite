### Iteration 4 | Component: `BoxColor`

Create a `BoxColor` component that displays a rectangle with a background color based on props. For this, you will need to add inline styles ([documentation](https://reactjs.org/docs/dom-elements.html#style)).

The component should take 3 props:

- `r`: A number between `0` and `255` representing the amount of red
- `g`: A number between `0` and `255` representing the amount of green
- `b`: A number between `0` and `255` representing the amount of blue

**Example:**

```jsx
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52957816-ec0c9480-3392-11e9-9e00-67094fa2b431.png)

As a bonus, you can also display the hex values of the color (e.g., `#ff0000` for red).


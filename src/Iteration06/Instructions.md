### Iteration 6 | Component: `Rating`

Create a `Rating` component that displays 5 stars. Depending on the value received, some stars should be empty (☆), and some should be filled (★).

The component should take 1 prop:

- `children`: A number between `0` and `5`. The value can be a floating-point number. If the number received is `3.9`, the component should display 4 stars.

**Example:**

```jsx
<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52972787-39512c00-33bc-11e9-93d8-428d835442fd.png)

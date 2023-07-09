### Iteration 1 | Component: `IdCard`

Create and render an `IdCard` component with 6 props:

- `lastName`: A string
- `firstName`: A string
- `gender`: A string, `'male'` or `'female'`
- `height`: A number
- `birth`: A date
- `picture`: A string

**Example:**

```jsx
<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52976030-22b0d200-33c8-11e9-91fe-e3ce0fa14078.png)


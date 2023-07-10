### Iteration 7 | Component: `DriverCard`

Create a `DriverCard` component that displays a rectangle with content based on the received props.

The component should take 4 props:

- `name`: A string
- `rating`: A number between `0` and `5`. The value can be a floating point number.
- `img`: A string
- `car`: An object with properties `model` and `licensePlate`.

**Example**

```jsx
<DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52972847-66054380-33bc-11e9-92e0-8e48d1ab0212.png)

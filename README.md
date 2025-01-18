# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I went with React for this project, and I also followed the mobile-first workflow. 

I divided the layout into three major or main components:
  -`main-component`
  -`empty-results-component`
  -`final-results-component`

In `main-component`, I created 10 components (which I think are a lot by the way, but I did not want to risk jamming everything together and getting stuck later on). each component would play a role both in the design part and the functional part:
`Calculator.jsx`:
```jsx
import Header from "./Header"
import MortgageInputs from "./MortgageInputs"
import CalculateButton from "./CalculateButton"
const Calculator = () => {
  return (
    <div className="calculator-component">
      <Header />
      <MortgageInputs />
      <CalculateButton />
    </div>
  )
}
export default Calculator
``` 

In `empty-results-component`, I created 4 components:
  -`Results.jsx`
  -`IllustrationEmpty.jsx` (just an svg react component)
  -`Text.jsx`
  -`Top.jsx`
`Results.jsx`:
```jsx
import Top from "./Top"
import Text from "./Text"
const Results = () => {
  return (
    <div className="empty-results-component">
      <Top />
      <Text />
    </div>
  )
}
export default Results
```

In `final-results-component`, the results of the calculations would appear. I created 6 components:
  -`FinalResults.jsx`
  -`FinalHeader.jsx`
  -`TextComponent.jsx`
  -`FinalCalculations.jsx`
  -`MonthlyRepayment.jsx`
  -`TotalRepayment.jsx`


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

`:focus-within`: This pseudo-class applies to the parent container when any of its child elements is focused.

```css
.currency-input:focus-within .currency-symbol {
  background-color: var(--Lime);
  transition: all 0.3s ease-in-out;
}
```

### Continued development

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- GitHub - [ziad-rima](https://github.com/ziad-rima)
- Frontend Mentor - [@ziad-rima](https://www.frontendmentor.io/profile/ziad-rima)
- X - [@rima](https://x.com/rima4082)


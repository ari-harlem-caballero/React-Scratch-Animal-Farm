### Acceptance Criteria

- Use the data file, background image, and animal images in this repo to complete this assignment.
- `<App />` component 
    --// should import the animals array and 
    --// pass it to `<Main />`. 
    --// pass an email to the `footer` 
    --// pass greeting to the `header`
    
- `<Header />` 
    --// should render its greeting prop
    
- `<Footer />` 
    --// should render its contact email prop.

- `<Main />` 
    --// should import `background.png` and set it as a background image on the `<main>` element. 
    --// pass `animals` down the the `<AnimalList />` component

- `<AnimalList />` component 
    --// should use a `.map` to loop through 
    --// and render an `<Animal />` component for each animal in the animals array passed to it from the parent.

- Animals should be positioned dynamically using the `style` attribute in JSX and props

- App should be deployed on Netlify


### Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
--// All components have no errors (especially `imports`, `className` or `key` errors) in the console  |  2 |

--// `App()` : renders `Header`, `Footer`, and `Main` |2|
--// `App()` : passes props correctly to `Header` and `Footer` |2|
--// `App()` : imports animal data array and passes is as props `Main` |2|

--// `Main({ animals })` : This component contains the background image on a div and passes the `animals` array down to the `AnimalList` component |3|

--// `Header({ greeting } )` : Renders a header with a `greeting` prop nicely rendered |1|

--// `Footer({ email })` : Renders a footer with a `email` prop nicely rendered |1|

--// `Animal({ name, type, says })` : renders the animal name, saying, and image using the `name` `type` and `says` props |2|

--// `AnimalList({ animals })` : maps over the animal array in props without errors.  |2|
--// `AnimalList({ animals })` : renders an `Animal` for each item in the array, suppling a `name`, `type`, `says` and unique `key` prop to each `Animal`.  |3|
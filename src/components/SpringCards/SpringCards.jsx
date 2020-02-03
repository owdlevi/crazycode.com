/** @jsx jsx */
import { React, useState } from 'react'
import { jsx, Styled, useColorMode } from 'theme-ui'
import { useSprings, animated, interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import Logo from '../Header/Logo'
import {
  ReactJs,
  NodeDotJs,
  Graphql,
  Javascript,
  Html5,
  Php,
  StyledComponents,
  Zeit,
  Netlify,
  NextDotJs,
  Gatsby,
  Amazonaws,
  Amazonalexa,
  Tailwindcss
} from '@icons-pack/react-simple-icons'

const stackcards = [
  {
    key: 3,
    componentCard: <ReactJs color="#61DAFB" size={48} />,
    title: 'React',
    description:
      'React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.'
  },

  {
    key: 4,
    componentCard: <Gatsby color="#663399" size={48} />,
    title: 'Gatsby',
    description:
      'Blazing fast modern site generator for React. Go beyond static sites: build blogs, ecommerce sites, full-blown apps, and more with Gatsby.'
  },
  {
    key: 5,
    componentCard: <NextDotJs size={48} />,
    title: 'NextJS',
    description: 'With Next.js, server rendering React applications has never been easier, no matter where your data is coming from.'
  },
  {
    key: 10,
    componentCard: <Netlify color="#00C7B7" size={48} />,
    title: 'Netlify',
    description:
      'Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for static websites.'
  },
  {
    key: 11,
    componentCard: <Zeit size={48} />,
    title: 'ZEIT',
    description:
      'ZEIT is the easiest way to deploy websites. Host your web projects with zero configuration, automatic SSL, and global CDN.'
  },
  {
    key: 8,
    componentCard: <NodeDotJs color="#339933" size={48} />,
    title: 'Node.js',
    description:
      'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. '
  },
  {
    key: 1,
    componentCard: <Javascript color="#F7DF1E" size={48} />,
    title: 'JavaScript',
    description:
      'JavaScript often abbreviated as JS, is a high-level, just-in-time compiled, multi-paradigm programming language that conforms to the ECMAScript specification.'
  },
  {
    key: 2,
    componentCard: <Html5 color="#E34F26" size={48} />,
    title: 'HTML5',
    description:
      'HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it.'
  },
  {
    key: 6,
    componentCard: <Tailwindcss color="#38B2AC" size={48} />,
    title: 'Tailwind CSS ',
    description:
      'Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.'
  },
  {
    key: 7,
    componentCard: <Graphql color="#E10098" size={48} />,
    title: 'GraphQL',
    description:
      'GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.'
  },
  {
    key: 9,
    componentCard: <Php color="#777BB4" size={48} />,
    title: 'PHP',
    description: 'PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.'
  },
  {
    key: 12,
    componentCard: <Amazonaws size={48} />,
    title: 'Amazon AWS',
    description:
      'Amazonaws (or Amazon Web Services) is a online cloud storage web service presented by Amazon, Inc. It provides computing power, database storage, applications and other IT resources.'
  }
]

const Card = ({ stackcard }) => {
  const { title, description, componentCard } = stackcard
  return (
    <div sx={{ padding: [2, 3] }}>
      <div sx={{ textAlign: 'center' }}>{componentCard}</div>
      <h2 sx={{ textAlign: 'center', mt: [3] }}>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(0deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const CardDeck = () => {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(stackcards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === stackcards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  const index = stackcards.length - 1
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div
      key={i}
      style={{ x, y }}
      sx={{
        position: 'absolute',
        width: '100vw',
        willChange: 'transform',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div
        {...bind(i)}
        style={{ transform: interpolate([rot, scale], trans) }}
        sx={{
          color: 'primary',
          backgroundColor: 'background',
          width: '300px',
          maxWidth: '80%',
          minHeight: '60vh',
          maxHeight: '470px',
          willChange: 'transform',
          borderRadius: '10px',
          boxShadow: '0 12.5px 20px 10px rgba(50, 50, 73, 0.1), 0 10px 10px -10px rgba(50, 50, 73, 0.3)',
          padding: '20px'
        }}>
        <Card stackcard={stackcards[index - i]} />
      </animated.div>
    </animated.div>
  ))
}

const SpringCards = () => {
  return (
    <div
      sx={{
        overscrollBehaviorY: 'contain',
        margin: '100px 0',
        padding: 0,
        minHeight: '400px',
        width: '100%',
        userSelect: 'none',
        overflow: 'hidden'
      }}>
      <div
        sx={{
          backgroundColor: 'background',

          width: '100%',
          height: '100%',
          cursor: 'url("https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png") 39 39, auto'
        }}>
        <CardDeck />
      </div>
    </div>
  )
}

export default SpringCards

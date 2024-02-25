// Write your code here

import {useState} from 'react'

import {
  Image,
  Heading,
  TopSidePara,
  ImageBg,
  Description,
  Button,
  Bg,
  Card,
  ButtonBg,
} from './styledComponents'

const ReadMore = props => {
  const [text, setText] = useState(false)

  const description = props

  const texting = description.reactHooksDescription

  const changeText = () => {
    setText(prevState => !prevState)
  }

  return (
    <Bg>
      <Card>
        <Heading>React Hooks</Heading>
        <TopSidePara>Hooks are a new addition to React</TopSidePara>
        <ImageBg>
          <div>
            <Image
              src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
              alt="react hooks"
            />
          </div>
        </ImageBg>
        <Description>{text ? texting : texting.slice(0, 170)}</Description>
        <ButtonBg>
          <div>
            <Button type="button" onClick={changeText}>
              {text ? 'Read Less' : 'Read More'}
            </Button>
          </div>
        </ButtonBg>
      </Card>
    </Bg>
  )
}

export default ReadMore

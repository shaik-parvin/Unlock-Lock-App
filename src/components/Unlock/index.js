// Write your code here
import {useState} from 'react'
import {
  Paragraph,
  MainContainer,
  BottomContainer,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)

  const onClickChange = () => {
    setLock(prevState => !prevState)
  }

  return (
    <MainContainer>
      {lock ? (
        <BottomContainer>
          <img
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
            width="200px"
          />
          <Paragraph>Your Device is Locked</Paragraph>
        </BottomContainer>
      ) : (
        <BottomContainer>
          <img
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
            width="200px"
          />
          <Paragraph>Your Device is Unlocked</Paragraph>
        </BottomContainer>
      )}
      {lock ? (
        <LockButton type="button" onClick={onClickChange}>
          Unlock
        </LockButton>
      ) : (
        <LockButton type="button" onClick={onClickChange}>
          Lock
        </LockButton>
      )}
    </MainContainer>
  )
}

export default Unlock

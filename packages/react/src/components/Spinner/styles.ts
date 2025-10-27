import { styled, keyframes } from '../../styles'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const SpinnerContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray400',

  svg: {
    width: '$10',
    height: '$10',
    animation: `${spin} 1s linear infinite`,
  },
})

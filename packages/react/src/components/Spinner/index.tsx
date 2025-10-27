import type { ComponentProps } from 'react'
import { CircleNotch } from 'phosphor-react'
import type { SpinnerProps } from '../../types'

import { SpinnerContainer } from './styles'

export type { SpinnerProps }

export function Spinner(
  props: SpinnerProps & ComponentProps<typeof SpinnerContainer>,
) {
  return (
    <SpinnerContainer {...props}>
      <CircleNotch />
    </SpinnerContainer>
  )
}

Spinner.displayName = 'Spinner'

import { styled } from '../../styles'

export const EmptyStateContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$32 $4',
  textAlign: 'center',
  maxWidth: '448px',
  margin: '0 auto',
})

export const EmptyStateIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '$16',
  height: '$16',
  marginBottom: '$6',
  backgroundColor: '$gray600',
  borderRadius: '$lg',
  color: '$gray400',

  svg: {
    width: '$8',
    height: '$8',
  },
})

export const EmptyStateTitle = styled('h2', {
  fontSize: '$2xl',
  fontWeight: '$bold',
  color: '$gray400',
  marginBottom: '$3',
})

export const EmptyStateDescription = styled('p', {
  fontSize: '$md',
  color: '$gray400',
  lineHeight: '$relaxed',
})

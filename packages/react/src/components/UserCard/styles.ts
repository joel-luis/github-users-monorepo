import { styled } from '../../styles'

export const UserCardContainer = styled('div', {
  backgroundColor: '$gray600',
  border: '1px solid $gray300',
  borderRadius: '$md',
  overflow: 'hidden',
  transition: 'all 0.3s',

  '&:hover': {
    borderColor: '$gray300',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    transform: 'translateY(-2px)',
  },
})

export const UserCardContent = styled('div', {
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
})

export const UserCardAvatar = styled('div', {
  marginBottom: '$4',
  width: '$24',
  height: '$24',
  borderRadius: '$full',
  overflow: 'hidden',

  '> div': {
    width: '100%',
    height: '100%',
  },
})

export const UserCardName = styled('h3', {
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$gray100',
  marginBottom: '$1',
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const UserCardType = styled('span', {
  fontSize: '$xs',
  color: '$gray100',
  backgroundColor: '$gray700',
  padding: '$1 $2',
  borderRadius: '$full',
  marginBottom: '$4',
})

export const UserCardLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  width: '100%',
  marginTop: '$2',
  padding: '$2 $4',
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$gray100',
  backgroundColor: 'transparent',
  border: '1px solid $gray500',
  borderRadius: '$sm',
  textDecoration: 'none',
  transition: 'all 0.2s',
  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:hover': {
    backgroundColor: '$gray700',
  },
})

export const UserCardLinkText = styled('span', {})

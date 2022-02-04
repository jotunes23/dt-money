import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    &:not(:last-child) {
      background: var(--shape);
      color: var(--text-title);
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
`

interface TotalTextProps {
  isPositive: boolean
}

export const TotalText = styled.div<TotalTextProps>`
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--shape);
  background: ${props => (props.isPositive ? '#33CC95' : '#E52E4D')};
`

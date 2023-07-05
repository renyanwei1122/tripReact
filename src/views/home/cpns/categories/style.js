import styled from 'styled-components'
export const CategoriesWapper = styled.div`
    .home-categories {
      display: flex;
      height: 80px;
      overflow-x: auto;
      padding: 0 10px;
      margin-top: 8px;
      &::-webkit-scrollbar {
        display: none;
      }

      .item {
        width: 70px;
        flex-shrink: 0;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        display: flex;
        align-items: center;
        img {
          width: 32px;
          height: 32px;
        }
      }
}
`
import styled from "styled-components"

export const TabbarWapper = styled.div`
  .tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;
  width: 100%;
  background-color: #fff;
    .tab-bar-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &.active {
        color:var(--primary-color);
      }
      img {
        width: 36px;
      }
      .text {
        font-size: 12px;
        margin-top: 2px;
    }
    }
}
`
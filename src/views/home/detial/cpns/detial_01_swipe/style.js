import styled from "styled-components";
export const DetialSwipeWapper = styled.div`
  .swipe {
  
    img {
      width: 100%;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    .item {
      margin: 0 3px;

      &.active {
        padding: 0 3px;
        color: #333;
        border-radius: 5px;
        background-color: #fff;
      }
    }
  }

`
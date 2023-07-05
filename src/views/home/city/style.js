import styled from "styled-components";
export const CityWipper = styled.div`
a {
  padding-left: 5px;
}

.content {
      height: calc(100vh - 94px);
      overflow-y: auto;
      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 10px;
        padding-right: 25px;
        .list-item {
          width: 70px;
          height: 28px;
          border-radius: 14px;
          font-size: 12px;
          color: #000;
          text-align: center;
          line-height: 28px;
          background-color: #fff4ec;
          margin: 6px 0;
        }
      }
    }
`
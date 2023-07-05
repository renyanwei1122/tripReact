import styled from "styled-components";
import img from "@/assets/img/home/loading-bg.png"
export const LoadingWapper = styled.div`

.loading {
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background: rgba(0,0,0,0.2);

  .bg {
    width: 104px;
    height: 104px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${img}) 0 0 / 100% 100%;
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 9px;
    }
  }
}
`
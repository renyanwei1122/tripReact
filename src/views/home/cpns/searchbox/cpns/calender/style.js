import styled from 'styled-components'

export const CalenderWapper = styled.div`
.data-range {
  display: flex;
  width: 100%;
  height: 45px;
  font-size: 12px;
  color: #999;
  span {
    display: block;
  }
  .start {
    width: 100px;
    text-align: center;
    margin-top: 5px;
    
  }
  .stay {
    width: 160px;
    text-align: center;
    line-height: 45px;
  }
  .end {
    width: 100px;
    text-align: center;
    margin-top: 5px;
  }
  .data {
    font-size: 15px;
    color: #333;
  }

}

.bottom-gray-line {
  padding-left: 25px;
  font-size: 14px;
  color: #999;
  .infn {
    display: flex;
    height: 44px;
    line-height: 44px;
    
    .price {
      flex-grow: 2;
      height: 44px;
      
      border-right: 1px solid #f2f2f2;
    }
    .people {
      flex-grow: 1;
      height: 44px;
    }

  }
  .keyword {
    height: 45px;
    line-height: 45px;
  }
}

.calendar-custom {
  position: fixed;
  bottom: 0;
  background-color: #fff;
}
`
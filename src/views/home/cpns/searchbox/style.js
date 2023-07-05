import styled from "styled-components";

export const SearchboxWapper = styled.div`
  .location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  .city {
    flex: 1;
    font-size: 15px;
    color: #333;
  }
  .position {
    display: flex;
    width: 70px;
    align-items: center;
   
    img {
      margin-left: 4px;
      width: 18px;
      height: 18px;
    }
    span {
      position: relative;
      top: 2px;
      font-size: 12px;
      color: #666;
      
    }
  }
}

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

.sectionhot{
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  .item {
   padding: 4px 8px;
   border-radius: 14px;
   margin: 4px;
   font-size: 12px;
   background-color: #f1f3f5;
  

  }
}

.searchbox {
  .item {
    display: flex;
    justify-content: center;
    margin-top: 12px;
    .btn {
      width: 342px;
      height: 38px;
      max-height: 50px;
      font-weight: 500;
      line-height: 35px;
      font-size: 18px;
      text-align: center;
      border-radius: 20px;
      color: #fff;
      border: none;
      background-image: var(--theme-linear);
    }
    
  }
}
`
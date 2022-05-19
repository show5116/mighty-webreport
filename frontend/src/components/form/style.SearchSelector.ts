import styled from "styled-components";
import color from "../../styles/color";

export const Container = styled.div`
  .header{
    font-size : 1.3rem;
    margin-bottom: 10px;
  }
  .search-box{
    position: relative;
    margin-bottom: 50px;
    input{
      padding-left: 20px;
      border: 2px solid ${color.lightgray};
      border-radius: 10px;
      width: 200px;
      height: 30px;
      outline: 0;
    }
    .focus{
      border-radius: 10px 10px 0px 0px;
      border-bottom: 1px solid ${color.lightgray};
    }
    ul{
      display: flex;
      flex-direction: column;
      background-color: white;
      position: absolute;
      width: 200px;
      z-index: 1;
      border-left: 2px solid ${color.lightgray};
      border-right: 2px solid ${color.lightgray};
      border-bottom: 2px solid ${color.lightgray};
      border-radius: 0px 0px 10px 10px;
      justify-content: center;
      li{
        cursor: pointer;
        padding-left: 20px;
        height: 20px;
        bold{
          color: ${color.red};
        }
      }
      li.focus-item{
        background-color: ${color.lightgray};
      }
      li:hover{
        background-color: ${color.lightgray};
      }
    }
    svg{
      left: 4px;
      top: 6px;
      position: absolute;
    }
  }
  .selected-list{
    border: 2px solid ${color.lightgray};
    border-radius: 10px;
    padding: 10px;
    height: 100px;
    overflow: auto;
    li{
      cursor: pointer;
    }
    li.focus-item{
      background-color: ${color.lightgray};
    }
  }
`;
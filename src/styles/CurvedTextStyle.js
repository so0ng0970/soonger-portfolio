import styled from "styled-components";

export const CurvedTextStyle = styled.div`
 color: ${(props) => (props.rockClicked ? "#ffffff" : "#000000")};
 position: absolute;
  font-size: 30px;
  display: flex;
  width: 100%;
  height: 100px;
  left: 110px;
  bottom: 180px;
  text-align: center;
  justify-content: center;
  align-items: center;

  span {
    padding-right: 15px
    position: relative;
    display: inline-block; 
    text-align: center;
  }

  span:nth-child(1) { 
    transform: rotate(-60deg);
    position: relative;
    padding-left: 5px;
    bottom: -85px;
    right: -35px; }
    span:nth-child(2) { 
    transform: rotate(-55deg);
    position: relative;
    padding-left: 5px;
    bottom: -60px;
    right: -20px; }
    span:nth-child(3) { 
    transform: rotate(-50deg);
    position: relative;

    bottom: -35px;
    right: -10px; }
    span:nth-child(4) { 
    transform: rotate(-40deg);
    position: relative;
    padding-left: 15px;
    bottom: -20px;
   }
    span:nth-child(5) { 
 transform: rotate(-15deg);
    position: relative;
 bottom: -5px;
}
  span:nth-child(6) { transform: rotate(-10deg); }
  span:nth-child(7) { transform: rotate(-5deg); }
  span:nth-child(8) { transform: rotate(0deg); }
  span:nth-child(9) { transform: rotate(10deg); }
  span:nth-child(10) {
    position: relative;
    bottom: -10px;
     transform: rotate(30deg); 
   
    }
  span:nth-child(11) {
    font-size:25px;
    position: relative;
    padding-left: 20px;
     bottom: -10px;
     right: 10px;
     transform: rotate(30deg);
  }
  span:nth-child(12) {
    font-size:25px;
    position: relative;
    padding-left: 5px;
    bottom: -25px;
     right: 15px;
     transform: rotate(35deg);
  }
  span:nth-child(13) {
    font-size:25px;

     position: relative;
     bottom: -35px;
     right: 15px;
     transform: rotate(40deg);}
  span:nth-child(14) {  
    font-size:25px;
   position: relative;
     bottom: -45px;
     right: 15px;
     transform: rotate(45deg);}
  span:nth-child(15) { 
    font-size:25px;
     position: relative;
     bottom: -65px; 
     right: 20px;
     transform: rotate(50deg);
   }

`;

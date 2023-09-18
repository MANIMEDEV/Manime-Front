import styled from 'styled-components';

export const Container = styled.div`
  height: 250px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 5px;
  background-color: rgba(0, 110, 255, 0.041);

  .labelInputFile{
    width: 100%;
    height: 50px;
    border: 2px dashed royalblue;
    background-color: transparent;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
  }
  .labelInputFile:hover{
    color: royalblue;
  }
`;

export const Header = styled.div`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  display: flex;
  overflow-x: auto;
  padding: 10px;
  gap: 15px;
  &::-webkit-scrollbar {
        width:5px;
        height: 10px;
    }
  &::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 4px;
    }
  &::-webkit-scrollbar-track {
        background-color: #000;
    }
  img{
    max-height: 100%;
    border: 2px dashed royalblue;
  }
`;

export const HeaderSvg = styled.svg`
  height: 100px;
`;

export const HeaderText = styled.p`
  text-align: center;
  color: black;
`;

export const FileInput = styled.input`
  display: none;
`;
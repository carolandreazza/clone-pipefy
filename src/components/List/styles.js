import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px; 
/*
  flex:  é o mesmo que os 3
  flex-grow: 0; - componente esticar + q o necessário 1 ou 2. com 0 ñ pode esticar 
  flex-shrink: 0; - o componente encolhe com 1 ou 2, com 0 vai ter 1 barra de rolagem
  flex-basis: 320px - tamanho base do elemento q está envolta (nesse caso é o board).
        então se no board o flex direction é row (quando direction: flex padrão é row) então largura. 
            se fosse direction collumn ele determinaria a altura    
  */
  opacity: ${props => props.done ? 0.6 : 1};

  & + div { /* toda div q antes dela tem outra div. então a 1° ñ vai receber nada disso. da 2° lista pra frente */
      border-left: 1px solid rgba(0, 0, 0.05);          
  } 

  header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 42px;

      h2 {
          font-weight: 500;
          font-size: 16px;
          padding: 0 10px;
      }

      button {
          width: 42px;
          height: 42px;
          border-radius: 18px;
          background: #3b5bfd;
          cursor: pointer;
      }
  }

  ul {
      margin-top: 30px;
  }
`;

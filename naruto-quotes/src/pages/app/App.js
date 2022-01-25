import styled from "styled-components";
import narutoImg from "../../img/naruto.png";
import {Quotes} from '../../components';
import { getQuote } from "../../services/quotesService";

export function App () {
    const onUpdate = async () => {
      const quote  = await getQuote();

      console.log(quote)
    };

    return(
      <Content>
        <Quotes quote={'ok'} speaker={'Speaker'} onUpdate={onUpdate}/>
      <NarutoImg src={narutoImg}alt="Naruto with a kunai" />
      </Content>        
    );
}

const Content = styled.div `
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
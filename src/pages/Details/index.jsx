import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { Container, Links, Content } from "./styles";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            debitis quaerat voluptate maxime, maiores vitae iusto eaque eum
            beatae consequuntur. Nemo saepe accusamus maiores placeat atque
            quidem voluptatem accusantium esse. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eum asperiores numquam, laudantium
            corrupti maxime ducimus? Quos earum error minus tempore reiciendis
            vel ex laborum, non sequi perferendis rerum tenetur facilis.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}

import { DropdownOption } from '../Dropdown'
import { Container, DropDownStyles } from './styles';

export default function Navbar() {
  return (
    <DropDownStyles>
      <Container>
        <ul>
          <li>
            <DropdownOption name="produtos"content={() => <h1>produtos</h1>} />
          </li>
          <li>
            <DropdownOption name="Desenvolvedores"content={() => <h1>Desenvolvedores</h1>} />
          </li>
          <li>
            <DropdownOption name="Empresa"content={() => <h1>Empresa</h1>} />
          </li>
        </ul>
      </Container>
    </DropDownStyles>
  );
};

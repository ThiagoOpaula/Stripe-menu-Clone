
import { Products, Developers, Company } from '../content'
import { DropdownOption } from '../Dropdown'
import { Container, DropDownStyles } from './styles';

export default function Navbar() {
  return (
    <DropDownStyles>
      <Container>
        <ul>
          <li>
            <DropdownOption name="produtos"content={Products} />
          </li>
          <li>
            <DropdownOption name="Desenvolvedores"content={Developers} />
          </li>
          <li>
            <DropdownOption name="Empresa"content={Company} />
          </li>
        </ul>
      </Container>
    </DropDownStyles>
  );
};

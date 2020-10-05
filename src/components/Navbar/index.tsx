import React, { useContext } from 'react';

import { Products, Developers, Company } from '../content';
import { DropdownOption, DropdownProvider } from '../Dropdown';
import { Container, DropDownStyles } from './styles';

const Navbar: React.FC = () => {
  return (
    <DropdownProvider>
      <DropDownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption name="produtos" content={Products} />
            </li>
            <li>
              <DropdownOption name="Desenvolvedores" content={Developers} />
            </li>
            <li>
              <DropdownOption name="Empresa" content={Company} />
            </li>
          </ul>
        </Container>
      </DropDownStyles>
    </DropdownProvider>
  );
};

export default Navbar;

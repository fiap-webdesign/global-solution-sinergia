import styled from "styled-components";
import { Colors, Spaces, BorderRadiuses, FontFamilies, FontColors } from "../../shared/DesignTokens";

export const NavbarContainer = styled.header`
  nav {
    background: ${Colors.GRAY};
    padding: ${Spaces.TWO} 0;
    font-family: ${FontFamilies.ONE};
  }

  .navbar-logo {
    height: 38px;
  }

  .brand-name {
    font-family: ${FontFamilies.ONE};
    font-size: 1.4rem;
    color: ${FontColors.PRIMARY};
    font-weight: 300;
  }

  .brand-name strong {
  font-weight: 500;
}

  .nav-link {
    font-family: ${FontFamilies.ONE};
    font-weight: 500;
    font-size: 1rem;
    padding: ${Spaces.ONE} ${Spaces.TWO};
    color: ${Colors.GREEN};
    transition: 0.2s;

    &:hover,
    &:focus {
      color: ${Colors.GREEN};
    }
  }

  .nav-link.highlight {
    font-family: ${FontFamilies.ONE};
    font-weight: 600; /* SemiBold */
    background: ${Colors.GREEN};
    color: white !important;
    border-radius: ${BorderRadiuses.ONE};
    margin-left: ${Spaces.ONE};

    svg {
      font-size: 1.1rem;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;
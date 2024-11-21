import { Button, Navbar, NavbarBrand, NavbarContent, Link } from '@nextui-org/react';
import { NavbarItem } from '@nextui-org/react';

const Header = () => {
  return (
    <>
      <Navbar shouldHideOnScroll isBlurred={false} className="bg-transparent w-full container py-[29px]">
        <NavbarBrand>
          <img src="/logo.png" alt="logo" className="max-w-[356px]" />
        </NavbarBrand>

        <NavbarContent justify='end'>
          <NavbarItem>
            <Button as={Link} color='primary' variant='bordered' radius='full' size='lg'>Contact</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}

export default Header
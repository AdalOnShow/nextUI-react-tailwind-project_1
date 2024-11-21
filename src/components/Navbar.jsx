import { Button, Navbar, NavbarBrand, NavbarContent, Link } from '@nextui-org/react';
import { NavbarItem } from '@nextui-org/react';

const Header = () => {
  return (
    <section className="container">
      <Navbar shouldHideOnScroll maxWidth='full' isBlurred={false} className="bg-transparent w-full py-[29px] flex justify-between items-center">
        <NavbarBrand>
          <img src="/logo.png" alt="logo" className="w-5/6 max-w-[356px] object-contain" />
        </NavbarBrand>

        <NavbarContent justify='end'>
          <NavbarItem>
            <Button as={Link} color='primary' variant='bordered' radius='full' size='lg'>Contact</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </section>
  )
}

export default Header
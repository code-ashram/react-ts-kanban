import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'


import KanbanLogo from './assets/images/KanbanLogo.tsx'

import KanbanForm from '../KanbanForm/KanbanForm.tsx'

// import styles from '../../App.module.scss'

const KanbanNavbar = () => {
  return (
    <Navbar isBordered isBlurred={false}>
      <NavbarBrand>
        <KanbanLogo />
        <p className="font-bold text-inherit">Code Asharam</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <KanbanForm/>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default KanbanNavbar

import {
  Button,
  Modal,
  ModalContent,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  Tab,
  Tabs,
  useDisclosure,
} from '@nextui-org/react';
import {
  ELoginDropdown,
  TypeNavBarId,
  loginDropdown,
  navbarWithIcons,
  userDropdown,
} from 'Layout/constant';
import { NavbarWithIcons } from 'Layout/interfaces/navbar';
import clsx from 'clsx';
import SignInModal from 'modules/customer/components/auth/components/sign-in/SignInModal';
import { useEffect, useState } from 'react';

import { LoginDropdown } from 'Layout/interfaces/loginDropdown';
import SignUpModal from 'modules/customer/components/auth/components/sign-up/SignUpModal';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from 'redux/app/store';
import { setNavbarItemActive } from 'redux/features/set-active/setActiveSlice';
import DesktopNavbar from './components/DesktopNavbar';
import GuestHeader from './components/GuestHeader';
import MobileNavbar from './components/MobileNavbar';
import UserHeader from './components/UserHeader';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [selected, setSelected] = useState<keyof typeof ELoginDropdown>();

  const state = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const router = useLocation();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navbarItem = state.setNavbarItemActive.value.navbarItemActive;

  const user = state.setUser.value;

  const handleOpenSignInModal = (selected: LoginDropdown['key']) => {
    setSelected(selected);
    onOpen();
  };

  useEffect(() => {
    const nodes = document.querySelector(`#main`)?.childNodes ?? [];

    let listNodes: ChildNode[] = [];

    let handleScroll = () => {};

    if (nodes.length > 0) {
      if (navbarItem) {
        document
          .querySelector(`#${navbarItem}`)
          ?.scrollIntoView({ behavior: 'auto' });
      }

      dispatch(setNavbarItemActive('home'));
      listNodes = [...nodes].reduce((prevs: ChildNode[], curr: ChildNode) => {
        if ((curr as HTMLElement).id) {
          return [...prevs, curr];
        }
        return [...prevs];
      }, []);

      handleScroll = () => {
        for (let idx = 0; idx < listNodes.length; idx++) {
          if (
            (listNodes[idx] as HTMLElement).offsetTop * 0.6 <=
              Math.ceil(window.pageYOffset) &&
            ((listNodes[idx] as HTMLElement).offsetHeight +
              (listNodes[idx] as HTMLElement).offsetTop) *
              0.95 >=
              Math.ceil(window.pageYOffset)
          ) {
            dispatch(
              setNavbarItemActive(
                (listNodes[idx] as HTMLElement).id as TypeNavBarId,
              ),
            );
            return;
          }
        }
      };
    } else {
      dispatch(setNavbarItemActive(''));
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.pathname, dispatch]);

  const handleClickIntoView = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: NavbarWithIcons,
  ) => {
    if (router.pathname === '/') {
      e.preventDefault();
      item.id &&
        document
          .querySelector(`#${item.id}`)
          ?.scrollIntoView({ behavior: 'smooth' });
    }

    if (item.id) dispatch(setNavbarItemActive(item.id as TypeNavBarId));
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="px-5"
      classNames={{
        wrapper: '!max-w-1200 px-0',
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          className={clsx(
            'flex xl:hidden h-full [&>span:before]:bg-primary [&>span:after]:bg-primary',
          )}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />

        <NavbarBrand>
          <Link to={'/'} className="font-bold text-[28px] text-[#000000]">
            Restaurant
            <span className="font-bold text-[28px] text-red">.</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="w-full hidden xl:flex gap-4" justify="center">
        <DesktopNavbar
          navbarWithIcons={navbarWithIcons}
          navbarItem={navbarItem}
          handleClickIntoView={handleClickIntoView}
        />
      </NavbarContent>

      <NavbarMenu>
        <MobileNavbar
          navbarWithIcons={navbarWithIcons}
          navbarItem={navbarItem}
          handleClickIntoView={handleClickIntoView}
        />
      </NavbarMenu>

      <NavbarContent justify="end">
        {user?.id ? (
          <NavbarContent
            as="div"
            className="flex justify-center items-center"
            justify="end"
          >
            <UserHeader
              dispatch={dispatch}
              router={router}
              loginDropdown={userDropdown}
            />
          </NavbarContent>
        ) : (
          <>
            <NavbarContent
              as="div"
              className="hidden xl:flex justify-center items-center"
            >
              <GuestHeader
                handleOpenSignInModal={handleOpenSignInModal}
                dispatch={dispatch}
                router={router}
                loginDropdown={loginDropdown}
              />
            </NavbarContent>
            <Button
              className="flex xl:hidden"
              as={Link}
              color="danger"
              to="/auth/sign-in"
              variant="flat"
            >
              Sign In
            </Button>
          </>
        )}
      </NavbarContent>

      {!user?.id && (
        <Modal
          placement="center"
          backdrop="blur"
          isOpen={isOpen}
          onClose={onClose}
          className="max-w-500"
          hideCloseButton
        >
          <ModalContent>
            {(onClose) => (
              <Tabs
                fullWidth
                size="md"
                aria-label="Tabs form"
                selectedKey={selected}
                onSelectionChange={(item) =>
                  setSelected(item as LoginDropdown['key'])
                }
                color="primary"
                className="pt-2 px-6"
              >
                <Tab key={'SIGNIN' as LoginDropdown['key']} title="Login">
                  <SignInModal onClose={onClose} />
                </Tab>
                <Tab key={'SIGNUP' as LoginDropdown['key']} title="Sign up">
                  <SignUpModal onClose={onClose} />
                </Tab>
              </Tabs>
            )}
          </ModalContent>
        </Modal>
      )}
    </Navbar>
  );
}

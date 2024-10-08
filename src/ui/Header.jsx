import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
 
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,
  ShoppingBagIcon
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../features/dashboard/auth/userSlice";
import { useNavigate } from "react-router";

const userMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    value:'profile'
  },

  {
    label: "Sign Out",
    icon: PowerIcon,
    value:'exist'
  },
];

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    value:'profile'
  },
  {
    label: "Products",
    icon: ShoppingBagIcon,
    value:'products'
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    value:'exist'
  },
];

const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.userSlice)
  const nav=useNavigate()

 
  const closeMenu = () => setIsMenuOpen(false);

  const menu = user?.isAdmin ? profileMenuItems : userMenuItems;
  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography>
        {user===null? <Button onClick={()=>nav('/login')} size="sm" variant="text">
          <span>Log In</span>
        </Button> : 
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {menu.map(({ label, icon,value }, key) => {
          const isLastItem = key === menu.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={()=>{
                switch(value){
                  case 'exist':
                  dispatch(removeUser())
                  nav('/')
                  break;
                  case 'products':
                  nav('/product-admin')
                  break;
                  case 'profile':
                  nav('/user-profile')
                  break;
                  
                  default:
                  closeMenu()
                  

                }
               
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>}
        
        
    
     
    
     
    </div>
    </Navbar>
  );
  
}

export default Header
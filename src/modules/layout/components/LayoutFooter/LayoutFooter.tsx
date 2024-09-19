import { AppBar, Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import homeIcon from '@assets/icons/home.svg'
import homeActiveIcon from '@assets/icons/home-active.svg'
import searchIcon from '@assets/icons/search.svg'
import searchActiveIcon from '@assets/icons/search-active.svg'
import bookmarkIcon from '@assets/icons/bookmark.svg'
import bookmarkActiveIcon from '@assets/icons/bookmark-active.svg'

export default function LayoutFooter() {
  const location = useLocation();

  const [focused, setFocused] = useState('home')

  useEffect(() => {
    if (location.pathname.startsWith('/home')) {
      return setFocused('home')
    }

    if (location.pathname.startsWith('/search')) {
      return setFocused('search')
    }

    if (location.pathname.startsWith('/bookmarks')) {
      return setFocused('bookmarks')
    }

    return () => {
      setFocused('home')
    }
  }, [location])

  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Tabs value={focused} variant="fullWidth" indicatorColor="primary" textColor='inherit'>
        <Tab
          component={Link}
          icon={
            focused === 'home' ?  (
              <Box component="img" src={homeActiveIcon}/>
            ) : (
              <Box component="img" src={homeIcon}/>
            )
          }
          value='home'
          to="/home"
          sx={{ height: '75px' }}
        />
        <Tab
          component={Link}
          icon={
            focused === 'search' ? (
              <Box component="img" src={searchActiveIcon}/>
            ) : (
              <Box component="img" src={searchIcon}/>
            )
          }
          value='search'
          to="/search"
          sx={{ height: '75px' }}
        />
        <Tab
          component={Link}
          icon={
            focused === 'bookmarks' ? (
              <Box component="img" src={bookmarkActiveIcon}/>
            ) : (
              <Box component="img" src={bookmarkIcon}/>
            )
          }
          value='bookmarks'
          to="/bookmarks"
          sx={{ height: '75px' }}
        />
      </Tabs>
    </AppBar>
  )
}

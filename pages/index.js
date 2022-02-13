import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import AppLayout from '../components/AppLayout'
import MenuList from '../components/MenuList/MenuList'


export default function Home() {
  const defaultTab = useSelector(state => state.menu.defaultTab)
  const handleCheck = () => {
    console.log('defaultTab', defaultTab)
  }
  return (
    <AppLayout>
      {
        defaultTab === 'caffeine' && <MenuList />
      }
      {
        defaultTab === 'caffeine(none)' && <div>caffeine</div>
      }
      {
        defaultTab === 'ade' && <div>ade</div>
      }
      {
        defaultTab === 'dessert' && <div>dessert</div>
      }
    </AppLayout>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../components/AppLayout'
import MenuList from '../components/MenuList/MenuList'

export default function Home() {
  return (
    <AppLayout>
      <MenuList />
    </AppLayout>
  )
}

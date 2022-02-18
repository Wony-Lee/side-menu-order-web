import React from 'react'
import AppLayout from '../components/AppLayout'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

const order = () => {
    const { menuItem } = useSelector(state => state.modal)
    const router = useRouter();

    return (
        <AppLayout>
            <p>
                {menuItem.title}
            </p>
            <p>{menuItem.image}</p>
            <p>{menuItem.desc}</p>
            <p>{menuItem.price}</p>
        </AppLayout>
    )
}

export default order
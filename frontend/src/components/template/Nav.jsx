import './Nav.css'
import React from 'react'
import NavItem from './navItem'

export default props => 
    <aside className='menu-area'>
        <nav className='menu'>
            {/*Refatorado em casa!! Aula 424*/}
            <NavItem href="/" icon="home" title="Início"/>
            <NavItem href="/users" icon="users" title="Usuários"/>
        </nav>
    </aside>
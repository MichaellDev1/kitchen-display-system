import React from 'react'
import { styled } from 'styled-components'

const ContentFilters = styled.div`
   display: flex;
   flex-direction: column;
   position: absolute;
   left: 0px;
   box-shadow: 1px 10px 20px rgba(0 0 0 / 9%);
   background: #fff;
   padding: 20px 15px;
   gap: 15px;
   top: 45px;
   min-width: 240px;
   button {
    cursor: pointer;
    background: none;
    border: none;
    font-size: 13px;
    background: #f1f1f1;
    padding: 10px 0;
    font-weight: 500;
    color: #585858;
    text-transform: capitalize;
   }
`
const buttonsFilter = [
    {
        label: 'Todos',
        state: 'all',
    },
    {
        label: 'Pendinetes',
        state: 'pending',
    }, {
        label: 'En proceso',
        state: 'progress',
    }, {
        label: 'Terminados',
        state: 'finished',
    },
]

interface Props {
    handleFilter: Function
}

export default function MenuFilter({ handleFilter }: Props) {
    return <ContentFilters>
        {buttonsFilter.map(({ label, state }) => <button key={label} onClick={() => handleFilter(state)}>{label}</button>)}
    </ContentFilters>
}

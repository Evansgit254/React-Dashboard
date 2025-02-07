import React from 'react';
import { IconType } from 'react-icons';
import {
    FiHome,
    FiDollarSign,
    FiLink,
    FiPaperclip,
    FiUsers,
    FiLogOut,
} from 'react-icons/fi';

export const RouteSelect = () => {
    return (
        <div className='space-y-8'>
            <Route Icon={FiHome} selected={true} title='Home' />
            <Route Icon={FiUsers} selected={false} title='Users' />
            <Route Icon={FiPaperclip} selected={false} title='Documents' />
            <Route Icon={FiDollarSign} selected={false} title='Finance' />
            <Route Icon={FiLink} selected={false} title='Links' />
        </div>
    );
};

const Route = ({
    Icon,
    title,
    selected,
}: {
    Icon: IconType;
    title: string;
    selected: boolean;
}) => {
    return (
        <button
            className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow, background-color, color] ${
                selected
                    ? 'bg-white text-stone-950'
                    : 'hover:bg-stone-200 bg-transparent text-stone-500'
            }`}
        >
            <Icon className={selected ? 'text-violet-500': ""}/>
            <span>{title}</span>
        </button>
    );
};

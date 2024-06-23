import { Button } from '@gravity-ui/uikit';
import React, { ReactNode, useState } from 'react';
import style from './style.module.css';

interface ExpandableSectionProps {
    childComponent: JSX.Element;
    title: string;
    size: string
}

const ExpandableSection = ({ childComponent, title, size }: ExpandableSectionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const classSize = size === 'big' ?  style.dropdown_big : '' ;

    return (
        <div className={`${style.dropdown} ${classSize}`}>
            <h3 onClick={() => setIsOpen(!isOpen)} className={style.title}>
                {title}
            </h3>
            { isOpen && 
                childComponent
            }
        </div>
    );
};

export default ExpandableSection;
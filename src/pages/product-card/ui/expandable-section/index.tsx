import { Button } from '@gravity-ui/uikit';
import React, { ReactNode, useState } from 'react';
import style from './style.module.css';

interface ExpandableSectionProps {
    childComponent: JSX.Element;
    title: string;
}

const ExpandableSection = ({ childComponent, title }: ExpandableSectionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsOpen(false);
    };

    return (
        <div className={style.dropdown}>
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
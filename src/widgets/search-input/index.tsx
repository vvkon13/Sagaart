import { TextInput } from "@gravity-ui/uikit";
import { SearchInputProps } from "./types";
import { placeholder } from "./constants";
import writeImage from '../../assets/icons/Write.svg';
import mailImage from '../../assets/icons/Mail-outline.svg';
import style from './search-input.module.css';
import clsx from 'clsx';
import { FC } from "react";

const SerachInput: FC<SearchInputProps> = ({ place }) => {

    const image = place === 'header' ? writeImage : mailImage; 
    const size = place === 'header' ? 'xl' : 'l'; 

    return (
        <TextInput 
            className={clsx(
                style.title,
                style[`input_${place}`]
            )} 
            placeholder={placeholder[`${place}`]} 
            size={size}
            startContent={<img src={image} alt='write'/>}
        />
    )
}

export default SerachInput;
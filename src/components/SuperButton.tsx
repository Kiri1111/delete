import React from 'react';

type ButtonPropsType = {
    callBack: () => void
    title: string
    isLoading: boolean
}

const SuperButton = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button disabled={props.isLoading} onClick={onClickHandler}>{props.title}</button>
        </div>
    );
};

export default SuperButton;
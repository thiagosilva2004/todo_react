import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div<ContainerProps>
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    // align-items: center;
    justify-content: flex-start;

    .inputDone{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    .inputName{
        color: #CCC;
        text-decoration: ${props => props.done ? 'line-through': 'initial'};
        font-size: 1.2em;
        width: 90%;
        background: transparent;
        border: 0px;
    }

    span{
        float: right;
        margin: 0px 15px;
        height: 20px;
        align-self: center;
        cursor: pointer;
    }
    `
;
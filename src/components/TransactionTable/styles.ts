import styled from "styled-components";

export const Container = styled.header`
margin-top:4rem;

table{
    width:100%;
    border-spacing:0 0.5rem;

    th{
        color: var(--text-body);
        font-weight:500;
        padding:1rem 2rem;
        text-align:left;
        line-height:1.5rem;
    }

    td{
        padding:1rem 2rem;
        border:0;
        background-color:var(--shepe);
        color:var(--text-body);
        border-radius:0.25rem;

        &:first-child{
            color:var(--text-title);
        }

        &.withdraw{
            color:var(--red);
        }

        &.deposit{
            color:var(--green);
        }
    }
}


`;


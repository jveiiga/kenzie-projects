/* eslint-disable default-case */
import styled, { css } from "styled-components"

export const StyledTitle = styled.h1.h2.h3.h4`

    font-weight: bold;
    color: var(--color-grey-100) ;

    ${({ fontSize }) => {
        switch(fontSize) {
            case "one":
                return css`
                font-size: 26px;
                `
            case "two":
                return css`
                font-size: 22px;
                `
            case "three":
                return css`
                font-size: 18px;
                `
            case "four":
                return css`
                font-size: 14px;
                `
        }
    }}
`

export const StyledSemiTitle = styled.h5.h6`

    font-weight: semi-bold;
    color: var(--color-grey-50);

    ${({ fontSize }) => {
        switch(fontSize) {
            case "one":
                return css`
                font-size: 14px;
                `
        }
    }}
`

export const StyledText = styled.p.a`

    font-weight: regular;
    color: var(--color-grey-50);

    ${({ fontSize }) => {
        switch(fontSize) {
            case "one":
                return css`
                font-size: 16px
                `
            case "two":
                return css`
                font-size: 14px
                `    
            case "three":
                return css`
                font-size: 12px
                `
        }
    }}
`



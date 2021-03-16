import { createGlobalStyle, GlobalStyleComponent } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
    --background:#f0f2f5;
    --red:#E62E4D;
    --blue:#5429CC;
    --blue-light:#6933ff;

    --green:#33CC95;

    --text-title:#363F5F;
    --text-body:#969CB3;

    --shepe:#FFFFFF;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

// font-size 16px (desktop)

html{
    @media(max-width:1080px){
        font-size:93.75%; //15px chamar 1rem
    }
    @media(max-width:715){
        font-size:87.5%; //14px chamar 1rem
    }

}
body{
    background:var(--background);
    -webkit-font-smoothing: antialiased;

}
button{ 
    cursor:pointer;
}

[disabled]{
    opacity:0.6;
    cursor:not-allowed;
}
`;
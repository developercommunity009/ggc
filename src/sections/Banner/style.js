import { Slider, styled } from "@mui/material";


const GradientBorderBox = styled('div')(({ theme }) => ({
    position: 'relative',
    padding: '20px 30px',
    margin: '0 auto',
    width: '65%',
    height: '580px',
    backgroundColor: '#080513',
    borderRadius: '23px',
    display: 'inline-block',
    fontSize: '30px',
    '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: '23px',
        padding: '1.5px', /* control the border thickness */
        background: 'rgba(22,163,74,0.6)',

        WebkitMask:
            'linear-gradient(#fff 0 0) content-box, ' +
            'linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none',
        color: 'currentColor'
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '500px',
        padding: '20px 20px',

    }
}))

const GradientChildBox = styled('div')({
    position: 'relative',
    fontSize: '30px',
    backgroundColor: '#080513',
    height: '100px',
    width: '100px',
    borderRadius: '50px',
    '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: '50px',
        padding: '1.5px', /* control the border thickness */
        background: 'rgba(22,163,74,0.6)',
        WebkitMask:
            'linear-gradient(#fff 0 0) content-box, ' +
            'linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none',
        color: 'currentColor'
    },
});

const CustomSlider = styled(Slider)({
    height: 0,
    borderRadius: 10,
    position: 'relative',
    zIndex: 3,
    color: 'transparent',
    '& .MuiSlider-thumb': {
        height: 23,
        width: 23,
        backgroundColor: '#08C199',
        border: 'none', // Set the border to none
        '&:hover, &.Mui-focusVisible': {
            boxShadow: '0px 0px 0px 8px rgba(8, 193, 153, 0.16)',
        },
    },
    '& .MuiSlider-rail': {
        height: 8,
        borderRadius: 10,
        backgroundColor: 'transparent',
        outline: 'none',
    },
    '& .MuiSlider-track': {
        height: 8,
        borderRadius: 10,
        backgroundColor: 'transparent',
        outline: 'none',
    },
});


export {
    GradientChildBox,
    GradientBorderBox,
    CustomSlider

}
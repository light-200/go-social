import React from 'react'
import {fireEvent, render,screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import Login from '../pages/Login'

describe('login form test',()=>{

    it('should render heading',()=>{
        render(<Login/>);
        const heading = screen.getByRole('heading')
        expect(heading).toBeVisible();
    })

    it('should render labels',()=>{
        render(<Login/>);
        const emailLabel = screen.getByLabelText('Email:')
        const PassLabel = screen.getByLabelText('Password:')
        expect(emailLabel).toBeVisible();
        expect(PassLabel).toBeVisible();
    })


    it('should handle user inputs',()=>{
        render(<Login/>);
        const inputs = screen.getAllByRole('textbox');
        inputs.forEach((inp)=>{
            fireEvent.change(inp,{target:{value:"saif@gmail.com"}});
            expect(inp.value).toBe('saif@gmail.com')
        })
    })

    it('should render btn',()=>{
        render(<Login/>);
        const btn = screen.getByRole('button');
        expect(btn).toBeVisible();
    })
})
import React from 'react'
import {fireEvent, render,screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import Signup from '../pages/Signup'

describe('signup form test',()=>{

    it('should render heading',()=>{
        render(<Signup/>);
        const heading = screen.getByRole('heading')
        expect(heading).toBeVisible();
    })

    it('should render labels',()=>{
        render(<Signup/>);
        const nameLabel = screen.getByLabelText('Name:')
        const emailLabel = screen.getByLabelText('Email:')
        const passLabel = screen.getByLabelText('Password:')
        expect(nameLabel).toBeVisible();
        expect(emailLabel).toBeVisible();
        expect(passLabel).toBeVisible();
    })

    it('should handle user inputs',()=>{
        render(<Signup/>);
        const inputs = screen.getAllByRole('textbox');
        inputs.forEach((inp)=>{
            fireEvent.change(inp,{target:{value:"saif@gmail.com"}});
            expect(inp.value).toBe('saif@gmail.com')
            expect(inp).toBeRequired()
        })
    })

    it('should render btn',()=>{
        render(<Signup/>);
        const btn = screen.getByRole('button');
        expect(btn).toBeVisible();
    })
})
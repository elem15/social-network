import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe('Profile status component', () => {
    test('status from the props should be in the component', () => {
        const component = create(<ProfileStatus status='Hello World!'/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('Hello World!')
    })
    test('component should display button with status after creation', () => {
        const component = create(<ProfileStatus status='Hello World!'/>)
        const instance = component.root;
        const button = instance.findByType('button')
        expect(button.children[0]).toBe('Hello World!')
    })
test('component should display button after creation', () => {
        const component = create(<ProfileStatus status='Hello World!'/>)
        const instance = component.root;
        const button = instance.findByType('button')
        expect(button).not.toBeNull()
    })
    test('component shouldn`t display input after creation', () => {
        const component = create(<ProfileStatus status='Hello World!'/>)
        const instance = component.root;
        expect(() => {
            const input = instance.findByType('input')
        } ).toThrow()
    })
    test('input should be display in edit mode instead button with status', () => {
        const component = create(<ProfileStatus status='Hello World!'/>)
        const instance = component.root;
        const button = instance.findByType('button')
        button.props.onClick()
        const input = instance.findByType('input')
        expect(input).not.toBeNull()
    })
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status='Hello World!' updateStatus={mockCallback}/>)
        const instance = component.getInstance();
        instance.inActivateMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})


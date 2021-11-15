import React from 'react';
import RenderList from './RenderList';
import css from './css/Sidebar.module.css';
import LifeCyclesCWU from './LifeCyclesCWU';

export default function Sidebar(props) {
    return (
        <div className = {css.sidebar}>
            <span>Hello {props.word}</span>
            <a href = "#." target = "_blank">My {props.first}</a>
            <a href = "#." target = "_blank">My {props.second}</a>
            <a href = "#." target = "_blank">My {props.third}</a>
            <hr />
            <RenderList /> 
            <LifeCyclesCWU />
        </div>
    );
}
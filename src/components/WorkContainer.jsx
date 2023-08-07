import React from 'react'
import styled from 'styled-components'
import WorkBox from './WorkBox';
import { useState, useEffect } from 'react';

const WorkContainer = () => {
  return <Workcontainer id='project'>
    <h3>Practice Projects</h3>
    <WorkBox/>
    </Workcontainer>;
};

export default WorkContainer

const Workcontainer = styled.div`
    display: flex;
    flex-direction:column;
    margin-left: auto;
    margin-right: auto;
    justify-content:center;
    align-items:center;
    h3{
        font-size: 3rem;
        font-weight: 700;
        margin: 3.05% auto;
    }
    @media (0<width<931px) {
        h3{
            font-size: 1.25rem;
            margin:auto 20%;
        }
    }
`;



import React from 'react';
import styled from 'styled-components';

function Count({ unit, removeCountPortion, countPortion, addCountPortion }) {



    return (
        <CountUnit>
            <label>Кол-во {unit}.</label>
            <div className="wraper-count">
                <div className="count-btn" onClick={removeCountPortion}>
                    <svg
                        width="8px" height="3px">
                        <path fillRule="evenodd" fill="rgb(78, 78, 78)"
                            d="M7.999,0.003 L-0.006,0.003 L-0.006,2.995 L7.999,2.995 L7.999,0.003 Z" />
                    </svg>
                </div>
                <div className="count">
                    <p>{countPortion}</p>
                </div>
                <div className="count-btn" onClick={addCountPortion}>
                    <svg
                        width="11px" height="11px">
                        <path fillRule="evenodd" fill="rgb(78, 78, 78)"
                            d="M10.999,6.871 L6.873,6.871 L6.873,10.999 L4.129,10.999 L4.129,6.871 L-0.009,6.871 L-0.009,4.127 L4.129,4.127 L4.129,-0.009 L6.873,-0.009 L6.873,4.127 L10.999,4.127 L10.999,6.871 Z" />
                    </svg>
                </div>
            </div>
        </CountUnit>
    )
}

export default Count;

const CountUnit = styled.div`
    user-select: none;
    .wraper-count {
        background-color: rgb(220, 220, 220);
        width: 90px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3px;
    }

    label {
        font-size: 12px;
        letter-spacing: .05em;
        color: #565656;
    }

    .count {
        text-align: center;
        width: 55px;
        font-weight: 800;
        font-size: 16px;
        color: #1e1d1d;
        position: relative;
        top: 1px;
    }

    .count-btn {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 10px 0;
    }

    @media (max-width: 760px){
        display: flex;
        flex-direction: column;
        
        label {
            text-align: start;
        }
    }
`;
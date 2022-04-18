import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Task from '../Task/Task';
import User from '../User/User';
import { useAppDispatch } from '../../redux/redux-hooks';
import { fetchTasks } from '../../store/task-actions';
import './onboardingTracker.scss';
import EmptyTask from '../Task/EmptyTask';



const OnboardingTracker: React.FC = () => {
    const [active, setActive] = useState(0);

    const dispatch = useAppDispatch();

    const showUserTasks = (id: number): void => {
        dispatch(fetchTasks(id));
        if (active === id) {
            // change active to blank
            setActive(0);
        } else {
            // change active to current index
            setActive(id);
        }
        console.log(id);
    }

    return (
        <Router>
        <div className="onboarding__tracker">
            <h1 className="onboarding__tracker__header">Onboarding Tracker</h1>
            <div className="onboarding__tracker__main">
                <div className="onboarding__tracker__left__section">
                    <h3 style={{marginLeft:40}}>Users</h3>
                    <User showUserTasks={showUserTasks} active={active}  />
                </div>
                <div className="onboarding__tracker__right__section">
                <Routes>
                    <Route  path="/" element={<EmptyTask/>} />
                    <Route  path="/tasks/:user_id" element = {<Task/>} />
                </Routes>
                </div>
            </div>
        </div>
        </Router>
    )
}

export default OnboardingTracker
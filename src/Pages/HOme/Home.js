import React from 'react';
import Achievements from '../../Components/Achivments/Achievements';
import WorkArea from '../../Components/WorkArea/WorkArea';
import Blogs from '../Blogs/Blogs';
import Header from '../Shared/Header/Header';


const Home = () => {
    return (
        <div >
            <Header></Header>
            <Achievements></Achievements>
            <WorkArea></WorkArea>
            <Blogs></Blogs>

        </div>
    );
};

export default Home;
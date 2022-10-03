import { NextPage } from "next";
import StoryModel from "../models/story_model";
import StoryCard from "./StoryCard";




const Stories =()=>{
    const story1: StoryModel = {name:"John Doe", profile:'https://images.unsplash.com/photo-1664636613109-c6f362a19164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80', src: 'https://images.unsplash.com/photo-1664465921013-1ee3b2759573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', key: '001'}
    const story2: StoryModel = {name:"John Doe", profile:'https://images.unsplash.com/photo-1664636613109-c6f362a19164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80', src: 'https://images.unsplash.com/photo-1664465921013-1ee3b2759573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',  key: '002'}
    const story3: StoryModel = {name:"John Doe", profile:'https://images.unsplash.com/photo-1664636613109-c6f362a19164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80', src: 'https://images.unsplash.com/photo-1664465921013-1ee3b2759573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',  key: '003'}
    const story4: StoryModel = {name:"John Doe",profile:'https://images.unsplash.com/photo-1664636613109-c6f362a19164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80', src: 'https://images.unsplash.com/photo-1664465921013-1ee3b2759573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' ,  key: '004'}
    const story5: StoryModel = {name:"John Doe", profile:'https://images.unsplash.com/photo-1664636613109-c6f362a19164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80', src: 'https://images.unsplash.com/photo-1664465921013-1ee3b2759573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' ,  key: '005'}
    const stories: StoryModel[] = [
        story1,
        story2,
        story3,
        story4,
        // story5,
        // story1,
        // story2,
        // story3,
        // story4,
        // story1,
        // story2,
        // story3,
        // story4,
    ];
    return (
        <div className='flex justify-center space-x-3 mx-auto'>

            {
                stories.map((e)=>(<StoryCard name={e.name} profile={e.profile} src={e.src} key={e.key}/>))
            }
        </div>
    );
}

export default Stories;

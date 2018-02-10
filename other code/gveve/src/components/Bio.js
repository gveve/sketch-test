import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import heyme from '../images/img008.jpg';
import '../index.tailwind.css';

class Bio extends Component{


  render(){

    const image = 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/thumbs/thumbs_impossibly-cute-puppy-8.jpg';

    return(
        <div  className="flex h-full mx-8 mb-8 border border-yellow">
          <div className=' w-1/6'>
          </div>
          <div className="max-w-md flex">
            <div className="max-h-48 lg:w-48 flex-none rounded-t bg-cover lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${image})`}} title="Woman holding a mug">
            </div>
              <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-grey-dark flex items-center">
                    <svg className="fill-current text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                    <div className="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>
                  <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink"/>
                    <div className="text-sm">
                      <p className="text-black leading-none">Jonathan Reinink</p>
                      <p className="text-grey-dark">Aug 18</p>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    )
  }
}

export default Bio;

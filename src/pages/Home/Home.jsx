import React from 'react'
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import HowEasy from '../../components/HowEasy/HowEasy';
import Banner from '../../components/Banner/Banner';
import Banner2 from '../../components/Banner/Banner2';
import Contacts from '../../components/Contacts/Contacts'
import { images } from './../../assets/assets';
const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChoose />
      <HowEasy />
      <Banner object={'For Freelancers'} heading={`"Freelancers, This Is Your Hive"`} text={`At WorkHive, we’re dedicated to helping you build, grow, and succeed.
                    We’re here with trust, opportunities, and unwavering support. We
                    understand your hustle. Freelancing isn’t just work; it’s your
                    passion, your livelihood, your dream, we get your grind and makes
                    your journey smoother.`} img={images.Banner} bg={'bg-c-brown'}/>
      <Banner2 object={'For Clients'} heading={`“Your Perfect Match Awaits!”`} text={`At WorkHive, we make finding the right talent effortless. Our platform connects you with verified freelancers who are skilled, reliable, and ready to bring your vision to life. No fees, no hassle—just a seamless way to get your work done with confidence and ease.`} img={images.Banner2} bg={'bg-dark-green'}/>
      <Contacts />
    </div>
  )
}

export default Home
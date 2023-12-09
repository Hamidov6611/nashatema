import React from 'react'
import UserLayout from './layout/UserLayout'
import Hero from './components/Hero'

const Main = () => {
  return (
    <UserLayout h1={"Железобетонные изделия"} title={"NashaTema - Железобетонные изделия в Санкт-Петербурге!"} desc={"Качественные ЖБИ изделия по ГОСТ и доставка по Санкт-Петербургу и Ленинградской области."}>
       <Hero />
       <div className="w-[92%] mb-12 mt-[340px] dd:w-[90%] flex mm:w-[88%] mx-auto">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A445e82627b076e393700b23faa09f4018a27874703d4bfbff03551ad4ac90aec&amp;source=constructor"
          className="rounded-md"
          width="100%"
          height="478"
          frameborder="0"
        ></iframe>
      </div>
    </UserLayout>
  )
}

export default Main
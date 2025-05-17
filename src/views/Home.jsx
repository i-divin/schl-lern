import React from 'react'
import Content from '../components/content'
import '../Css/Home.css'

function Home() {
  const products=[
    {id: 1,title:"Tomatoes",cost: "1500Frw"},
    {id: 2,title:"Books",cost: "500Frw"},
    {id: 3,title:"Colgate",cost: "2700Frw"},
    {id: 4,title:"Shoes",cost: "25000Frw"},
    {id: 5,title:"clothes",cost: "2000Frw"},
    {id: 6,title:"desk",cost: "2500Frw"}
  ]
  return (
    <div className='Home'>
      <div className='home-main'>
        {products.map((product)=>
        <Content product={product} key={product.id}/>
        )}
      </div>
    </div>
  );
}

export default Home
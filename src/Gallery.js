import React,{useState} from 'react'
import Burcum from './components/Burcum'
import GalleryData from './components/GalleryData'

const Gallery = () => {
    const [data, setDate] = useState(GalleryData)
    
    const UpdateList = [...new Set (GalleryData.map((list)=>{
        return list.category
    })), 'all']
    
    const [list] = useState(UpdateList)
    const [active, setActive] = useState(false)

    const FilterImg =(item)=>{ 
        if(item === "all"){
            setDate(GalleryData) 
            setActive("all")
            return
        }
         const updateItem = GalleryData.filter((ele)=>{
            return ele.category === item
        })
        setDate(updateItem)
        setActive(item) 
    }

  return (
    <>
        <Burcum title={"Gallery"}/>
        
        <section className="About-area padding-top-50 padding-bottom-70">
        <div className="container container-two">
            <div className="row">
                <div className="col-xl-12 col-md-12 margin-top-30">
                    <div className='gallery-cat'>

                        <ul>
                            {
                                list.map((item, index)=>{
                                    return (
                                        <li className={active === item ? "active" : null} key={index} onClick={()=>FilterImg(item)} >{item.toUpperCase()} </li>
                                    )
                                }) 
                            }
                            {/* <li onClick={()=>setDate(GalleryData)}>All </li>
                            <li onClick={()=>FilterImg('mackup')}>Mackup </li>
                            <li onClick={()=>FilterImg('artist')}>Artist </li>
                            <li onClick={()=>FilterImg('waxing')}>Waxing </li> */}
                        </ul>
                    </div>
                    
                </div>
            
                {
                    data.map((item, index)=>{
                        return (
                            <div className="col-xl-4 col-md-6 margin-top-30" key={index}>
                                <div className="single-service service-two style-03 service-padding p-0 section-bg-2 wow fadeInUp" data-wow-delay=".1s">
                                    <a href={item.images} className="service-thumb fancybox" data-fancybox-group="gallery">
                                        <img src={item.images} alt=""/>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </section>
	
    </>
  )
}

export default Gallery